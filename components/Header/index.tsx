import styles from "./header.module.scss";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/image";

function Header() {
    const { user, error, isLoading } = useUser();

    return (
        <header className={styles["header"]}>
            <h1 className={styles["header__logo"]}>
                <Link href="/">
                    <a className={styles["header__link"]}>Craftial</a>
                </Link>
            </h1>
            <div className={styles["account"]}>
                <span className={styles["account__item"]}>
                    <Link href="/newOffer">
                        <a className={styles["account__link"]}>
                            <Image src="/plus.svg" width="32px" height="32px" alt="Create a new offer" />
                        </a>
                    </Link>
                </span>
                <span className={styles["account__item"]}>
                    <Link href="/favorites">
                        <a className={styles["account__link"]}>
                            <Image src="/heart.svg" width="24px" height="24px" alt="Redirect to favorite offers" />
                        </a>
                    </Link>
                </span>
                {user ? (
                    <>
                        <Link href="/api/auth/logout">
                            <a
                                className={`${styles["account__link"]} ${styles["account__link--white"]}`}
                            >
                                Logout
                            </a>
                        </Link>
                    </>
                ) : (
                    <Link href="/api/auth/login">
                        <a
                            className={`${styles["account__link"]} ${styles["account__link--white"]}`}
                        >
                            Login
                        </a>
                    </Link>
                )}
            </div>
        </header>
    );
}

export default Header;
