import React, { useContext } from 'react';
import { SentMessage } from '../components/sentmessage.component';
import { ReceivedMessage } from '../components/receivedmessage.component';
import { FlatList, View } from 'react-native';
import { ChatContext } from '../chats/chats.context';

export const ChatFeature = () => {
    var index = 1;

    const { chats } = useContext(ChatContext);
    const renderItem = ({ item }) => {
        index++;
        if (item.fromUser == true) {
            return <SentMessage message={item.text} />
        }
        return <ReceivedMessage message={item.text} />
    }

    return (
        <View flex center style={{ backgroundColor: 'black' }}>
            <FlatList
                inverted
                data={chats}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`} />
        </View>
    )
}