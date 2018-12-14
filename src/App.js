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
				],
				otherState: 'Something other value',
				showPersons: false
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
		// Toggle person Handler
		togglePersonsHandler = () => {
			const doesShow = this.state.showPersons;
			this.setState({showPersons: !doesShow})
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
    		// Inline style
    		const style = {
    			backgroundColor: 'white',
    			font:'inherit',
    			border: '1px solid blue',
    			padding: '8px',
    			cursor: 'pointer' 
    		}
    		let persons = null;
    		if (this.state.showPersons) {
    		persons = (
    						<div>
    								{this.state.persons.map(person => {
    										return <Person name = {person.name} age = {person.age} /> 
    								})}
				           
				        </div>
    				);
    		}

        return ( 
        	<div className="App">
	        		<label> The Great Technology. </label>
	            <h1> Hi i am react app5. </h1>   
	            <p>This is really working fine.</p>
	            <button style   = {style} 
	            				// onClick = {this.switchNameHandler.bind(this, 'Pandurang Marathe', '52')}>Switch Name
	            				onClick = {this.togglePersonsHandler}>Toggle Name
	            </button>	
	            {persons}		
          </div>
        );
    }
}

export default App;