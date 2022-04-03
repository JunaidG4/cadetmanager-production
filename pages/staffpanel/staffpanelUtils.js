import {setDoc, addDoc, doc, deleteDoc } from "firebase/firestore";
import { db, colRef, eventRef, staffRef } from "../../firebase/firebaseInit";

// handling events

export const handleEvent = async () => {
    const eventname = prompt("Enter Event Name:")
    const eventDate = prompt("Enter Event Date:")
    const uniform = prompt("Enter Required Uniform:")
    const isLive = prompt("Is Event Live? (Live/Waiting):  ")
    const payload = {eventname, eventDate, uniform, isLive};
    const docRef = await addDoc(eventRef, payload);
    console.log("New ID is: " + docRef.id);
};

export const handleEventEdit = async () => {
    const eventname = prompt("Enter Event Name:")
    const eventDate = prompt("Enter Event Date:")
    const uniform = prompt("Enter Required Uniform:")
    const isLive = prompt("Is Event Live? (Live/Waiting):  ")
    const payload = {eventname, eventDate, uniform, isLive};
    const docRef = await addDoc(eventRef, payload);
    console.log("New ID is: " + docRef.id);

    setDoc(docRef, payload);
};

export const handleEventDelete = async (id) => {
    const docRef = doc(db, 'events', id);
    await deleteDoc(docRef);

}

// handing cadets

export const handleCadet = async () => {
    const forename = prompt("Enter Forename:")
    const surname = prompt("Enter Surname:")
    const rank = prompt("Enter Rank:")
    const enrolledDate = prompt("Enter Date Enrolled (DD/MM/YYYY): ")
    const payload = {forename, surname, rank, enrolledDate};
    const docRef = await addDoc(colRef, payload);
    console.log("New ID is: " + docRef.id);
};

export const handleCadetEdit = async (id) => {
    console.log(id);

    const forename = prompt("Enter Forename:")
    const surname = prompt("Enter Surname:")
    const rank = prompt("Enter Rank:")
    const enrolledDate = prompt("Enter Date Enrolled (DD/MM/YYYY): ")

    const docRef = doc(db, 'cadets', id);
    const payload = {forename, surname, rank, enrolledDate};

    setDoc(docRef, payload);

}

export const handleCadetDelete = async (id) => {
    const docRef = doc(db, 'cadets', id);
    await deleteDoc(docRef);

}

//handling staff

export const handleStaff = async () => {
    const forename = prompt("Enter Forename:")
    const surname = prompt("Enter Surname:")
    const rank = prompt("Enter Rank:")
    const clearance = prompt("Enter Clearance Level: ")
    const status = prompt("Enter Staff Status: ")
    const payload = {forename, surname, rank, clearance, status};
    const docRef = await addDoc(staffRef, payload);
    console.log("New ID is: " + docRef.id);
};

export const handleStaffEdit = async (id) => {
    console.log(id);

    const forename = prompt("Enter Forename:")
    const surname = prompt("Enter Surname:")
    const rank = prompt("Enter Rank:")
    const clearance = prompt("Enter Clearance Level: ")
    const status = prompt("Enter Staff Status: ")
    
    const payload = {forename, surname, rank, clearance, status};
    const docRef = await addDoc(staffRef, payload);

    setDoc(docRef, payload);

}

export const handleStaffDelete = async (id) => {
    const docRef = doc(db, 'staff', id);
    
    await deleteDoc(docRef);

}