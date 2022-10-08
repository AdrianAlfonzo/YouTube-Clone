import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';


const Tarjeta = (props: any) => {
    return (
        <View>
            <View className='flex flex-col mb-3'>
                <Image className='w-full h-44' source={{ uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg` }} />
                <View className='flex flex-row px-3 mt-3 mb-2 justify-between items-start'>
                    <View>
                        <FontAwesome name="user-circle" size={24} color="#7f7f7f" />
                    </View>
                    <View className='px-3'>
                        <Text className='text-xs font-bold'>{props.title}l</Text>
                    </View>
                    <View>
                        <SimpleLineIcons name="options-vertical" size={15} color="#7f7f7f" />
                    </View>
                </View>
                <View className='ml-12'>
                    <Text className='font-light text-xs'>{props.channel}</Text>
                </View>
            </View>
        </View>
    )
}

export default Tarjeta

