import React from "react";

function Header(props) {
  return (
    <div className="d-flex align-items-center justify-content-between mb-5">
      {" "}
      <span className="d-flex align-items-center">
        <button
          type="button"
          className="btn btn-link mr-4 p-0 d-block d-lg-none"
          data-action="back_to_clients"
        >
          <span className="sr-only">Back</span>
          <span aria-hidden="true">
            <i className="icon-arrow-left3"></i>
          </span>
        </button>
        <h1 className="heading m-0">
          <strong>
            <span className="sr-only">Chat with</span>{" "}
            <span data-name>Charles Atlas</span>
          </strong>
        </h1>
      </span>
      <button
        type="button"
        className="btn btn-secondary rounded-pill"
        data-action="view_client"
      >
        <span className=""></span>
        <i className="icon-person-fill" aria-hidden="true"></i>
        Profile
      </button>
    </div>
  );
}

export default Header;
