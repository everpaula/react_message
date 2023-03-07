import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
          <img className={styles.cover} src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" />  

          <div className={styles.profile}>
            <Avatar src="https://github.com/evpaula.png" />

            <strong>Everton Paula</strong>
            <span>Web Developer</span>
          </div>

          <footer>
            <a href='#'>
                Edit Profile
            </a>
          </footer>
        </aside>
    );
}