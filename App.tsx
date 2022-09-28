import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './screens/Details';
import ParkingState from './context/ParkingState';
import Home from './screens/Home';
import Parking from './screens/Parking'
const Stack = createNativeStackNavigator();
function App() {
  return (
    <ParkingState>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Parking" component={Parking} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </ParkingState>
  );
}

export default App;
