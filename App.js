import React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import  store ,{persistor } from "./src/store/configStore";
import Navigation from "./src/components/Navigation";
import { ActivityIndicator } from "react-native";

function App() {
  return(
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator color="orange" size={200} style={{flex:1}}/>} persistor={persistor}>
        <Navigation/>
      </PersistGate>
    </Provider>
  )
}

export default App;
