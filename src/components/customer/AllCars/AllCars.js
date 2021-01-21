import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Topnav from "../Topnav/Topnav";
import SendMsg from "../SendMsg/SendMsg";

import Axios from "axios";
import "./allCars.scss";

export default function AllCars(props) {
  const [cars, setCars] = React.useState([]);
  const [images, setImages] = React.useState([]);
  //get all cars
  useEffect(() => {
    const fetchCars = async () => {
      Axios.get(
        "http://localhost/P.ALbilhandel-backendPHP/P.ALbil%20api/api/read.php"
      ).then((response) => {
        setCars(response.data.cars);
      });
    };
    fetchCars();
  }, []);
  //get all images
  useEffect(() => {
    const fetchCars = async () => {
      Axios.get(
        "http://localhost/P.ALbilhandel-backendPHP/P.ALbil%20api/api/read_image.php"
      ).then((response) => {
        setImages(response.data.image);
      });
    };
    fetchCars();
  }, []);
  // click to open specific car
  const thisCarbyId = (carId) => {
    let url = `/cars/${carId}`;
    props.history.push(url);
  };
  // same images for one car
  let sameIdImg = images.filter(({ car_id }) =>
    cars.some(({ id }) => id === car_id)
  );
  // only one image for one car id
  let map = new Map();
  let filtered = [];
  sameIdImg.forEach(function (o) {
    var index = map.get(o.car_id);
    if (index === undefined) {
      map.set(o.car_id, filtered.push(o) - 1);
      return;
    }
    if (filtered[index].Status < o.Status) {
      filtered[index] = o;
    }
  });

  return (
    <div className="allCars">
      <Topnav></Topnav>
      <SendMsg></SendMsg>
      <h1 className="allCarsH1">Alla våra bilar</h1>
      {cars.map((c, i) => {
        return (
          <div key={i}>
            {filtered.map((p, k) => {
              if (p.car_id === c.id) {
                return (
                  <div key={p.id} className="allImagesflex">
                    <img
                      className="allImages"
                      src={p.file_name}
                      alt="carImages"
                      onClick={() => thisCarbyId(c.id)}
                    />
                    <div className="textBlock">
                      <div className="allCarsPrice">{c.price} kr</div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        );
      })}
      <Footer></Footer>;
    </div>
  );
}
