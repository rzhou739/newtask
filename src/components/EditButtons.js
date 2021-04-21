import "../styles/EditButtons.css";
import React from "react";
import { PropsTypes } from 'react'

// red 和 handlecolor是select的function
const EditButtons = ({ handleSave, saveLabel, handleDelete, handleCancel,handleColor,red}) => (

  
  <div className="Edit-Buttons">
    <div
      tabIndex="0"
      className="Edit-Button"
      style={{ backgroundColor: "#5aac44" }}
      onClick={handleSave}
    >
     {saveLabel}
     
    </div>
    
    {handleDelete && (
      <div
        tabIndex="0"
        className="Edit-Button"
        style={{ backgroundColor: "#EA2525", marginLeft: 0 }}
        onClick={handleDelete}
      >
        Delete
      </div>

      
    )}
    
    <div tabIndex="0" className="Edit-Button-Cancel" onClick={handleCancel}>
      <ion-icon name="close" />
    </div>
    



    { handleColor&&(

    <select value = {red} onChange={handleColor} style={{backgroundColor:red}}>
    <option value="red" >Red</option>
    <option value="green">Green</option>
    <option value="yellow">Yellow</option>
    </select>
    )}
  </div>


);

export default EditButtons;

