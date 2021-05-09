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
export default function Notification(props) {
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(true);
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
              Notification Setting
            </Text>
          </View>

          <Text style={styles._sub_title}>ENABLE NOTIFICATION</Text>
          {/* ========> <======== */}
          <View style={styles._card}>
            <Text style={styles._title}>Allow Notifications</Text>
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

          <Text style={styles._sub_title}>NOTIFICATION TYPE</Text>
          {/* ========> <======== */}
          <View style={styles._card}>
            <Text style={styles._title}>
              CryptoBank.com Updates & Offerings
            </Text>
            <ToggleSwitch
              isOn={toggle3}
              onColor="#BDBDBC"
              offColor="#BDBDBC"
              thumbOffStyle={{
                color: "blue",
                backgroundColor: "#ECECEC",
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
            <Text style={styles._title}>Market Alerts</Text>
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
