import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface ShowDetail {
  id: number;
  name: string;
  type: string | null;
  language: string | null;
  genres: string[];
  status: string | null;
  runtime: number | null;
  averageRuntime: number | null;
  premiered: string | null;
  ended: string | null;
  officialSite: string | null;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number | null;
  };
  network: { name: string } | null;
  webChannel: { name: string } | null;
  image: {
    medium: string;
    original: string;
  } | null;
  summary: string | null;
}

const stripHtml = (html: string | null) =>
  html
    ? html
        .replace(/<[^>]*>/g, "")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#39;|&rsquo;/g, "'")
        .trim()
    : "";

const ShowDetailPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [show, setShow] = useState<ShowDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const loadShow = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch show details");
        }

        const data: ShowDetail = await response.json();

        if (!cancelled) {
          setShow(data);
        }
      } catch (err) {
        console.error(err);
        if (!cancelled) {
          setError("Could not load show details. Please try again.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadShow();

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <View style={styles.center}>
        <Stack.Screen options={{ title: "Details" }} />
        <ActivityIndicator size="large" color="#6D63FF" />
      </View>
    );
  }

  if (error || !show) {
    return (
      <View style={styles.center}>
        <Stack.Screen options={{ title: "Details" }} />
        <Text style={styles.errorText}>{error ?? "Show not found."}</Text>
      </View>
    );
  }

  const summary = stripHtml(show.summary);
  const channel = show.network?.name ?? show.webChannel?.name;
  const runtime = show.runtime ?? show.averageRuntime;
  const schedule = [
    show.schedule.days.join(", "),
    show.schedule.time ? `at ${show.schedule.time}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  const info: [string, string | null | undefined][] = [
    ["Type", show.type],
    ["Status", show.status],
    ["Language", show.language],
    ["Network", channel],
    ["Premiered", show.premiered],
    ["Ended", show.ended],
    ["Runtime", runtime ? `${runtime} min` : null],
    ["Schedule", schedule],
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ title: show.name }} />

      {show.image && (
        <Image
          source={{ uri: show.image.original }}
          style={styles.poster}
          resizeMode="cover"
        />
      )}

      <Text style={styles.name}>{show.name}</Text>
      <Text style={styles.rating}>
        ⭐ {show.rating.average ?? "N/A"}
        {show.rating.average !== null && " / 10"}
      </Text>

      {show.genres.length > 0 && (
        <View style={styles.genres}>
          {show.genres.map((genre) => (
            <View key={genre} style={styles.genreBadge}>
              <Text style={styles.genreText}>{genre}</Text>
            </View>
          ))}
        </View>
      )}

      <Text style={styles.sectionTitle}>Summary</Text>
      <Text style={styles.summary}>
        {summary || "No summary available."}
      </Text>

      <Text style={styles.sectionTitle}>Info</Text>
      {info
        .filter(([, value]) => !!value)
        .map(([label, value]) => (
          <View key={label} style={styles.infoRow}>
            <Text style={styles.infoLabel}>{label}</Text>
            <Text style={styles.infoValue}>{value}</Text>
          </View>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    textAlign: "center",
    color: "#c0392b",
  },
  poster: {
    width: "100%",
    aspectRatio: 2 / 3,
    maxHeight: 420,
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: "#eee",
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
  },
  rating: {
    fontSize: 16,
    marginTop: 6,
    opacity: 0.8,
  },
  genres: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 14,
  },
  genreBadge: {
    backgroundColor: "#6D63FF22",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 50,
  },
  genreText: {
    color: "#6D63FF",
    fontSize: 13,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 8,
  },
  summary: {
    fontSize: 15,
    lineHeight: 22,
    opacity: 0.85,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#D9D9D9",
  },
  infoLabel: {
    fontSize: 14,
    opacity: 0.6,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: "500",
    flexShrink: 1,
    textAlign: "right",
  },
});

export default ShowDetailPage;
