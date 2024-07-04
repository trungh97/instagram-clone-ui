import AuthProvider from "@providers/AuthProvider";
import { initializeApp } from "firebase/app";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { firebaseConfig } from "./firebase";
import AppRoutes from "./Routes";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import CloudinaryProvider from "@providers/CloudinaryProvider";

const App = () => {
  useEffect(() => {
    initializeApp(firebaseConfig);
  }, []);

  return (
    <Provider store={store}>
      <CloudinaryProvider>
        <AuthProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </AuthProvider>
      </CloudinaryProvider>
    </Provider>
  );
};

export default App;
