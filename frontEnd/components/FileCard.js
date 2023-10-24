import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  DocumentIcon,
  EllipsisHorizontalIcon,
} from "react-native-heroicons/outline";

const FileCard = ({ fileName }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      className={
        "mx-3 my-2 items-center space-x-2 flex-row bg-white p-2 py-3 rounded-md shadow"
      }
    >
      <DocumentIcon color={"gray"} size={30} />
      <Text className={"text-lg"}>{fileName}</Text>
      <View className={"flex-row flex-1 justify-end"}>
        <TouchableOpacity
          onPress={() => {
            alert("hello");
          }}
        >
          <EllipsisHorizontalIcon size={30} color={"gray"} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default FileCard;
