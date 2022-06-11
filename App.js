import 'react-native-gesture-handler';
import React from 'react';

import AlbumList from './components/AlbumList';
import PhotoList from './components/PhotoList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from './components/Colors';

const Stack = createStackNavigator();

// Create a component

// arreglada la definición de App, porque estaba mal definida cuando estaba escrita orientada a objetos.
function App() {
  const { headerStyle, headerTintColor, headerTitleStyle } = style;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="albumList"
          component={AlbumList}
          options={
            {
              title: 'Albums',
              headerStyle,
              headerTintColor,
              headerTitleStyle
            }
          }
        />
        <Stack.Screen
          name="photoList"
          component={PhotoList}
          options={
            {
              title: 'Photos',
              headerStyle,
              headerTintColor,
              headerTitleStyle
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = {
  headerStyle: {
    backgroundColor: Colors.sinopia
  },
  headerTintColor: Colors.mintcream,
  headerTitleStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
}
export default App;
