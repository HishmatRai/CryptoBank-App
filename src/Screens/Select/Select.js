import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
export default function Select(props) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View>
                <ScrollView>
                    <Image source={require("./../../img/logo.png")} style={styles._logo} />
                </ScrollView>
            </View>
            <View style={styles._select_main}>
                <Text style={styles._title}>Invited? Add Referral ocde</Text>
                <TouchableOpacity style={styles._signup_btn} onPress={() => props.navigation.navigate("SignUp")}>
                    <Text style={styles._signup_btn_txt}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles._login_btn} onPress={() => props.navigation.navigate("Login")}>
                    <Text style={styles._login_btn_txt}>Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C4E9F2',
    },
    _logo: {
        alignSelf: "center",
        marginTop: 100,
        width: 100,
        height: 100
    },
    _select_main: {
        position: "absolute",
        bottom: 10,
        alignSelf: "center",
        width: "100%",
        alignItems: "center"
    },
    _title: {
        color: "#1F304C",
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 0.5
    },
    _signup_btn: {
        backgroundColor: "#1F304C",
        borderRadius: 50,
        width: "80%",
        alignItems: "center",
        height: 43,
        marginTop: 10,
        alignSelf: "center",
        justifyContent: "center"
    },
    _signup_btn_txt: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 0.5,

    },
    _login_btn:{
        borderRadius: 50,
        width: "80%",
        alignItems: "center",
        height: 43,
        alignSelf: "center",
        justifyContent: "center"
    },
    _login_btn_txt:{
        color: "#1F304C",
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 0.5,
    }
});
