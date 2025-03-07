import React, { useState } from "react";
import classes from "./ContentPage.module.css";

const ContentPage = ({ contentImageRef }) => {
  const [message1, setMessage1] = useState("");
  const [message2_1, setMessage2_1] = useState("");
  const [message2_2, setMessage2_2] = useState("");

  const handleMessage1Change = (event) => {
    setMessage1(event.target.value);
  };

  const handleMessage2_1Change = (event) => {
    setMessage2_1(event.target.value);
  };

  return (
    <div className={classes["content-background"]}>
      <div className={classes["content-container"]} ref={contentImageRef}>
        <div
          className={classes["textbox1"]}
          contentEditable
          placeholder="내용을 입력해주세요"
          value={message1}
          onChange={handleMessage1Change}
        />
        <div className={classes["row1"]}>
          <div
            className={classes["textbox2"]}
            contentEditable
            placeholder="내용을 입력해주세요"
            value={message2_1}
            onChange={handleMessage2_1Change}
          />
          <div className={classes["textbox2"]} />
        </div>
        <div className={classes["row2"]}>
          <div
            contentEditable
            className={classes["textbox3"]}
            placeholder="내용을 입력해주세요"
          />
          <div className={classes["textbox3"]} />
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
