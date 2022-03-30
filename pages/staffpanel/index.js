import Head from "next/head";
import { useRouter } from "next/router";



export default function StaffLogin() {
    const router = useRouter();

    const handleClick = e => {
        e.preventDefault()
        router.push('/staffpanel/staffhub')
    }
    
    return ( 
        <>
        
            <Head>
            <title> CMS | Staff Login</title>
            </Head>
            <div>
                <div className="login-form">
                    <form>
                        <h1>Staff Login Area</h1>
                        <div className="form-content">
                        <div className="input-field">
                            <input type="email" placeholder="Email" autoComplete="nope" />
                        </div>
                        <div className="input-field">
                            <input type="password" placeholder="Password" autoComplete="new-password" />
                        </div>
                        <a href="#" className="link">Forgot Your Password?</a>
                        </div>
                        <div className="action">
                        <button type="button" onClick={handleClick}>Sign in</button>
                        </div>
                    </form>
                    </div>
            </div>
        </>
    );
}

 