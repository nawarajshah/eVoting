import { Link } from "react-router-dom"

// styles
import styles from './Navbar.module.css'

export default function Navbar() {

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>eVoting</li>

        <li><Link to="/vote">Vote</Link></li>
        <li><Link to="/result">Result</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/login">Login</Link></li>

      </ul>
    </nav>
  )
}