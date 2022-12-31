// photo
import votingphoto from '../../assets/Voting-in-College.webp'

// styles
import styles from './Login.module.css'

export default function login() {
    return (
        <>
            <img src={votingphoto} className={styles.mainphoto}/>
            <div className={styles.loginBackground}>
                <h1>Sign In</h1>
                <h5>Sign in and Vote for your Candidates</h5>
                <form>
                    {/*
                    <label>Enter your college email </label>
                    */}
                    <input 
                        type="text" 
                        placeholder="Enter your College Email"
                    ></input>

                    {/*
                    <label>Enter your password </label>
                    */}
                    <br/>
                    <input 
                        type="password" 
                        placeholder="Enter your password"
                    ></input>
                </form>
                <button className={styles.loginButton}>Login</button>
            </div>
        </>
    )
}