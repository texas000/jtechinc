import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
	const [champ, setChamp] = useState([]);
	function getItem() {
		fetch(
			"http://ddragon.leagueoflegends.com/cdn/11.12.1/data/en_US/item.json"
		).then(async (result) => {
			const data = await result.json();
			setChamp(Object.entries(data.data));
			console.log(Object.entries(data.data));
		});
	}
	useEffect(() => {
		getItem();
	}, []);

	return (
		<div className="container">
			<Head>
				<title>Items</title>
				<link rel="icon" href="/favicon.ico" />

				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
					crossorigin="anonymous"
				/>
			</Head>
			<main>
				{champ.map((ga) => (
					<div className="card shadow py-4 px-4" key={ga["0"]}>
						<div className="row">
							<div className="col">
								<h2>{ga["1"].name}</h2>
							</div>
							<div className="col">
								<p>{ga["1"].plaintext}</p>
							</div>
							<div className="col">
								<img
									src={
										"http://ddragon.leagueoflegends.com/cdn/11.12.1/img/item/" +
										ga["1"].image.full
									}
									className="rounded mx-auto d-block"
								/>
							</div>
						</div>
					</div>
				))}
			</main>
		</div>
	);
}
