import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { DoctorGrid } from "../sections/ConsultComponents/DoctorGrid";

export default function Consult() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-8">
                <SearchBar />
            </div>
            <DoctorGrid/>

        </div>
    )
}
