import { useContext, useRef } from "react"
import { themeDark } from "./App"
import './index.css'

export default function AddTasks({ handleAdd }) {
    const taskField = useRef();
    const darktheme = useContext(themeDark);
    const styledark = {
        backgroundColor: darktheme ? '#242424' : '#fff',
        color: !darktheme ? '#242424' : '#fff'
    }
    const styles = {
        label: {
            ...styledark,
            textAlign: "center"
        },
        input: {
            backgroundColor: darktheme ? '#242424' : '#fff',
            color: !darktheme ? '#242424' : '#fff',
            border: `1px solid ${!darktheme ? '#1a1a1a' : '#bfbfbf'}`,
            borderRadius: "6px",
            padding: '7px 10px',
            marginTop: "5px",
            marginBottom: "11px",
            outline: "none",
            fontSize: "18px"
        },
        button: {
            backgroundColor: darktheme ? '#1a1a1a' : '#bfbfbf',
            color: !darktheme ? '#242424' : '#fff',
            borderRadius: "8px",
            border: "1px solid transparent",
            padding: "0.6em 1.2em",
            fontSize: "1em",
            fontWeight: " 500",
            fontFamily: "inherit",
            cursor: "pointer"
        }
    }
    return (
        <div className='row' style={styledark} >
            <label htmlFor="newiteam" style={styles.label}>task</label>
            <input type="text" style={styles.input} placeholder="Write new task ........." ref={taskField} id="newiteam" />
            <button className="btn" type="submit" style={styles.button} onClick={() => handleAdd(taskField.current)}>add</button>
        </div>
    )
}