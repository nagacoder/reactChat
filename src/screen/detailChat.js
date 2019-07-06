import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import ChatSection from "../component/chatSection";

const DetailChat = () => {
  const [message, setMessage] = React.useState([
    { type: "receiver", text: "Hi man" }
  ]);
  const [text, setText] = React.useState("");

  function onSendMessage() {
    let newMessage = {
      type: "sender",
      text: text
    };
    setMessage([...message, newMessage]);
  }
  return (
    <View
      style={{
        flex: 1
      }}
    >
      {message.map((item, index) => {
        return <ChatSection key={index} type={item.type} message={item.text} />;
      })}

      <View
        style={{
          position: "absolute",
          height: 50,
          bottom: 40,
          width: "100%",
          paddingHorizontal: 10,
          flexDirection: "row"
        }}
      >
        <View
          style={{
            flex: 5,
            borderRadius: 10,
            paddingVertical: 8,
            paddingHorizontal: 6,
            borderColor: "grey",
            justifyContent: "center",
            borderWidth: 0.4
          }}
        >
          <TextInput onChangeText={e => setText(e)} placeholder="Type here.." />
        </View>
        <TouchableOpacity
          onPress={() => onSendMessage()}
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailChat;
