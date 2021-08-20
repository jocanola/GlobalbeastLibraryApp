import React, { useState, useLayoutEffect, useEffect } from "react";
import { StyleSheet } from "react-native";

import AuthComponent from "../components/AuthComponent";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const checkingInputValue =
    password === confirmPassword && email && password && confirmPassword !== "";

  return <AuthComponent authType="Register" />;
}

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loginContainer: {
    flex: 0.8,
    padding: 10,
  },
});
