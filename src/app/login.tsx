import { StyleSheet, Text, View } from "react-native";

const LoginPage = () => {
  return (
    <View>
      <Text>LoginPage</Text>
    </View>
  );
};

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

export default LoginPage;
