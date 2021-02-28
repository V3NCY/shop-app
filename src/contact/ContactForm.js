import React from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

const ContactForm = (props) => {
  return (

    
     <Card bg="secondary">
        <CardBody>
          <CardTitle tag="h5">Movie House</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Contacts</CardSubtitle>
        
        <div className="row">
          <div className="col">
        <img width="100%" src="https://images.squarespace-cdn.com/content/v1/53202c8ee4b0a7434b8e8dbd/1545319940792-XTVUTE7JFJKOD36MC0G5/ke17ZwdGBToddI8pDm48kO2lQNvb5DUfAetBD163myl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0g9xiYCO_4ze-uEG5pWlE5NJ9puxctilllzHfrdn4bnHE3VGTbxBBXtKJDu0cXp1vw/MOVIE+HOUSE+HEADER.jpg?format=2500w" alt="Card image cap" />
        </div>
        <div className="col">

          <CardText>
            <div>
              Address:
              </div>
              <div>
                    Plovdiv, Bulgaria,
              </div>
              <div>
                    4000,
              </div>
              <div>
                    Tsar Boris III Obedinitel Blvd 
              </div>
          </CardText>
          <CardText>E-mail: contacts@moviehouse.com</CardText>
          <CardText>Telephone: 0898577777</CardText>
          </div>
          </div>

        </CardBody>
      </Card>
  );
};

export default ContactForm;