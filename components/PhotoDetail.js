import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import Colors from './Colors';

const PhotoDetail = ({ title, imageUrl }) => {
  const {
    cardStyle,
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
  } = styles;

  return (
    <Card style={cardStyle}>
      <CardSection style={{flexDirection: 'row', flex: 1}}> 
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: imageUrl }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
        </View>
      </CardSection>

      <CardSection style={{flex: 5}}>
        <Image style={imageStyle} source={{ uri: imageUrl }} />
      </CardSection>

      <CardSection style={{flex:1}}>
        <Button  onPress={() => Linking.openURL(imageUrl)}>
          <Text> See Now!</Text>
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  cardStyle: {
    height: '100%',
    width: '30%',
    marginTop: 5
  },
  headerContentStyle: {
    flexDirection: 'row',
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  headerTextStyle: {
    fontSize: 15,
    color: Colors.richBlack //violeta
  },
  thumbnailStyle: {
    height: '100%',
    width: '100%'
  },
  thumbnailContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  imageStyle: {
    height: 180,
    width: '100%',
  },
};

export default PhotoDetail;
