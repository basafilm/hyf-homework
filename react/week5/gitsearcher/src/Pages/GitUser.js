import React, { useState, useEffect } from "react";

export default function GitUser({ match }) {
	const [user, setuser] = useState({});
	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await fetch(
					`https://api.github.com/users/${match.params.id}`,
				).then((response) => response.json());

				setuser(response);
			} catch (error) {
				return console.error();
			}
		};

		fetchUser();
	}, [match]);

	if (!user.login) {
		return (
			<>
				<p>User not fund!</p>
			</>
		);
	} else {
		return (
			<>
				<h2>Github user:</h2>
				<img src={user.avatar_url} alt={user.avatar_url} />
				<ul>
					<li>
						{" "}
						<span>Owner: </span> {user.name}
					</li>
					<li>
						<span>Login: </span> {user.login}
					</li>
					<li>
						{" "}
						<span>Created Date: </span> {user.created_at}
					</li>
					<li>
						<span>Bio: </span>
						{user.bio}
					</li>
					<li>
						<span>Location: </span>
						{user.location}
					</li>
					<li>
						<span>Followers: </span>
						{user.followers}
					</li>
					<li>
						<span>Following: </span>
						{user.following}
					</li>
					<li>
						<span>Last update: </span>
						{user.updated_at}
					</li>
					<li>
						<span>Twitter: </span>
						{user.twitter_username}
					</li>
					<li>
						{" "}
						<span>User's url: </span>
						<a href={user.html_url}>
							<button> Visit</button>
						</a>
					</li>
				</ul>
			</>
		);
	}
}
