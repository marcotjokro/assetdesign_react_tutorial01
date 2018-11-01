import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Counter extends React.Component {
  
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
	
	render() {
    return (
      <View>
        <Text>Hi Welcome to my app</Text>
				<View>
					<Button 
						onPress={this.handleSubstract}
						title="Substract"
						/>
					<Button 
						onPress={this.handleAdd}
						title="Add"
						/>					
				</View>
				<View>
					{this.state.num}
				</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
