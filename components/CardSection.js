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
    alignItems: 'center',
    borderRadius: 25,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

export default CardSection;
