import db from "./firebaseConfig";
import { collection, getDocs } from 'firebase/firestore';

const getItems = async () => {
    const itemsCollection = collection(db, "items");
    const itemSnapshot = await getDocs(itemsCollection);
    const itemList = itemSnapshot.docs.map((doc) => {
        let item = doc.data()
        item.id = doc.id
        return item
    })
    return itemList
}



export default getItems