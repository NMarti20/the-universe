import React from "react";
import "./_getDate.scss";

const GetDate = (props) => (
  <form className="form" onSubmit={props.updateDate}>
    <div className="form__container">
      <label className="form__label">Enter a date (YYYY-MM-DD) :</label>
      <input />
      <button className="form__button" type="submit">
        SUBMIT
      </button>
    </div>
  </form>
);

export default GetDate;
