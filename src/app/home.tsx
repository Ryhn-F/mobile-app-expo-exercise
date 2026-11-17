import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

interface Show {
  id: number;
  name: string;
  image: {
    medium: string;
    original: string;
  } | null;
  rating: {
    average: number | null;
  };
  summary: string | null;
}

const HomePage = () => {
  const [movies, setMovies] = useState<Show[]>([]);

  const fetchMovies = async (): Promise<Show[]> => {
    try {
      const response = await fetch("https://api.tvmaze.com/shows?page=1");

      if (!response.ok) {
        throw new Error("Failed to fetch shows");
      }

      const data: Show[] = await response.json();

      return data.slice(0, 3);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    const loadShows = async () => {
      const data = await fetchMovies();
      setMovies(data);
    };

    loadShows();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Shows</Text>

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {item.image && (
              <Image source={{ uri: item.image.medium }} style={styles.image} />
            )}

            <View>
              <Text style={styles.name}>{item.name}</Text>

              <Text>Rating: {item.rating.average ?? "N/A"}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 20,
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 110,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomePage;
