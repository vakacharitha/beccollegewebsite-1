import graduation from "/src/assets/homepage/courses/graduation.svg"
let courses=(props) =>{
    return(
     
        
        <div className="flex border-2 bg-background border-black rounded w-10/12 h-52 xl:w-5/12 xl:h-56 m-10 transition-transform duration-500 hover:transform hover:scale-105">
            <div className="left border-r-2 border-black p-3 flex flex-col justify-around items-center w-1/4">
                <div className=" text-2xl font-bold">{props.item.branch}</div>
                <div><img src={graduation} className="w-14 text-primaryColor"></img></div>
                <div className="font-semibold text-xl">{props.item.branchStudents}</div>
                <div className="text-xl font-medium">Students</div>

            </div>
            <div className="right p-3">
            <div className="text-xl font-bold cursor-pointer ">{props.item.branchName}</div>
            <div className="mt-4 font-bold">Accredited by NBA since 2003</div>
            <div className="mt-2 font-medium text-secondary"><i>Approved by AICTE</i></div>
            
            <div className="justify-start flex">
                <div className="flex flex-col items-center">
                {props.item.branchCourse.course1 && (<div className="p-1 xl:pl-3 xl:pr-3 text-sm rounded-md m-3 mb-0 text-white font-bold bg-primaryColor cursor-pointer">{props.item.branchCourse.course1}</div>)}
                {props.item.intakeNumber.intake1 && (<div className="p-1 xl:pl-3 xl:pr-3 text-sm m-3 mt-0  font-bold">{props.item.intakeNumber.intake1}</div>)}
                </div>
                <div  className="flex flex-col items-center">
                    <div className="p-1 xl:pl-3 xl:pr-3 text-sm m-3 mb-0 rounded-md bg-primaryColor font-bold text-white cursor-pointer ">B.TECH</div>
                   <div className="p-1 xl:pl-3 xl:pr-3 text-sm m-3 mt-0 font-bold">{props.item.intakeNumber.intake2}</div>
                </div>
                <div  className="flex flex-col items-center">
                    {props.item.branchCourse.course2 && (<div className="p-1 xl:pl-3 xl:pr-3 text-sm rounded-md m-3 mb-0 text-white font-bold bg-primaryColor cursor-pointer">{props.item.branchCourse.course2}</div>)}
                    {props.item.intakeNumber.intake3 && (<div className="p-1 xl:pl-3 xl:pr-3 text-sm m-3 mt-0 font-bold">{props.item.intakeNumber.intake3}</div>)}
                </div>
            </div>
            </div>

            </div>
        

     
)
}
export default courses;