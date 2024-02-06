import React from "react";

const Sresult = (props) => {
  const img = `https://source.unsplash.com/600*400/?${props.name}`;
  return (
    <>
      <div>
        <img src={img} />
      </div>
    </>
  );
};
export default Sresult;
