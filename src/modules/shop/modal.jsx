import { Component } from "react";

export default class Modal extends Component {
  render() {
    const { item } = this.props;
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div
            className="modal-content"
            style={{ width: 1000, marginLeft: -258 }}
          >
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Detail
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-6 text-center ">
                  <img src={item.image} style={{ width: "13rem" }} />
                </div>
                <div className="col-6">
                  <table className="table d-flex">
                    <tbody>
                      <tr>
                        <td>Name:</td>
                        <td>{item.name}</td>
                      </tr>

                      <tr>
                        <td>Description:</td>
                        <td>{item.description}</td>
                      </tr>
                      <tr>
                        <td>Price:</td>
                        <td> {item.price}$</td>
                      </tr>
                      <tr>
                        <td>Quantity:</td>
                        <td>{item.quantity}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
