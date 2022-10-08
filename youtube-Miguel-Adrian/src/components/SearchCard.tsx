import { Text, View, Image } from 'react-native'

const TarjetaBusqueda = (props: any) => {
  return (
    <View className='px-5 mb-3'>
    <View className='flex flex-row w-auto justify-start items-center'>
      <Image className='w-44 h-32' source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}/>
      <View className='flex flex-col w-1/2 h-full ml-3'>
        <View className='w-auto mb-2'>
            <Text className='text-sm'>{props.title}</Text>
        </View>
        <View className='w-auto'>
            <Text className='text-sm text-gray-500'>{props.channel}</Text>
        </View>
      </View>
    </View>
    </View>
  )
}

export default TarjetaBusqueda

