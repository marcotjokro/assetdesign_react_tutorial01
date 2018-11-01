import React, { Component } from 'react';

class Counter extends Component {
  
	state={
		num:0
	}
	
	handleSubstract=()=>{
//		console.log("Substract");
		var newNum = this.state.num-1;
		this.setState({
			num: newNum
		})
	}
	
	handleAdd=()=>{
//		console.log("Add");
		var newNum = this.state.num+1;
		this.setState({
			num: newNum
		})
	}
	
	handleMultiply=()=>{
		var newNum = this.state.num*2;
		this.setState({
			num: newNum
		})
	}
	
	handleDivide=()=>{
		var newNum = this.state.num/2;
		this.setState({
			num: newNum
		})
	}
	
	render() {
    return (
      <div className="flexBox">
        <div className="flexTitle">Hi Welcome to my app</div>
				<div className="butBox">
					<button onClick={this.handleSubstract}>Substract</button>
					<button onClick={this.handleAdd}>Add</button>
					
				</div>
				<div className="butBox2">
					<button onClick={this.handleMultiply}>Multiply</button>
					<button onClick={this.handleDivide}>Divide</button>
				</div>
				<div className="numBox">
					{this.state.num}
				</div>
      </div>
    );
  }
}

export default Counter;
