import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from '@expo/vector-icons';


export default Home = ({navigation}) => {
    return(
        <View>
            <TouchableOpacity
                onPress={() => {
                    navigation.popToTop()
                }}
            >
                <Text style={{ textAlign: 'center', marginTop: 100 }}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{ textAlign: 'center', marginTop: 100 }}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Detail')
                }}
            >
                <Text style={{ textAlign: 'center', marginTop: 100 }}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}


