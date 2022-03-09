import React from 'react'
import {
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import { BottomBar } from './src/components/bottombar.component';
import { TopBar } from './src/components/topbar.component';
import { ChatContextProvider } from './src/chats/chats.context';
import { ChatFeature } from './src/features/chats.feature';

export default function App() {

  return (
    <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
      <ChatContextProvider>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1, backgroundColor: 'black' }}
        >
          <TopBar />
          <ChatFeature />
          <BottomBar>

          </BottomBar>
        </KeyboardAvoidingView>
      </ChatContextProvider>
    </SafeAreaView >
  );
}
