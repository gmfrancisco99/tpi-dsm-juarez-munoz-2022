import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Colors from './Colors';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    fontSize: 15,
    color: Colors.aquamarine,
  },
  buttonStyle: {
    backgroundColor: Colors.mintcream,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.aquamarine,
    elevation: 3
  }
};

export default Button;
