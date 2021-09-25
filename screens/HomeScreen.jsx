import React from 'react';
import { StyleSheet, View } from 'react-native';
import {  Card, List, Text } from '@ui-kitten/components';

const data = new Array(8).fill({
  title: 'Exam Tommorow'+Math.floor(Math.random() * 100),
  by:'Nishu Bhardwaj',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
});

const cardcolors = ['success','danger','warning','info','primary'];



export const HomeScreen = ({ navigation }) => {

  const renderItemHeader = (headerProps, info) => (
    <View {...headerProps}>
      <Text category='h6'>
        {info.item.title}
      </Text>
    </View>
  );

  const renderItemFooter = (footerProps,info) => (
    <Text {...footerProps}>
      By {info.item.by}
    </Text>
  );


  const renderItem = (info) => (
    <Card
      onPress={() => navigation.navigate("Notice",{title:info.item.title,description:info.item.description,by:info.item.by,date:'sep 27 12:45'})}
      style={styles.item}
      status='basic'
      status={cardcolors[Math.floor((Math.random() * cardcolors.length-1) + 1)]}
      header={headerProps => renderItemHeader(headerProps, info)}
      footer={footerProps => renderItemFooter(footerProps,info)}>
      <Text numberOfLines={5}>
        {info.item.description}
      </Text>
    </Card>
  );

  return (
    <List
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={data}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 4,
  },
});