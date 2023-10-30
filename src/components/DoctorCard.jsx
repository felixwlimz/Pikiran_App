export const DoctorCard = ({imgSrc, doctorName, specialist}) => {


    return (
        <div className="border border-gray-300 rounded-lg">
           <div className="flex flex-row gap-3 p-6">
              <img src={imgSrc} className="w-[80px] h-[80px]"/>
              <div>
                <h2 className="text-lg font-bold">{doctorName}</h2>
                <p className="mt-2 text-md">{specialist}</p>
              </div>
           </div>
        </div>
    )
}