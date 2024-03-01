import React, { useState } from 'react';
import Select from 'react-select';
import { Wrapper } from './Filter.styled';

const options = [
  { value: 'A to Z', label: 'A to Z' },
  { value: 'Z to A', label: 'Z to A' },
  { value: 'Less than 10$', label: 'Less than 10$' },
  { value: 'Greater than 10$', label: 'Greater than 10$' },
  { value: 'Popular', label: 'Popular' },
  { value: 'Not popular', label: 'Not popular' },
  { value: 'Show all', label: 'Show all' },
];

const customStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    fontSize: '16px',
    borderRadius: '14px',
    border: 'none',
    background: '#54BE96',
    color: '#FBFBFB',
    height: '48px',
    paddingLeft: '18px',
    paddingRight: '18px',
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: '#fff',
    color: state.isSelected ? '#191A15' : 'rgba(25, 26, 21, 0.30)',
  }),
  menu: (baseStyles, state) => ({
    ...baseStyles,
    borderRadius: '14px',
    background: '#fff',
    overflow: 'hidden',
  }),
  menuList: (baseStyles, state) => ({
    ...baseStyles,
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: '#FBFBFB',
    fontSize: '16px',
    fontWeight: '500',
  }),
  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    color: '#FBFBFB',
  }),
  indicatorSeparator: (baseStyles, state) => ({
    display: 'none',
  }),
  placeholder: (baseStyles, state) => ({
    ...baseStyles,
    color: '#FBFBFB',
    fontSize: '16px',
    fontWeight: '500',
  }),
};

const Filter = ({ applyFilter }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = selectedOption => {
    setSelectedOption(selectedOption.value);
    applyFilter(selectedOption.value);
  };
  return (
    <>
      <Wrapper>
        <p>Filters</p>
        <Select
          defaultValue={selectedOption}
          onChange={handleChange}
          options={options}
          styles={customStyles}
        />
      </Wrapper>
    </>
  );
};

export default Filter;
