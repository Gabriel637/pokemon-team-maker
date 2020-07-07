import PropTypes from "prop-types";
import React from "react";
import Logo from "../../assets/images/logo.png";
import { HeaderStyled, Image } from "./styles";

export function Header({ backPage }) {
  return (
    <HeaderStyled backPage={backPage}>
      <Image src={Logo} />
    </HeaderStyled>
  );
}

Header.defaultProps = {
  backPage: false,
};

Header.propTypes = {
  backPage: PropTypes.bool,
};

export default Header;
