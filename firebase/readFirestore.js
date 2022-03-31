import {db, colRef} from './firebaseInit'
import { collection, getFirestore, getDocs } from 'firebase/firestore';


const ReadFirestore = () => {

    const readData = () => {
    
        //call getdocs on collection reference and log to console
        getDocs(colRef)
        .then((snapshot) => {
          let cadets = []
          snapshot.docs.forEach((doc) => {
            cadets.push({...doc.data(), id: doc.id})
          })
          console.log(cadets)
        })
        .catch(err => {
          console.log(err.message)
        })

    }

    return (
        <button onClick = {readData}>Read Firestore</button>
    )

}

export default ReadFirestore
