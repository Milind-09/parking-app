import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import ParkingContext from "../context/ParkingContext";

function Parking({ navigation }: any) {
  let {
    details,
    setDetails,
    spaceContainer,
    allocateSpace,
    setAllocateSpace,
    setParkId,
    setParkDetails,
  }: any = React.useContext(ParkingContext);

let time = new Date().toLocaleTimeString()


  function addDetails() {
    setDetails("");
    if (spaceContainer.length !== allocateSpace.length) {
      for (let i = 0; i < spaceContainer.length; i++) {
        let r = Math.floor(Math.random() * spaceContainer.length);

        if (!allocateSpace.includes(spaceContainer[r])) {
          setAllocateSpace((prev: string) => [...prev, spaceContainer[r]]);
          setParkDetails((prev: string) => [
            ...prev,
            { id: spaceContainer[r], d: details,t:time },
          ]);
          break;
        }
      }
    } else {
      ToastAndroid.show(" Parking Space is full !", ToastAndroid.SHORT);
    }
  }

  function parkingDetails(id: Number) {
    navigation.navigate("Details");
    setParkId(id);
  }

  function goBack() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <TextInput
      textAlign="center"
        placeholder="Enter car details"
        onChangeText={(text) => setDetails(text)}
        value={details}
      />

      {details === "" ? (
        <TouchableOpacity style={styles.btnDsb} disabled={true}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.btn} onPress={addDetails}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.btn} onPress={goBack}>
        <Text style={styles.btnText}>Go Back</Text>
      </TouchableOpacity>

      <FlatList
        numColumns={3}
        data={spaceContainer}
        renderItem={({ item, index }) => {
          return (
            <View key={item}>
              <TouchableOpacity onPress={() => parkingDetails(index)}>
                <View
                  style={[
                    styles.space,
                    allocateSpace.includes(item)
                      ? { backgroundColor: "#049bff" }
                      : null,
                  ]}
                >
                  <Text>{index}</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

export default Parking;
let styles = StyleSheet.create({
  space: {
    height: 100,
    width: 70,
    borderColor: "#049bff",
    margin: 5,
    borderWidth: 2,
    borderRadius:10,
    marginTop:10
  },
  btn: {
    backgroundColor: "#8accf8",
    paddingVertical: 10,
    width: 110,
    margin: 5,
    borderRadius: 5,
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
    marginTop: 10,
  },
});
