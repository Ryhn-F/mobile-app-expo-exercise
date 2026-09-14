import { router } from "expo-router";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const SignUpPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarContainer}>
            <Image
              source={require("../../assets/images/SignUp.png")}
              style={{ width: "100%", height: "100%", marginTop: 10 }}
            />
          </View>
          <View style={styles.plusBadge}>
            <Text style={styles.plusBadgeText}>+</Text>
          </View>
        </View>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>
          Sign Up to get started with your account.
        </Text>
      </View>
      <View style={styles.signUpForm}>
        <View style={styles.inputWrapper}>
          <Text>Full Name</Text>
          <TextInput style={styles.input} placeholder="Enter your name" />
        </View>
        <View style={styles.inputWrapper}>
          <Text>Email</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="Enter your email"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="Enter your password"
          />
        </View>

        <Pressable style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Create Account</Text>
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
        </Pressable>
        <Pressable style={styles.socialButton}>
          <Image
            source={require("../../assets/images/apple-icon.png")}
            style={{ width: 26, height: 26 }}
          />
        </Pressable>
        <Pressable style={styles.socialButton}>
          <Image
            source={require("../../assets/images/facebook-logo.png")}
            style={{ width: 26, height: 26 }}
          />
        </Pressable>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text> Already have an account? </Text>
        <Pressable onPress={() => router.push("/login")}>
          <Text style={{ color: "#6D63FF" }}>Sign in</Text>
        </Pressable>
      </View>
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
  signUpForm: {
    marginTop: 10,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 15,
    height: "auto",
  },

  inputWrapper: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    height: "auto",
    gap: 4,
  },

  input: {
    width: "100%",
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#3333335c",
  },

  labelText: {
    fontSize: 15,
    fontWeight: "400",
    color: "#333",
  },

  divider: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  plusBadge: {
    position: "absolute",
    right: -2,
    top: -2,
    width: 30,
    height: 30,
    borderRadius: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6D63FF",
  },
  avatarWrapper: {
    position: "relative",
    width: 80,
    height: 80,
  },

  plusBadgeText: {
    color: "white",
    fontSize: 21,
    fontWeight: "bold",
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
    gap: 12,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    paddingHorizontal: 10,
    fontWeight: "normal",
    textAlign: "center",
    opacity: 0.5,
    lineHeight: 24,
  },

  socialContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },

  socialButton: {
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },

  socialButtonText: {
    color: "black",
    textAlign: "center",
  },

  avatarContainer: {
    width: 80,
    height: 80,

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

export default SignUpPage;
