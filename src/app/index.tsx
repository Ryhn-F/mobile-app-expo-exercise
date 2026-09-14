import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Image
            source={require("../../assets/images/Landing.png")}
            style={{ width: "100%", height: "100%", marginTop: 40 }}
          />
        </View>
        <Text style={styles.title}>Welcome to Finora</Text>
        <Text style={styles.subtitle}>
          Explore a modern Experience built for speed and simplicity
        </Text>
        <Pressable style={styles.button} onPress={() => router.push("/")}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>
      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.socialContainer}>
        <Pressable style={styles.socialButton}>
          <Image
            source={require("../../assets/images/google-icon.png")}
            style={{ width: 26, height: 26 }}
          />
          <Text style={styles.socialButtonText}>Sign in with Google</Text>
        </Pressable>
        <Pressable style={styles.socialButton}>
          <Image
            source={require("../../assets/images/apple-icon.png")}
            style={{ width: 26, height: 26 }}
          />
          <Text style={styles.socialButtonText}>Sign in with Apple</Text>
        </Pressable>
        <Pressable style={styles.socialButton}>
          <Image
            source={require("../../assets/images/facebook-logo.png")}
            style={{ width: 26, height: 26 }}
          />
          <Text style={styles.socialButtonText}>Sign in with Facebook</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 50,
    height: "100%",
    display: "flex",
    paddingHorizontal: 20,
    flexDirection: "column",
    gap: 20,
    alignItems: "center",
  },

  divider: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  line: {
    height: 1,
    flex: 1,
    backgroundColor: "#D9D9D9",
  },

  orText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#333",
  },

  header: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    paddingHorizontal: 40,
    fontWeight: "normal",
    textAlign: "center",
    opacity: 0.9,
    lineHeight: 24,
  },

  socialContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },

  socialButton: {
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 18,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    width: "100%",
  },

  socialButtonText: {
    color: "black",
    textAlign: "center",
  },

  avatarContainer: {
    width: 180,
    height: 180,

    borderRadius: 90,

    backgroundColor: "#F3F3F3",

    overflow: "hidden",

    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    backgroundColor: "#6D63FF",
    paddingHorizontal: 25,
    paddingVertical: 18,
    borderRadius: 50,
    width: "100%",
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
