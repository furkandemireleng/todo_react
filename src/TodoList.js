import React, { Component } from 'react'

class TodoList extends Component {

    render() {
        return (
            <div id="content">
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.props.createTask(this.task.value)
                }}>
                    <input
                        id="newTask"
                        ref={(input) => {
                            this.task = input
                        }}
                        type="text"
                        className="form-control"
                        placeholder="Add task...2233"
                        required />
                    <input type="submit" hidden={true} />
                </form>
                <ul id="taskList" className="list-unstyled">
                    { this.props.tasks.map((task, key) => {
                        return(
                            <div className="checkbox" key={key}>
                                <label>
                                    <input
                                        type="checkbox"
                                        name={task.id}
                                        defaultChecked={task.completed}
                                        ref={(input) => {
                                            this.checkbox = input
                                        }}
                                        onClick={(event) => {
                                            this.props.toggleCompleted(this.checkbox.name) }}/>
                                    <span className="content">{task.content}</span>
                                </label>
                            </div>
                        )
                    })}
                </ul>
                <ul id="completedTaskList" className="list-unstyled">
                </ul>
            </div>
        );
    }
}

export default TodoList;
