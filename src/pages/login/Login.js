// photo
import votingPhoto from '../../assets/Voting-in-College.webp'

// styles
import styles from './Login.module.css'

export default function login() {
    return (
        <>
            <img src={votingPhoto} className={styles.mainPhoto}/>
            <div className={styles.loginBackground}>
                <h1>Sign In</h1>
                <h5>Sign in and Vote for your Candidates</h5>
                <form>
                    <div>
                        <label>Email address:  
                            <input 
                                type="text" 
                                placeholder="Enter your College Email"
                            ></input>
                        </label>
                    </div>

                    <br/>
                    <div>
                        <label>Password:
                            <input 
                                type="password" 
                                placeholder="Enter your password"
                            ></input>
                        </label>
                    </div>
                </form>
                <button className={styles.loginButton}>Login</button>
            </div>
        </>
    )
}