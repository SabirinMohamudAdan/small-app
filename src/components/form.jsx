import { useState } from "react";
import Display from "./display";
import { useRef } from "react";

// useRef clear image 
const Form = () => {


    const [Open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    //section inputs
    const [Title, setTitle] = useState("")
    const [Image, setImage] = useState(null)
    const Refimage=useRef()
    const[Post,setpost]=useState([])

    const handlePost = (e) => {
        e.preventDefault()
        const newPost = {Title, Image}

        if(Title != " " && Image != " "){
      
      setpost([...Post ,newPost])
      alert("create post")
      setTitle("")
 Refimage.current.value=null
 handleClose()
        }
        }
        


    return <>

    <div className=" ">
        <h1 className="text-5xl bg-cyan-950
         text-white font-serif font-bold px-4">SomTech</h1>
    </div>


    

    <div style={{display: Open === true ? "block" : ""}} className="
     bg-white relative hidden w-full h-screen pt-32">
     <div className="bg-cyan-950 rounded-3xl w-[350px] p-10 
     sm:ml-[400px] font-serif  sm:mr-0 mr-2 ml-3 ">

     <i onClick={handleClose} 
     class="fa-solid fa-xmark text-white text-4xl sm:ml-[270px]
      ml-[260px] sm:mt-[-70px]"></i> <br />

      <input    value={Title} onChange={(e) => setTitle(e.target.value)}
       className="px-10 py-2 rounded-xl mb-5 bg-white  " type="text" placeholder="Enter File" />
       <div  onChange={(event) => setImage(event.target.files[0])}
        className="flex gap-3 mb-5 ">
        <input  ref={Refimage} 
        className="file:w-36 file:h-14 file:rounded-xl file:border-none text-white " 
        type="file" placeholder="Choose File"/>
     
       </div>
       <button  onClick={handlePost} 
       className="bg-cyan-400 rounded-lg px-6 py-2 text-white" >Post</button>
     </div>

   </div>
   
     
   <div>
    <button onClick={handleOpen} className="text-4xl fixed bottom-2
     font-bold bg-pink-600 text-white
      rounded-full px-3 py-2 right-4 " >+</button>
  </div>
{
Post.map((item)=>{
    return open===true? "": <Display img={URL.createObjectURL(item.Image)} title={item.Title}/>
})

}


    </>
  }
 export default Form