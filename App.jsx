import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';

// Fetch API 
fetch("https://dog.ceo/api/breeds/image/random") // ⬅️ 1) llamada a la API, el resultado es una Promise
  .then((response) => response.json()) // ⬅️ 2) cuando la petición finalice, transformamos la respuesta a JSON (response.json() también es una Promise)
  .then((dog) => console.log(dog)); // ⬅️ 3) aquí ya tenemos la respuesta en formato objeto


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150
  }
})

