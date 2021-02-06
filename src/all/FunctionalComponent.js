import { Alert, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'reactstrap';


function FunctionalComponent (props){

const [count, setCount]= useState(0);

const handleChange = (event)  => {
    setCount(event.target.value)
}
    return <div className="my-2">
    <Alert color="danger">
        <FontAwesomeIcon icon={faLaptop} className="mr-2"/>
             {props.title}  
            </Alert>
            
            <InputGroup>
            <InputGroupAddon addonType="preprend">
            <Button color="success" onClick={() => setCount(count+1)}>
                <FontAwesomeIcon icon={faPlusCircle} className="mr-1"/></Button>
            </InputGroupAddon>
            <Input value = {count} onChange={handleChange}/>
            <InputGroupAddon addonType="append">
            <Button color="danger" onClick={() => setCount(count-1)}>
                <FontAwesomeIcon icon={faMinusCircle} className="mr-1"/></Button>
            </InputGroupAddon>
            </InputGroup>
            </div>
            
}
export default FunctionalComponent;