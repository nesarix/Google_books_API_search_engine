import { useEffect, useState } from "react";
import BookCard from "../../component/bookCard/BookCard";
// import getBooks

const Books = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		getBooks().then((books) => setBooks(books));
	}, []);

	return (
		<section>
			{books.map((bookData) => (
				<BookCard key={bookData.id} bookData={bookData} />
			))}
		</section>
	);
};

export default Books;
