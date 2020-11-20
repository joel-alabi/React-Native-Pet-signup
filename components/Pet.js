import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export default function Pet({ name, type, age, location, photo }) {
  return (
    <View style={[styles.profile, styles.profileShadow]}>
      <Image style={styles.image} source={photo} />

      <View style={styles.profileDetails}>
        <Text style={styles.petName}>{name}</Text>

        <Text style={styles.details}>{type}</Text>

        <Text style={styles.details}>{age}</Text>

        <View style={[styles.location, styles.details]}>
          <EvilIcons name="location" size={25.5} color="#adadad" />
          <Text style={styles.locationText} numberOfLines={1}>
            {location}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    height: 200,
    elevation: 8,
  },

  image: {
    height: 180,
    width: 130,
    borderRadius: 20,
  },

  petName: {
    color: "#4e15ab",
    fontSize: 25,
    fontWeight: "bold",
  },

  profileDetails: {
    justifyContent: "center",
    backgroundColor: "white",
    height: 140,
    width: 190,
    paddingBottom: 5,
    paddingLeft: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },

  details: {
    color: "#adadad",
    fontSize: 14,
  },

  location: {
    flexDirection: "row",
    paddingTop: 4,
    color: "#adadad",
    fontSize: 14,
    width: 120,
    margin:0,
    padding:0,
  },

  locationText: {
    color: "#adadad",
    fontSize: 14,
  },
});