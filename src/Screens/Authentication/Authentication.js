import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ToggleSwitch from "toggle-switch-react-native";
export default function Authentication(props) {
  const [toggle, setToggle] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(true);
  const [toggle4, setToggle4] = useState(true);
  const [toggle5, setToggle5] = useState(true);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={{ margin: 20 }}>
          {/* ========> <======== */}
          <View style={styles._header}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Ionicons name="md-arrow-back-sharp" size={24} color="black" />
            </TouchableOpacity>
            <Text
              style={{ color: "#1F304C", marginLeft: 20, fontWeight: "bold" }}
            >
              2-Factor Authentication
            </Text>
          </View>

          {/* ========> <======== */}
          <View style={styles._card}>
            <Text style={styles._title}>Enable 2FA</Text>
            <ToggleSwitch
              isOn={toggle}
              onColor="#C4E9F2"
              offColor="#C4E9F2"
              thumbOffStyle={{
                color: "blue",
                backgroundColor: "#C4E9F2",
              }}
              thumbOnStyle={{
                color: "blue",
                backgroundColor: "#80D9FF",
              }}
              size="medium"
              onToggle={(isOn) => setToggle(!toggle)}
            />
          </View>
          <Text style={styles._sub_title}>TRANSACTION TYPE</Text>
          {/* ========> <======== */}
          <View style={styles._card}>
            <Text style={styles._title}>Send</Text>
            <ToggleSwitch
              isOn={toggle2}
              onColor="#C4E9F2"
              offColor="#C4E9F2"
              thumbOffStyle={{
                color: "blue",
                backgroundColor: "#C4E9F2",
              }}
              thumbOnStyle={{
                color: "blue",
                backgroundColor: "#80D9FF",
              }}
              size="medium"
              onToggle={(isOn) => setToggle2(!toggle2)}
            />
          </View>

          {/* ========> <======== */}
          <View style={styles._card}>
            <Text style={styles._title}>Withdraw Crypto or Fiat</Text>
            <ToggleSwitch
              isOn={toggle3}
              onColor="#C4E9F2"
              offColor="#C4E9F2"
              thumbOffStyle={{
                color: "blue",
                backgroundColor: "#C4E9F2",
              }}
              thumbOnStyle={{
                color: "blue",
                backgroundColor: "#80D9FF",
              }}
              size="medium"
              onToggle={(isOn) => setToggle3(!toggle3)}
            />
          </View>

          {/* ========> <======== */}
          <View style={styles._card}>
            <Text style={styles._title}>Wallet Address Whitelist</Text>
            <ToggleSwitch
              isOn={toggle4}
              onColor="#C4E9F2"
              offColor="#C4E9F2"
              thumbOffStyle={{
                color: "blue",
                backgroundColor: "#C4E9F2",
              }}
              thumbOnStyle={{
                color: "blue",
                backgroundColor: "#80D9FF",
              }}
              size="medium"
              onToggle={(isOn) => setToggle4(!toggle4)}
            />
          </View>

          {/* ========> <======== */}
          <View style={styles._card}>
            <Text style={styles._title}>Transfer to Exchange</Text>
            <ToggleSwitch
              isOn={toggle5}
              onColor="#C4E9F2"
              offColor="#C4E9F2"
              thumbOffStyle={{
                color: "blue",
                backgroundColor: "#C4E9F2",
              }}
              thumbOnStyle={{
                color: "blue",
                backgroundColor: "#80D9FF",
              }}
              size="medium"
              onToggle={(isOn) => setToggle5(!toggle5)}
            />
          </View>

          <Text style={{color:"#1F304C",fontWeight:"bold",marginTop:40}}>
            If you lost or need to update your phone, you can restore 2FA if you
            saved the secret seed provided when setting up your 2FA devices. IF
            you need to reset,please refer to the link below.
          </Text>
          <TouchableOpacity style={{marginTop:10}}>
              <Text style={{color:"#00B2FF",fontWeight:'bold'}}>Learn more about 2FA</Text>
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
    marginBottom: 20,
  },
  _card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  _title: {
    color: "#1F304C",
    fontWeight: "bold",
  },
  _sub_title: {
    color: "#808080",
    fontWeight: "bold",
    marginTop: 10,
  },
});
