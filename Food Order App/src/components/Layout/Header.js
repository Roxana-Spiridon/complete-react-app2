import { Fragment } from "react";

import headerImage from "../../assets/header.jpg";
import classes from "./Header.module.css";
import CartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
