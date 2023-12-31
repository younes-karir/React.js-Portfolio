import React from "react";

const De = (props) => {

  const styles = {
    width: props.size,
  };
  return (
    <svg
      version="1.1"
      id="Layer_1"
      style={styles}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="#464655"
        d="M473.655,88.276H38.345C17.167,88.276,0,105.443,0,126.621v73.471h512v-73.471
	C512,105.443,494.833,88.276,473.655,88.276z"
      />
      <path
        fill="#FFE15A"
        d="M0,385.379c0,21.177,17.167,38.345,38.345,38.345h435.31c21.177,0,38.345-17.167,38.345-38.345
	v-73.471H0V385.379z"
      />
      <rect y="200.09" fill="#FF4B55" width="512" height="111.81" />
    </svg>
  );
};

export default De;
