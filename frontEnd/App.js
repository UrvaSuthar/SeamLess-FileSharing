import React, { useEffect, useState } from 'react';
import { View, Button, Platform, SafeAreaView, StyleSheet, Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';
import FileTransferComponent from './components/FileTransferComponent';
import LogIn from './Screens/LogIn';

const App = () => {
  const macAddress = '00:11:22:33:44:55'; // Replace with the actual MAC address
  const directoryName = 'MyDirectory';
  const serverURL = 'http://192.168.0.107:3000'; // Updated with your server IP

  const [lastChecked, setLastChecked] = useState(0);

  const createAndSyncDirectory = async () => {
    try {
      // Check if the directory exists, if not, create it
      let directoryPath;
      if (Platform.OS === 'ios') {
        directoryPath = `${FileSystem.documentDirectory}${directoryName}/`;
      } else {
        directoryPath = `${FileSystem.documentDirectory}${directoryName}/`;
      }

      const directoryInfo = await FileSystem.getInfoAsync(directoryPath);

      if (!directoryInfo.exists) {
        await FileSystem.makeDirectoryAsync(directoryPath, { intermediates: true });
        console.log('Directory created:', directoryPath);
      }

      // Sync all files in the directory to the server
      const files = await FileSystem.readDirectoryAsync(directoryPath);
      for (const file of files) {
        const fileContent = await FileSystem.readAsStringAsync(
          `${directoryPath}${file}`
        );
        await syncFileToServer(macAddress, file, fileContent);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const syncFileToServer = async (macAddress, filename, fileContent) => {
    try {
      const response = await fetch(`${serverURL}/sync`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          macAddress,
          filename,
          fileContent,
        }),
      });

      if (response.ok) {
        console.log(`File ${filename} synced successfully`);
      } else {
        console.error(`File ${filename} sync failed`);
      }
    } catch (error) {
      console.error('Network request failed:', error);
    }
  };

  const handleExportFiles = async () => {
    try {
      const directoryPath = `${FileSystem.documentDirectory}${directoryName}/`;
      const files = await FileSystem.readDirectoryAsync(directoryPath);

      // Alert with file names for demonstration
      Alert.alert(
        'Files for Export',
        files.join(', '),
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
    } catch (error) {
      console.error('Error exporting files:', error);
    }
  };

  useEffect(() => {
    createAndSyncDirectory();

    // Check for changes every 5 seconds
    const interval = setInterval(async () => {
      try {
        const directoryPath = `${FileSystem.documentDirectory}${directoryName}/`;
        const files = await FileSystem.readDirectoryAsync(directoryPath);

        // Perform sync logic if a file has been modified or a new file has been added
        if (files.length > 0) {
          for (const file of files) {
            const fileStats = await FileSystem.getInfoAsync(
              `${directoryPath}${file}`
            );

            // Check if the file was modified or added since the last check
            if (fileStats.modificationTime > lastChecked) {
              const fileContent = await FileSystem.readAsStringAsync(
                `${directoryPath}${file}`
              );

              await syncFileToServer(macAddress, file, fileContent);
            }
          }
        }

        // Update the last checked time
        setLastChecked(Date.now());
      } catch (error) {
        console.error('Error:', error);
      }
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [lastChecked]); // Run when component mounts and when lastChecked changes

  return (
    <SafeAreaView style={styles.container}>
      {/* <View>
        <Button title="Sync Directory" onPress={createAndSyncDirectory} />
        <Button title="Export Files" onPress={handleExportFiles} />
        <FileTransferComponent/>
      </View> */}
      <LogIn/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
