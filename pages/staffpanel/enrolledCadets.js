import Head from "next/dist/shared/lib/head";
import { collection, setDoc, addDoc, onSnapshot, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, colRef } from "../../firebase/firebaseInit";
import { useRouter } from "next/router";
import { handleCadet } from "./staffpanelUtils";
  
  export default function enrolledCadets() {

    const [cadets, setCadets] = useState([{ forename: "Loading...", surname: "Loading...", rank: "Loading..." }]);
  
    useEffect(
      () =>
        onSnapshot(collection(db, "cadets"), (snapshot) =>
          setCadets(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        ),
      []
    );

    const router = useRouter();

    const handleHub = e => {
      e.preventDefault()
      router.push('/staffpanel/staffhub')
    }
  
    return (
        <>
          <Head>
              <title>CMS | Enrolled Cadets</title>
          </Head>
          <div className="goBackToStaff">
          <button className="button-81" onClick={handleHub}>Back To The Hub</button>
          </div>

          <h1>Enrolled Cadets</h1>
          <div className="cadetNameContainer">
          {cadets.map((cadet) => (
              <div className="cadetnames">
                  <div key={(cadet.id)}>
                      <a>
                          <h3>{cadet.rank} {cadet.forename} {cadet.surname}</h3>
                          <h4>Enrolled: {cadet.enrolledDate}</h4>
                      </a>
                  </div>
              </div>
          ))}
          </div>
          <div className="addCadet">
          <button className="button-81" onClick={handleCadet}>Add Cadet</button>
          </div>
          
        </>
      
    );
  }