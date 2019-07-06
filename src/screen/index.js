import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../component/header";
import ChatView from "../component/chatView";
import DetailChat from "./detailChat";
export default function App() {
  const [pages, setPages] = React.useState("history");

  const handleChangesPages = pages => {
    switch (pages) {
      case "history":
        setPages("history");
        break;
      case "detailChat":
        setPages("detailChat");
        break;
      default:
        break;
    }
  };

  const Content = pages => {
    switch (pages) {
      case "history":
        return <ChatView handleChangesPages={handleChangesPages} />;
        break;
      case "detailChat":
        return <DetailChat />;
        break;
      default:
        return <ChatView />;
    }
  };

  return (
    <View
      style={{
        flex: 1
      }}
    >
      <Header />
      {Content(pages)}
    </View>
  );
}
