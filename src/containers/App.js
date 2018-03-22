import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from './../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
import Aux from './../hoc/Aux';
import withClass from './../hoc/withClasses'

class App extends PureComponent {

  constructor (props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    
    this.state = {
      persons: [
        { id: 12341234, name: 'Max', age: 28 },
        { id: 41234123, name: 'Manu', age: 29 },
        { id: 23542345, name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false
    }
  }

  componentWillMount () {
    console.log('[App.js] Inside componentWillMount()');

  }
  
  componentDidMount () {
    console.log('[App.js] Inside componentDidMount');
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); // Alternative :)
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { 
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]); Doing same as code above

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( {showPersons: !doesShow} );
  }

  // PureComponent optimizing shouldComponentUpdate() by itself
  // shouldComponentUpdate (nextProps, nextState) {
  //   console.log('[App.js] Inside shouldComponentUpdate', nextProps, nextState)
  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons;
  // }

  render() {
    console.log('[App.js] Inside Render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      />;
    }

    return (
      <Aux>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </Aux>
    );
    // Code above gets compiled to code below
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
