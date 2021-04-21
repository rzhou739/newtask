import "../styles/CardEditor.css";
import React, { Component } from "react";
import TextareaAutosize from "react-textarea-autosize";
import EditButtons from "./EditButtons";
//import Card from "./Card";
//import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types'


class CardEditor extends Component {

  //static propsTypes ={
   // onColor:PropTypes.func.isRequired
  //}
  state = {
    text: this.props.text || "",
    // btn是color的初始值
    btn: ""
  };
  
  handleChangeText = event => this.setState({ text: event.target.value });

  onEnter = e => {
    const { text } = this.state;
    
    if (e.keyCode === 13) {
      e.preventDefault();
      this.props.onSave(text);
    }
  };
  

//create color function（创建的color function）
color=(Event) => {
    //Event.persist();  
    this.setState({btn:Event.target.value});
    this.props.onColor(Event.target.value);
    
  };
  
  render() {
    const { text,btn } = this.state;
    const { onSave, onCancel, onDelete,adding} = this.props;
    
    return (
      
      <div className="Edit-Card">
        <div
        className = "Button"
        Button="onClick"
        >
        </div>
        
        <div className="Card">
          <TextareaAutosize
            autoFocus
            className="Edit-Card-Textarea"
            placeholder="Enter the text for this card..."
            value={text}
            onChange={this.handleChangeText}
            onKeyDown={this.onEnter}
          />
          
        </div>
        {adding ?
        <EditButtons
          handleSave={() => onSave(text)}
          saveLabel={adding ? "Add card" : "Save"}
          handleDelete={onDelete}
          handleCancel={onCancel}
          red={btn}
        />
        :
        <EditButtons
          handleSave={() => onSave(text)}
          saveLabel={adding ? "Add card" : "Save"}
          handleDelete={onDelete}
          handleCancel={onCancel} // call select function
          handleColor={this.color} // call select function
          red={btn}
        />
        }
        
      </div>
        
    );
  }
}

export default CardEditor;
