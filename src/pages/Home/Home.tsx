import React, { useState } from 'react'
import Checklist from '../../components/checklist/checklist'
import './styles.css'

export default function Home(){

    const [title, setTitle] = useState()

    const checklists = [
        {
            title: "CheckList1", 
            tasks: []
        },
        
    ]
    return(
        <main>
            <div className="boardTitle">
                <div>
                    <h2>Title Table</h2>
                    <div>
                        <h3>Filter:</h3>
                        <select name="select">
                            <option value="valor1">Valor 1</option>
                            <option value="valor2" selected>Valor 2</option>
                            <option value="valor3">Valor 3</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="tables">
                <div className="CheckListTables">
                    {checklists.map(checklist =><Checklist title={checklist.title} tasks={checklist.tasks}/>)}
                </div>
                <button className="addChicklist">Add checklist</button>
            </div>
        </main>
    )
}