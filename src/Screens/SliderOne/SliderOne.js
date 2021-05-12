import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import {
    MaterialIcons,
    AntDesign
} from "@expo/vector-icons";
export default function SliderOne(props) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
                    <Image source={require("./../../img/mobile.png")} style={styles.mobile} />
                    {/* <Image source={require("./../../img/sliderimage11.jpg")} style={styles.sliderimage12} /> */}
                    <View style={styles._body}>
                        <Text style={styles._title}>Bitcoin's Supply
                        {"\n"}is a Key Factor in Driving
                        {"\n"}Its Price
</Text>
                        <Text style={styles._des}>The U.S. dollar can be printed
                        {"\n"}at any time, flooding the
                        {"\n"}market with new currency.</Text>
                    </View>
                </ScrollView>
                <TouchableOpacity style={styles._skip_btn} onPress={() => props.navigation.navigate("Home")}>
                    <Text style={styles._skip_btn_txt}>Skip</Text>
                </TouchableOpacity>

            </View>
            <View style={styles._step_main}>
                <TouchableOpacity style={styles._back_btn} onPress={() => props.navigation.goBack()}>
                    <MaterialIcons name="keyboard-backspace" size={24} color="#1F304C" />
                </TouchableOpacity>
                <View style={styles._dot_main}>
                    <View style={styles._dots}></View>
                    <View style={styles._dots}></View>
                    <View style={styles._dots}></View>
                    <View style={styles._dot_active}></View>
                </View>
                <TouchableOpacity style={styles._tick_btn} onPress={() => props.navigation.navigate("Home")}>
                <AntDesign name="check" size={34} color="#1F304C" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    _title: {
        color: "#1F304C",
        fontSize: 18,
        fontWeight: "bold",
    },
    _main: {
    },
    mobile: {
        width: "100%",
        marginTop: 30,
    },
    _skip_btn: {
        position: "absolute",
        top: 50,
        alignSelf: "flex-end",
        right: 40,
    },
    _skip_btn_txt: {
        color: "#1F304C",
        fontSize: 20,
        fontWeight: 'bold'
    },
    _body: {
        marginTop: -50,
        margin: 20,
        flex: 1,
        // marginTop:40
    },
    _des: {
        color: "#1F304C",
        fontSize: 20,
    },
    _step_main: {
        position: "absolute",
        bottom: 20,
        width: "80%",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    _back_btn: {
        backgroundColor: "white",
        elevation: 5,
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
        alignItems: "center",
        justifyContent: "center"
    },
    _tick_btn: {
        backgroundColor: "#C4E9F2",
        elevation: 5,
        width: 66,
        height: 66,
        borderRadius: 66 / 2,
        alignItems: "center",
        justifyContent: "center"
    },
    _dots: {
        backgroundColor: "#D5D5D5",
        width: 10,
        height: 10,
        borderRadius: 10 / 2,
        marginRight:5
    },
    _dot_active: {
        backgroundColor: "#1F304C",
        width: 10,
        height: 10,
        borderRadius: 10 / 2
    },
    _dot_main:{
        flexDirection:"row",
        alignItems:"center",
    },
    sliderimage12:{
        marginTop: 100,
        width: "100%",
        height: 200,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"
    }
});
