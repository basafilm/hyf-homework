import React, { useState, useEffect } from "react";

function Hyf() {
	const [repos, setRepos] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			// read github user

			const githubUser = await fetch(
				`https://api.github.com/users/HackYourFuture-CPH/repos`,
			).then((response) => response.json());
			setRepos(githubUser);
		};
		fetchData();
	});

	const style = {
		listStyle: "none",
	};

	return (
		<ul style={style}>
			<h3>Hack Your Future-CPH Repos: </h3>
			{repos.map((repo) => {
				return (
					<li key={repo.id}>
						<a
							style={{ textDecoration: "none" }}
							href={repo.html_url}
							target="_blank"
							rel="noopener noreferrer"
						>
							{repo.name}
						</a>
					</li>
				);
			})}
		</ul>
	);
}

export default Hyf;
