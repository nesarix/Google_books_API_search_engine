export const getBooksForUser = async (userInput) => {
	const nospace = userInput.trim().replace(/\s/g, "+");
	let url = `https://www.googleapis.com/books/v1/volumes?q=${nospace}`;
	let response = await fetch(url);
	if (response.ok == false) {
		return { items: [] };
	}
	let data = await response.json();
	return data;
};

export const tidyBook = (book) => {
	const { id, volumeInfo } = book;
	const { title, authors, description, imageLinks } = volumeInfo;
	const authorString = authors?.join(", ");
	const titleString = title ? title : "sorry, no title available";
	const descString = description
		? description
		: "sorry, no description available";
	const image = imageLinks?.thumbnail
		? imageLinks.thumbnail
		: "https://crawfordroofing.com.au/wp-content/uploads/2018/04/No-image-available.jpg";
	return {
		id,
		title: titleString,
		authors: authorString,
		description: descString,
		image: image,
	};
};
export const smallViewOfBook = async (fetchedData) => {
	let booksArr = await fetchedData.items; //returns an array of objects
	return booksArr.map(tidyBook);
};
