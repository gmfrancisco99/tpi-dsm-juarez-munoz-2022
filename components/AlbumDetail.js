import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ navigation, title, albumId }) => {
  const {
    headerContentStyle,
    headerTextStyle,
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Button
          onPress={() => navigation.navigate('photoList', { albumId: albumId })}>
          See Now!
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    // flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#000000' //negro
  },
  headerTextStyle: {
    fontSize: 18,
    color: '#dc143c'
  }
};

export default AlbumDetail;
