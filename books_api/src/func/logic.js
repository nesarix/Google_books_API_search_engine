export const getBooksForUser = async (userInput) => {
	const nospace = userInput.trim().replace(/\s/g, "+");
	let url = `https://www.googleapis.com/books/v1/volumes?q=${nospace}`;
	let response = await fetch(url);
	let data = await response.json();
	return data;
};

export const tidyBook = (book) => {
	const { id, volumeInfo } = book;
	const { title, authors, description, imageLinks } = volumeInfo;
	const authorString = authors?.join(", ");
	return {
		id,
		title,
		authors: authorString,
		description,
		image: imageLinks.thumbnail,
	};
};
//map over search results getting key value pairs
export const smallViewOfBook = async (fetchedData) => {
	let booksArr = fetchedData.items; //returns an array of objects
	// console.log(booksArr); //checkin it worked
	// console.log(booksArr[0].volumeInfo.title); // looking at how to get title
	return booksArr.map(tidyBook);
};
