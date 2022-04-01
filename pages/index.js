/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import styles from '../styles/Home.module.css';
import firebase from '../firebase/firebaseInit';
import readFirestore from '../firebase/readFirestore'


firebase();


export default function Home() {

  return (
    <>
      <Head>
        <title> CMS | Landing Site</title>
      </Head>
      <div>

        <div className='welcomeTo'>
          <h2 className='welcomeText'>Welcome to CMS</h2>
        <div className='welcomeContent'>
          <h3>
          CMS is the cadet management system accessible by members of the RAFAC and any permanent HQ staff.
          It is tool for responsible use only. Any unauthorised entry strictly breaches the terms of use provided by the relevent ACP.
          </h3>
        </div>
        
        </div>

      </div>
    </>
  );
}
