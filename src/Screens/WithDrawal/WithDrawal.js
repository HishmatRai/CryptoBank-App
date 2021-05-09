import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
export default function WithDrawal(props) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={{ margin: 20 }}>
          <View style={styles._header}>
            <Text style={{ color: "#1F304C", fontSize: 20, marginRight: 30 }}>
              EUR Withdrawal Process
            </Text>
            <TouchableOpacity>
              <Ionicons name="close-outline" size={24} color="#1F304C" />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: "#1F304C",
              fontWeight: "bold",
              fontSize: 20,
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Withdraw EUR to yout bank account
          </Text>

          <View style={{ marginTop: 40 }}>
            {/* ==============> <============= */}
            <View style={styles._card_main}>
              <MaterialCommunityIcons
                name="bitcoin"
                size={34}
                color="#1F304C"
              />
              <View style={{ paddingLeft: 10 }}>
                <Text style={styles._Card_heading}>Activate</Text>
                <Text style={styles._Card_des}>
                  Deposit funds in EUR via SEPA network to this{"\n"} app for
                  once to register your bank account.
                </Text>
              </View>
            </View>

            {/* ==============> <============= */}
            <View style={styles._card_main}>
              <Octicons name="file-submodule" size={34} color="#1F304C" />
              <View style={{ paddingLeft: 10 }}>
                <Text style={styles._Card_heading}>Request</Text>
                <Text style={styles._Card_des}>
                  Submit EUR withdrawal request in app
                </Text>
              </View>
            </View>

            {/* ==============> <============= */}
            <View style={styles._card_main}>
              <Octicons name="clock" size={34} color="#1F304C" />
              <View style={{ paddingLeft: 10 }}>
                <Text style={styles._Card_heading}>Wait for your review</Text>
                <Text style={styles._Card_des}>
                  It takes 3-5 working days for us to review your{"\n"}{" "}
                  withdrawal request, and we will notify you{"\n"} once your
                  request in approved and processed
                </Text>
              </View>
            </View>

            {/* ==============> <============= */}
            <View style={styles._card_main}>
              <Ionicons name="checkmark-circle" size={34} color="#1F304C" />
              <View style={{ paddingLeft: 10 }}>
                <Text style={styles._Card_heading}>
                  Receive funds in bank account
                </Text>
                <Text style={styles._Card_des}>
                  It take 1-2 working days for process funds {"\n"}to reach your
                  bank account,subject to your{"\n"} bank counrtry
                </Text>
              </View>
            </View>
          </View>

          {/* ==============> <============= */}
          <View style={styles._details_main}>
            <Text
              style={{
                color: "#1F304C",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              Detailed Information
            </Text>
            <Text style={{ color: "#1F304C", marginTop: 10 }}>
              WITHDRAWAL LIMITS
            </Text>
            <View style={styles._list_main}>
              <Text style={styles._list_heading}>Manimum</Text>
              <Text style={styles._list_price}>$100 USD equiv.</Text>
            </View>
            <View style={styles._list_main}>
              <Text style={styles._list_heading}>Daily Maximum</Text>
              <Text style={styles._list_price}>$100.000 equiv.</Text>
            </View>
            <View style={styles._list_main}>
              <Text style={styles._list_heading}>Monthly Maximum</Text>
              <Text style={styles._list_price}>$500.000 equiv.</Text>
            </View>

            <TouchableOpacity style={styles._withdraw_btn}>
                <Text style={styles._withdraw_btn_txt}>Withdraw Now</Text>
            </TouchableOpacity>
          </View>
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
  _header: {
    marginTop: 40,
    alignItems: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  _card_main: {
    flexDirection: "row",
    width: "100%",
    marginTop: 20,
  },
  _Card_heading: {
    fontWeight: "bold",
    color: "#1F304C",
    fontSize: 20,
  },
  _Card_des: {
    color: "#1F304C",
  },
  _details_main: {
    backgroundColor: "white",
    marginTop: 40,
    borderRadius: 50,
    padding: 20,
  },
  _list_main:{
      backgroundColor:"#EBEBEB",
      padding:10,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      marginTop:10,
      
  },
  _withdraw_btn:{
    backgroundColor:"#C4E9F2",
    height:38,
    marginTop:20,
    marginBottom:30,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:5
  },
  _withdraw_btn_txt:{
      color:"#1F304C",
      fontWeight:"bold",
      textAlign:"center"
  }
});
