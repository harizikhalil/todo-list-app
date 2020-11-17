import React from "react";
class Task extends React.Component {
  state = {
    isEdit: false,
  };

  updateTask = (e) => {
    //console.log(this.input)
    const{task,editTask}=this.props;
    e.preventDefault();
    editTask(task.id, this.input.value);
    this.handleUpdate();
  };
  handleUpdate = () => {
    let { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit,
    });
  };
  displayUpdateForm = () => {
    const { task } = this.props;
    return (
      <form onSubmit={this.updateTask}>
        <input
          type="text"
          className="input-update"
          ref={(v) => {
            this.input = v;
          }}
          defaultValue={task.task}
        />
        <button className="btn-update">Update task</button>
      </form>
    );
  };
 
  render() {
    const { task, removeTask,completeTask } = this.props;
    const { isEdit } = this.state;
    return isEdit ? (
      this.displayUpdateForm()
    ) : (
      <div className="list-tasks">
        <span className={task.isdone ? "done" : ""}>{task.task}</span>
        <div className="list-option">
        <i className="far fa-edit" onClick={this.handleUpdate}/>
        <i className="far fa-trash-alt" onClick={() => removeTask(task.id)}/>
        <i className="fas fa-check" style={task.isdone ? {color:"#32CD32"}:null} onClick={()=>completeTask(task.id)}></i>
        
        </div>
        
        
      </div>
    );
  }
}
export default Task;
