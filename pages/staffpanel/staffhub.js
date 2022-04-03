/* eslint-disable prettier/prettier */
import Head from 'next/head';
import { useRouter } from 'next/router';
import { db, auth } from '../../firebase/firebaseInit';
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function StaffHub() {
  const router = useRouter();

  const handleCadetClick = (e) => {
    e.preventDefault();
    router.push('/staffpanel/enrolledCadets');
  };

  const handleEventsClick = (e) => {
    e.preventDefault();
    router.push('/staffpanel/eventsManager');
  };

  const handleStaffClick = (e) => {
    e.preventDefault();
    router.push('/staffpanel/staffMembers');
  };

  const [cadets, setCadets] = useState([{ forename: 'Loading...', surname: 'Loading...' }]);

  useEffect(
    () =>
      onSnapshot(collection(db, 'cadets'), (snapshot) =>
        setCadets(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))),
      ),
    [],
  );

  const [staffMem, setStaff] = useState([
    {
      forename: 'Loading...',
      surname: 'Loading...',
      rank: 'Loading...',
      status: 'Loading...',
      clearance: 'Loading...',
    },
  ]);

  useEffect(
    () =>
      onSnapshot(collection(db, 'staff'), (snapshot) =>
        setStaff(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))),
      ),
    [],
  );

  const [events, setEvents] = useState([
    {
      eventname: 'Loading...',
      eventDate: 'Loading...',
      uniform: 'Loading...',
      isLive: 'Loading...',
    },
  ]);

  useEffect(
    () =>
      onSnapshot(collection(db, 'events'), (snapshot) =>
        setEvents(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))),
      ),
    [],
  );

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const register = async (e) => {
    e.preventDefault();
    console.log(e.target);
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Head>
        <title>CMS | Staff Hub</title>
      </Head>
      <div>
        <h1>Welcome to Staff Hub</h1>
        <div className="hubTiles">
          <div className="enrolledbox">
            <h2 className="enrolled">Enrolled Cadets: {cadets.length}</h2>
            <div className="action">
              <button className="button-81" type="button" onClick={handleCadetClick}>
                View Cadets
              </button>
            </div>
          </div>
          <div className="enrolledbox">
            <h2 className="enrolled">Events Organised: {events.length}</h2>
            <div className="action">
              <button className="button-81" type="button" onClick={handleEventsClick}>
                View Events
              </button>
            </div>
          </div>
          <div className="enrolledbox">
            <h2 className="enrolled">Staff Members: {staffMem.length}</h2>
            <div className="action">
              <button className="button-81" type="button" onClick={handleStaffClick}>
                View Events
              </button>
            </div>
          </div>
        </div>

        <div className="login-form">
          <form className="login">
            <h1>Register New User</h1>
            <div className="form-content">
              <div className="input-field">
                <input
                pattern=".+@rafac.uk"
                title="Please provide only a RAFAC e-mail address"
                required
                  type="email"
                  placeholder="Email"
                  autoComplete="nope"
                  onChange={(event) => {
                    setRegisterEmail(event.target.value);
                  }}
                />
              </div>
              <div className="input-field">
                <input
                required
                  type="password"
                  placeholder="Password"
                  autoComplete="new-password"
                  onChange={(event) => {
                    setRegisterPassword(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="action">
              <button 
              type="submit" 
              onClick={(e) => {
                register(e);
              }}>
                Register User
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
