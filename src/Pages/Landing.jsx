import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";
import {useLocation} from "react-router-dom"


function Landing(){
    const data=useLocation()
    return(
        <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <Header name={data.state.user}></Header>
        <div className="flex justify-between gap-7 my-5 flex-wrap">
        <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}></Card>
        <Card bgcolor={"#FD6663"} title={"December 20"} subtitle={"14:23:08"}></Card>
        <Card bgcolor={"#FCA201"} title={"Build using"} subtitle={"React"}></Card>
        </div>
        <TodoContainer></TodoContainer>
      </div>
    </div>
    )
}
export default Landing