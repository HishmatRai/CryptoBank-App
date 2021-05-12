import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign, Ionicons, Entypo, FontAwesome } from "@expo/vector-icons";
export default function Track(props) {
  const [text, setText] = React.useState("");
  let ListCardData = [
    {
      counter: "1",
      title: "BITCOIN",
      subTitle: "BTC",
      proce: "$50.648,12",
      value: "+ 0,09%",
      bgColor: "#C4E9F2",
      color: "#1FBDA4",
    },
    {
        counter: "2",
        title: "Ethereum",
        subTitle: "ETH",
        proce: "$1.791,82",
        value: "+ 3,32%",
        bgColor: "#C4E9F2",
        color: "#1FBDA4",
      },
      {
        counter: "3",
        title: "Binance Coin",
        subTitle: "BTC",
        proce: "$294,45",
        value: "- 1,49%",
        bgColor: "#FFC9CA",
        color: "#F76264",
      },
      {
        counter: "4",
        title: "CryptoBank Coin",
        subTitle: "BTC",
        proce: "$0,186",
        value: "+ 4,19%",
        bgColor: "#C4E9F2",
        color: "#1FBDA4",
      },
      {
        counter: "5",
        title: "STARRED",
        subTitle: "BTC",
        proce: "$50.648,12",
        value: "+ 0,09%",
        bgColor: "#C4E9F2",
        color: "#1FBDA4",
      },
      {
          counter: "6",
          title: "Ethereum",
          subTitle: "ETH",
          proce: "$1.791,82",
          value: "+ 3,32%",
          bgColor: "#C4E9F2",
          color: "#1FBDA4",
        },
        {
          counter: "7",
          title: "Binance Coin",
          subTitle: "BTC",
          proce: "$294,45",
          value: "- 1,49%",
          bgColor: "#FFC9CA",
          color: "#F76264",
        },
        {
          counter: "8",
          title: "CryptoBank Coin",
          subTitle: "BTC",
          proce: "$0,186",
          value: "+ 4,19%",
          bgColor: "#C4E9F2",
          color: "#1FBDA4",
        },
  ];
  return (
    <View style={styles.container}>
 <StatusBar style="auto" />
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <View style={styles._body}>
            {/* ==========> <=============== */}
            <View style={styles._header_main}>
              <Text style={{ color: "#C4E9F2" }}>Track Coins</Text>
              <Text
                style={{ color: "#1F304C", fontWeight: "bold", fontSize: 20 }}
              >
                Track Coins
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("./../../img/trackicon1.png")}
                  style={styles.trackicon1}
                />
                <Ionicons
                  name="md-notifications-outline"
                  size={24}
                  color="black"
                />
              </View>
            </View>
            {/* ==========> <=============== */}
            <View style={styles._input_main}>
              <FontAwesome name="search" size={20} color="black" />
              <TextInput
                placeholder="Search coins"
                value={text}
                onChangeText={(text) => setText(text)}
                style={styles._input}
                underlineColor="#1F304C"
                placeholderTextColor="#1F304C"
              />
            </View>

            {/* ==========> <=============== */}
            <View style={styles._list_main}>
              <View style={styles._list_header}>
                <Text style={{ color: "#1F304C", fontWeight: "bold" }}>
                  STARRED
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ fontWeight: "bold", color: "#00B2FF" }}>
                    Large Cap
                  </Text>
                  <Ionicons name="caret-down-sharp" size={14} color="#00B2FF" />
                </View>
              </View>
              {ListCardData.map((v, i) => {
                return (
                  <View style={styles._list_Card}>
                    <View style={styles._list_column1}>
                      <Text style={{ color: "#1F304C", fontWeight: "bold" }}>
                        {v.counter}
                      </Text>
                    </View>
                    <View style={styles._list_column2}>
                      <Text style={{ color: "#1F304C", fontWeight: "bold" }}>
                        {v.title}
                      </Text>
                      <Text style={{ color: "#1F304C" }}>{v.subTitle}</Text>
                    </View>
                    <View style={styles._list_column3}>
                      <Text style={{ color: "#1F304C" }}>{v.proce}</Text>
                    </View>
                    <View
                      style={[
                        styles._list_column4,
                        { backgroundColor: v.bgColor },
                      ]}
                    >
                      <Text style={{ color: v.color }}>{v.value}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
            <View style={{ marginBottom: 70 }}></View>
          </View>
        </ScrollView>
      </View>
      <View style={styles._bitcoin_btn_view}>
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
  _header_main: {
    margin: 20,
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  trackicon1: {
    marginRight: 10,
  },
  _input_main: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  _input: {
    width: "90%",
    paddingLeft: 20,
    fontSize: 20,
  },
  _list_main: {
    backgroundColor: "white",
    borderRadius: 20,
    margin: 20,
    padding: 10,
  },
  _list_header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _list_Card: {
    flexDirection: "row",
    alignItems: "center",
    marginTop:10
  },
  _list_column1: {
    //   backgroundColor:"red",
    width: "10%",
  },
  _list_column2: {
    // backgroundColor:"green",
    width: "40%",
  },
  _list_column3: {
    // backgroundColor:"blue",
    width: "25%",
    alignItems: "flex-end",
    paddingRight: 5,
  },
  _list_column4: {
    width: "25%",
    alignItems: "center",
    height: 40,
    justifyContent: "center",
  },
});
