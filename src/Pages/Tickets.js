import Table from "react-bootstrap/Table";

function Tickets(props) {
  return (
    <>
      <div className="container">
        <h1>Tickets</h1>
        <div className="row">
          <img
            src="https://i.ibb.co/wQcP09R/ticket.png"
            alt="ticket"
            width="100%"
            fluid
            className="mt-2"
          />
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Country</th>
                <th>Town</th>
                <th>Cinema</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Bulgaria</td>
                <td>Plovdiv</td>
                <td>Mall Plovdiv</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Bulgaria</td>
                <td>Plovdiv</td>
                <td>Main Street</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Bulgaria</td>
                <td>Sofia</td>
                <td>Serdika Center</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Bulgaria</td>
                <td>Varna</td>
                <td>Mall Varna EAD</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Bulgaria</td>
                <td>Varna</td>
                <td>GRAND MALL</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Romania</td>
                <td>Bucharest</td>
                <td>Liberty Center</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Romania</td>
                <td>Brasov</td>
                <td>Eliana Mall</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Greece</td>
                <td>Athens</td>
                <td>Village Cinemas</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Turkey</td>
                <td>Istanbul</td>
                <td>Istanbul Shopping Center</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Turkey</td>
                <td>Istanbul</td>
                <td>Mall Akasya</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Serbia</td>
                <td>Belgrade</td>
                <td>Ada Mall Shopping Center</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Serbia</td>
                <td>Nis</td>
                <td>The Mall "Zona 1"</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
export default Tickets;
