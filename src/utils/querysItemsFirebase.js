import db from "./firebaseConfig";
import { collection, getDocs } from 'firebase/firestore';

export const getItems = async () => {
    const itemsCollection = collection(db, "items");
    const itemSnapshot = await getDocs(itemsCollection);
    const itemList = itemSnapshot.docs.map((doc) => {
        let item = doc.data()
        item.id = doc.id
        return item
    })
    console.log('item List', itemList)
    return itemList
}

