import { 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut 
} from "firebase/auth";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { auth } from "../../firebase/firebaseInit";



export default function StaffLogin() {
    const router = useRouter();

    const handleClick = e => {
        e.preventDefault()
        router.push('/staffpanel/staffhub')
    }

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const [signInEmail, setSignInEmail] = useState("")
    const [signInPassword, setSignInPassword] = useState("")

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword (
                auth,
                signInEmail,
                signInPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    }

    

    const logout = async () => {
    await signOut(auth);
    };

    
    return ( 
        <>
        
            <Head>
            <title> CMS | Staff Login</title>
            </Head>
            <div>
                <div className="login-form">
                    <form className="login">
                        <h1>Staff Login Area</h1>
                        <div className="form-content">
                        <div className="input-field">
                            <input type="email" required placeholder="Email" autoComplete="nope"  onChange={(event) => {setSignInEmail(event.target.value)}}/>
                        </div>
                        <div className="input-field">
                            <input type="password" required placeholder="Password" autoComplete="new-password"  onChange={(event) => {setSignInPassword(event.target.value)}}/>
                        </div>
                        </div>
                        <div className="action">
                        <button type="submit" onClick={login}>Sign in</button>
                        </div>
                    </form>
                    </div>
            </div>
        </>
    );
}

 