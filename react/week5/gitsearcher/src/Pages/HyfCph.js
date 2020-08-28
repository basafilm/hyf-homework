import React, { useState, useEffect } from "react";

function HyfCph() {
	const [repos, setRepos] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// read github user
				const githubUser = await fetch(
					`https://api.github.com/users/HackYourFuture-CPH/repos`,
				).then((response) => response.json());

				setRepos(githubUser);
			} catch (error) {
				console.error();
			}
		};
		fetchData();
	}, [repos]);

	return (
		<>
			<h2>Hyf-CPH Repos: </h2>
			<ul>
				{repos.map((repo) => {
					return (
						<li key={repo.id}>
							<a href={repo.html_url} target="_blank" rel="noopener noreferrer">
								{repo.name}
							</a>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default HyfCph;
