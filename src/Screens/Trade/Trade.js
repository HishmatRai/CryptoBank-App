import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
export default function Trade(props) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={{ margin: 20 }}>
          <View style={styles.card}>
            <Text
              style={{ color: "#1F304C", fontWeight: "bold", fontSize: 20 }}
            >
              TRADE
            </Text>
            <TouchableOpacity style={styles._card1}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("./../../img/account.png")}
                  style={styles.account_icon}
                />
                <Text style={styles._card_heading}>Crypto Wallet</Text>
              </View>
              <Entypo name="chevron-small-right" size={24} color="#1F304C" />
            </TouchableOpacity>

            <TouchableOpacity style={styles._card1}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("./../../img/track.png")}
                  style={styles.account_icon}
                />
                <Text style={styles._card_heading}>Track</Text>
              </View>
              <Entypo name="chevron-small-right" size={24} color="#1F304C" />
            </TouchableOpacity>

            <TouchableOpacity style={styles._card1}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("./../../img/doller.png")}
                  style={styles.account_icon}
                />
                <Text style={styles._card_heading}>Fiat Wallet</Text>
              </View>
              <Entypo name="chevron-small-right" size={24} color="#1F304C" />
            </TouchableOpacity>

            <TouchableOpacity style={styles._card1}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("./../../img/clock.png")}
                  style={styles.account_icon}
                />
                <Text style={styles._card_heading}>Recurring Buy</Text>
              </View>
              <Entypo name="chevron-small-right" size={24} color="#1F304C" />
            </TouchableOpacity>
          </View>

          <View style={styles.card2}>
            <Text
              style={{ color: "#1F304C", fontWeight: "bold", fontSize: 20 }}
            >
              SPEND
            </Text>
            <TouchableOpacity style={styles._card1}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("./../../img/card.png")}
                  style={styles.account_icon}
                />
                <Text style={styles._card_heading}>Card</Text>
              </View>
              <Entypo name="chevron-small-right" size={24} color="#1F304C" />
            </TouchableOpacity>
            <TouchableOpacity style={styles._card1}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("./../../img/pay.png")}
                  style={styles.account_icon}
                />
                <Text style={styles._card_heading}>Pay</Text>
              </View>
              <Entypo name="chevron-small-right" size={24} color="#1F304C" />
            </TouchableOpacity>
            </View>


            <View style={styles.card2}>
            <Text
              style={{ color: "#1F304C", fontWeight: "bold", fontSize: 20 }}
            >
              FINANCE
            </Text>
            <TouchableOpacity style={styles._card1}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("./../../img/euro.png")}
                  style={styles.account_icon}
                />
                <Text style={styles._card_heading}>Supercharge</Text>
              </View>
              <Entypo name="chevron-small-right" size={24} color="#1F304C" />
            </TouchableOpacity>
            <TouchableOpacity style={styles._card1}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("./../../img/euro2.png")}
                  style={styles.account_icon}
                />
                <Text style={styles._card_heading}>Earn</Text>
              </View>
              <Entypo name="chevron-small-right" size={24} color="#1F304C" />
            </TouchableOpacity>
            </View>

            <View style={styles.card2}>
            <Text
              style={{ color: "#1F304C", fontWeight: "bold", fontSize: 20 }}
            >
              MORE
            </Text>
            <TouchableOpacity style={styles._card1}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("./../../img/reward.png")}
                  style={styles.account_icon}
                />
                <Text style={styles._card_heading}>Rewards</Text>
              </View>
              <Entypo name="chevron-small-right" size={24} color="#1F304C" />
            </TouchableOpacity>
            <TouchableOpacity style={styles._card1}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("./../../img/refer.png")}
                  style={styles.account_icon}
                />
                <Text style={styles._card_heading}>Refer</Text>
              </View>
              <Entypo name="chevron-small-right" size={24} color="#1F304C" />
            </TouchableOpacity>
            </View>


            {/* ===============> <=================== */}
            <View style={styles._btns_main}> 
                <TouchableOpacity style={styles._btn}>
                <Image
                  source={require("./../../img/buybtn.png")}
                  style={styles.account_icon}
                />
                <Text style={styles._btn_txt}>Buy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles._btn}>
                <Image
                  source={require("./../../img/account.png")}
                  style={styles.account_icon}
                />
                <Text style={styles._btn_txt}>Crypto Wallet</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles._btn}>
                <Image
                  source={require("./../../img/euro2.png")}
                  style={styles.account_icon}
                />
                <Text style={styles._btn_txt}>Warn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles._btn}>
                <Image
                  source={require("./../../img/Deposit.png")}
                  style={styles.account_icon}
                />
                <Text style={styles._btn_txt}>Deposit</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles._Cross_btn}>
            <Image
                  source={require("./../../img/cross.png")}
                  style={styles.account_icon}
                />
            </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C4E9F2",
  },
  card: {
    marginTop: 40,
    backgroundColor: "#80D9FF",
    padding: 10,
  },
  _card1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  _card_heading: {
    color: "#1F304C",
    fontWeight: "bold",
    marginLeft: 10,
  },
  card2: {
    marginTop: 20,
    backgroundColor: "#80D9FF",
    padding: 10,
  },
  _btns_main:{
      marginTop:20,
      width:"90%",
      alignSelf:"center",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between"
  },
  _btn:{
      backgroundColor:"#80D9FF",
      width:"23%",
      borderRadius:5,
      height:70,
      alignItems:"center",
      justifyContent:"center",
      padding:5
  },
  _btn_txt:{
      color:"#1F304C",
      fontWeight:"bold",
      textAlign:"center"
  },
  _Cross_btn:{
      width:60,
      height:60,
      backgroundColor:"#1F304C",
      borderRadius:60/2,
      alignItems:"center",
      justifyContent:"center",
      marginTop:30,
      alignSelf:"center"
  }
});
