import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import chatbotApi from '../ChatBot/chatbotdata.json';
import COLORS from '../consts/color';

const Chatbot = ({navigation}) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const getResponse = (input) => {
    const { intents } = chatbotApi;
    for (const intent of intents) {
      for (const pattern of intent.patterns) {
        if (input.toLowerCase().includes(pattern.toLowerCase())) {
          return intent.responses[Math.floor(Math.random() * intent.responses.length)];
        }
      }
    }
    return intents[intents.length - 1].responses[Math.floor(Math.random() * intents[intents.length - 1].responses.length)];
  };

  const sendMessage = () => {
    const response = getResponse(input);
    setMessages([...messages, { text: input, sender: 'user' }, { text: response, sender: 'bot' }]);
    setInput('');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
      {messages.map((message, index) => (
        <View key={index} style={{ backgroundColor:message.sender === 'bot' ? '#eee' : '#164e63', borderRadius: 10, maxWidth: '80%', padding: 10, marginBottom: 10, alignSelf: message.sender === 'bot' ? 'flex-start' : 'flex-end' }}>
          <Text style={{ color: message.sender === 'bot' ? '#000' : '#fff' }}>{message.text}</Text>
        </View>
      ))}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{ flex: 1, backgroundColor: COLORS.grey, borderRadius: 10, padding: 10 }}
          value={input}
          onChangeText={setInput}
        />
        <Button
          
          title="Send"
          onPress={sendMessage}
        />
      </View>
    </View>
  );
};

export default Chatbot;