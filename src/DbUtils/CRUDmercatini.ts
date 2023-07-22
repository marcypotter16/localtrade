import {collection, deleteDoc, doc, getDocs, orderBy, setDoc, query, getDoc, addDoc} from "firebase/firestore/lite";
import {db} from "./firebase.ts";
import {Mercatino, mercatinoConverter, ProduttoreSemplice} from "../Models/Mercatino";

export const insertMercatino = async (mercatino: Mercatino) => {
    const mercatiniCollection = collection(db, "mercatini").withConverter(mercatinoConverter);
    const mercatinoDoc = await addDoc(mercatiniCollection, mercatino);
    return mercatinoDoc.id;
}

export const updateMercatino = async (mercatino: Mercatino, id: string) => {
    const mercatiniCollection = collection(db, "mercatini").withConverter(mercatinoConverter);
    await setDoc(doc(mercatiniCollection, id), mercatino);
}

export const deleteMercatino = async (id: string) => {
    const mercatiniCollection = collection(db, "mercatini").withConverter(mercatinoConverter);
    await deleteDoc(doc(mercatiniCollection, id));
}

export const getProduttoriIscritti = async (id: string) => {
    const mercatiniCollection = collection(db, "mercatini").withConverter(mercatinoConverter);
    const mercatinoDoc = await getDoc(doc(mercatiniCollection, id));
    return mercatinoDoc.data()?.ProduttoriIscritti as ProduttoreSemplice[];
}

export const getMercatiniByDate = async (): Promise<Mercatino[]> => {
    const mercatiniCollection = query(collection(db, "mercatini"), orderBy('dataTimestamp', 'asc')).withConverter(mercatinoConverter);
    const mercatiniSnapshot = await getDocs(mercatiniCollection);
    return mercatiniSnapshot.docs.map(doc => doc.data() as Mercatino);
}

export const getMercatiniByDateQuery = () => {
    return query(collection(db, "mercatini"), orderBy('dataTimestamp', 'asc')).withConverter(mercatinoConverter);
}

export const getMercatinoByIdQuery = (id: string) => {
    return doc(collection(db, "mercatini"), id).withConverter(mercatinoConverter);
}