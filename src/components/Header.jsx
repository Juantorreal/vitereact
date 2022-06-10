import styles from './Header.module.css'
import ignitelogo from '../assets/ignite-logo.svg';

console.log(ignitelogo)

export function Header() {
    return (
        <header className={styles.header}>
        <img src={ignitelogo} alt="Logotipo Ignite"/>
        </header> 
    );
} 
