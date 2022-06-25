import { useStore, actions } from './store'

function App() {

    const [state, dispatch] = useStore()

    const { todos, todoInput } = state


    return (
        <div style={{ padding: 20 }}>
            <input
                value={state.todoInput}
                placeholder="Enter job..."
                onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
            />
            <button
                onClick={() => dispatch(actions.addTodoInput(todoInput))}
            >Add!</button>

            <ul>
                {
                    todos.map((todo, index) => <li key={index}>{todo}</li>)
                }
            </ul>
        </div>
    )
}

export default App