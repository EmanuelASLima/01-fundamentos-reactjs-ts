import styles from "./Header.module.css";
import igniteLogo from "../assets/fireball.svg";
export function Header() {
  return (
    <div>
      <header className={styles.header}>
        <img src={igniteLogo} />
        <strong>Commet Feed</strong>
      </header>
    </div>
  );
}
