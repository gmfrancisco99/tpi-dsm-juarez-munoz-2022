import React from 'react';
import { View } from 'react-native';
import Colors from './Colors';

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 0,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 5,
    margin: 5, 
    flexDirection: 'column',
    justifyContent: 'center'
  }
};

export default CardSection;
