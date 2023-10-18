import { View, Text, Image } from 'react-native'
import React from 'react'

const FileCard = () => {
  return (
    <View className={"h-20 w-20 bg-white flex items-center justify-center"}>
      <Image 
	source={{uri:''}}
      />
      <Text>FileCard</Text>
    </View>
  );
}

export default FileCard