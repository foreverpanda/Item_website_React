import React, { useState } from 'react';
import AddNewItem from './components/AddNewItem';
import Data from './Data'; // Assuming Data.js exports the items array


function App(){

  // let items = Data;

  // const renderedItems = items.map((item) => (
  // <div>
  //   {item.name}
  //   {item.id}
  //   </div>
  // ));

  const handleNewItemSubmit = (newItem) => {
    // Handle the new item in the parent component
    console.log('Received new item in Parent:', newItem);
    // You can perform additional logic or update state in the parent as needed
  };


  return (
    <div>
      <AddNewItem onNewItemSubmit={handleNewItemSubmit}></AddNewItem>

      {/* {renderedItems} */}
    </div>
  );
};

export default App;
