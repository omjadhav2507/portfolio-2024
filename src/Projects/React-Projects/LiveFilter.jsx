import React, { useEffect, useState } from "react";

const array = [
  { key: "1", type: "planet", value: "Tatooine" },
  { key: "2", type: "planet", value: "Alderaan" },
  { key: "3", type: "starship", value: "Death Star" },
  { key: "4", type: "starship", value: "CR90 corvette" },
  { key: "5", type: "starship", value: "Star Destroyer" },
  { key: "6", type: "person", value: "Luke Skywalker" },
  { key: "7", type: "person", value: "Darth Vader" },
  { key: "8", type: "person", value: "Leia Organa" },
];

function LiveFilter() {
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState("");
  const [filteredArray, setFilteredArray] = useState(array);

  useEffect(() => {
    const newArr = array
      .filter((el) => el.value.includes(inputValue))
      .filter((el) => el.type.includes(inputType));

    setFilteredArray(newArr);
  }, [inputValue, inputType]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h4 className="mb-4">Live Filter</h4>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter value"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Type"
              value={inputType}
              onChange={(e) => setInputType(e.target.value)}
            />
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Value</th>
                <th scope="col">Type</th>
              </tr>
            </thead>
            <tbody>
              {filteredArray.map((item, index) => (
                <tr key={index}>
                  <td>{item.value}</td>
                  <td>{item.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default LiveFilter;
