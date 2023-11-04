import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default Login = ({ navigation }) => {
    return(
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Home'); 
            }}
        >
            <Text style={{textAlign: 'center', marginTop: 100}}>Login</Text>
        </TouchableOpacity>
    );
}



