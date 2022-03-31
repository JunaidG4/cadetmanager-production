import Head from "next/dist/shared/lib/head";
import { collection, setDoc, addDoc, onSnapshot, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, colRef } from "../../firebase/firebaseInit";



  const handleCadet = async () => {
    const forename = prompt("Enter forename:")
    const surname = prompt("Enter surname:")
    const payload = {forename, surname};
    const docRef = await addDoc(colRef, payload);
    console.log("New ID is: " + docRef.id);
}
  
  export default function enrolledCadets() {

    const [cadets, setCadets] = useState([{ forename: "Loading...", surname: "Loading..." }]);
  
    useEffect(
      () =>
        onSnapshot(collection(db, "cadets"), (snapshot) =>
          setCadets(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        ),
      []
    );
  
    return (
        <>
          <Head>
              <title>CMS | Enrolled Cadets</title>
          </Head>
          <div>
          {cadets.map((cadet) => (
              <div className="cadetnames">
                  <div key={(cadet.id)}>
                      <a>
                          <h3>{cadet.forename} {cadet.surname}</h3>
                      </a>
                  </div>
              </div>
          ))}
          <div className="addCadet">
          <button className="button" onClick={handleCadet}>Add Cadet</button>
          </div>
          </div>
        </>
      
    );
  }