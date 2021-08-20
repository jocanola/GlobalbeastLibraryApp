import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";

import { auth } from "../firebase/firebase";
import AuthComponent from "../components/AuthComponent";

export default function LoginScreen({ navigation }) {
  // const [userId, setUserId] = useState("");

  useLayoutEffect(() => {
    let user = true;
    auth.onAuthStateChanged((user) => {
      if (user) {
        // const userId = user?.providerData[0].uid;
        setUserId(user?.providerData[0].uid);
        navigation.replace("contactlist", userId);
      }
    });
    return () => {
      user = false;
    };
  }, []);

  //   const signIn = (email, password) => {
  //     auth?.signInWithEmailAndPassword(email, password)?.then((response) => {
  //       const userId = response?.user?.email;
  //       navigation.navigate("contactlist", userId);
  //     });
  //    .catch((error) => setError(error.message));
  //   };

  // const checkingInputValue = email && password !== "";
  return <AuthComponent authType="Login" />;
}

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
  },
  button: {
    backgroundColor: "black",
    padding: 5,
    borderRadius: 17,
    width: 220,
    marginBottom: 15,
  },
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
