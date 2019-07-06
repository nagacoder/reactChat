import React from "react";
import { View, Text, Image } from "react-native";

const ChatSection = ({ type,message }) => {
  return (
    <View
      style={{
        flexDirection: "row"
      }}
    >
      {type !== "sender" && (
        <View
          style={{
            flex: 1,
            marginLeft: 10,
            marginTop: 10,
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
      )}
      <View
        style={{
          flex: 4,
          paddingVertical: 5,
          paddingHorizontal: 5,
          justifyContent: "center"
        }}
      >
        <View
          style={{
            backgroundColor: "skyblue",
            paddingVertical: 10,
            paddingHorizontal: 8,
            borderRadius: 40
          }}
        >
          <Text>{message}</Text>
        </View>
      </View>
      {type === "sender" && (
        <View
          style={{
            flex: 1,
            marginLeft: 10,
            marginTop: 10,
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
      )}
    </View>
  );
};

export default ChatSection;
