/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import styles from '../styles/Home.module.css';
import firebase from '../firebase/initFirebase';
import WriteToCloudFirestore from '../Components/cloudFirestore/Write';

firebase();

export default function Home() {
  return (
    <>
      <Head>
        <title> CMS | Landing Site</title>
      </Head>
      <div>
        <h1>Welcome to CMS</h1>
        <WriteToCloudFirestore />
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
