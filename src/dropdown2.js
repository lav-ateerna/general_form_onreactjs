import React, { useState } from "react";

const options = [
  {
    label: "maharashtra",
    children: [
      { label: "pune" },
      { label: "mumbai" },
      { label: "thane" },
    ],
  },
  {
    label: "delhi",
    children: [
      { label: "Firozabad" },
      { label: "new_delhi" },
      { label: "old_delhi" },
    ],
  },
  {
    label: "karnataka",
    children: [
      { label: "bengaluru" },
      { label: "Shivamogga" },
      { label: "Chikkamagaluru" },
    ],
  },
];

const HierarchicalDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSubOption, setSelectedSubOption] = useState(null);

  return (
    <div>
      <select
        value={selectedOption ? selectedOption.label : ""}
        onChange={(event) => {
          const selectedOption = options.find(
            (option) => option.label === event.target.value
          );
          setSelectedOption(selectedOption);
          setSelectedSubOption(null);
        }}
      >
        {options.map((option) => (
          <option key={option.label}>{option.label}</option>
        ))}
      </select>
      {selectedOption && (
        <select
          value={selectedSubOption ? selectedSubOption.label : ""}
          onChange={(event) => {
            const selectedSubOption = selectedOption.children.find(
              (subOption) => subOption.label === event.target.value
            );
            setSelectedSubOption(selectedSubOption);
          }}
        >
          {selectedOption.children.map((subOption) => (
            <option key={subOption.label}>{subOption.label}</option>
          ))}
        </select>
      )}
    </div>
  );
};

export default HierarchicalDropdown;
