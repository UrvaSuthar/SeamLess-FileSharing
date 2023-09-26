import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'

const LogIn = () => {
  return (
    <View className={'flex justify-center items-center h-screen'}>
	<View className={'flex-col space-y-3 bg-blue-300 p-4 rounded-md'}>
		<Text
		className={'font-semibold text-lg font-sans '}
		>Login</Text>
		<TextInput 
		className={'w-60 bg-slate-100 p-2 rounded'}
		placeholder='Username'
		/>
		<TextInput 
		className={'w-60 bg-slate-100 p-2 rounded'}
		placeholder='Password'
		/>
		<TouchableOpacity
		className={'bg-yellow-200 w-20 items-center justify-center p-2 rounded ml-20'}
		activeOpacity={0.7}
		>
			<Text>Login</Text>
		</TouchableOpacity>
	</View>
    </View>
  )
}

export default LogIn
