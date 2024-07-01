import { useSelector } from "react-redux";


export default function Listiteams({
  todos,
  handleDelete,
  handleCompleted,
  handleUpdate,
}) {
  const darktheme = useSelector((state) => state.darkmode);
  return (
    <div className="content">
      <div
        className="list"
        style={{
          padding: 0,
          margin: "0px -15px",
          border: `1px solid ${!darktheme ? "#1a1a1a" : "#bfbfbf"}`,
          borderRadius: "7px",
          overflow: "auto",
          maxHeight: "350px",
        }}
      >
        {todos.map((todo) => {
          return (
            <li key={todo.id} className="iteam-list">
              <p onClick={() => handleCompleted(todo.id)}>
                {todo.completed ? (
                  <svg
                    style={{ marginRight: "5px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check-square-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
                  </svg>
                ) : (
                  <svg
                    style={{ marginRight: "5px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                  </svg>
                )}
                <span
                  style={
                    todo.completed
                      ? {
                          textDecoration: "line-through",
                          opacity: 0.5,
                          cursor: "pointer",
                        }
                      : { textDecoration: "none", cursor: "pointer" }
                  }
                >
                  {todo.title}
                </span>
              </p>
              <a style={{ display: "flex" }}>
                <svg
                  onClick={() => handleUpdate(todo.id)}
                  style={{ cursor: "pointer" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                </svg>
                <svg
                  onClick={() => handleDelete(todo.id)}
                  style={{ cursor: "pointer", marginLeft: "5px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="#ff0000"
                  className="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                </svg>
              </a>
            </li>
          );
        })}
      </div>
    </div>
  );
}
