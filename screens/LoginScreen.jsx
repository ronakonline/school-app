import React, { useRef, useState } from "react";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { StyleSheet, Image, Alert } from "react-native";
import { Button, Input, Layout, Text } from "@ui-kitten/components";

import firebase from "../firebase";

export function LoginScreen({ navigation }) {
  const [mobilenumber, setMobilenumber] = React.useState("");
  const recaptchaVerifier = useRef(null);
  const [verificationId, setVerificationId] = useState(null);

  const sendVerification = async () => {
      try {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        const verificationIdcode = await phoneProvider.verifyPhoneNumber(
          mobilenumber,
          recaptchaVerifier.current
        );
        setVerificationId(verificationIdcode);
        console.log(verificationId);
        console.log(mobilenumber);
        return true;
      } catch (err) {
        console.log(err);
      }
  };


  return (
    <Layout level="2" style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.welcometext}>Welcome! </Text>
      <Text style={styles.description} appearance="hint">
        Use mobile number provided in school.
      </Text>
      <Layout level="2">
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebase.app().options}
        />
        <Input
          placeholder="Mobile Number"
          size="large"
          status="primary"
          keyboardType="phone-pad"
          style={styles.input}
          onChangeText={(value) => setMobilenumber(value)}
        />
        <Button
          size="large"
          style={styles.loginbtn}
          onPress={() => {
            sendVerification().then((data)=>{
              console.log(data);
              if(data==true){
                navigation.navigate('Otp')};
              console.log(err);
            });
          }}
        >
          Login
        </Button>
      </Layout>

      <Layout level="2" style={{ flex: 1 }}>
        <Text style={styles.fromtext}>From NR WebWise</Text>
      </Layout>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    marginTop: 70,
    alignSelf: "center",
    height: 100,
    width: 140,
  },
  welcometext: {
    fontSize: 24,
    fontFamily: "Roboto",
    marginLeft: 20,
    marginTop: 60,
  },
  description: {
    fontSize: 14,
    fontFamily: "Roboto",
    marginLeft: 20,
    marginBottom: 10,
  },
  input: {
    margin: 20,
  },
  loginbtn: {
    marginLeft: 20,
    marginRight: 20,
  },
  fromtext: {
    fontSize: 18,
    fontFamily: "serif",
    marginLeft: 20,
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
  },
});
