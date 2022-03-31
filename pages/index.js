/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import styles from '../styles/Home.module.css';
import firebase from '../firebase/firebaseInit';
import readFirestore from '../firebase/readFirestore'
import { useAuth } from '../context/authContext';

firebase();


export default function Home() {
  const {currentUser} = useAuth()
  return (
    <>
      <Head>
        <title> CMS | Landing Site</title>
      </Head>
      <div>
        <h1>Welcome to CMS</h1>
        <text>The current user is: ${currentUser}</text>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy
        </p>
      </div>
    </>
  );
}
