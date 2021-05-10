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
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";
export default function Home(props) {

  let CardData = [
    {
      icon: require("./../../img/card1icon.png"),
      title: "Bitcoin",
      subTitle: "BTC",
      price: "$50.541,44",
      value: "-0.75%",
      color: "#F66264",
    },
    {
      icon: require("./../../img/card2icon.png"),
      title: "Ethereum",
      subTitle: "ETH",
      price: "$1.700,83",
      value: "+3.77%",
      color: "#1FBCA3",
    },
    {
      icon: require("./../../img/card3icon.png"),
      title: "Binance Coin",
      subTitle: "BNB",
      price: "$282,71",
      value: "-7.8%",
      color: "#1FBCA3",
    },
    {
      icon: require("./../../img/card3icon.png"),
      title: "CryptoBank",
      subTitle: "CRO",
      price: "$0,18",
      value: "-1.8%",
      color: "#1FBCA3",
    },
  ];

  let GainersCard = [
    {
      icon: require("./../../img/gainers1icon.png"),
      title: "Ontology Gas",
      subTitle: "ONG",
      price: "$4,89",
      score: "+21.17%",
    },
    {
      icon: require("./../../img/gainers2icon.png"),
      title: "Kyber Network",
      subTitle: "KNC",
      price: "$4,89",
      score: "+21.17%",
    },
    {
      icon: require("./../../img/gainers3icon.png"),
      title: "Holo",
      subTitle: "HOT",
      price: "$4,89",
      score: "+21.17%",
    },
    {
      icon: require("./../../img/gainers4icon.png"),
      title: "Polkadot",
      subTitle: "DOT",
      price: "$4,89",
      score: "+21.17%",
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
            <View style={styles.header_main}>
              <View style={styles._header_first_column}>
                <TouchableOpacity style={styles.setting_btn} onPress={() => props.navigation.navigate("Profile")}>
                  <Feather name="settings" size={20} color="white" />
                </TouchableOpacity>
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
              <View style={styles._header_first_column}>
                <TouchableOpacity style={styles._pay_btn} onPress={() => props.navigation.navigate("SelectPayment")}>
                  <Image
                    source={require("./../../img/payicon.png")}
                    style={styles.pay_iocn}
                  />
                  <Text style={styles._pay_btn_txt}>Pay</Text>
                </TouchableOpacity>
                <AntDesign name="wechat" size={24} color="#1F304C" />
              </View>
            </View>
            {/* ============> <============= */}
            <View style={styles._buttons_main}>
              <View style={styles._star_center_main}>
                <Text style={styles._star}>*</Text>
                <Text style={styles._star}>*</Text>
                <Text style={styles._star}>*</Text>
                <Text style={styles._star}>*</Text>
                <Text style={styles._star}>*</Text>
                <Text style={styles._star}>*</Text>
              </View>
              <View style={styles._trade_and_transfer_main}>
                <TouchableOpacity style={styles._trade_btn}>
                  <Text style={styles._trade_btn_txt}>Trade</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles._transfer_btn} onPress={() => props.navigation.navigate("WithDrawal")}>
                  <Text style={styles._transfer_btn_txt}>Transfer</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* ============> <============= */}
            <View style={styles.card_main_view}>
              <View style={styles._Card_header_main}>
                <Text style={{ color: "#1F304C", fontWeight: "bold" }}>
                  FAVORITES
                </Text>
                <TouchableOpacity>
                  <Text style={{ color: "#1F304C", fontWeight: "bold" }}>
                    See All
                  </Text>
                </TouchableOpacity>
              </View>
              {CardData.map((v, i) => {
                return (
                  <View style={styles._Card}>
                    <View style={styles._Card_first_column}>
                      <Image source={v.icon} style={styles.card1icon} />
                      <View style={{ paddingLeft: 10 }}>
                        <Text
                          style={{
                            color: "#1F304C",
                            fontWeight: "bold",
                            fontSize: 15,
                          }}
                        >
                          {v.title}
                        </Text>
                        <Text
                          style={{
                            color: "#437096",
                            fontWeight: "bold",
                            fontSize: 15,
                          }}
                        >
                          {v.subTitle}
                        </Text>
                      </View>
                    </View>
                    <View style={styles._Card_second_column}>
                      <Image
                        source={require("./../../img/wave.png")}
                        style={styles.wave}
                      />
                    </View>
                    <View style={styles._Card_third_column}>
                      <Text
                        style={{
                          color: "#1F304C",
                          fontWeight: "bold",
                          fontSize: 15,
                          alignSelf: "flex-end",
                        }}
                      >
                        {v.price}
                      </Text>
                      <Text
                        style={[
                          {
                            fontWeight: "bold",
                            fontSize: 15,
                            alignSelf: "flex-end",
                          },
                          { color: v.color },
                        ]}
                      >
                        {v.value}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>

            {/* ============> <============= */}
            <View style={styles._jainers_main}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomColor: "#1F304C",
                  borderBottomWidth: 1,
                  paddingBottom: 5,
                }}
              >
                <Text
                  style={{
                    color: "#1F304C",
                    fontWeight: "bold",
                    marginRight: 10,
                    marginLeft: 10,
                  }}
                >
                  TOP GAINERS
                </Text>
                <Image
                  source={require("./../../img/GAINERS.png")}
                  style={styles.GAINERS_icon}
                />
              </View>
              {GainersCard.map((v, i) => {
                return (
                  <View style={styles._gainers_card}>
                    <View style={styles._gainers_card_column1}>
                      <Image source={v.icon} style={styles.card1icon} />
                      <View style={{ paddingLeft: 10 }}>
                        <Text
                          style={{
                            color: "#1F304C",
                            fontWeight: "bold",
                            fontSize: 15,
                          }}
                        >
                          {v.title}
                        </Text>
                        <Text
                          style={{
                            color: "#437096",
                            fontWeight: "bold",
                            fontSize: 15,
                          }}
                        >
                          {v.subTitle}
                        </Text>
                      </View>
                    </View>
                    <View style={styles._gainers_card_column2}>
                      <Text style={{ color: "#1F304C", fontWeight: "bold" }}>
                        {v.price}
                      </Text>
                    </View>
                    <View style={styles._gainers_card_column3}>
                      <Text style={{ color: "#1F304C", fontWeight: "bold" }}>
                        {v.score}
                      </Text>
                    </View>
                    <View style={styles._gainers_card_column4}>
                      <Ionicons
                        name="notifications-outline"
                        size={24}
                        color="#1F304C"
                      />
                    </View>
                  </View>
                );
              })}
            </View>

            {/* ============> <============= */}
            <View style={styles._superCharger_main}>
              <View style={styles._superCharger_header_main}>
                <View style={styles._superCharger_first_column}>
                  <Text style={styles._line1}></Text>
                  <Text style={styles._line2}></Text>
                  <Text style={styles._line3}></Text>
                </View>
                <Text style={{ color: "#437096", fontWeight: "bold" }}>
                  SUPERCHARGER
                </Text>
                <View style={styles._superCharger_first_column}>
                  <Text style={styles._line4}></Text>
                  <Text style={styles._line5}></Text>
                  <Text style={styles._line6}></Text>
                </View>
              </View>
              <Text
                style={{
                  textAlign: "center",
                  color: "#1F304C",
                  fontWeight: "bold",
                  fontSize: 13,
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                Deposit CRO to mine new coins with 1-click Estimated APY:14.82%
              </Text>
            </View>

            {/* ============> <============= */}
            <Text
              style={{
                color: "#1F304C",
                fontWeight: "bold",
                marginLeft: 35,
                marginTop: 30,
              }}
            >
              CRYPTO NEWS
            </Text>
            <View style={styles._news_main}>
              <Text
                style={{
                  textAlign: "center",
                  color: "#1F304C",
                  fontSize: 13,
                }}
              >
                NFT Campaing - Trade NFT token on the Crypto Bank App to share
                %50,000 in CRO!
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    color: "#1F304C",
                    fontWeight: "bold",
                    marginTop: 10,
                  }}
                >
                  Read more
                </Text>
              </TouchableOpacity>
            </View>

            {/* ============> <============= */}
            <View style={styles._refer_main}>
              <Text style={styles._refer_txt}>Refer & Get $25 USD</Text>
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
  _pay_btn: {
    backgroundColor: "#1F304C",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    height: 24,
    borderRadius: 5,
    marginRight: 10,
  },
  _pay_btn_txt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 10,
  },
  pay_iocn: {
    width: 15,
    height: 15,
  },
  _buttons_main: {},
  _star_center_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  _trade_and_transfer_main: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  _trade_btn: {
    backgroundColor: "#1F304C",
    borderRadius: 5,
    width: 80,
    height: 20,
  },
  _trade_btn_txt: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  _transfer_btn: {
    backgroundColor: "#80D8FF",
    height: 20,
    borderRadius: 5,
    width: 94,
  },
  _transfer_btn_txt: {
    color: "#1F304C",
    textAlign: "center",
  },
  card_main_view: {
    padding: 20,
  },
  _Card_header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _Card: {
    backgroundColor: "#80D8FF",
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  _Card_first_column: {
    width: "35%",
    flexDirection: "row",
    alignItems: "center",
  },
  _Card_second_column: {
    width: "40%",
    alignItems: "center",
  },
  _Card_third_column: {
    width: "25%",
  },
  wave: {
    width: 130,
    height: 35,
    alignItems: "center",
  },
  _jainers_main: {
    padding: 20,
  },
  _gainers_card: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#1F304C",
  },
  _gainers_card_column1: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  _gainers_card_column2: {
    width: "20%",
  },
  _gainers_card_column3: {
    width: "20%",
  },
  _gainers_card_column4: {
    width: "10%",
  },
  _superCharger_main: {
    width: "80%",
    alignSelf: "center",
    backgroundColor: "#B2E7FF",
    borderRadius: 5,
    padding: 10,
    borderBottomColor: "#437096",
    borderBottomWidth: 5,
  },
  _superCharger_header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _superCharger_first_column: {
    width: "30%",
  },
  _line1: {
    backgroundColor: "#437096",
    height: 1,
    borderRadius: 20,
    width: "90%",
    alignSelf: "flex-end",
  },
  _line2: {
    backgroundColor: "#437096",
    height: 1,
    borderRadius: 20,
    width: "100%",
    alignSelf: "flex-end",
    marginBottom: 2,
    marginTop: 2,
  },
  _line3: {
    backgroundColor: "#437096",
    height: 1,
    borderRadius: 20,
    width: "80%",
    alignSelf: "flex-end",
  },
  _line4: {
    backgroundColor: "#437096",
    height: 1,
    borderRadius: 20,
    width: "90%",
  },
  _line5: {
    backgroundColor: "#437096",
    height: 1,
    borderRadius: 20,
    width: "100%",
    marginBottom: 2,
    marginTop: 2,
  },
  _line6: {
    backgroundColor: "#437096",
    height: 1,
    borderRadius: 20,
    width: "80%",
  },
  _news_main: {
    width: "70%",
    backgroundColor: "#80D8FF",
    padding: 10,
    borderTopColor: "#437096",
    borderTopWidth: 5,
    marginTop: 2,
    marginLeft: 35,
  },
  _refer_main: {
    backgroundColor: "#1F304C",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    width: "35%",
    margin:20,
    alignSelf:"flex-end",
    padding:5,
    alignItems:"center",
    justifyContent:"center"
  },
  _refer_txt: {
      color:"white",
      fontWeight:"bold",
      textAlign:"center",
      fontSize:12
  },
});
