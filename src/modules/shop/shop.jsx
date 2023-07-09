import { Component } from "react";
import Card from "./card";
import data from "./data.json";
import Modal from "./modal";
export default class Shop extends Component {
  state = {
    spChiTiet: {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
  };
  handleChangeSanPhamChiTiet = (sp) => {
    this.setState({
      spChiTiet: sp,
    });
  };
  render() {
    return (
      <div className="container d-flex justify-content-center">
        <div>
          <h1 className="my-5 text-center">Shop</h1>
          <div className=" d-flex flex-wrap gap-5 justify-content-center">
            {data.map((item) => {
              return (
                <Card
                  key={item.id}
                  item={item}
                  onChangeSanPham={this.handleChangeSanPhamChiTiet}
                />
              );
            })}
          </div>
        </div>
        <Modal item={this.state.spChiTiet} />
      </div>
    );
  }
}
