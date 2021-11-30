import { useState } from 'react'
import './styles.css'

export default function Task(props: any){

    const [title, setTitle] = useState(props.data.title)
    const [value, setValue] = useState(props.data.value)

    function editTitle(title: String){
        setTitle(title)
        props.editTask(props.data.id, value, title)
    }

    function editTask(value: Boolean){
        setValue(value)
        props.editTask(props.data.id, value, title)
    }

    return(
        <div className="task">
            <input type="checkbox" defaultChecked={value} value={value} onChange = { () => editTask(!value) }/>
            <div className="infomations">
                <input value={title} onChange = {e => editTitle(e.target.value) }/>
                <button onClick={()=>props.deleteTask(props.data.id)}>Delete</button>
            </div>
        </div>
    )
}