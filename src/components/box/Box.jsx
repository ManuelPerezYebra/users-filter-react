import { useState } from 'react';
import { StyledBox } from './box.styles';

/* 
  Siempre que se pueda el estado debe ser un número o un booleano

*/

const Box = () => {
	const [isOrange, setIsOrange] = useState(true);
	return (
		<>
			<StyledBox $isOrange={isOrange} />
			<button onClick={() => changeColor(isOrange, setIsOrange)}>
				CHANGE COLOR
			</button>
		</>
	);
};

const changeColor = (isOrange, setIsOrange) => {
	setIsOrange(!isOrange);
};

export default Box;
