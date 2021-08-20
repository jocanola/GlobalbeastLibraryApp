import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../firebase/firebase";
export default function AuthComponent({ authType, authAction }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const signIn = (email, password) => {
    auth?.signInWithEmailAndPassword(email, password)?.then((response) => {
      const userId = response?.user?.email;
      navigation.navigate("contactlist", userId);
    });
  };

  const signUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const userId = response?.user?.email;
        const user = {
          id: userId,
          email,
        };
        const usersRef = db.collection("users");
        usersRef
          .doc(userId)
          .set(user)
          .then(() => {
            navigation.replace("contactlist", userId);
            // dispatch(setUser(user));
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };
  const navigateTo = () => {
    const whichScreen = authType === "Login" ? "Register" : "Login";
    navigation.navigate(whichScreen);
  };

  return (
    <TouchableWithoutFeedback
      onPress={Platform.OS !== "web" ? () => Keyboard.dismiss() : null}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.authBox}>
          <Text style={styles.loginTitleText}>
            {authType === "Login" ? "Login" : "Register"}
          </Text>
          <View style={styles.hr}></View>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              placeholder="email"
              style={styles.input}
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              placeholder="password"
              name="lock"
              style={styles.input}
              secureTextEntry
              textContentType="password"
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={signUp}>
            <Text style={styles.loginButtonText}>
              {authType === "Login" ? "Login" : "Register"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateTo}>
            <Text style={styles.registerText}>
              {authType === "Login"
                ? "Don't have an account? Register Now"
                : "Already have an account? Login"}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  authBox: {
    width: Platform.OS !== "web" ? "80%" : 320,
    backgroundColor: "#fafafa",
    borderRadius: 20,
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4.0,
    elevation: 5,
  },
  loginTitleText: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  inputBox: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
  },
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "#dfe4ea",
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: "#ff4757",
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 4,
  },
  loginButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  registerText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
});
