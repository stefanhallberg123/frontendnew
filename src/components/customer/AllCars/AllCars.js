import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Topnav from "../Topnav/Topnav";
import Axios from "axios";

export default function AllCars(props) {
  const [cars, setCars] = React.useState([]);
  const [images, setImages] = React.useState([]);
  // car
  useEffect(() => {
    const fetchCars = async () => {
      Axios.get(
        "http://localhost/P.ALbilhandel-backendPHP/P.ALbil%20api/api/read.php"
      ).then((response) => {
        setCars(response.data.cars);
        // setCars([response.data]);
      });
    };
    fetchCars();
  }, []);
  // images
  useEffect(() => {
    const fetchCars = async () => {
      Axios.get(
        "http://localhost/P.ALbilhandel-backendPHP/P.ALbil%20api/api/read_image.php"
      ).then((response) => {
        setImages(response.data.cars);
        // setCars([response.data]);
      });
    };
    fetchCars();
  }, []);
  //   console.log(cars);
  //   var newCar = JSON.parse(cars);
  //   console.log(newCar);
  const thisCarbyId = (carId) => {
    let url = `/cars/${carId}`;
    props.history.push(url);
  };
  console.log(cars);
  return (
    <div>
      <Topnav></Topnav>
      {cars.map((c, i) => {
        return (
          <div key={i}>
            <div onClick={() => thisCarbyId(c.id)}>{c.model}</div>
          </div>
        );
      })}
      <Footer></Footer>;
    </div>
  );
}
