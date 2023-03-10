import Image from "next/image";
import React from "react";
import max from "../../../assets/img/Maximilien-Robespierre 6.png";

type Props = {};

const Details = (props: Props) => {
  return (
    <div className="p-4 px-6">
      <div className="flex justify-end items-center">
        <div className="mr-3 text-end">
          <p className="font-semibold text-[#7d7d7d]">Ruhul Amin Tusar</p>
          <p className="text-[#7d7d7d]">Maple Leaf International School</p>
        </div>
        <Image sizes="100" width={50} src={max} alt="" />
      </div>
      <div className="mt-10">
        <p className="text-[#7d7d7d]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
          vulputate ut mauris sem. At platea erat diam sed proin. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Tortor vulputate ut
          mauris sem. At platea erat diam sed proin.
        </p>
      </div>
    </div>
  );
};

export default Details;
