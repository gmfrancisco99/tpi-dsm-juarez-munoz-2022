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
    backgroundColor:'white',  
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    paddingLeft: 16,
    paddingRight: 14,
    paddingTop: 15,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 30,
  }
};

export default Card;
