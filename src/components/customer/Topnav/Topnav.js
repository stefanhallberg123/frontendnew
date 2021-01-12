import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import "./topNav.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  inputRoot: {
    color: "inherit",
  },
  logo: {
    margin: "auto",
    textAlign: "center",
    width: "40%",
    height: "40%",
  },
  logoHorizontallyCenter: {
    position: "absolute",
    left: "60%",
    top: "40%",
    transform: "translate(-50%, -50%)",
  },
}));

export default function Topnav() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MenuIcon />

          <div className={classes.logoHorizontallyCenter}>
            <img
              className={classes.logo}
              src={`${process.env.PUBLIC_URL}/images/logoTransp.png`}
              alt="logo"
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>

    // <div>
    //   {/* <FontAwesomeIcon className="burger" icon={faBars} />
    //   <div className="container">
    //     <img
    //       className="logoImg"
    //       src={`${process.env.PUBLIC_URL}/images/logoTransp.png`}
    //       alt="logo"
    //     />
    //   </div> */}
    // </div>
  );
}
