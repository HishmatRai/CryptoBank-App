import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import {
    Ionicons,
} from "@expo/vector-icons";
export default function Login(props) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles._header_main}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles._heading}>Log in</Text>
                </View>
                <Image source={require("./../../img/logo2.png")} style={styles._logo} />
            </View>
            <View>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
                    <View style={styles._body}>
                        <Text style={styles._title}>Your</Text>
                        <Text style={styles._title}>Email Address</Text>
                        <View style={styles._email_input_main}>
                            <TextInput
                                placeholder="Example@address.com"
                                style={styles._input}
                                underlineColor="#1F304C"
                                placeholderTextColor="#1F304C"
                            />
                        </View>
                    </View>
                    <View style={styles._select_main}>
                        <TouchableOpacity style={styles._signup_btn} onPress={() => props.navigation.navigate("Home")}>
                            <Text style={styles._signup_btn_txt}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
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
        width: 40,
        height: 40
    },
    _select_main: {
        marginTop: 250,
        alignSelf: "center",
        width: "100%",
        alignItems: "center",
    },
    _title: {
        color: "#1F304C",
        fontSize: 35,
        fontWeight: "bold",
        letterSpacing: 0.5,
        marginTop: -15
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
    _body: {
        margin: 30,
        marginTop: 50
    },
    _email_input_main: {
        backgroundColor: "#DCF8FF",
        borderRadius: 50,
        paddingVertical: 5,
        alignItems: "center",
        marginTop: 10
    },
    _input: {
        marginLeft: 10,
        width: "85%",
        fontSize: 15,

    },
    _header_main: {
        flexDirection: "row",
        marginTop: 60,
        margin: 30,
        justifyContent: 'space-between'
    },
    _heading: {
        color: "#1F304C",
        fontSize: 25,
        fontWeight: "bold",
        letterSpacing: 0.5,
        marginLeft: 20
    }
});
