import ContactForm from "../contact/ContactForm";
import InputForm from "../contact/FormInput";

function Contacts(props) {
  return (
    <>
      <div className="row">
        <div className="col">
          <h1>Contacts</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7">
          <ContactForm />
        </div>
        <div className="col-md-5">
          <InputForm />
        </div>
      </div>
    </>
  );
}
export default Contacts;
