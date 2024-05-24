import styles from './Sidebar.module.css';
export function Sidebar () {
    return (
        <aside className = {styles.sidebar}>
            <img 
            className={styles.cover}
            src = "https://plus.unsplash.com/premium_photo-1678565999588-08fdd0b1410b?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
            <div className= {styles.profile}>
                <img className={styles.avatar} src="https://github.com/douferrigo.png" alt="" ></img>

                <strong>Douglas Ferrigo</strong>
                <span> Web Developer</span>
            </div>
            <footer>
                <a href="#">Editar seu perfil</a>  
            </footer>
        </aside>
    )
}