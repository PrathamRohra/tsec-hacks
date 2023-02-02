import React, { useState } from 'react';

const Amenities = () => {
  const [selectedValue, setSelectedValue] = useState('option1');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <input
        type="radio"
        value="option1"
        checked={selectedValue === 'option1'}
        onChange={handleChange}
      />
      Wifi
      <input
        type="radio"
        value="option2"
        checked={selectedValue === 'option2'}
        onChange={handleChange}
      />
      AC
      <input
        type="radio"
        value="option3"
        checked={selectedValue === 'option3'}
        onChange={handleChange}
      />
      TV
      {/* <p>Selected Value: {selectedValue}</p> */}
    </div>
  );
};

export default Amenities;