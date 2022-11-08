import Header from "./container/header/Header";
import styles from "./App.module.scss";
import { useState, useEffect } from "react";
import Form from "./component/form/Form";
import { getBooksForUser, smallViewOfBook } from "./func/logic";
import BookCards from "./container/BookCards/BookCards";
const App = () => {
	const [carrySearch, setCarrySearch] = useState("hello"); //needs a default value or it gets hissy
	const [books, setBooks] = useState([]);

	const handleSearch = (string) => {
		setCarrySearch(string);
	};

	useEffect(() => {
		const getBooks = async () => {
			let currentSearch = await getBooksForUser(carrySearch);
			let smallView = await smallViewOfBook(currentSearch);
			setBooks(smallView);
		};
		getBooks();
	}, [carrySearch]);

	return (
		<div>
			<Header />
			<Form onSearch={handleSearch} />
			<div className={styles.cardDiv}>
				<BookCards books={books} />
			</div>
		</div>
	);
};

export default App;
