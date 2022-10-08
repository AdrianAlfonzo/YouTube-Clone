import { Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Cabecera = () => {
    const navigation = useNavigation();
    return (
        <View>
            <View className='h-14 w-full flex flex-row justify-between px-4'>
                <View className='flex flex-row justify-start items-center'>
                    <Entypo name="youtube" size={32} color="red" />
                    <Text className='ml-2 text-lg font-semibold'>YouTube</Text>
                </View>
                <View className='flex flex-row justify-center items-center'>
                    <View className='mr-8'>
                        <MaterialIcons name="video-call" size={32} color="#7f7f7f" />
                    </View>
                    <View className='mr-8'>
                        <FontAwesome name="search" size={24} color="#7f7f7f" onPress={() => navigation.navigate("search")} />
                    </View>
                    <View>
                        <FontAwesome name="user-circle" size={24} color="#7f7f7f" />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Cabecera

