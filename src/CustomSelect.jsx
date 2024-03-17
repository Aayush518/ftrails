import React from 'react';
import Select from 'react-select';
import { FaHotel, FaUtensils, FaUmbrellaBeach } from 'react-icons/fa';

const options = [
  { value: 'hotels', label: <FaHotel size={16} />, icon: <FaHotel size={16} /> },
  { value: 'restaurant', label: <FaUtensils size={16} />, icon: <FaUtensils size={16} /> },
  { value: 'resort', label: <FaUmbrellaBeach size={16} />, icon: <FaUmbrellaBeach size={16} /> }
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: '9999px',
    borderColor: '#E2E8F0',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#CBD5E0'
    }
  }),
  option: (provided) => ({
    ...provided,
    color: '#2D3748',
    backgroundColor: '#F7FAFC',
    '&:hover': {
      backgroundColor: '#EDF2F7'
    }
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#2D3748'
  }),
  // Custom style for rendering icon
  indicatorSeparator: () => ({}), // Hide default indicator separator
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: '4px',
    '& svg': {
      width: '16px',
      height: '16px'
    }
  }),
  // Adjust icon size to match font size
  indicatorsContainer: (provided) => ({
    ...provided,
    fontSize: '16px' // Match icon size with font size
  })
};

const CustomSelect = () => {
  return (
    <Select
      options={options}
      styles={customStyles}
      defaultValue={options[0]}
      components={{ DropdownIndicator: () => null }} // Hide default dropdown indicator
      formatOptionLabel={({ icon }) => icon} // Render icon instead of label
    />
  );
};

export default CustomSelect;
