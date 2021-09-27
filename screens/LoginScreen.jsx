import React from "react";
import { StyleSheet, Image, Alert } from "react-native";
import { Button, Input, Layout, Text } from "@ui-kitten/components";



export function LoginScreen({ navigation }) {
  const [mobilenumber, setMobilenumber] = React.useState("");

  const checkLogin = (number) => {
    if (number == "1") {
      navigation.navigate("Otp");
    } else {
      Alert.alert("Wrong Number");
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
          <Input
            placeholder="Mobile Number"
            size="large"
            status="primary"
            maxLength={10}
            keyboardType="number-pad"
            style={styles.input}
            onChangeText={(value) => setMobilenumber(value)}
          />
          <Button
            size="large"
            style={styles.loginbtn}
            onPress={() => checkLogin(mobilenumber)}
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
