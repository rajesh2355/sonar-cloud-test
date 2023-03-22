import React from "react";
import "./select.css";
const Select = () => {
  return (
    <div className="select_div">
      <label>
        What do we eat?
        <select>
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="meat">Meat</option>
        </select>
      </label>
    </div>
  );
};

export default Select;
