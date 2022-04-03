import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { auth } from '../../firebase/firebaseInit';

export default function StaffLogin() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push('/staffpanel/staffhub');
  };

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  const login = async (e) => {
    e.preventDefault();
    console.log(e.target);
    try {
      const user = await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
      router.push('/staffpanel/staffhub');
      console.log(user);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

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
            <h1 className=" text-lg">Staff Login Area</h1>
            <div className="form-content">
              <div className="input-field">
                <input
                  pattern=".+@rafac\.uk"
                  title="Please provide only a RAFAC e-mail address"
                  type="email"
                  required
                  placeholder="Email"
                  autoComplete="nope"
                  onChange={(event) => {
                    setSignInEmail(event.target.value);
                  }}
                />
              </div>
              <div className="input-field">
                <input
                  type="password"
                  required
                  placeholder="Password"
                  autoComplete="new-password"
                  onChange={(event) => {
                    setSignInPassword(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="action">
              <button
                value="Send Request"
                type="submit"
                onClick={(e) => {
                  login(e);
                }}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
