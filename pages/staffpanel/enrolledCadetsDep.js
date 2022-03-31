import Head from "next/head";
import ReadFirestore from "../../firebase/readFirestore";
import { collection, setDoc, addDoc, onSnapshot, doc } from "firebase/firestore";
import { db, colRef } from "../../firebase/firebaseInit";
import { useEffect, useState } from "react";

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { cadets: data }
    }
}

export const getTheCadets = async () => {

    const[cadetsNames, setCadets] = useState([]);

        useEffect(
            () => 
            onSnapshot(collection(db, "cadets"), (snapshot) =>
                setCadets(snapshot.docs.map(doc => doc.data()))
            )
        ),
    []

    return {
        cadetsNames
    }

}

const enrolledCadets = ({cadets}) => {

    const handleCadet = async () => {
        const forename = prompt("Enter forename:")
        const surname = prompt("Enter surname:")
        const payload = {forename, surname};
        const docRef = await addDoc(colRef, payload);
        console.log("New ID is: " + docRef.id);
    }


    return ( 
        <>
        <Head>
            <title>CMS | Enrolled Cadets</title>
        </Head>
        <div>
        <ReadFirestore />
        <button className="button" onClick={handleCadet}>Enroll Cadet</button>
        <form className="add" > 
        <label for="forename">Forename:</label>
        <input type="text" name="forename" required />
        <label label for="surname">Surname:</label>
        <input type="text" name="surname" required />
        <button className="button" onClick={handleCadet}>Enroll Cadet</button>
        </form>

            <h1>Enrolled Cadets</h1>
            {cadets.map(cadet => (
                <div className="cadetnames">
                    <div key={cadet.id}> 
                        <a>
                            <h3>CDT { cadet.name }</h3>
                            <h4>Username: { cadet.username }</h4>
                        </a>
                    </div>
                </div>
            ))}
        </div>
        </>
     );
}
 
export default enrolledCadets;

