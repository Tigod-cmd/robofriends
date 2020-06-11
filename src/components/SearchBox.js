import React from 'react';

const SearchBox = ({searchChange, buttonChange}) => {
	return (
	<div className="search-bar pa2">
		<input 
			className="pa3 ba b--green bg-lightest-blue"
			type="search" 
			placeholder="Search for robot"
			onChange={searchChange}
		/>
	</div>
	);
}

export default SearchBox;



