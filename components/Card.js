import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1/3,
    backgroundColor: 'black',
    borderColor: '#ddd',
    borderBottomWidth: 6,
  }
};

export default Card;
