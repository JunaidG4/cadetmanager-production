import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebaseInit";

const Dot = ({ color }) => {
    const style = {
      height: 25,
      width: 25,
      margin: "0px 10px",
      backgroundColor: color,
      borderRadius: "50%",
      display: "inline-block",
    };
    return <span style={style}></span>;
  };
  
  export default function enrolledTest() {
    const [cadets, setCadets] = useState([{ forename: "Loading...", surname: "Loading..." }]);
  
    useEffect(
      () =>
        onSnapshot(collection(db, "cadets"), (snapshot) =>
          setCadets(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        ),
      []
    );
  
    return (
      <div className="root">
        <button className="button">
          New
        </button>
  
        <ul>
          {cadets.map((cadet) => (
              <div className="cadetnames">
                  <div key={(cadet.id)}>
                      <a>
                          <h3>{cadet.forename} {cadet.surname}</h3>
                      </a>
                  </div>
              </div>
          ))}
        </ul>
      </div>
    );
  }