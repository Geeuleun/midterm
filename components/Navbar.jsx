
import styles from "./Navbar.module.css";
import { FaArrowCircleDown, FaArrowDown, FaShopify } from 'react-icons/fa';
import { useSession, signIn, signOut } from "next-auth/react";

const navbar = () => {
return (
    <div className={styles.container}>
        <div>
        <h1 className={styles.logo}>Tinker</h1>
    </div>
    <div className={styles.Menu}>
    <h2 className={styles.menu}>Menu<FaArrowCircleDown/></h2>
    </div>
    <div className="searchbar">
        <form>
            <input className={styles.search} type="text" name="search" placeholder="Find books here"/>
        </form>
        </div>
        <h1 className={styles.shopify}><FaShopify /></h1>
        <div className={styles.createacc}>
            <button>Create Account</button></div>
        <div className={styles.signin}>
            <button>Sign in</button></div>
    </div>
);
};
export default navbar;
