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
export default function SystemStatus(props) {
    let IncidentsCard = [
        {date:"Apr 6, 2021",des:'No incidents reported today.'},
        {date:"Apr 6, 2021",des:'No incidents reported today.'},
        {date:"Apr 6, 2021",des:'No incidents reported today.'},
        {date:"Apr 6, 2021",des:'No incidents reported today.'},
    ]
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={{ margin: 20 }}>
          {/* =================> <=============== */}
          <View style={styles._header}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Ionicons name="md-arrow-back-sharp" size={24} color="black" />
            </TouchableOpacity>
            <Text
              style={{ color: "#1F304C", marginLeft: 20, fontWeight: "bold" }}
            >
              System Status
            </Text>
          </View>

          {/* =================> <=============== */}
          <View
            style={{ backgroundColor: "#C4E9F2", marginTop: 30, padding: 10 }}
          >
            <Text style={{ color: "#1F304C", fontWeight: "bold" }}>
              All Systems Operational
            </Text>
          </View>

          {/* =================> <=============== */}
          <View style={styles._Card1_main}>
            <View style={styles._Card1}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="add-circle-outline" size={24} color="#1F304C" />
                <Text style={styles._Card1_title}>Cryptobank.com App W...</Text>
              </View>
              <Text style={styles._Card1_Status}>Operational</Text>
            </View>
            <View style={styles._Card1}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="add-circle-outline" size={24} color="#1F304C" />
                <Text style={styles._Card1_title}>Cryptobank.com App W...</Text>
              </View>
              <Text style={styles._Card1_Status}>Operational</Text>
            </View>
            <View style={styles._Card1}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="add-circle-outline" size={24} color="#1F304C" />
                <Text style={styles._Card1_title}>Cryptobank.com App W...</Text>
              </View>
              <Text style={styles._Card1_Status}>Operational</Text>
            </View>
          </View>

          {/* =================> <=============== */}
          <Text
            style={{
              marginTop: 20,
              color: "#1F304C",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Past Incidents
          </Text>
          {IncidentsCard.map((v,i)=>{
              return(
          <View style={styles.Incidents_card}>
            <Text style={styles.Incidents_card_Date}>{v.date}</Text>
            <Text style={styles.Incidents_card_Des}>
           {v.des}
            </Text>
          </View>
              )
          })}

          <Text style={{color:"#F76264",fontWeight:"bold",marginTop:30}}>Cryptobank.com Visa Card Cashback</Text>
       <View style={{flexDirection:"row",alignItems:"center",marginTop:10}}>
           <Text style={{color:"#1F304C",fontWeight:"bold"}}>Resolved- </Text>
           <Text style={{color:"#1F304C"}}>THis incident has been resolved.</Text>
       </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop:30
  },
  _header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  _Card1_main: {
    borderColor: "#CCCCCC",
    borderWidth: 1,
    padding: 10,
    marginTop: 30,
  },
  _Card1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    borderBottomColor: "#CCCCCC",
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  _Card1_title: {
    marginLeft: 10,
    color: "#1F304C",
    fontWeight: "bold",
  },
  _Card1_Status: {
    color: "#1FBDA4",
    fontWeight: "bold",
  },
  Incidents_card: {
    marginTop: 20,
  },
  Incidents_card_Date: {
    fontWeight: "bold",
    color: "#1F304C",
    fontSize: 20,
    borderBottomColor: "#CCCCCC",
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  Incidents_card_Des: {
    color: "#999999",
    fontWeight: "bold",
    marginTop: 10,
  },
});
