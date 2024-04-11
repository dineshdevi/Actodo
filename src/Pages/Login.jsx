import { useState } from "react"
import { Link } from "react-router-dom"
import {useNavigate} from "react-router-dom"

function Login(props){
    const navigate=useNavigate()

    const name=props.name
    const [uname,setuname]=useState("")
    const [pname,setpname]=useState("")
    const [login,setlogin]=useState(true)

    function Inpname(event){
        setuname(event.target.value)
    }
    function Inppass(event){
        setpname(event.target.value)
    }

    function Click(){
        var userfound=false

        name.forEach(function(item){
            if(item.username===uname && item.password===pname){
                userfound=true
                setlogin(true)
                navigate("/landing" ,{state:{user:uname}})
            }
        })
        if(userfound===false){
                setlogin(false)
                console.log("Login failed")
        }
    }

    return(
        <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            {
                login?<p>I help you manage your activities after you login :)</p>: <p className="text-red-500">Please sign up before login</p>
            }
            

            <div className="flex flex-col gap-2 my-5">
                <input type="username" className="border border-black rounded-md p-1 bg-transparent w-52" placeholder="username" onChange={Inpname}/>
                <input type="password" className="border border-black rounded-md p-1 bg-transparent w-52" placeholder="password" onChange={Inppass}/>

                <button className="bg-[#8272DA] w-24 p-2 border rounded-md" onClick={Click}>Log in</button>
                <p>Don have an acount? <Link to={"/signup"} className="underline">Sign up</Link></p>
            </div>
        </div>
       
    </div>
    )
}
export default Login