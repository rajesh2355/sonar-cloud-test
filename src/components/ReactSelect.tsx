import React, { useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label: string;
  value: string;
  options: Option[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

const ReactSelect: React.FC = () => {
  const [food, setFood] = useState<string>("fruit");
  const [drink, setDrink] = useState<string>("water");

  const handleFoodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFood(event.target.value);
  };

  const handleDrinkChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDrink(event.target.value);
  };

  return (
    <div>
      <Select
        label="What do we eat?"
        options={[
          { label: "Fruit", value: "fruit" },
          { label: "Vegetable", value: "vegetable" },
          { label: "Meat", value: "meat" },
        ]}
        value={food}
        onChange={handleFoodChange}
      />
      &nbsp;
      <Select
        label="What do we drink?"
        options={[
          { label: "Water", value: "water" },
          { label: "Cold drink", value: "Cold drink" },
          { label: "Energy Drink", value: "Energy Drink" },
        ]}
        value={drink}
        onChange={handleDrinkChange}
      />
      <p>We eat {food}!</p>
      <p>We drink {drink}!</p>
    </div>
  );
};

export default ReactSelect;
