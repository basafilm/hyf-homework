import React, { useState, useEffect, useContext } from "react";
import { userContext } from "./UserContext";

function SearchGithub() {
	const { user } = useContext(userContext);

	const [data, setData] = useState([]);

	useEffect(() => {
		if (!user) return;

		const fetchData = async () => {
			let response = await fetch(
				`https://api.github.com/search/users?q=${user}`,
			).then((response) => response.json());

			setData(response.items);
		};

		fetchData();
	}, [user]);

	if (!user) {
		return `No results `;
	}
	if (data.length === 0) {
		return "Loading ...";
	}

	return (
		<React.Fragment>
			<ul style={{ listStyle: "none" }}>
				{data.map((item) => {
					return (
						<li key={item.id}>
							<a
								style={{ textDecoration: "none" }}
								href={item.html_url}
								target="_blank"
								rel="noopener noreferrer"
							>
								{item.login}
							</a>
						</li>
					);
				})}
			</ul>
		</React.Fragment>
	);
}

export default SearchGithub;
