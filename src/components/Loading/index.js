import PropTypes from "prop-types";
import React from "react";
import loading from "../../assets/animations/loading.gif";
import { ImageLoading, LoadingBoxStyled } from "./styles";

function Loading({ show, backgroundColor }) {
  return (
    <LoadingBoxStyled backgroundColor={backgroundColor} show={show}>
      <ImageLoading src={loading} alt="loading" />
    </LoadingBoxStyled>
  );
}

Loading.defaultProps = {
  backgroundColor: "#ffffff",
};
Loading.propTypes = {
  show: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string,
};

export default Loading;
