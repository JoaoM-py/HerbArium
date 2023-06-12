import React, { useEffect, useState, useRef } from "react";
import {
  Text,
  Image,
  View,
  Alert,
  TouchableOpacity,
  Modal,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import waterdrop from "../../assets/waterdrop.png";
import userImg from "../../assets/EU.jpeg";
import cameraIcon from "../../assets/Camera.png";
import { styles } from "./styles";
import { Camera, CameraType } from "expo-camera";


export function Header() {
  const [userName, setUserName] = useState<string>();
  const camRef = useRef<any>(null);
  const [type, setType] = useState(CameraType.front);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [visible, setVisible] = useState(false);
  const [photo, setPhoto] = useState();

  


  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem("@plantmanager:user");
      setUserName(user || "");
    }

    loadStorageUserName();
  }, []);

  useEffect(() => {
    requestPermission();
  }, []);

  if (!permission?.granted) {
    console.log("negada");
  }
  if (permission?.granted) {
    console.log("OK");
  }

  async function openCamera() {
    setVisible(true)
  }


  async function handleTakePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setPhoto(data.uri)
      setVisible(false)
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>

        {photo ? (<Image source={{uri: photo}} style={styles.image}/>) : (
            <View>
              <TouchableOpacity onPress={openCamera}>
              <Image source={cameraIcon}/>
            </TouchableOpacity>
            </View>
        )}



        <Modal visible={visible}>
          <Camera style={{ flex: 1 }} type={type} ref={camRef}></Camera>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={handleTakePicture}
            >
              <Image source={cameraIcon} />

              
            </TouchableOpacity>
          </View>

        </Modal>
    </View>
  );
}
