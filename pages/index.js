/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import firebase from '../firebase/firebaseInit';
import {useContext} from 'react';
import {auth} from '../firebase/firebaseInit';
import {AuthRoute} from '../components/authRoute/authRoute';
import {AuthContext} from '../context/authContext';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';


firebase();

function Home() {

  const router = useRouter();

  const quickCadet = (e) => {
    e.preventDefault();
    router.push('/cadetpanel');
  };

  const quickStaff = (e) => {
    e.preventDefault();
    router.push('/staffpanel');
  };



  

  const signOutHandle = async () => {
    await signOut(auth)
  }

  return (
    <authRoute>
        <>
          <Head>
            <title> CMS | Landing Site</title>
          </Head>
          <main>
          <div>
            <div className="welcomeTo">
              <h2 className={styles.Head}>Welcome to CMS</h2>
              <div className="welcomeContent">
                <h3>
                  CMS is the cadet management system accessible by members of the RAFAC and any
                  permanent HQ staff. It is tool for responsible use only. Any unauthorised entry
                  strictly breaches the terms of use provided by the relevent ACP.
                </h3>
              </div>
            </div>

            <div className="missionStatement">
              <h2 className={styles.Head}>Defining a Modern Squadron</h2>
              <div className="welcomeContent">
                <h3>
                  The Cadet Management System aims to equip the modern RAFAC squadron with the technologies to become more efficient,
                  secure and professional. 
                </h3>
              </div>
            </div>

            <div className="quicknav">
              <h2 className={styles.Head}>Quick Navigation</h2>
              <div className="welcomeContent">
              <button className="button-81qn" type="button" onClick={quickCadet}>
                I'm a Cadet
              </button>
              <button className="button-81qn" type="button" onClick={quickStaff}>
                I'm Staff
              </button>
              </div>
            </div>
          </div>
          </main>
        </>

    </authRoute>
    
  );
}


export default Home