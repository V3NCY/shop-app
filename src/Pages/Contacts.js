import ContactForm from '../contact/ContactForm';
import Navbar from "../Navbar/Navbar";

function Contacts (props) {
    return <>
        <div className="container">
            <div className="row">
                <Navbar/>
                < ContactForm/>
            </div>
        </div>
    </>
}
export default Contacts;