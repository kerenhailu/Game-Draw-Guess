import React from "react";
import "./App.css";
import { AppRouter } from "./AppRouter";
import { UsersContextProvider } from "./Context/User/User-context";

function App() {
  return (
      <UsersContextProvider>
        <AppRouter />
      </UsersContextProvider>
  );
}

export default App;
