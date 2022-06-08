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
    borderRadius: 25,
    padding: 5,
    borderStyle: 'solid',
    flexdirection: 'row',
    justifyContent: 'flex-start',
    position: 'relative'
  }
};

export default CardSection;
