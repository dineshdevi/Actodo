function TodoItem(props){
    const arr=props.arr
    const setarr=props.setarr

    function del(removeid){
        var temparr=arr.filter(function(item){
            if(removeid===item.id){
                return false
            }
            else{
                return true
            }
        })
        setarr(temparr)
    }
    return(
        
        <div className="flex justify-between"> 
        <p>{props.id}. {props.activity}</p>
        <button className="text-red-500" onClick={()=>del(props.id)}>Delete</button>
        </div>
    )
}
export default TodoItem







