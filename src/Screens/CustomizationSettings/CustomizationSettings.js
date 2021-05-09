import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons,Entypo } from "@expo/vector-icons";
import ToggleSwitch from "toggle-switch-react-native";
export default function CustomizationSettings(props) {
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
              App Customization Settings
            </Text>
          </View>

          <Text style={styles._sub_title}>LANDING PAGE</Text>
          {/* ========> <======== */}
          <TouchableOpacity style={styles._card}>
            <Text style={styles._title}>Customize Landing Page</Text>
            <Entypo name="chevron-small-right" size={24} color="#1F304C" />
          </TouchableOpacity>

          <Text style={styles._sub_title}>SUPER APP MENU SHORTCUTS</Text>
          {/* ========> <======== */}
          <View style={styles._card}>
            <Text style={styles._title}>
            Enable Shortcuts
            </Text>
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
    marginTop: 10,
  },
});
