import styles from "./Header.module.scss";
const Header = () => {
	return (
		<div className={styles.headerStyle}>
			<h4>Hello Traveler.</h4>
			<p>
				What knowledge do you seek? take a moment to search our tomes and magnum
				opi using a key word or phrase.
			</p>
		</div>
	);
};

export default Header;
