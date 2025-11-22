# TechBot

TechBot is an Expo/React Native chat prototype that mocks a simple messaging UI and wires in the basic scaffolding for an AI-powered assistant. The app renders a top title bar, a scrollable chat history, and a bottom composer for sending new messages.

## Features
- **Chat layout** with a header, message list, and composer rendered inside a `SafeAreaView` with keyboard avoidance for mobile devices. The chat state is provided through React context so UI components can consume messages without prop drilling.
- **Persistent chat history** using `@react-native-async-storage/async-storage`, allowing conversations to be reloaded when the app restarts.
- **Message rendering** with separate components for sent and received bubbles, including simple arrow styling for each side of the conversation.
- **AI request hook-up (placeholder)**: the bottom bar triggers a request to the `AIRequst` function from `src/services/openai.service.js`, where you can configure a prompt and API key for OpenAI completions.

## Project structure
- `App.js` – sets up the chat layout, wrapping the UI in `ChatContextProvider` and composing the `TopBar`, `ChatFeature`, and `BottomBar` components.
- `src/chats/chats.context.js` – manages chat state and persistence via AsyncStorage.
- `src/features/chats.feature.js` – renders the chat list using a `FlatList`, delegating each item to sent/received message components.
- `src/components/` – reusable UI pieces including the top bar, bottom composer, and message bubble components.
- `src/data/conversations.data.js` – seed data for initial messages.
- `src/services/openai.service.js` – placeholder OpenAI completion call; update with your own API key and desired prompt/parameters.

## Getting started
1. **Install dependencies**
   ```bash
   yarn install
   ```

2. **Start the Expo dev server**
   ```bash
   yarn start
   ```

   You can also launch platform-specific previews with `yarn ios`, `yarn android`, or `yarn web` depending on your environment.

## Configuration
- **OpenAI API key**: Replace the placeholder key in `src/services/openai.service.js` with your own secret. For production use, load secrets from environment variables or a secure storage method instead of committing them in code.
- **AsyncStorage persistence**: Chat history is stored under the `@chat` key. Clearing this key (e.g., via device settings or `AsyncStorage.clear()`) will reset the conversation to the seeded messages.

## Notes and limitations
- The OpenAI service is currently a blocking example and is not fully integrated with the UI (responses are logged to the console). You can expand it by turning `AIRequst` into an async function that returns the completion text and then pushing that message into the chat context.
- The composer currently initializes with `defaultValue={'Ask a'}`; adjust placeholder behavior as needed for your UX.
