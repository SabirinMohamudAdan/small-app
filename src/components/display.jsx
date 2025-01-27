const Display = (props)=>{
    return<>
    <div className="border-2 border-cyan-700 w-[300px] p-5
     sm:ml-[300px] my-10 ml-10
       ">
   
    <img className="w-[300px] h-[200px]  " src={props.img} alt="" />
    <h1 className="text-5xl font-bold text-center text-cyan-700">{props.title}</h1>

    </div>
    </>
};
export default Display