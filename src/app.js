import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
	const number = useSelector((state) => state.test.number);
	const dispatch = useDispatch();
	return (
		<>
			<div>Google books finder!!</div>
			<div>{`number ${number}`}</div>
			<div
				style={{ height: '50px', width: '80px', backgroundColor: 'blue' }}
				onClick={() => dispatch({ type: 'ADD_ONE' })}
			>
				Add 1
			</div>
		</>
	);
};

export default App;
