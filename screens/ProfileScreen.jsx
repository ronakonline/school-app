import React from 'react';
import { StyleSheet } from 'react-native';
import { Input, Layout,Text,Button,Icon } from '@ui-kitten/components';


const StarIcon = (props) => (
  <Icon {...props} name='log-out-outline'/>
);


export const ProfileScreen = () => {

  return (
    <Layout style={styles.container} level='1'>
      <Input
        style={styles.input}
        disabled={true}
        placeholder='Disabled'
        value='Ronak'
        label={props=> <Text style={styles.label} appearance='hint'  >First Name</Text>}
        size='large'
      />
      <Input
        style={styles.input}
        disabled={true}
        placeholder='Disabled'
        value='Pareek'
        label={props=> <Text style={styles.label} appearance='hint'  >Last Name</Text>}
        size='large'
      />
      <Input
        style={styles.mobileno}
        disabled={true}
        placeholder='Disabled'
        value='925074781'
        label={props=> <Text style={styles.label} appearance='hint'  >Mobile Number</Text>}
        size='large'
      />
       <Button style={styles.button} status='primary' accessoryLeft={StarIcon}>
         Logout
       </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    paddingTop: 20,
  },
  input: {
    flex:2,
    margin: 5,
  },
  mobileno:{
    width: '100%',
    margin: 5,
    marginTop:10
  },
  label:{
    fontSize:14,
    marginBottom:8
  },
  button:{
    marginTop:10,
    width: '100%',
    
  }
});
