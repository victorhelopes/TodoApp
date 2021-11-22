import Task from '../task/task'

import './styles.css'

export default function checklist(props: any){

    var taskList = []
    for (let index = 0; index < props.tasks.length; index++) {
        taskList.push(<Task data= {props.tasks[index]}/>)
    }
    return(
            <div className="checklist">
                {props.title}
                {taskList}
                <button>Add Task</button>
            </div>
    )
}

<style>
    
</style>