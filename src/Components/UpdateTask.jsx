import {  useRef } from "react";

import { useSelector } from "react-redux";

export default function UpdateTask({ handleUpdateitem, valUpdate }) {
  const taskField = useRef();
  const darktheme = useSelector((state) => state.darkmode);
  const styledark = {
    backgroundColor: darktheme ? "#242424" : "#fff",
    color: !darktheme ? "#242424" : "#fff",
  };
  const styles = {
    label: {
      ...styledark,
      textAlign: "center",
    },
    input: {
      backgroundColor: darktheme ? "#242424" : "#fff",
      color: !darktheme ? "#242424" : "#fff",
      border: `1px solid ${!darktheme ? "#1a1a1a" : "#bfbfbf"}`,
      borderRadius: "6px",
      padding: "7px 10px",
      marginTop: "5px",
      marginBottom: "11px",
      outline: "none",
      fontSize: "18px",
    },
    button: {
      backgroundColor: darktheme ? "#1a1a1a" : "#bfbfbf",
      color: !darktheme ? "#242424" : "#fff",
      borderRadius: "8px",
      border: "1px solid transparent",
      padding: "0.6em 1.2em",
      fontSize: "1em",
      fontWeight: " 500",
      fontFamily: "inherit",
      cursor: "pointer",
      transition: "all .25s",
    },
  };
  return (
    <div className="row" style={styledark}>
      <label htmlFor="iteam" style={styles.label}>
        Update Task
      </label>
      <input
        type="text"
        style={styles.input}
        defaultValue={valUpdate.val}
        ref={taskField}
        id="iteam"
      />
      <button
        type="submit"
        style={styles.button}
        onClick={() => handleUpdateitem(taskField.current)}
      >
        Update
      </button>
    </div>
  );
}
