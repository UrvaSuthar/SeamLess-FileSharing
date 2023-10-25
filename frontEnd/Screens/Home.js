import {
  View,
  Text,
  TextInput,
  ScrollView,
  Modal,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import { React, useState } from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "react-native-heroicons/solid";
import FileCard from "../components/FileCard";
import * as DocumentPicker from "expo-document-picker";

const Home = () => {
  const files = [
    { name: "Index.html", id: 1 },
    { name: "Page.html", id: 2 },
    { name: "screen.html", id: 3 },
    { name: "test.txt", id: 4 },
    { name: "photo.jpg", id: 5 },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [isSelected, setSelected] = useState(true);
  const [file, setFile] = useState(null);

  _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    setFile(result.assets[0]);
    console.log(result.assets[0].name);
    console.log(result);
    setSelected(false);
  };

  return (
    <View className={"flex-1"}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View
            className={"w-full h-2/3 border border-gray-300"}
            style={styles.modalView}
          >
            <Text className={"text-3xl font-semibold"} style={styles.modalText}>
              Upload Files
            </Text>

            {/* main container */}
            <View>
              {/* Select File */}
              {isSelected ? (
                <>
                  {/* <View className={"flex-row items-center"}>
                    <Text className={"text-xl font-semibold"}>Select File</Text>
                    <Text className={"text-red-500"}>*</Text>
                  </View> */}
                  
                  <TouchableOpacity
                  className={'border border-dashed py-2 my-2'}
                  onPress={this._pickDocument}
                  >
                    <Text>Select File</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <Text className={"text-lg font-semibold"}>Selected File</Text>
                  <Text className={"text-base text-gray-900"}>
                    File Name : {file?.name}
                  </Text>
                  <Text className={"text-base text-gray-900"}>
                    File Size : {Math.floor(file?.size / 1024)} KB
                  </Text>
                  <TouchableOpacity

                  className={'bg-green-600/90 mt-4 mb-2 w-20 p-2 rounded-md'}
                  > 
                    <Text className={"text-white text-lg font-semibold"}>Upload</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>

            <Pressable
              // style={[styles.button, styles.buttonClose]}
              className={'border-2 border-red-500 p-2 rounded-md'}
              onPress={() => {
                setModalVisible(!modalVisible);
                // <------------change this while try to make upload function --------------->
                setFile(null);
                setSelected(true);
              }}
            >
              <Text className={'text-lg mx-2 text-red-500 font-semibold'}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* header */}

      <View
        className={
          "bg-blue-700 pt-14 pb-3 space-y-4 shadow-md shadow-blue-700/40"
        }
      >
        <View className={"mx-2 flex-row items-center justify-between"}>
          <View className={" space-x-3 flex-row items-center"}>
            <Bars3Icon color={"white"} size={38} />
            <Text className={"text-white font-bold text-xl"}>Home</Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.78}
            onPress={() => setModalVisible(true)}
            className={"mr-1"}
          >
            <PlusIcon color={"white"} size={30} />
          </TouchableOpacity>
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
      <ScrollView>
        {files.map((file) => (
          <FileCard key={file.id} fileName={file.name} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    // marginTop: 22,
  },
  modalView: {
    // margin: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 30,
    paddingLeft: 20,
    alignItems: "start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.55,
    shadowRadius: 10,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Home;
