import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
export default function Profile(props) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={{ margin: 20 }}>
          <Text style={styles._heading}>PROFILE</Text>
          {/* ============> <=============== */}
          <View style={styles._profile_main}>
            <View style={styles._profile_pic_main}>
              <TouchableOpacity style={styles._profile_pic}>
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
                >
                  AA
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles._profile_name_main}>
              <View>
                <Text style={styles._user_name}>Anis Ait-Omar</Text>
                <Text style={styles._user_email}>Name, phone $ email</Text>
              </View>
              <TouchableOpacity>
                <Entypo name="chevron-small-right" size={24} color="#1F304C" />
              </TouchableOpacity>
            </View>
          </View>

          {/* ============> <=============== */}
          <View style={styles._card_main}>
            <Text style={styles._title}>CARD APPLICATION</Text>
            <TouchableOpacity style={styles._Card}>
              <Text style={styles._card_title}>Verify Address</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons
                  name="checkmark-circle-sharp"
                  size={20}
                  color="#1FBCA3"
                />
                <Text
                  style={{
                    color: "#1FBCA3",
                    fontWeight: "bold",
                    marginLeft: 5,
                  }}
                >
                  Matched
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* ============> <=============== */}
          <View style={styles._card_main}>
            <Text style={styles._title}>Account</Text>
            <TouchableOpacity style={styles._Card} onPress={() => props.navigation.navigate("SelectPayment")}>
              <Text style={styles._card_title}>Payment Currency</Text>
              <Entypo name="chevron-small-right" size={24} color="#1F304C" />
            </TouchableOpacity>
            <TouchableOpacity style={styles._Card} onPress={() => props.navigation.navigate("Language")}>
              <Text style={styles._card_title}>Language</Text>
              <Entypo name="chevron-small-right" size={24} color="#1F304C" />
            </TouchableOpacity>
            <TouchableOpacity style={styles._Card}>
              <Text style={styles._card_title}>PayString</Text>
              <Entypo name="chevron-small-right" size={24} color="#1F304C" />
            </TouchableOpacity>
          </View>

          {/* ============> <=============== */}
          <View style={styles._card_main}>
            <Text style={styles._title}>APP CUSTOMAZATION</Text>
            <TouchableOpacity style={styles._Card} onPress={() => props.navigation.navigate("CustomizationSettings")}>
              <Text style={styles._card_title}>App Customization Settings</Text>
              <Entypo name="chevron-small-right" size={24} color="#1F304C" />
            </TouchableOpacity>
          </View>

          {/* ============> <=============== */}
          <View style={styles._card_main}>
            <Text style={styles._title}>SECURITY</Text>
            <TouchableOpacity style={styles._Card} onPress={() => props.navigation.navigate("PassCodeSetting")}>
              <Text style={styles._card_title}>Passcode Settings</Text>
              <Entypo name="chevron-small-right" size={24} color="#1F304C" />
            </TouchableOpacity>
            <TouchableOpacity style={styles._Card} onPress={() => props.navigation.navigate("PassCode")}>
              <Text style={styles._card_title}>Change Passcode</Text>
              <Entypo name="chevron-small-right" size={24} color="#1F304C" />
            </TouchableOpacity>
            <TouchableOpacity style={styles._Card} onPress={() => props.navigation.navigate("Authentication")}>
              <Text style={styles._card_title}>2-Factor Authentication</Text>
              <Entypo name="chevron-small-right" size={24} color="#1F304C" />
            </TouchableOpacity>
            <TouchableOpacity style={styles._Card}>
              <Text style={styles._card_title}>Anti-phishing Code</Text>
              <Entypo name="chevron-small-right" size={24} color="#1F304C" />
            </TouchableOpacity>
          </View>

          {/* ============> <=============== */}
          <View style={styles._card_main}>
            <Text style={styles._title}>NOTIFICATIONS</Text>
            <TouchableOpacity style={styles._Card} onPress={() => props.navigation.navigate("Notification")}>
              <Text style={styles._card_title}>Notification Settings</Text>
              <Entypo name="chevron-small-right" size={24} color="#1F304C" />
            </TouchableOpacity>
          </View>

          {/* ============> <=============== */}
          <View style={styles._card_main}>
            <Text style={styles._title}>SUPPORT</Text>
            <TouchableOpacity style={styles._Card}>
              <Text style={styles._card_title}>Help Center</Text>
              <Entypo name="chevron-small-right" size={24} color="#1F304C" />
            </TouchableOpacity>
            <TouchableOpacity style={styles._Card}>
              <Text style={styles._card_title}>Contact Support</Text>
              <Entypo name="chevron-small-right" size={24} color="#1F304C" />
            </TouchableOpacity>
          </View>

          {/* ============> <=============== */}
          <View style={styles._card_main}>
            <Text style={styles._title}>ABOUT CRYPTOBANK VISA CARD</Text>
            <TouchableOpacity style={styles._Card}>
              <Text style={styles._card_title}>Terms & Conditions</Text>
              <Entypo name="chevron-small-right" size={24} color="#1F304C" />
            </TouchableOpacity>
          </View>

          {/* ============> <=============== */}
          <View style={styles._card_main}>
            <Text style={styles._title}>ABOUT CYPTOBANK.COM</Text>
            <TouchableOpacity style={styles._Card}>
              <Text style={styles._card_title}>Fees & Limits</Text>
              <Entypo name="chevron-small-right" size={24} color="#1F304C" />
            </TouchableOpacity>
            <TouchableOpacity style={styles._Card}>
              <Text style={styles._card_title}>Terms & Conditions</Text>
              <Entypo name="chevron-small-right" size={24} color="#1F304C" />
            </TouchableOpacity>
            <TouchableOpacity style={styles._Card}>
              <Text style={styles._card_title}>Privacy Nitice</Text>
              <Entypo name="chevron-small-right" size={24} color="#1F304C" />
            </TouchableOpacity>
            <TouchableOpacity style={styles._Card} onPress={() => props.navigation.navigate("SystemStatus")}>
              <Text style={styles._card_title}>System Status</Text>
              <Entypo name="chevron-small-right" size={24} color="#1F304C" />
            </TouchableOpacity>
            <TouchableOpacity style={styles._Card}>
              <Text style={styles._card_title}>Visit Our Website</Text>
              <Entypo name="chevron-small-right" size={24} color="#1F304C" />
            </TouchableOpacity>
          </View>

          {/* ============> <=============== */}
          <View style={styles._card_main}>
            <Text style={styles._title}>CYPTOBANK.COM APP</Text>
            <TouchableOpacity style={styles._logout_btn} onPress={() => props.navigation.navigate("Login")}>
              <Text style={styles._logout_btn_txt}>Log Out</Text>
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
    backgroundColor: "white",
    paddingTop:30
  },
  _heading: {
    color: "#1F304C",
    fontWeight: "bold",
    marginTop: 40,
    marginLeft: 10,
  },
  _profile_main: {
    marginTop: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  _profile_pic: {
    width: 54,
    height: 54,
    backgroundColor: "#1F304C",
    borderRadius: 54 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  _profile_pic_main: {
    width: "20%",
  },
  _profile_name_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
  },
  _user_name: {
    color: "#1F304C",
    fontWeight: "bold",
  },
  _user_email: {
    color: "#00B2FF",
    fontWeight: "bold",
  },
  _card_main: {
    marginTop: 20,
  },
  _title: {
    color: "#808080",
    fontWeight: "bold",
  },
  _card_title: {
    color: "#1F304C",
    fontWeight: "bold",
  },
  _Card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  _logout_btn: {
    marginTop: 10,
  },
  _logout_btn_txt: {
    color: "#F76264",
    fontWeight: "bold",
    fontSize: 20,
  },
});
