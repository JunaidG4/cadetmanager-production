import Head from "next/head";
import { useRouter } from "next/router";
import { db, colRef } from "../../firebase/firebaseInit";
import { useEffect, useState } from "react";
import { collection, setDoc, addDoc, onSnapshot, doc } from "firebase/firestore";


export default function StaffHub() {
    const router = useRouter();

    const handleCadetClick = e => {
        e.preventDefault()
        router.push('/staffpanel/enrolledCadets')
    }

    const handleEventsClick = e => {
        e.preventDefault()
        router.push('/staffpanel/eventsManager')
    }

    const [cadets, setCadets] = useState([{ forename: "Loading...", surname: "Loading..." }]);
  
    useEffect(
      () =>
        onSnapshot(collection(db, "cadets"), (snapshot) =>
          setCadets(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        ),
      []
    );

    const [events, setEvents] = useState([
        { eventname: "Loading...", 
        eventDate: "Loading...", 
        uniform: "Loading..." ,
        isLive: "Loading..."
        }]);
  
    useEffect(
      () =>
        onSnapshot(collection(db, 'events'), (snapshot) =>
          setEvents(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        ),
      []
    );

    return ( 
        <>
        <Head>
            <title>CMS | Staff Hub</title>
        </Head>
        <div>
            <h1>Welcome to Staff Hub</h1>
                <div className="enrolledbox">
                    <h2 className="enrolled">Enrolled Cadets: { cadets.length }</h2>
                    <div className="action">
                        <button className="button-81" type="button" onClick={handleCadetClick}>View Cadets</button>
                    </div>  
                </div>
                <div className="enrolledbox">
                    <h2 className="enrolled">Events Organised: { events.length }</h2>
                    <div className="action">
                        <button className="button-81" type="button" onClick={handleEventsClick}>View Events</button>
                    </div>  
                </div>
                    
        </div>
        </>
     );
}
 

