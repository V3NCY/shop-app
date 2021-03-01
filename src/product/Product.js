import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

const Example = (props) => {
  return (
    <div className="col-md-4">
      <Card className="mb-3">
        <CardImg top width="100%" src={props.image} />
        <CardBody className="mt-3">
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardText tag="h6">{props.description}</CardText>
          <Button color="danger">Buy</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;
