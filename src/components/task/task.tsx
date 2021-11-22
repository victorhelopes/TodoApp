import './styles.css'

export default function task(props: any){
    function oi(){
        console.log(props.data.value)
    }
    return(
        <div className="task">
            <input type="checkbox" value={props.data.value}/>
            <div className="infomations" onClick={oi}>
                <h4>{props.data.title}</h4>
                <p>{props.data.description}</p>
            </div>
        </div>
    )
}