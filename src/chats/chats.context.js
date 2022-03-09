import React, { createContext, useState, useEffect } from 'react';
import { Conversations } from '../data/conversations.data';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {

    const [chats, setChats] = useState(Conversations);

    const saveChat = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@chat', jsonValue)
        } catch (e) {
            console.log(e);
        }
    }

    const loadChat = async () => {
        try {
            const value = await AsyncStorage.getItem('@chat')
            if (value !== null) {
                setChats(JSON.parse(value));
            }
        } catch (e) {
            // error reading value
        }
    }

    const add = (cMessage) => {
        setChats([cMessage, ...chats]);
    };

    useEffect(() => {
        loadChat();
    }, []);

    useEffect(() => {
        saveChat(chats);
    }, [chats]);

    useEffect(() => {
        loadChat();
    }, []);

    useEffect(() => {
        saveChat(chats);
    }, [chats]);

    return (
        <ChatContext.Provider
            value={{
                chats,
                addToChat: add,
            }}
        >
            {children}
        </ChatContext.Provider>
    )
}