import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
  StyleSheet,
} from "react-native";
import axios from "axios";
import ParkingContext from "../context/ParkingContext";

function Details({ navigation }: any) {
  let { parkId, parkDetails, spaceContainer, allocateSpace }: any =
    useContext(ParkingContext);

  let charges = 10;

  async function paymentTaken(item: any) {
    let res = await axios.post("https://httpstat.us/200", {
      carRegistration: parkDetails,
      charge: { charges },
    });
    console.log(res);

    navigation.navigate("Home");

    let index = allocateSpace.indexOf(item.id);
    allocateSpace.splice(index, 1);
    ToastAndroid.show("Payment Success!", ToastAndroid.SHORT);
  }

  function goBack() {
    navigation.navigate("Parking");
  }

  return (
    <View style={styles.container}>
      {allocateSpace.includes(spaceContainer[parkId]) ? (
        <View>
          <FlatList
            data={parkDetails}
            renderItem={({ item, index }) => {
              let time: any = new Date().toLocaleTimeString();
              if (time - item.t > 2) {
                charges = charges + 10;
                item.t = time
              }
              return (
                <View key={index}>
                  {spaceContainer[parkId] === item.id && (
                    <View>
                      <Text>Registration Details : {item.d}</Text>
                      <Text>Parking ID : {parkId}</Text>
                      <Text>Timing : {item.t}</Text>
                      <Text>Charges : {charges}$</Text>

                      <TouchableOpacity
                        style={styles.btn}
                        onPress={() => paymentTaken(item)}
                      >
                        <Text style={styles.btnText}>Pay</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.btn} onPress={goBack}>
                        <Text style={styles.btnText}>Go Back</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              );
            }}
          />
        </View>
      ) : (
        <View>
          <Text>Space Available</Text>
        </View>
      )}
    </View>
  );
}

export default Details;
let styles = StyleSheet.create({
  btn: {
    backgroundColor: "#8accf8",
    paddingVertical: 10,
    width: 110,
    margin: 5,
    borderRadius: 5,
    marginTop: 20,
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
  btnDsb: {
    backgroundColor: "#cdd0d2",
    paddingHorizontal: 30,
    paddingVertical: 10,
    width: 110,
    margin: 5,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
});
