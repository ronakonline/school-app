import React from "react";
import { StyleSheet, View } from "react-native";
import {  Card, Text } from "@ui-kitten/components";

const Header = (props) => (
  <View {...props}>
    <Text category="h6">{props.title}</Text>
    <View style={styles.header} >
      <Text category="s1" appearance='hint'>By {props.by} </Text>
      <Text category='s2' appearance='hint'>{props.date}</Text> 
    </View>
  </View>
);

export const NoticeScreen = (props) => (
  <React.Fragment>
    <Card
      style={styles.card}
      header={(abc) => 
            <Header {...abc} 
              title={props.route.params.title} 
              by={props.route.params.by}
              date={props.route.params.date}
            />
          }
    >
      <Text>
          {props.route.params.description}
      </Text>
    </Card>
  </React.Fragment>
);

const styles = StyleSheet.create({

  card: {
    flex: 1,
    margin: 2,
  },

  header:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
 

});
