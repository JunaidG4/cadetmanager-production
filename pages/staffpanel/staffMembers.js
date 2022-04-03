import Head from "next/dist/shared/lib/head";
import {onSnapshot, query, orderBy,} from "firebase/firestore";
import { useEffect, useState } from "react";
import {staffRef } from "../../firebase/firebaseInit";
import { useRouter } from "next/router";
import {handleStaffEdit, handleStaff, handleStaffDelete } from "./staffpanelUtils";
  
  export default function staffMembers() {

    const [staffMem, setStaff] = useState([{ 
        forename: "Loading...", 
        surname: "Loading...", 
        rank: "Loading...", 
        status: "Loading...",
        clearance: "Loading..."
    }]);
  
    useEffect( () => {
      const sortQuery = query(staffRef, orderBy("surname", "asc"))

      const unsub = onSnapshot(sortQuery, (snapshot) =>
        setStaff(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id })))
        )

        return unsub;
    }, 
    []);

    const router = useRouter();

    const handleHub = e => {
      e.preventDefault()
      router.push('/staffpanel/staffhub')
    }
  
    return (
        <>
          <Head>
              <title>CMS | Staff Members</title>
          </Head>
          <div className="goBackToStaff">
          <button className="button-81" onClick={handleHub}>Back To The Hub</button>
          </div>

          <h1>Staff Members</h1>
          <div className="cadetNameContainer">
          {staffMem.map((staff) => (
              <div className="cadetnames">
                  <div key={(staff.id)}>
                      <a>
                          <h3>{staff.rank} {staff.surname}, {staff.forename}</h3>
                          <h4>Status: {staff.status}</h4>
                          <h4>Clearance: {staff.clearance}</h4>
                          <button onClick={() => handleStaffEdit(staff.id)}>Edit</button>
                          <button onClick={() => handleStaffDelete(staff.id)}>Delete</button>
                      </a>
                  </div>
              </div>
          ))}
          </div>
          <div className="addCadet">
          <button className="button-81" onClick={handleStaff}>Add Staff</button>
          </div>
          
        </>
      
    );
  }