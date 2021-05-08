import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { Feather, FontAwesome5, AntDesign } from '@expo/vector-icons';
import ToggleSwitch from "toggle-switch-react-native";
export default function Home(props) {
    const [toggle, setToggle] = useState(false);
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
                    <View style={styles._body}>
                        <View style={styles.header_main}>
                            <View style={styles._header_first_column}>
                                <TouchableOpacity>
                                    <Feather name="settings" size={24} color="black" />
                                </TouchableOpacity>
                                <FontAwesome5 name="star-of-life" size={24} color="black" />
                                <Text>*</Text>
                                <Text>EUR</Text>
                            </View>
                            <View>
                                <AntDesign name="wechat" size={24} color="black" />
                            </View>
                        </View>
                        <Text style={styles._title}>Home</Text>
                        {/* <ToggleSwitch
                              isOn={toggle}
                              onColor="white"
                              offColor="white"
                              // label="Example label"
                              labelStyle={{ color: "black", fontWeight: "900" }}
                              style={{
                                  borderWidth: 2,
                                  borderColor: "black",
                                  borderRadius: 30,
                              }}
                              thumbOffStyle={{
                                  color: "blue",
                                  backgroundColor: "white",
                                  borderWidth: 3,
                                  borderColor: "red",
                              }}
                              thumbOnStyle={{
                                  color: "blue",
                                  backgroundColor: "white",
                                  borderWidth: 3,
                                  borderColor: "green",
                              }}
                              size="medium"
                              onToggle={(isOn) => setToggle(!toggle )}
                          /> */}

                    </View>
                </ScrollView>
            </View>
            <View style={styles._bitcoin_btn_view}>
                <TouchableOpacity style={styles.bitcoin_btn}>
                    <Image source={require("./../../img/bitcoin.png")} style={styles.bitcoin_iocn} />
                </TouchableOpacity>
            </View>
            <View style={styles._tab_main}>
                <ImageBackground
                    source={require("./../../img/tabline.png")}
                    style={styles._image}
                >
                    <View style={styles._tabs_view}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "35%" }}>
                            <TouchableOpacity>
                                <Image source={require("./../../img/home.png")} style={styles.home_iocn} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles._account_tab}>
                                <Image source={require("./../../img/account.png")} style={styles.account_iocn} />
                                <Text style={styles._tab_txt}>Accounts</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "35%" }}>
                            <TouchableOpacity style={styles._account_tab}>
                                <Image source={require("./../../img/track.png")} style={styles.track_iocn} />
                                <Text style={styles._tab_txt}>Track</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles._account_tab}>
                                <Image source={require("./../../img/card.png")} style={styles.account_iocn} />
                                <Text style={styles._tab_txt}>Card</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C4E9F2',
    },

    _title: {
        color: "#1F304C",
        fontSize: 35,
        fontWeight: "bold",
        letterSpacing: 0.5,
        marginTop: 100,
        textAlign: "center"
    },
    _tab_main: {
        // backgroundColor: "red",
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 80,

    },
    _image: {
        resizeMode: "cover",
        height: 80
    },
    _tabs_view: {
        position: "absolute",
        bottom: 15,
        width: "94%",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 20
    },
    _home: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: "#1F304C",
        alignItems: "center",
        justifyContent: "center"

    },
    _account_tab: {
        // backgroundColor:"red",
        alignItems: "center"
    },
    _tab_txt: {
        color: "#1F304C",
        fontSize: 15,
        fontWeight: "bold"
    },
    account_iocn: {
        width: 21,
        height: 21
    },
    home_iocn: {
        width: 40,
        height: 40
    },
    track_iocn: {
        width: 21,
        height: 21
    },
    bitcoin_btn: {
        width: 67,
        height: 67,
        borderRadius: 67 / 2,
        marginLeft: 5
    },
    _bitcoin_btn_view: {
        position: "absolute",
        bottom: 50,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: "100%",
        height: 67
    },
    bitcoin_iocn: {
        width: 67,
        height: 67,
    },
    header_main: {
        flexDirection: "row",
        marginTop: 80,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20
    },
    _header_first_column:{
        flexDirection:"row",
        alignItems:"center"
    }
});
