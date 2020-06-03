import React, { useContext } from "react";
import { getClass } from "../utils";
import Image from "../components/Image";
import { Context } from "../Context";

function Photos() {
  const { photos } = useContext(Context);
  console.log(photos);

  const images = photos.map((item, index) => (
    <Image key={item.id} img={item} className={getClass(index)} />
  ));

  return <main className="photos">{images}</main>;
}

export default Photos;
