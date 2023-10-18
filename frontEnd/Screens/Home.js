import { View, Text, TextInput, ScrollView } from "react-native";
import React from "react";
import { Bars3Icon, MagnifyingGlassIcon } from "react-native-heroicons/solid";
import FileCard from "../components/FileCard";

const Home = () => {
  return (
    <View className={"flex-1"}>
      {/* header */}
      <View
        className={
          "bg-blue-700 pt-14 pb-3 space-y-4 shadow-md shadow-blue-700/40"
        }
      >
        <View className={"ml-2 space-x-3 flex-row items-center"}>
          <Bars3Icon color={"white"} size={38} />
          <Text className={"text-white font-bold text-xl"}>Home</Text>
        </View>
        <View
          className={
            "bg-white flex-row items-center mx-3 px-2 rounded-md shadow-sm shadow-white/40"
          }
        >
          <MagnifyingGlassIcon color={"gray"} size={24} />
          <TextInput
            placeholder="Search"
            className={" w-full h-12 pb-3 pl-2 mt-1 text-lg "}
          ></TextInput>
        </View>


      </View>

      {/* body */}
<FileCard/>
      <ScrollView>
        <FileCard/>
      </ScrollView>
    </View>
  );
};

export default Home;
