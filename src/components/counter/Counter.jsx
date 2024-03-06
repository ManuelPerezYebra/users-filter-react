/* 
  ESTADO - STATE

  hooks - funciones internas de react
  todos los hooks empiezan por use....

  useState()

  TODO LO QUE CAMBIE EN PANTALLA DEBE SER UN ESTADO*

  *los cambios de CSS no están incluido


*/

import { useState } from 'react';

const Counter = () => {
	const [number, setNumber] = useState(0);
	const [name, setName] = useState('');

	return (
		<>
			<h1>Counter</h1>
			<h2>{number}</h2>
			<h2>{name}</h2>
			<button onClick={() => decrementCounter(number, setNumber)}>-1</button>
			<button onClick={() => reset(setNumber)}>Reset</button>
			<button onClick={() => incrementCounter(number, setNumber)}>+1</button>

			<button onClick={() => changeName('Bea', setName)}>Bea</button>
			<button onClick={() => changeName('Jaime', setName)}>Jaime</button>
			<button onClick={() => changeName('Diego', setName)}>Diego</button>
		</>
	);
};

const changeName = (name, setName) => {
	setName(name);
};

const incrementCounter = (number, setNumber) => {
	setNumber(number + 1);
};

const reset = setNumber => {
	setNumber(0);
};

const decrementCounter = (number, setNumber) => {
	setNumber(number - 1);
};

export default Counter;
