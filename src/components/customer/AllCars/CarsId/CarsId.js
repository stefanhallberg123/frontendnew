import React, { useState, useEffect } from "react";
import Topnav from "../../Topnav/Topnav";
import Footer from "../../Footer/Footer";
import { useParams } from "react-router-dom";
import { Card, makeStyles } from "@material-ui/core";
import Axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./carsId.scss";

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: 5,
    padding: "75px 50px",
    margin: "0px 25px",
    width: "500px",
    boxShadow: "20px 20px 20px black",
    display: "flex",
    justifyContent: "center",
  },
}));

export default function CarsId() {
  let { id } = useParams();
  const classes = useStyles();
  const [thisCar, setThisCar] = useState([]);
  const [thisImages, setThisImages] = useState([]);
  const [index, setIndex] = useState(0);
  const content = thisImages[index];
  const numSlides = thisImages.length;

  useEffect(() => {
    const fetchCar = async () => {
      Axios.get(
        `http://localhost/P.ALbilhandel-backendPHP/P.ALbil%20api/api/single_read.php?id=${id}`
      ).then((response) => {
        setThisCar(response.data);
      });
    };
    fetchCar();
  }, [id]);
  useEffect(() => {
    const fetchImage = async () => {
      Axios.get(
        `http://localhost/P.ALbilhandel-backendPHP/P.ALbil%20api/api/image.php?car_id=${id}`
      ).then((response) => {
        setThisImages(response.data.image);
      });
    };
    fetchImage();
  }, [id]);

  if (thisImages.length > 1) {
  }
  const onArrowClick = (direction) => {
    const increment = direction === "left" ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;
    setIndex(newIndex);
    // const icon = direction === "left" ? <FaChevronLeft /> : <FaChevronRight />;
  };
  return (
    <div>
      <Topnav></Topnav>
      <div className="carousel">
        <FaChevronLeft
          className="svg"
          direction="left"
          onClick={() => onArrowClick("left")}
        />
        <Card className={classes.card}>
          <img src={content} alt="thisImg" />
        </Card>
        <FaChevronRight
          className="svg"
          direction="right"
          onClick={() => onArrowClick("right")}
        />
      </div>
      <div>Pris: {thisCar.price}</div>
      <Footer></Footer>
    </div>
  );
}
