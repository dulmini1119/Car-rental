import CarsFilterOptions from "@/Components/Home/CarsFilterOptions";
import Homepage from "@/Components/Home/homepage"
import SearchInput from "@/Components/Home/SearchInput";


export default function Home() {
  return (
    <div className="p-5">
    <Homepage/>
    <div className="p-5">
    <SearchInput/>
    </div>
    <div className="p-5">
      <CarsFilterOptions/>
    </div>
    
      
    </div>
  );
}
