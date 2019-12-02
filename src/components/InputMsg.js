import React from "react";

function InputMsg() {
  return (
    <div className="type_msg">
      <div className="input_msg_write d-flex align-items-center justify-content-between">
        <button
          type="button"
          className="btn btn-sm btn-secondary mr-2"
          data-toggle="modal"
          data-target="#attachment_modal"
        >
          <i className="icon-attachment"></i>
          <span className="sr-only">Attachment</span>
        </button>
        <label className="sr-only" htmlFor="msg-input">
          Message input
        </label>
        <input
          id="msg-input"
          type="text"
          className="write_msg"
          placeholder="Type a message"
        />
        <button className="msg_send_btn" type="button">
          <i className="icon-send" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default InputMsg;
