import PropTypes from "prop-types";
import svg from "./AdImage.svg";

function Ad({AdImage}) {
  if (AdImage) {
    return (
      <div className="ad-container">
        <img
          style={{ maxWidth: "100%" }}
          src = {svg}
          alt = "광고"
        />
      </div>
    );
  } else {
    return null;
  }
}

Ad.propTypes = {
  AdImage: PropTypes.bool.isRequired, // prop 이름 수정
};
    
  export default Ad;