import Book from "../../component/Book/Book.jsx";
import styles from "./BookCards.module.scss";
const BookCards = ({ books }) => {
	console.log(books);
	if (books.length !== 0) {
		let lotsOfBooks = books?.map((book, index) => {
			return (
				<div className={styles.cardComponent} key={index}>
					<Book title={book.title} authors={book.authors} image={book.image} />
				</div>
			);
		});
		return lotsOfBooks;
	} else {
		return (
			<div className={styles.error}>
				<p>
					Sorry, you entered an empty query. please try typing in the box above
					and searching again
				</p>
			</div>
		);
	}
};

export default BookCards;
