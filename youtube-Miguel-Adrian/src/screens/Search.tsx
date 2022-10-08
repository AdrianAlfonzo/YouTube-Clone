import { View, TextInput, FlatList, ActivityIndicator } from 'react-native'
import React, {useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import TarjetaBusqueda from '../components/SearchCard';
import {useSelector, useDispatch} from 'react-redux';

const Busqueda = ({navigation}) => {
    const [value, setValue] = useState("");
    //const [searchCard, setSearchCard] = useState([]);
    const dispatch = useDispatch();
    const searchCard = useSelector(state => {
        return state
    });

    const [loading, setLoading] = useState(false);
    const fetchData = () => {
        setLoading(true)
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${value}&type=video&key=AIzaSyDlm0w8J8TC15KdR-_MjQaQezeiEJiDBQo`)
        .then(res => res.json())
        .then(data =>{
            setLoading(false)
            dispatch({type: 'add', payload: data.items})
            //setSearchCard(data.items)

        });
    }
  return (
    <>
    <View className='flex flex-1'>
        <View className='flex flex-row justify-between items-center p-3'>
            <Ionicons name="arrow-back" size={24} color="black" onPress={()=>navigation.goBack()} />
            <TextInput className='w-72 bg-gray-200' value= {value}  onChangeText={(text)=> setValue(text)}></TextInput>
            <Ionicons onPress={() => fetchData()} name="md-send" size={24} color="black" />
        </View>
        {loading ? <ActivityIndicator className='mt-2' size='large' color='red'/>:null}
        <FlatList
            data={searchCard}
            renderItem={({item}) => {
                return <TarjetaBusqueda
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
                />
            }}
            keyExtractor={item => item.id.videoId}
        />
    </View>
    </>
  )
}

export default Busqueda

