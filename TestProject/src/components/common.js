import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, TextInput,Image, Platform, ActivityIndicator, StatusBar, Dimensions } from "react-native";



export const Loader = () => {
    return (
      <View style={style.loading}>
        <ActivityIndicator size={"large"} color={'blue'}/>
        <Text>Please wait</Text>
      </View>
    )
  }

  export const MovieCard = ({details,navigation}) => {
    return (
      <TouchableOpacity style={style.homecard} onPress={() => navigation.navigate('Details', { details })}>
        <Image source={{uri:details.artworkUrl100}} resizeMode='contain' style={{ height:'100%', width:'20%' }} resizeMode='contain'/>
        <View style={{padding:5,width:'80%'}}>
        <Text numberOfLines={2} style={{ fontSize: 14}}>{details.collectionName}</Text>
        <Text style={{ fontSize: 13, }}>Artist Name : {details.artistName}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  
  const style = StyleSheet.create({

  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.8,
    elevation: 5, zIndex: 5
  },
  homecard: {
      flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin:15,
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 12,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
})