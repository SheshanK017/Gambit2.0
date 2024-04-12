import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback
} from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot
} from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth, firestore,storage} from '../config/firebase.js';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import TopTabBar from './TopTabBar.js';
import { View } from 'react-native-web';
// import colors from '../colors';
import * as ImagePicker from 'expo-image-picker';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();
  const [timerValue, setTimerValue] = useState(null); // For managing timer state (optional)
  const [coinsLeft, setCoinsLeft] = useState(null);

  const onSignOut = () => {
    signOut(auth).catch(error => console.log('Error logging out: ', error));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{
            marginRight: 10
          }}
          onPress={onSignOut}
        >
          <AntDesign name="logout" size={24} color={colors.gray} style={{marginRight: 10}}/>
        </TouchableOpacity>
      )
    });
  }, [navigation]);

  useEffect(() => {
    const collectionRef = collection(firestore, 'chats');
    const q = query(collectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, querySnapshot => {
      console.log('querySnapshot unsusbscribe');
      setMessages(
        querySnapshot.docs.map(doc => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user
        }))
      );
    });
    return unsubscribe;
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages)
    );
    // setMessages([...messages, ...messages]);
    const { _id, createdAt, text, user } = messages[0];    
    addDoc(collection(firestore, 'chats'), {
      _id,
      createdAt,
      text,
      user
    });
  }, []);

 const uploadImageToFirebase = async (uri) => {
  const response = await fetch(uri);
  const blob = await response.blob();
  const imageName = `images/${Date.now()}`;

  const ref = firebase.storage().ref().child(imageName);
  await ref.put(blob);

  return ref.getDownloadURL();
};

const pickImage = async () => {
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status !== 'granted') {
    console.log('Permission denied!');
    return;
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.cancelled) {
    const imageUrl = await uploadImageToFirebase(result.uri);
    console.log('Image uploaded to Firebase:', imageUrl);
    // You can save the imageUrl to your database or use it as needed
  }
};


return (
  <View style={{ flex: 1 }}>
    <TopTabBar
      navigation={navigation}
      timerValue={timerValue} // Pass timer value if available
      coinsLeft={coinsLeft} // Pass coins left if available
    />
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={false}
      showUserAvatar={false}
      onSend={messages => onSend(messages)}
      messagesContainerStyle={{
        backgroundColor: '#0B1D39'
      }}
      textInputStyle={{
        backgroundColor: 'white',
        borderRadius: 20,
      }}
      user={{
        _id: auth?.currentUser?.email,
        avatar: 'https://i.pravatar.cc/300'
      }}
    />
    <TouchableOpacity onPress={pickImage}>
      <Text>UPLOAD</Text>
    </TouchableOpacity>
  </View>
);

}