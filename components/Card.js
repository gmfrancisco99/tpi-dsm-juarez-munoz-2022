import React from 'react';
import { View } from 'react-native';
import Colors from './Colors';

const Card = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: Colors.white,  
    borderRadius: 5,
    borderWidth: 2,
    borderColor: Colors.crayola,
    elevation: 8,
    // paddingLeft: 16,
    // paddingRight: 14,
    // paddingTop: 15
  }
};

export default Card;
