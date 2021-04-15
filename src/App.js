import React from "react";
import "./App.css";
import PostList from "./components/PostList";
import logo3ap from './assets/3aplogo.png';
import world from './assets/world.png';

function App() {
  const createNotification = () => {
    Notification.requestPermission().then((result) => {
      if (result === "granted") {
        randomNotification();
      }
    });
  };

  const randomNotification = () => {
    const notifTitle = "3APedia 2021 - The best notification";
    const notifBody = `Created by LocalFranco.`;
    const notifImg = `../world.png`;
    const options = {
      body: notifBody,
      icon: notifImg,
    };
    new Notification(notifTitle, options);
  };

  return (
    <div className="App">
      <div className="logo">
        <img src={logo3ap} />
        <img src={world} />
      </div>
      <div className="frameworkless-app">
        <PostList />
        <button onClick={createNotification}>
          Click me for awesome notifications!
        </button>
      </div>
    </div>
  );
}

export default App;
