import React, { Fragment, useState, useEffect } from "react";
import ZipCodeItem from "./ZipCodeItem";

export default function ZipCodeSearch() {
  const [zip, setZip] = useState("");
  const [list, setList] = useState([]);

  const getZipFromAPI = async () => {
    const response = await fetch("http://ctp-zip-api.herokuapp.com/zip/" + zip);
    const data = await response.json();
    return data;
  };

  const onChange = (e) => {
    if (e.target.value.length === 5) {
      setZip(() => e.target.value);      
    }
  };

  useEffect(() =>{
    getZipFromAPI()
      .then((data) => {
        setList(() => data);
        console.log(list);
      })
      .catch((err) => console.error(err));

      console.log(zip)
  },[zip,list])

  return (
    <Fragment>
      <h1 className="display-4 text-center p-3 mb-2 bg-dark text-white">
        Zip Code Search
      </h1>
      <input className="form-control " type="text" onChange={onChange}></input>
      <ul className="list-group ">
        {list.map((item, index) => {
          return <ZipCodeItem key={item + index} content={item} />;
        })}
      </ul>
    </Fragment>
  );
}
