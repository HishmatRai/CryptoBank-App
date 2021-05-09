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
export default function Language(props) {
  let btnVal = [
    { value: "Portugues" },
    { value: "China" },
    { value: "China" },
    { value: "Turkce" },
    { value: "Polski" },
    { value: "Bahasa Indonesia" },
    { value: "Nederlands" },
    { value: "Tieng Viet" },
    { value: "Romana" },
    { value: "Francais (Canada)" },
    { value: "Pyccknn" },
    { value: "Portugues (Brasil)" },
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
              Language
            </Text>
          </View>
          <View style={styles._select_main}>
            {btnVal.map((v, i) => {
              return (
                <TouchableOpacity style={styles._select_btn}>
                  <Text style={styles._select_btn_txt}>{v.value}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <TouchableOpacity style={styles.Confirm_btn} onPress={() => props.navigation.navigate("Profile")}>
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
  _select_btn_txt: {
    color: "#1F304C",
    fontWeight: "bold",
    marginLeft: 10,
  },
  Confirm_btn:{
      backgroundColor:"#1F304C",
      borderRadius:5,
      marginTop:30,
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
