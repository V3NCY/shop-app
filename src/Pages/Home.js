import Carousel from "../Carousel/Carousel";
import Navbar from "../Navbar/Navbar";


function Home (props){

        return <>
        <div className="container">
            <div className="row">
            <Navbar/>            
            <div className="row mt-4">
            <Carousel/>
            
            </div>
            <div class="d-flex flex-column">
                </div>
            </div>
        </div>
        </>
                   
    }
    export default Home;