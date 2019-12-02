import React, { Component } from "react";
import OutgoingMsg from "./components/OutgoingMsg.js";
import IncomingMsg from "./components/IncomingMsg.js";
import Chat from "./components/Chat.js";
import Header from "./components/Header.js";
import InputMsg from "./components/InputMsg.js";
import Msgs from "./components/MsgsWrapper.js";
class ChatBox extends Component {
  render() {
    const msgHistory = (
      <React.Fragment>
        <IncomingMsg />
        <OutgoingMsg />
        <IncomingMsg />
        <OutgoingMsg />
        <IncomingMsg />
        <OutgoingMsg />
        <IncomingMsg />
        <OutgoingMsg />
        <IncomingMsg />
        <OutgoingMsg />
      </React.Fragment>
    );

    const inputMsg = (
      <React.Fragment>
        <InputMsg />
      </React.Fragment>
    );

    return (
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="p-md-3">
            <Chat>
              <Header />
              <Msgs msgHistory={msgHistory} inputMsg={inputMsg} />
            </Chat>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatBox;
