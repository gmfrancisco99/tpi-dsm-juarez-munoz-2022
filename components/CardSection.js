import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    // borderBottomWidth: 1,
    // padding: 5,
    // backgroundColor: '#69dc9e',
     justifyContent: 'center',
    // alignItems: 'center',
      flexDirection: 'column',
    // borderColor: '#ddd',
    // position: 'relative'
    width: 200,
    heigth: 10
  }
};

export default CardSection;
