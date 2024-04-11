import { useState } from "react"

function AddTodoForm(props){
    const arr=props.arr
    const setarr=props.setarr

    const [type,settype]=useState("")

    function change(event){
        settype(event.target.value)
    }
    function click(){
        setarr([...arr,{id:arr.length+1,activity:type}])
        settype("")
    }
    return(
        <div className="flex flex-col gap-3">
                    <h1 className="text-2xl font-medium">Manage Activity</h1>
                    <div>
                        <input type="text" className="border border-black p-1 bg-transparent" placeholder="Next Activity?" onChange={change} value={type}/>
                        <button className="bg-black text-white p-1 border border-black" onClick={click}>Add</button>
                    </div>
                </div>
    )
}
export default AddTodoForm