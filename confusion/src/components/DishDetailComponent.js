import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  renderComments(dish) {
    if (dish != null)
      return dish.comments.map((dishComment) => {
        return (
          <div>
            {dishComment.comment}
            <br></br>
            --{dishComment.author}, {dishComment.date}
            <br></br>
            <br></br>
          </div>
        );
      });
    else return <div></div>;
  }

  render() {
    if (this.props.dish != null)
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="col-12 col-md-5">
            <h3>Comments</h3>
            {this.renderComments(this.props.dish)}
          </div>
        </div>
      );
    else return <div></div>;
  }
}

export default DishDetail;
