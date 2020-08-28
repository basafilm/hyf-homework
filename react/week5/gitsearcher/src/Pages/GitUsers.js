import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

function GitUsers({ users }) {
	const [data, setData] = useState([]);

	useEffect(() => {
		if (!users) return;

		const fetchData = async () => {
			try {
				const getUsers = await fetch(
					`https://api.github.com/search/users?q=${users}`,
				).then((response) => response.json());

				setData(getUsers.items);
			} catch (e) {
				console.log(e.message);
			}
		};

		fetchData();
	}, [users]);

	if (!users) {
		return <p>No results / insert user name</p>;
	}
	if (!data) {
		return (
			<>
				<p> 403 (rate limit exeeded!) </p>
				<p>Tray to request again!</p>
				<Redirect to="/" />
			</>
		);
	}
	if (data.length === 0) {
		return <p>Loading ...</p>;
	} else {
		return (
			<div>
				<ul style={{ listStyle: "none" }}>
					{data.map((item) => {
						return (
							<li key={item.id}>
								<Link to={`/${item.login}`}>{item.login} </Link>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default GitUsers;
