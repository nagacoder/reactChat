import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const ChatView = ({ handleChangesPages }) => {
  return (
    <TouchableOpacity
      onPress={() => handleChangesPages("detailChat")}
      style={{
        width: "100%",
        height: 80,
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 10,
        borderBottomWidth: 0.5,
        flexDirection: "row"
      }}
    >
      <View
        style={{
          flex: 2,
          justifyContent: "center"
        }}
      >
        <View
          style={{
            width: 60,
            height: 60
          }}
        >
          <Image
            style={{
              width: null,
              height: null,
              flex: 1,
              borderRadius: 30
            }}
            source={{
              uri:
                "https://images.unsplash.com/photo-1562262199-f6b3dfb3ec43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 4,
          justifyContent: "center"
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600"
          }}
        >
          Jorge
        </Text>
        <Text>Hi Man</Text>
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: "center"
        }}
      >
        <Text>13:12 PM</Text>
      </View>
    </TouchableOpacity>
  );
};
export default ChatView;
