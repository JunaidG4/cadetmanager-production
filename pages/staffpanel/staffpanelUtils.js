import { collection, setDoc, addDoc, onSnapshot, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, colRef, eventRef } from "../../firebase/firebaseInit";
import { useRouter } from "next/router";

export const handleCadet = async () => {
    const forename = prompt("Enter Forename:")
    const surname = prompt("Enter Surname:")
    const rank = prompt("Enter Rank:")
    const enrolledDate = prompt("Enter Date Enrolled (DD/MM/YYYY): ")
    const payload = {forename, surname, rank, enrolledDate};
    const docRef = await addDoc(colRef, payload);
    console.log("New ID is: " + docRef.id);
  };

export const handleEvent = async () => {
    const eventname = prompt("Enter Event Name:")
    const eventDate = prompt("Enter Event Date:")
    const uniform = prompt("Enter Required Uniform:")
    const isLive = prompt("Is Event Live? (Live/Waiting):  ")
    const payload = {eventname, eventDate, uniform, isLive};
    const docRef = await addDoc(eventRef, payload);
    console.log("New ID is: " + docRef.id);
    };