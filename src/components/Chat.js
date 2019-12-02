import React from "react";
function Chat(props) {
  return (
    <section
      id="wall_Chat"
      className="p-md-5 p-3 bg-white width-limited"
      data-roll="engaged"
      style={{ overflow: "hidden", maxHeight: "calc(100vh - 4rem)" }}
    >
      {props.children}
    </section>
  );
}
export default Chat;
