import React from "react";

function OutgoingMsg(props) {
  return (
    <div className="outgoing_msg">
      <div className="sent_msg">
        <p>And the coach said this</p>
        <span className="time_date"> 11:01 AM | Today</span>{" "}
      </div>
    </div>
  );
}

export default OutgoingMsg;
