import { useState } from 'react';

const Range = () => {
	const [rangeValue, setRangeValue] = useState(5);
	return (
		<>
			<h1>{rangeValue}</h1>
			<input
				type='range'
				value={rangeValue}
				min={0}
				max={10}
				onChange={event => changeValue(event.target.value, setRangeValue)}
			/>
		</>
	);
};

const changeValue = (value, setRangeValue) => {
	setRangeValue(value);
};

export default Range;
