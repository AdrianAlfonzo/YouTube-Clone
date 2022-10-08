import { ScrollView, View, FlatList } from 'react-native'
import { useSelector } from 'react-redux';
import React from 'react'
import Cabecera from '../components/Header'
import Tarjeta from '../components/Card'

const Inico = ({ navigation }) => {
  const cardData = useSelector(state => {
    return state
  });
  return (
    <View className='flex flex-1'>
      <Cabecera/>
      <FlatList
      data={cardData}
      renderItem={({item}) => {
          return <Tarjeta
          videoId={item.id.videoId}
          title={item.snippet.title}
          channel={item.snippet.channelTitle}
          />
      }}
      keyExtractor={item => item.id.videoId}
      />
    </View>
  )
}

export default Inico
