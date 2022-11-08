import styles from "./Book.module.scss";

const Book = ({ title, authors, image }) => {
	// if ({ title } == "") {
	// 	return (
	// 		<div className={styles.Card}>
	// 			<h1>
	// 				Sorry, you entered an empty query. please try typing in the box above
	// 				and searching agin
	// 			</h1>
	// 		</div>
	// 	);
	// } else {
	return Book ? (
		<div className={styles.Card}>
			<h3>Title: {title}</h3>
			<h4>{authors}</h4>
			<img
				className={styles.coverImage}
				src={image}
				alt={`${title} book cover`}
			/>
		</div>
	) : (
		<div>
			<h1>
				Sorry, you entered an empty query. please try typing in the box above
				and searching agin
			</h1>
		</div>
	);
};
export default Book;
