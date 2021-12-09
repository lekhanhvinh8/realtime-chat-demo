import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import ChatHubService from "./app/chatHubService";
import Messages from "./features/messages";

const chatHubService = new ChatHubService();

function App() {
  const dispatch = useDispatch();
  const [jwt, setJwt] = useState("");

  return (
    <div className="App">
      <div>
        token:
        <input
          value={jwt}
          onChange={(e) => {
            setJwt(e.currentTarget.value);
          }}
        />
        <button
          onClick={async () => {
            chatHubService.stopHubConnection();
            chatHubService.createHubConnection(jwt, dispatch);
          }}
        >
          Verify
        </button>
      </div>
      <Messages chatHubService={chatHubService} />
    </div>
  );
}

export default App;
