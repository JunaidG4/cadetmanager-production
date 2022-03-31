import Head from "next/dist/shared/lib/head";
import { collection, setDoc, addDoc, onSnapshot, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, eventRef } from "../../firebase/firebaseInit";
import { useRouter } from "next/router";
import { handleEvent } from "./staffpanelUtils";

  
  
  export default function eventsManager() {

    const router = useRouter();

    const handleHub = e => {
      e.preventDefault()
      router.push('/staffpanel/staffhub')
    }

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
              <title>CMS | Events</title>
          </Head>
          <div className="goBackToStaff">
          <button className="button-81" onClick={handleHub}>Back To The Hub</button>
          </div>
          <h1>Events</h1>
          <div className="cadetNameContainer">
          {events.map((event) => (
              <div className="cadetnames">
                  <div key={(event.id)}>
                      <a>
                          <h3>{event.eventDate} | {event.eventname}</h3>
                          <h4>Uniform: {event.uniform}</h4>
                          <h4>Event Status: {event.isLive}</h4>
                      </a>
                  </div>
              </div>
          ))}
          </div>
          <div className="addCadet">
          <button className="button-81" onClick={handleEvent}>Add Event</button>
          </div>
          
        </>
      
    );
  }