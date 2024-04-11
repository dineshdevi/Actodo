import { useState } from "react"
import { Link } from "react-router-dom"

function Signup(props){
    const name=props.name
    const setname=props.setname
    const [signname,setsigname]=useState("")
    const [signpass,setsignpass]=useState("")
    function Signname(event){
        setsigname(event.target.value)
    }
    function Signpass(event){
        setsignpass(event.target.value)
    }

    function Click(){
        setname([...name,{username:signname,password:signpass}])
    }

    return(
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>I help you manage your activities after you login :)</p>
                <div className="flex flex-col gap-2 my-5">
                    <input type="username" className="border border-black rounded-md p-1 bg-transparent w-52" placeholder="username" onChange={Signname}/>
                    <input type="password" className="border border-black rounded-md p-1 bg-transparent w-52" placeholder="password" onChange={Signpass}/>
                    <input type="password" className="border border-black rounded-md p-1 bg-transparent w-52" placeholder="confirm password"/>

                    <button className="bg-[#FCA201] w-24 p-2 border rounded-md" onClick={Click}>Sign up</button>
                    <p>Already have an acount? <Link to={"/"} className="underline">Login</Link></p>
                </div>
            </div>
           
        </div>
    )
}
export default Signup