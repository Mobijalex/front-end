import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./properties.css";
import useProperties from "../../Hooks/useProperties";

const Properties = () => {
  const { data, isError, isLoading } = useProperties();

  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth SearchBar properties-container">
        <SearchBar />
      </div>
    </div>
  );
};

export default Properties;
