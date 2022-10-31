import React from "react";
import styles from "./BookCard.module.scss";
const BookCard = ({ bookInfo }) => {
	return (
		<div className={styles.Card}>
			<h3>{bookInfo.title}</h3>
			{console.log(bookInfo.title)}
			<h4>{bookInfo.authors}</h4>
			{console.log(bookInfo.authors)}
			<img
				className={styles.coverImage}
				src={bookInfo.image}
				alt={`${bookInfo.title} book cover`}
			/>
		</div>
	);

	// return bookInfo.map((book, i) => {
	// 	<div key={i}>
	// 		{console.log(i)}
	// 		<h3>{book.title}</h3>
	// 		{console.log(book.title)}
	// 		<h4>{book.authors}</h4>
	// 		{console.log(book.authors)}
	// 		<img src={book.image} alt={`${book.title} book cover`} />
	// 	</div>;
	// });
};

export default BookCard;
