import React from "react";
function MsgsWrapper(props) {
  return (
    <div className="mesgs">
      <div className="msg_history">{props.msgHistory}</div>
      {props.inputMsg}
    </div>
  );
}

export default MsgsWrapper;
