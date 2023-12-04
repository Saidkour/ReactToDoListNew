export default function AddTasks({ newtask, setNewTask, handleAdd }) {
    return (
        <div className='row'>
            <label htmlFor="newiteam" style={{ textAlign:'center'}}>task</label>
            <input type="text" name="iteam" value={newtask} onChange={(e) => setNewTask(e.target.value)} placeholder='Write new task .........' id="newiteam" />
            <button type="button" onClick={handleAdd}>add</button>
        </div>
    )
}