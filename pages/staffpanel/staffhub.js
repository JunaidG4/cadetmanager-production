import Head from "next/head";
import { useRouter } from "next/router";
import { db, colRef } from "../../firebase/firebaseInit";
import { useEffect, useState } from "react";
import { collection, setDoc, addDoc, onSnapshot, doc } from "firebase/firestore";


export default function StaffHub() {
    const router = useRouter();

    const handleClick = e => {
        e.preventDefault()
        router.push('/staffpanel/enrolledCadets')
    }

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
            <title>CMS | Staff Hub</title>
        </Head>
        <div>
            <h1>Welcome to Staff Hub</h1>
                <div className="enrolledbox">
                    <h2 className="enrolled">Enrolled Cadets: { cadets.length }</h2>
                    <div className="action">
                        <button className="button-81" type="button" onClick={handleClick}>View Cadets</button>
                    </div>  
                </div>
                    
        </div>
        </>
     );
}
 

