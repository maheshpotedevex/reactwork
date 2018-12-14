import React, { Component } from 'react';
import './App.css';
// Name of the component starting with capital letter i.e Person
import Person from './Person/Person';
class App extends Component {
		state = {
				persons: [
						{id: '1456', name: 'Mahesh Pote', age: 28},
						{id: '7896', name: 'Rakesh Kale', age: 32},
						{id: '4578', name: 'Amol Marathe', age: 34}
				],
				otherState: 'Something other value',
				showPersons: false
		}

		deletePersonHandler = (personIndex) => {
				//const persons = this.state.persons.slice();
				const persons = [...this.state.persons];  // Use spread operator for updating element.
				persons.splice(personIndex, 1); // Delete one element from an array.
				this.setState({persons: persons});
		}
		// Toggle person Handler
		togglePersonsHandler = () => {
			const doesShow = this.state.showPersons;
			this.setState({showPersons: !doesShow})
		}

		nameChangeHandler = (event) => {
			 this.setState({
		  	persons: [
					{ name: 'maxmilan', age: '27'},
					{ name: event.target.value, age: 32},
					{ name: 'Kamlesh', age: 30}
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
    								{this.state.persons.map((person, index) => {
    										return <Person 
    														click = { () => this.deletePersonHandler(index)}
    														name = {person.name} 
    														age = {person.age} 
    														key = {person.id}/> 
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