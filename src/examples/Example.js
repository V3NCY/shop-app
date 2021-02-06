import ClassComponent from '../all/ClassComponent';
import FunctionalComponent from "../all/FunctionalComponent";
import CamerasComponent from "../all/CamerasComponent";


function Example() {
  
  return (
    <>      
    <div className="col-4">
      <ClassComponent title="TV and Accessories"/>
    </div>
    
    <div className="col-4">
      <FunctionalComponent title="Laptops and Desktops"/>
    </div>
    
    <div className="col-4">
      <CamerasComponent title="Cameras and Accessories"/>
  </div>  
    </>
    
  );
  
}

export default Example;
