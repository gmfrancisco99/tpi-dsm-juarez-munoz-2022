import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import Colors from './Colors';

const AlbumDetail = ({ navigation, title, albumId }) => {
  const {
    cardStyle,
    headerContentStyle,
    headerTextStyle,
  } = styles;

  return (
    <Card style={cardStyle}>
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
  cardStyle: {
    margin: 5
  },
  headerContentStyle: {
    backgroundColor: Colors.white,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 15,
    color: '#0c0c0c',
  }
};

export default AlbumDetail;
