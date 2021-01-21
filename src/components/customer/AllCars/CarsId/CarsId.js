import React, { useState, useEffect } from "react";
import Topnav from "../../Topnav/Topnav";
import Footer from "../../Footer/Footer";
import SendMsg from "../../SendMsg/SendMsg";
import { useParams } from "react-router-dom";
import { Card, Slide, makeStyles } from "@material-ui/core";
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
  const [thisImages, setThisImages] = useState([
    { file_name: `${process.env.PUBLIC_URL}/logos/logoTransp.png` },
  ]);
  const [index, setIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState("down");
  const content = thisImages[index];
  const numSlides = thisImages.length;
  // cars
  useEffect(() => {
    const fetchCar = async () => {
      await Axios.get(
        `http://localhost/P.ALbilhandel-backendPHP/P.ALbil%20api/api/single_read.php?id=${id}`
      ).then((response) => {
        setThisCar(response.data);
      });
    };
    fetchCar();
  }, [id]);
  //images
  useEffect(() => {
    const fetchImage = async () => {
      await Axios.get(
        `http://localhost/P.ALbilhandel-backendPHP/P.ALbil%20api/api/image.php?car_id=${id}`
      ).then((response) => {
        setThisImages(response.data.image);
      });
    };
    fetchImage();
  }, [id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 39) {
        onArrowClick("right");
      }
      if (e.keyCode === 37) {
        onArrowClick("left");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const onArrowClick = (direction) => {
    const increment = direction === "left" ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;
    setIndex(newIndex);
    const oppDirection = direction === "left" ? "right" : "left";
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
      setIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 500);
  };
  console.log(content);
  console.log(thisCar);

  return (
    <div>
      <Topnav></Topnav>
      <SendMsg></SendMsg>
      <div className="carousel">
        <FaChevronLeft
          className="svg"
          direction="left"
          onClick={() => onArrowClick("left")}
        />
        <Slide in={slideIn} direction={slideDirection}>
          <Card className={classes.card}>
            <img
              className="imgCarousel"
              src={content.file_name}
              alt="thisImg"
            />
          </Card>
        </Slide>
        <FaChevronRight
          className="svg"
          direction="right"
          onClick={() => onArrowClick("right")}
        />
      </div>
      {/* {thisImages.map((p, k) => {
        return <img src={p.file_name} alt={"hatePHP"} />;
      })} */}
      <div className="aboutCar">
        <h4>Märke: {thisCar.manufacturers}</h4>
        <h4>Modell: {thisCar.model}</h4>
        <h4>Årsmodell: {thisCar.year}</h4>
        <h4>Pris: {thisCar.price} kr</h4>
        <h4>Miltal: {thisCar.distance} km</h4>
        <h4>Beskrivning: {thisCar.description}</h4>
      </div>
      <Footer></Footer>
    </div>
  );
}
