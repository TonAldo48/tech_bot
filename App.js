import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';
import { Text, View } from 'react-native-ui-lib';
import { SentMessage } from './src/components/sentmessage.component';
import { ReceivedMessage } from './src/components/receivedmessage.component';
import { Conversations } from './src/data/conversations.data';

export default function App() {

  var index = 1;
  const renderItem = ({ item }) => {
    index++;
    if (item.isNew == false) {
      return <SentMessage message={item.text} />
    }
    return <ReceivedMessage message={item.text} />
  }

  const [message, setMessage] = useState('');


  useEffect(() => {
    console.log(message);
  }, [message])

  const btnHandler = (message) => {
    var kMessage = message;
    console.log('button pressed')
    console.log(kMessage)
  }

  return (
    <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1, backgroundColor: 'black' }}
      >
        <View center spread row centerV style={{ height: 50, backgroundColor: 'rgb(20,20,20)' }}>
          <Text white text40>TECHBOT</Text>
        </View>
        <View flex center style={{ backgroundColor: 'black' }}>
          <FlatList
            inverted
            data={Conversations}
            renderItem={renderItem}
            keyExtractor={item => `${item.text} + ${1}`} />
        </View>
        <View center bg-black spread row centerV style={{ height: 50 }}>
          <TextInput
            keyboardAppearance='dark'
            style={{
              height: 40,
              fontSize: 20,
              flex: 1,
              marginLeft: 10,
              paddingLeft: 10,
              borderRadius: 15,
              backgroundColor: 'white',
            }}
            activeUnderlineColor='black'
            selectionColor='blue'
            defaultValue={message}
            onChangeText={(text) => { setMessage(text) }}
          />
          <TouchableOpacity>
            <FontAwesome
              name={'send'}
              size={30}
              compact={true}
              borderRadius={50}
              style={{ color: 'white', borderRadius: 20, margin: 5 }}
              onPress={() => { btnHandler(message); }}
            />
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    </SafeAreaView >
  );
}
