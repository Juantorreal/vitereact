import styles from './Sidebar.module.css'

export function Sidebar() {

return (
    <aside className={styles.sidebar}>
        <img    
        className={styles.cover}   
        src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"/>
        <div className={styles.profile}>
<strong>Juan Torreal</strong>
<span>Web Developer</span>
    </div>
    <footer>
        <a href="#">Editar seu perfil</a>
    </footer>
    </aside>

)

}