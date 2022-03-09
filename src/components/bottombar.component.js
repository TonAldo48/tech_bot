import React, { useState, useContext, useEffect } from 'react';
import { View } from 'react-native-ui-lib';
import { TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';
import { ChatContext } from '../chats/chats.context';
import { AIRequst } from '../services/openai.service';

export const BottomBar = () => {

    const { addToChat } = useContext(ChatContext);

    const btnHandler = (message) => {
        var time = new Date();
        var utctime = new Date(time.toJSON()).toUTCString();

        const messageInfo = {
            id: Date.now(),
            text: message,
            time: utctime,
            fromUser: true,

        }
        console.log(AIRequst(messageInfo.text));
        console.log('api request done')
        addToChat(messageInfo);
        console.log(messageInfo);
        setMessage('');
    }

    const [message, setMessage] = useState('');

    return (
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
                defaultValue={'Ask a'}
                value={message}
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
    )
}