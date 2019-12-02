import React from 'react'
function IncomingMsg(props) {
  return (
    <div className="incoming_msg">
      <div className="incoming_msg_img">
        <i
          className="mug mug-md mr-2"
          style={{
            backgroundImage: "url(//randomuser.me/api/portraits/men/13.jpg)"
          }}
        ></i>
      </div>
      <div className="received_msg">
        <div className="received_withd_msg">
          <p>This is the first thing the client said to their coach</p>
          <span className="time_date"> 11:01 AM | June 9</span>
        </div>
      </div>
    </div>
  );
}

export default IncomingMsg;
