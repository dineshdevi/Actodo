import AddTodoForm from "./AddTodoForm"
import AddTodoList from "./AddTodoList"
import { useState } from "react"

function TodoContainer() {
    const [arr,setarr]=useState([{id:1,activity:"Go for a away"},{id:2,activity:"Run at the time"},{id:3,activity:"Dinner at the night"}])
   
    return (
        <div>
            <div className="flex gap-5 flex-wrap">
                <AddTodoForm arr={arr} setarr={setarr}></AddTodoForm>
                <AddTodoList arr={arr} setarr={setarr}></AddTodoList>
            </div>
        </div>
    )
}
export default TodoContainer