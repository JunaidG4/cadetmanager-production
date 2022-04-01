import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { auth } from "../firebase/firebaseInit";
import { 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut 
} from "firebase/auth";

const Navbar = () => {

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const logout = async () => {
        await signOut(auth);
        };

    return ( 
        <nav>
            <div className="logo">
                <Image src="/RAFAC.PNG" width={128} height={80}/>
            </div>
            <div className="cmstitle">
                <h1>Cadet Management System</h1>
            </div>
            <div className="links">
            <Link href="/"><a>Landing Site</a></Link>
            <Link href="/cadetpanel"><a>Cadet Login</a></Link>
            <Link href="/staffpanel"><a>Staff Login</a></Link>
            </div>
            <div className="loggedInStatus">
            <h4 className="loggedin"> User Logged In: {user?.email}</h4>
                        

                         <button className="button-81" onClick={logout}> Sign Out </button>
            </div>
        </nav> 
        
    );
}
 
export default Navbar;