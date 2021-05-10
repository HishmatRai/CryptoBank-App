import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather, Ionicons, Entypo } from "@expo/vector-icons";
export default function Account(props) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <View style={styles._body}>
            <View style={styles.header_main}>
              <View style={styles._header_first_column}>
                <TouchableOpacity style={styles.setting_btn} onPress={() => props.navigation.navigate("Profile")}>
                  <Feather name="settings" size={20} color="white" />
                </TouchableOpacity>
              </View>
              <Text
                style={{ color: "#1F304C", fontWeight: "bold", fontSize: 20 }}
              >
                Account
              </Text>
              <View style={styles._header_first_column}>
                <TouchableOpacity>
                  <Image
                    source={require("./../../img/accountheader1.png")}
                    style={styles.accountheader1}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require("./../../img/accountheader2.png")}
                    style={styles.accountheader2}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* ============> <============= */}
            <View style={styles._buttons_main}>
              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#1F304C",
                    fontWeight: "bold",
                    fontSize: 11,
                    marginRight: 10,
                  }}
                >
                  TOTOAL BALANCE
                </Text>
                <Ionicons name="eye-off-outline" size={18} color="#1F304C" />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: "center",
                  marginTop: -10,
                }}
              >
                <Text style={styles._star}>*</Text>
                <Text style={styles._star}>*</Text>
                <Text style={styles._star}>*</Text>
                <Text style={styles._star}>*</Text>
                <Text style={styles._star}>*</Text>
                <Text style={styles._star}>*</Text>
                <Text
                  style={{
                    color: "#1F304C",
                    fontWeight: "bold",
                    fontSize: 20,
                    marginLeft: 5,
                  }}
                >
                  EUR
                </Text>
              </View>
              <View style={styles._star_center_main}>
                <Text style={styles._star2}>*</Text>
                <Text style={styles._star2}>*</Text>
                <Text style={styles._star2}>*</Text>
                <Text style={styles._star2}>*</Text>
                <Text style={styles._star2}>*</Text>
                <Text style={styles._star2}>*</Text>
              </View>
            </View>
            {/* =============> <=========== */}
            <View style={styles._Card_main}>
              <View style={styles._Card}>
                <View style={styles._Card_column1}>
                  <Text style={{ color: "#1F304C", fontWeight: "bold" }}>
                    Crypto Wallet
                  </Text>
                  <Entypo name="triangle-right" size={20} color="#1F304C" />
                </View>
                <View style={styles._Card_column2}>
                  <Text style={styles._star}>*</Text>
                  <Text style={styles._star}>*</Text>
                  <Text style={styles._star}>*</Text>
                  <Text style={styles._star}>*</Text>
                  <Text style={styles._star}>*</Text>
                  <Text style={styles._star}>*</Text>
                </View>
                <View style={styles._Card_column3}>
                  <Text style={styles._star}>*</Text>
                  <Text style={styles._star}>*</Text>
                </View>
              </View>
              <View style={styles._Card}>
                <View style={styles._Card_column1}>
                  <Text style={{ color: "#1F304C", fontWeight: "bold" }}>
                    Exchange
                  </Text>
                </View>
                <View style={styles._Card_column2}>
                  <Text style={styles._star}>*</Text>
                  <Text style={styles._star}>*</Text>
                  <Text style={styles._star}>*</Text>
                  <Text style={styles._star}>*</Text>
                  <Text style={styles._star}>*</Text>
                  <Text style={styles._star}>*</Text>
                </View>
                <View style={styles._Card_column3}></View>
              </View>
              <View style={styles._Card}>
                <View style={styles._Card_column1}>
                  <Text style={{ color: "#1F304C", fontWeight: "bold" }}>
                    Crypto Earn
                  </Text>
                </View>
                <View style={styles._Card_column2}>
                  <Text style={styles._star}>*</Text>
                  <Text style={styles._star}>*</Text>
                  <Text style={styles._star}>*</Text>
                  <Text style={styles._star}>*</Text>
                  <Text style={styles._star}>*</Text>
                  <Text style={styles._star}>*</Text>
                </View>
                <View style={styles._Card_column3}>
                  <Text style={styles._star}>*</Text>
                  <Text style={styles._star}>*</Text>
                </View>
              </View>
            </View>
            <View style={styles._Card_main2}>
              <View style={styles._Card2}>
                <View style={styles._Card_column1}>
                  <Text style={{ color: "#1F304C", fontWeight: "bold" }}>
                  Fiat Wallet
                  </Text>
                </View>
                <View style={styles._Card_column2}>
                  <Text style={styles._star}>*</Text>
                  <Text style={styles._star}>*</Text>
                  <Text style={styles._star}>*</Text>
                  <Text style={styles._star}>*</Text>
                  <Text style={styles._star}>*</Text>
                  <Text style={styles._star}>*</Text>
                </View>
                <View style={styles._Card_column3}>
                  <Text style={styles._star}>*</Text>
                  <Text style={styles._star}>*</Text>
                </View>
              </View>
              </View>
              <View style={styles._Card_main2}>
              <View style={styles._Card2}>
                <View style={styles._Card_column1}>
                  <Text style={{ color: "#1F304C", fontWeight: "bold" }}>
                  Crypto.com Visa Card
                  </Text>
                </View>
                <View style={styles._Card_column2}>
                  <Text style={styles._star}>*</Text>
                  <Text style={styles._star}>*</Text>
                  <Text style={styles._star}>*</Text>
                  <Text style={styles._star}>*</Text>
                  <Text style={styles._star}>*</Text>
                  <Text style={styles._star}>*</Text>
                </View>
                <View style={styles._Card_column3}>
              
                </View>
              </View>
              </View>
            <View style={{ marginBottom: 70 }}></View>
          </View>
        </ScrollView>
      </View>
      <View style={styles._bitcoin_btn_view} >
        <TouchableOpacity style={styles.bitcoin_btn} onPress={() => props.navigation.navigate("Trade")}>
          <Image
            source={require("./../../img/bitcoin.png")}
            style={styles.bitcoin_iocn}
          />
        </TouchableOpacity>
      </View>
      <View style={styles._tab_main}>
        <ImageBackground
          source={require("./../../img/tabline.png")}
          style={styles._image}
        >
          <View style={styles._tabs_view}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "35%",
              }}
            >
              <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
                <Image
                  source={require("./../../img/home.png")}
                  style={styles.home_iocn}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles._account_tab} onPress={() => props.navigation.navigate("Account")}>
                <Image
                  source={require("./../../img/account.png")}
                  style={styles.account_iocn}
                />
                <Text style={styles._tab_txt}>Accounts</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "35%",
              }}
            >
              <TouchableOpacity style={styles._account_tab} onPress={() => props.navigation.navigate("Track")}>
                <Image
                  source={require("./../../img/track.png")}
                  style={styles.track_iocn}
                />
                <Text style={styles._tab_txt}>Track</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles._account_tab} onPress={() => props.navigation.navigate("Card")}>
                <Image
                  source={require("./../../img/card.png")}
                  style={styles.account_iocn}
                />
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
    backgroundColor: "#C4E9F2",
    paddingTop:30
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
    height: 80,
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
    paddingRight: 20,
  },
  _home: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "#1F304C",
    alignItems: "center",
    justifyContent: "center",
  },
  _account_tab: {
    // backgroundColor:"red",
    alignItems: "center",
  },
  _tab_txt: {
    color: "#1F304C",
    fontSize: 15,
    fontWeight: "bold",
  },
  account_iocn: {
    width: 21,
    height: 21,
  },
  home_iocn: {
    width: 40,
    height: 40,
  },
  track_iocn: {
    width: 21,
    height: 21,
  },
  bitcoin_btn: {
    width: 67,
    height: 67,
    borderRadius: 67 / 2,
    marginLeft: 5,
  },
  _bitcoin_btn_view: {
    position: "absolute",
    bottom: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    height: 67,
  },
  bitcoin_iocn: {
    width: 67,
    height: 67,
  },
  header_main: {
    flexDirection: "row",
    marginTop: 30,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  _header_first_column: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  setting_btn: {
    backgroundColor: "#1F304C",
    width: 30,
    height: 30,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  _star: {
    color: "#1F304C",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 7,
    marginRight: 1,
  },
  _star2: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 7,
    marginRight: 1,
  },
  _buttons_main: {},
  _star_center_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#1F304C",
    borderRadius: 5,
    height: 20,
    padding: 5,
  },
  accountheader1: {
    marginRight: 10,
  },
  _Card_main: {
    backgroundColor: "#80D8FF",
    borderRadius: 5,
    margin: 20,
    padding: 10,
  },
  _Card_main2: {
    backgroundColor: "#80D8FF",
    borderRadius: 5,
    margin: 20,
    padding: 10,
    marginTop:0
  },
  _Card: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderBottomColor: "#1F304C",
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 5,
  },
  _Card2: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
    marginBottom: 5,
  },
  _Card_column1: {
    width: "60%",
    flexDirection: "row",
    alignItems: "center",
  },
  _Card_column2: {
    width: "30%",
    flexDirection: "row",
    alignItems: "center",
  },
  _Card_column3: {
    width: "10%",
    flexDirection: "row",
    alignItems: "center",
  },
});
