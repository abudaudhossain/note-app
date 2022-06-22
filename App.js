import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Create from './src/screens/create';
import Details from './src/screens/details';
import Edit from './src/screens/edit';
import Home from './src/screens/home';
import Signin from './src/screens/signin';
import SignUp from './src/screens/signup';



const Stack = createNativeStackNavigator();

export default function App() {
  const user = false; // authentication

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          user ? (<>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="create" component={Create} />
            <Stack.Screen name="edit" component={Edit} />
            <Stack.Screen name="details" component={Details} />
          </>) : (
            <>
              <Stack.Screen name="signup" component={SignUp} />
              <Stack.Screen name="signin" component={Signin} />
            </>
          )
        }


      </Stack.Navigator>
    </NavigationContainer >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
