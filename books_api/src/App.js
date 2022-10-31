import Header from "./container/header/Header";
import styles from "./App.module.scss";
import { useState, useEffect } from "react";
import Form from "./component/form/Form";
import Books from "./container/books/Books";

const App = () => {
	return (
		<div>
			<Header />
			<Form />
			<Books />
		</div>
	);
};

export default App;
