import React , {useState}from "react";
import {FlatList,Text, TouchableOpacity, View, Button,StatusBar, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import { HomeScreenStyle } from ".";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';

const ListTopic = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);
const Header = () => {
  return (
    <View style={styles.header}>
      <Text>OK</Text>
    </View>
  )
}
export default HomeScreen = ({navigation} ) => {
  navigation.options = {
    headerRight: () => (
      <TouchableOpacity style={{
          backgroundColor:"#9dacc420",
          width:100,
          height:45,
          borderRadius:20,
          alignItems:"center",
          justifyContent:"center",
          }} 
          onPress={() => {}}>
          <Text style={{
              color:"#0000FF",
              fontStyle:"normal",
              fontWeight:"bold",
              fontSize:15
              }}>OK</Text>
      </TouchableOpacity>
    )
  }
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  }
    return (
      <View style={styles.container}>
        {/* //Header */}
           {/* <Appbar.Header>
      <Appbar.Content title="Title" subtitle={'Subtitle'} />
       <Appbar.Action icon="magnify" onPress={() => {}} />
       <Appbar.Action  onPress={() => {}} />
   </Appbar.Header> */}
   {/* <Header/> */}
      <SafeAreaView style={styles.flatlist}>
      <FlatList
        data={ListTopic}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        horizontal={true}
      />
    </SafeAreaView>
      </View>
    )
}
const styles = StyleSheet.create(
  {
    text: {
      fontSize: 42,
    },
    container: {
     width:400,
    },
    flatlist:{
      marginTop:15
    },
    item: {
      textAlign:"center",
      justifyContent:"center",
      width:330,
      height:575,
      padding: 20,
      marginHorizontal: 16,
      borderRadius:20
    },
    title: {
      fontSize: 32,
      textAlign:"center"
    },
    header: {
      position:"absolute",
      backgroundColor:"#ff00ff",
      width: 350,
      height:50,
      borderRadius:20,
      right:5,
      left:5,
      top:5
    },
  }
)