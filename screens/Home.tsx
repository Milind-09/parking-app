import React from "react";
import { View, Text, TextInput, TouchableOpacity,StyleSheet } from "react-native";
import ParkingContext from "../context/ParkingContext";
import uuid from "react-native-uuid";

function Home({ navigation }: any) {
  let { input, setInput, setSpaceContainer }: any =
    React.useContext(ParkingContext);

  function parkingSpace() {
    for (let i = 0; i < input; i++) {
      setSpaceContainer((prev: string) => [...prev, uuid.v4()]);
    }
    setInput("");
    navigation.navigate("Parking");
  }
function parkingScreen(){
  navigation.navigate("Parking")
}
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter the number of spaces"
        textAlign="center"
        onChangeText={(text) => setInput(text)}
        value={input}
        keyboardType={"numeric"}
      />

      {input === "" ? (
        <TouchableOpacity style={styles.btnDsb} disabled={true}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.btn} onPress={parkingSpace}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.btn} onPress={parkingScreen}>
          <Text style={styles.btnText}>Parking Screen</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Home;

let styles = StyleSheet.create({
  btn:{
    backgroundColor:"#8accf8",
   paddingHorizontal:30,
   paddingVertical:10,
   width:110,
   margin:5,
   borderRadius:5,
   marginTop:10
  },
  btnText:{
    color:"white",
    
  },
  btnDsb:{
    backgroundColor:"#cdd0d2",
    paddingHorizontal:30,
    paddingVertical:10,
    width:110,
    margin:5,
    borderRadius:5
  },
  container:{
    flex:1,
    alignItems:"center",
    marginTop:100,
  }
})