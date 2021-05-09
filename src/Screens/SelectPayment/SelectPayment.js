import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function SelectPayment(props) {
  let btnVal = [
    { value: "Bulgarian Lev (BGN)" },
    { value: "Romanian Leu (RON)" },
    { value: "Israeli New Shekel (ILS)" },
    { value: "Saudi Riyal (SAR)" },
    { value: "United Arab Emirates Dirham (AED)" },
    { value: "Hungarian Forint (HUF)" },
    { value: "Czech Koruna (CZK)" },
    { value: "Brazilian Real (BRL)" },
    { value: "Turkish Lira (TRY)" },
  ];
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={{ margin: 20 }}>
          <View style={styles._header}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Ionicons name="md-arrow-back-sharp" size={24} color="black" />
            </TouchableOpacity>
            <Text
              style={{ color: "#1F304C", marginLeft: 20, fontWeight: "bold" }}
            >
              Payment Currency
            </Text>
          </View>
          <Text style={styles._heading}>Select your payment currency</Text>
          <View style={styles._select_main}>
            {btnVal.map((v, i) => {
              return (
                <TouchableOpacity style={styles._select_btn}>
                  <View style={styles._active}></View>
                  <Text style={styles._select_btn_txt}>{v.value}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <Text style={{color:"#1F304C",fontSize:20,marginTop:10}}>
            Your payment currency is used to display your balance, transactions,
            and purchase crypto currency throughout the app
          </Text>
          <TouchableOpacity style={styles.Confirm_btn} onPress={() => props.navigation.navigate("Home")}>
              <Text style={styles.Confirm_btn_txt}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  _header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
  },
  _heading: {
    color: "#1F304C",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 20,
  },
  _select_main: {
    marginTop: 20,
  },
  _select_btn: {
    backgroundColor: "#EBEBEB",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
  },
  _active: {
    width: 18,
    height: 18,
    backgroundColor: "#1F304C",
    borderRadius: 18 / 2,
  },
  _select_btn_txt: {
    color: "#1F304C",
    fontWeight: "bold",
    marginLeft: 10,
  },
  Confirm_btn:{
      backgroundColor:"#1F304C",
      borderRadius:5,
      marginTop:10,
      height:50,
      alignItems:"center",
      width:"100%",
      justifyContent:"center"
  },
  Confirm_btn_txt:{
      textAlign:"center",
      color:'white',
      fontWeight:"bold",
      fontSize:20
  }
});
