

import React, { useState } from 'react';






const AddNewItem = (props) => {
 
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    exp_date: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((puranaData) => ({
      ...puranaData,
      [name]: value,

    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create an object with the form data
    const newItem = {
      name: formData.name,
      amount: formData.amount,
      exp_date: formData.exp_date,
    };
    props.onNewItemSubmit(newItem);


    
    // Handle the submitted data (you can modify this part based on your needs)
    // Reset the form
    setFormData({
      name: '',
      amount: '',
      exp_date: '',
    });
    console.log('Submitted item:', newItem);
  };



  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Amount:
        <input
          type="text"
          name="amount"
          value={formData.amount}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Expiry Date:
        <input
          type="date"
          name="exp_date"
          value={formData.exp_date}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit" >Submit</button>
    </form>
    </div>
  );
};

export default AddNewItem;
