import "../styles/Card.css";
//import { PropTypes } from 'react'
import React, { Component } from "react";
import { connect } from "react-redux";
import { Draggable } from "react-beautiful-dnd";
import CardEditor from "./CardEditor";
//import EditButtons from "./EditButtons";
//import PropTypes from 'prop-types'

class Card extends Component {

  state = {
    hover: false,
    editing: false,
    //color bttton颜色的初始值
    btn:''
    
  };
  
  startHover = () => this.setState({ hover: true });
  endHover = () => this.setState({ hover: false });

  startEditing = () =>
    this.setState({
      hover: false,
      editing: true,
      text: this.props.card.text,
      
    });

  endEditing = () => this.setState({ hover: false, editing: false , color:false});

  editCard = async text => {
    const { card, dispatch } = this.props;

    this.endEditing();

    dispatch({
      type: "CHANGE_CARD_TEXT",
      payload: { cardId: card._id, cardText: text }
    });
  };

  deleteCard = async () => {
    const { listId, card, dispatch } = this.props;

    dispatch({
      type: "DELETE_CARD",
      payload: { cardId: card._id, listId }
    });
  };
  //loadstate
  
 

 //change color function （改变颜色的function）
changeColor = async (Event) =>{
  this.setState({btn:Event});
  /*const {card,dispatch} = this.props;
  dispatch( {
    
    type: "CHANGE_CARD_COLOR",
    payload: { cardId: card._id, btn: Event }
  });*/
  //changeColor: this.props.color ? blue : red
}


  render() {
    const { card, index } = this.props;
    // btn 就是延续button的信息
    const { hover, editing, btn } = this.state;
    
    
    if (!editing) {
      return (
        <Draggable draggableId={card._id} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className="Card"
              onMouseEnter={this.startHover}
              onMouseLeave={this.endHover}
              //style={{border: `2px solid ${btn}`}}
              //style ={this.btn()}
            >
              <button style={{
                //border: `2px solid ${btn}`,
                height:20,
                width: 20,
                backgroundColor: btn,
                
                }}>
                      </button>
              {hover && (
                <div className="Card-Icons">
                  <div className="Card-Icon" onClick={this.startEditing}>
                    <ion-icon name="create" />
                    
                  </div>
                  
                  
                </div>
              )}
              
              {card.text}
            </div>
          )}
        </Draggable>
      );
    } else {
      return (
        <CardEditor
          text={card.text}
          onSave={this.editCard}
          onDelete={this.deleteCard}
          onCancel={this.endEditing}
          //onColor（call color function）
          onColor={this.changeColor}
          
        />

        
      );

    }
  }
}


const mapStateToProps = (state, ownProps) => ({
  card: state.cardsById[ownProps.cardId]
});


export default connect(mapStateToProps)(Card);
