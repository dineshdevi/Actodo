import TodoItem from "./TodoItem"

function AddTodoList(props) {
    const arr=props.arr
    const setarr=props.setarr
    return (
        <div className="bg-[#BDB4EA] p-2 border rounded-md flex-grow">
            <h1 className="text-2xl">Today's Activity</h1>
            {
                arr.length===0?<p>You haven't anything yet</p>:""
            }
                {
                arr.map(function(item){
                    return(
                        
                        <TodoItem id={item.id} activity={item.activity} arr={arr} setarr={setarr}></TodoItem>
                    )
                })
            }
            
        </div>
    )
}
export default AddTodoList