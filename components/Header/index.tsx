import styles from "./header.module.scss";

function Header() {
    return (
        <header className={styles["header"]}>
            <h1 className={styles["header__logo"]}>Craftial</h1>
            <form className={styles["form"]}>
                <input
                    type="search"
                    placeholder="Search for..."
                    className={styles["form__input"]}
                />
                <input
                    type="submit"
                    value="🔍"
                    className={styles["form__input--submit"]}
                />
            </form>
            <div className={styles["account"]}>
                <span className={styles["account__item"]}>
                    <p>💙</p>
                </span>
                <span className={styles["account__item"]}>
                    <p>🧔</p>
                </span>
            </div>
        </header>
    );
}

export default Header;
