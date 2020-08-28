import React from "react";

function SearcheInput({ users, setUsers }) {
	return (
		<form>
			<input
				type="text"
				value={users}
				onChange={(event) => setUsers(event.target.value)}
			/>
		</form>
	);
}

export default SearcheInput;
