import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from '@expo/vector-icons';


export default Detail = ({navigation}) => {
    return(
        <View>
            <TouchableOpacity
                onPress={() => {
                    navigation.pop(2)
                }}
            >
                <Text style={{ textAlign: 'center', marginTop: 100 }}>Back</Text>
            </TouchableOpacity>
        </View>
    );
}


