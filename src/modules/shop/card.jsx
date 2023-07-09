import { Component } from "react";
export default class Card extends Component {
  render() {
    const { price, image, name } = this.props.item;
    return (
      <div>
        <div className="card" style={{ width: "19rem" }}>
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{price}$</p>
            <button onClick={() => {
               this.props.onChangeSanPham(this.props.item);
            }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="btn btn-primary"
            >
              Detail
            </button>
          </div>
        </div>
      </div>
    );
  }
}
