import React, { useState } from 'react'
import Task from '../../components/task/task'
import './styles.css'

interface tasks {
    id: number,
    value: Boolean,
    title: String,
}


export default function Home(){

    let [title, setTitle] = useState('')
    let [tasks, setTasks] = useState<tasks[]>([])//JSON.parse(localStorage.getItem("checklists")) ;
    let [visibleTasks, setVisibleTasks] = useState<tasks[]>(tasks)
    let [filter, setFilter] = useState('Default')
    let [searchTitle, setSearchTitle] = useState('')
    let [count, setCount] = useState(0)

    
    function addTask(){
        setCount(()=> count++)
        const newItem = {id: count, value: false, title: title}
        setTasks(prev => [...prev.slice(0, tasks.length+1), newItem, ...prev.slice(tasks.length+1)])
        setVisibleTasks(prev => [...prev.slice(0, tasks.length+1), newItem, ...prev.slice(tasks.length+1)])
        localStorage.setItem("task",  JSON.stringify(tasks))
    }
    
    function deleteTask(id: Number){
        setTasks(tasks.filter(task => task.id !== id))
        setVisibleTasks(visibleTasks.filter(task => task.id !== id))
        localStorage.setItem("task",  JSON.stringify(tasks))
    }
    
    function editTask(id: number, value: boolean, title: String){
        const aux = tasks
        console.log(title)
        aux.map( task => { if(task.id === id){task.title = title; task.value = value}})
        setTasks(()=>aux)
        localStorage.setItem("task",  JSON.stringify(tasks))
    }

    function filterTasks(value: string, searchTitle: string){
        if(value === 'All'){
            setVisibleTasks(()=> tasks)
        }
        if(value === 'Complete'){
            setVisibleTasks(tasks.filter(task => task.value === true))
        }
        if(value === "Incomplete"){
            setVisibleTasks(tasks.filter(task => task.value === false))
        }
        if(searchTitle !== ''){
            if(value === 'All')
            setVisibleTasks(tasks.filter(task => task.title === searchTitle))
            else
            setVisibleTasks(visibleTasks.filter(task => task.title === searchTitle))
        }

        

        setFilter(value)
        setSearchTitle(searchTitle)
    }

    return(
        <main>
            <div className="boardTitle">
                <div>
                    <h2>Title Table</h2>
                    <div>
                        <div>
                            <input onChange={ e =>filterTasks(filter, e.target.value) }/>
                        </div>
                        <div className="Filter">
                            <h3>Filter:</h3>
                            <select name="select" onChange = { e =>filterTasks(e.target.value, searchTitle) } >
                                <option value="All">All</option>
                                <option value="Complete">Completed Tasks</option>
                                <option value="Incomplete">Uncompleted Tasks</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="checklist">
                <div className="taskList">
                    {visibleTasks.map(a=>(
                        <div key={a.id}>
                            <Task data= {a} deleteTask={ deleteTask } editTask={ editTask }/>
                        </div>
                    ))
                    }
                </div>
                <div className="addTask">
                    <input placeholder="Add Task" onChange = {e => setTitle(e.target.value)}/>
                    <button onClick={ addTask }>ADD</button>
                </div>
            </div>
        </main>
    )
}