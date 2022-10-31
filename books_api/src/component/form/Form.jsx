import { useEffect, useState } from "react";
import React from "react";
import { getBooksForUser, smallViewOfBook } from "../../func/logic";
import BookCard from "../bookCard/BookCard";

const Form = () => {
	const [query, setQuery] = useState("");
	const onInputChange = (event) => {
		setQuery(event.target.value);
	};

	const getBooks = async (event) => {
		event.preventDefault();
		let retrieve = await getBooksForUser(query);
		let formatted = await smallViewOfBook(retrieve);
		console.log(formatted);
		// return formatted.map((book, i) => {
		// 	<div key={i}>
		// 		{console.log(i)}
		// 		<h3>{book.title}</h3>
		// 		{console.log(book.title)}
		// 		<h4>{book.authors}</h4>
		// 		{console.log(book.authors)}
		// 		<img src={book.image} alt={`${book.title} book cover`} />
		// 	</div>;
		// });
		<BookCard formatted />;
	};

	// let currentLot = getBooksForUser(query);
	// let fetchedBookClean = smallViewOfBook(currentLot);

	return (
		<>
			<div>
				<input
					type="text"
					name="query"
					value={query}
					onChange={onInputChange}
				/>
				<button type="button" name="subButton" onClick={getBooks}>
					Search
				</button>
			</div>
			<div>{}</div>
		</>
	);
};

export default Form;
