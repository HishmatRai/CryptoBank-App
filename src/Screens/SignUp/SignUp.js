import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
export default function SignUp(props) {
    const [remember, setRemember] = useState(false);
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
                    <Image source={require("./../../img/logo.png")} style={styles._logo} />
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
                <View style={styles._forgot_remember_main}>
                    {/* <<<<<<<< Remember >>>>>>>>> */}
                    <View style={styles._remember_main}>
                        {remember ? (
                            <TouchableOpacity onPress={() => setRemember(!remember)} style={styles._circle}>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={() => setRemember(!remember)} style={styles._circle2}>
                            </TouchableOpacity>
                        )}
                    </View>
                    <View>
                        <View style={styles._terms_main}>
                            <Text style={{ color: "#1F304C", fontSize: 15 }}>I accept the </Text>
                            <TouchableOpacity>
                                <Text style={{ color: "#1F304C", fontSize: 15, fontWeight: "bold" }}>Terms & Conditions</Text>
                            </TouchableOpacity>
                            <Text style={{ color: "#1F304C", fontSize: 15 }}> and </Text>
                        </View>
                        <View style={styles._terms_main}>

                            <TouchableOpacity>
                                <Text style={{ color: "#1F304C", fontSize: 15, fontWeight: "bold" }}>Privacy Notice</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles._signup_btn} onPress={() => props.navigation.navigate("SliderFour")}>
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
        paddingTop:30
    },
    _logo: {
        alignSelf: "center",
        marginTop: 100,
        width: 100,
        height: 100
    },
    _select_main: {
        marginTop: 120,
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
    _circle: {
        backgroundColor: "#1F304C",
        width: 20,
        height: 20,
        borderRadius: 20 / 2
    },
    _circle2: {
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        borderColor: "#1F304C",
        borderWidth: 2
    },
    _forgot_remember_main: {
        width: "75%",
        flexDirection: "row",
        alignItems: "center",
        maxWidth: "75%"
    },
    _terms_main: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
        height: 17
    },
    _body: {
        margin: 30,
        marginTop: 50
    },
    _email_input_main:{
        backgroundColor:"#DCF8FF",
        borderRadius:50,
        paddingVertical:5,
        alignItems:"center",
        marginTop:10
    },
    _input:{
        marginLeft:10,
        width:"85%",
        fontSize:15,
        
    }
});
