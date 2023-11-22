import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./properties.css";
import useProperties from "../../Hooks/useProperties";
import { PuffLoader } from "react-spinners";
import PropertiCard from "../PropertiCard/PropertiCard";

const Properties = () => {
  const { data, isError, isLoading } = useProperties();
  // console.log("data--------------", data);
  if (isError) {
    return (
      <div className="Wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }
  if (isLoading) {
    <div className="wrapper flexCenter" style={{ height: "60vh" }}>
      <PuffLoader
        height="80"
        width="80"
        radius={1}
        color="#4066ff"
        aria-label="puff-loading"
      />
    </div>;
  }

  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth SearchBar properties-container">
        <SearchBar />
        <div className="paddings flexCenter properties">
          {data?.map((card, i) => {
            return <PropertiCard card={card} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Properties;
