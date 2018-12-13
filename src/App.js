import React, { Component } from 'react';
import './App.css';
// Name of the component starting with capital letter i.e Person
import Person from './Person/Person';
class App extends Component {
		state = {
			persons: [
					{name: 'Mahesh Pote', age: 28},
					{name: 'Rakesh Kale', age: 32},
					{name: 'Amol Marathe', age: 34}
			]
		}

		// Onclick event handler
		switchNameHandler = (newName, age) => {
			//console.log("Was Clicked.");
			// To set the state.
		  this.setState({
		  	persons: [
					{name: newName, age: age},
					{name: 'Menu', age: 32},
					{name: 'Kamlesh', age: 30}]
		  	})
		}

		nameChangeHandler = (event) => {
			 this.setState({
		  	persons: [
					{name: 'maxmilan', age: '27'},
					{name: event.target.value, age: 32},
					{name: 'Kamlesh', age: 30}
				]
		  })
		}

    render() {
        return ( 
        	<div className="App">
	        		<label> The Great Technology. </label>
	            <h1> Hi i am react app5. </h1>   
	            <p>This is really working fine.</p>

	            <button onClick={this.switchNameHandler.bind(this, 'Pandurang Marathe', '52')}>Switch Name</button>	

	            <Person name = {this.state.persons[0].name} 
	            				age  = {this.state.persons[0].age}>
	            				<strong>Hobbies: Football</strong>
	            </Person>
	            <Person name 	 = {this.state.persons[1].name} 
	            				age  	 = {this.state.persons[1].age}
	            			  click  = {this.switchNameHandler.bind(this, 'Tathya', '53')}
	            			  change = {this.nameChangeHandler}>And My Hobbies : Singing, Dancing.
	            </Person>
	            <Person name = {this.state.persons[2].name} 
	            				age  = {this.state.persons[2].age} />
          </div>
        );
    }
}

export default App;