import { DoctorCard } from "../../components/DoctorCard"

export const DoctorGrid = () => {


    return (
        <div className="container p-[3%] mx-auto">
           <h1 className="text-4xl font-bold text-blue-500">Find a Doctor</h1> 
           <div className="mt-6">
             <DoctorCard doctorName="Hello" specialist="Oncology"/>
           </div>
        </div>
    )
}