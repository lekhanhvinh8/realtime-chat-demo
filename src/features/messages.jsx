import { useState } from "react";
import { useSelector } from "react-redux";

function Messages({ chatHubService }) {
  const messageHubs = useSelector((state) => state.message.messageHubs);
  const [recentMessage, setRecentMessage] = useState("");

  return (
    <div style={{ marginTop: 10 }}>
      <div>
        {messageHubs.map((hub) => {
          return (
            <div key={hub.id} style={{ marginTop: 10 }}>
              <div>
                {hub.messages.map((message) => {
                  return (
                    <div key={message.id}>
                      {message.senderUserName + ": " + message.content}
                    </div>
                  );
                })}
              </div>
              <div>
                <input
                  value={recentMessage}
                  onChange={(e) => {
                    setRecentMessage(e.currentTarget.value);
                  }}
                />
                <button
                  onClick={async () => {
                    await chatHubService.sendMessage(
                      hub.receiverId,
                      recentMessage
                    );
                    setRecentMessage("");
                  }}
                >
                  {"send to " + hub.receiverUserName}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Messages;
