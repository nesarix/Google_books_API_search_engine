import { useEffect, useState } from "react";
import React from "react";
import styles from "./Form.module.scss";
const Form = ({ onSearch }) => {
	const [query, setQuery] = useState("");
	const onInputChange = (event) => {
		setQuery(event.target.value);
	};

	const handleClick = () => {
		onSearch(query);
		setQuery(""); //clears search bar on submit
	};

	return (
		<>
			<div className={styles.pos}>
				<input
					type="text"
					name="query"
					placeholder="Hello"
					value={query}
					onChange={onInputChange}
					required
				/>
				<button type="button" name="subButton" onClick={handleClick}>
					Search
				</button>
			</div>
		</>
	);
};

export default Form;
