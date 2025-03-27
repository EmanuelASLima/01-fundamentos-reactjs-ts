import { PencilLine } from "phosphor-react";
import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar.js";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="src/assets/2b.jpg" />
      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/202536518?v=4" />
        <strong>Manel</strong>
        <span>Professor</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} /> Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
