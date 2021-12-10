import React from "react";
import { StyleSheet, Image } from "react-native";
import { Button, Layout, Text } from "@ui-kitten/components";
import OTPTextInput from "react-native-otp-textinput";

export function OtpScreen(props) {
 console.log("otp" + props.route.params.verificationId);
 console.log("number" + props.route.params.mobilenumber);
 const [otp, setOtp] = React.useState(null);
 const otpInput = React.useRef(null);

 const confirmCode = () => {
 
   console.log("otp" + otpInput.current.getValue());
  // const credential = firebase.auth.PhoneAuthProvider.credential(
  //   verificationId,
  //   code
  // );
  // firebase
  //   .auth()
  //   .signInWithCredential(credential)
  //   .then((result) => {
  //     console.log(result);
  //   });
};

  return (
    <Layout level="2" style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.welcometext}>OTP! </Text>
      <Text style={styles.description} appearance="hint">
        Enter OTP sended to your mobile number.
      </Text>
      <OTPTextInput inputCount={6} ref={e => (otpInput = e)}></OTPTextInput>
      <Layout level="2" style={styles.buttonContainer}>
        <Button style={styles.btn}>Resend</Button>
        <Button style={styles.btn} onPress={() => {
            confirmCode();
          }}>Submit</Button>
      </Layout>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
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
    marginTop: 60,
  },
  description: {
    fontSize: 14,
    fontFamily: "Roboto",
    marginBottom: 20,
  },

  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },
  btn: {
    width: "45%",
  },
});
