import React, { Component } from 'react';

class ColorPick extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        color: "Let's pick a color"
      };
      this.changeColor = this.changeColor.bind(this);
    }

    changeColor(event) {
      var colorInput = document.getElementById("colorInput").value;
      this.setState({
        color: '#' + event.target.value,
        backgroundColor: '#' + event.target.value
      });
      
      if (colorInput === '') {
        this.setState({
          color: "Let's pick a color",
          backgroundColor: "#fff",
      });
    }
   }
    
//    saveColor() {
//     var copyText = document.getElementById("myInput");
//     copyText.select();
//     document.execCommand("copy");
//     alert("Copied the text: " + copyText.value);
//    }

   componentDidMount() {
        console.log(this.state.backgroundColor);
   }
    
    render () {
      var styleObj = {
        backgroundColor: this.state.backgroundColor,
      };
      
      return (
        <section style={styleObj} id="color-picker" >
          <h2 className="colorHeader">{this.state.color}</h2> 
          <input id="colorInput" placeholder="Hex Code" onChange={this.changeColor}/>
          <button id="save-color">Save Color</button>
        </section>
      );
    }
}
  
export default ColorPick;
  