import { useQuery } from "@tanstack/react-query"
import { DoctorCard } from "../../components/DoctorCard"
import axios from "axios"
import DoctorController from "../../api/DoctorController"

export const DoctorGrid = () => {
   
    const doctorController = new DoctorController();

    const { isLoading, error, data} = useQuery({ 
      queryKey : ['doctors'], 
      queryFn : doctorController.getAllDoctors
     })

    
     if (isLoading) return <h1>Loading</h1>
     if (error) return <h1>Error</h1>
    return (
        <div className="container p-[3%] mx-auto">
           <h1 className="text-4xl font-bold text-blue-500">Find a Doctor</h1> 
           <div className="grid grid-cols-4 gap-3 w-full">
            {
              data.map((doctor) => (
                <DoctorCard key={doctor.id} doctorName={`Dr. ${doctor.first_name} ${doctor.last_name}`}/>
              ))
            }
           </div>
        </div>
    )
}