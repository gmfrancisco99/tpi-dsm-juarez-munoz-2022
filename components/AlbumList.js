import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import { FlatList } from 'react-native-gesture-handler';



const AlbumList = (props) => {
  const [photoset, setPhotoset] = useState(null);

  useEffect(() => {
    const getPhotos = async () => {
      let response;
      try {
        response = await axios.get(
          'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=137290658%40N08&format=json&nojsoncallback=1'
        );
        setPhotoset(response.data.photosets.photoset)
      } catch (err) {
        console.log(err);
      }
    }
    getPhotos();
  }, []);

  const renderAlbums = ({ item }) => {
    return (
      <AlbumDetail
        navigation={props.navigation}
        key={item.id}
        title={item.title._content}
        albumId={item.id}
      />
    )
  }


  return (
    (!photoset ?
      <Text>Loading...</Text>
      :
      <View style={{ flex: 1, backgroundColor: '#edfbf3' }}>
        <FlatList
          data={photoset}
          renderItem={renderAlbums}
          keyExtractor={item => item.id}
        />
      </View>
    )
  )

}
export default AlbumList;
