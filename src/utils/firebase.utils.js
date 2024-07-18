import { initializeApp } from 'firebase/app';
import { productStructure } from '../products';
import {
    getFirestore,
    doc,
    collection,
    getDocs,
    writeBatch,
    query,
    orderBy
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;
};

export const getPackagesAndDocuments = async () => {
    const collectionRef = collection(db, 'packages');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);

    const packageMap = querySnapshot.docs.map((docSnapshot) => {
        const data = docSnapshot.data();

        return data
    })

    return packageMap;
};

const prepareDataForFirestore = (data) => {
    return data.map(category => ({
        title: category.title,
        imageUrl: category.imageUrl,
        isFrozen: category.isFrozen,
        isCooled: category.isCooled,
        order: category.order,
        items: category.subcategories.flatMap(subcategory =>
            subcategory.products.map(product => ({
                ...product,
                subcategoryId: subcategory.id,
                subcategoryTitle: subcategory.title
            }))
        )
    }));
};

export const getSortedCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef, orderBy("order", "asc"));

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.map(docSnapshot => {
        const { title, items, imageUrl, isFrozen, isCooled, order } = docSnapshot.data();
        return {
            id: docSnapshot.id,
            title,
            items,
            imageUrl,
            isFrozen,
            isCooled,
            order
        };
    });

    return categoryMap;
};

export const uploadProductsToFirestore = async () => {
    const preparedData = prepareDataForFirestore(productStructure);
    try {
        await addCollectionAndDocuments('categories', preparedData);
        console.log('Данные успешно загружены в Firestore');
    } catch (error) {
        console.error('Ошибка при загрузке данных в Firestore:', error);
    }
};

export const getModifiedCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items, imageUrl, isFrozen, isCooled, order } = docSnapshot.data();
        acc[docSnapshot.id] = {
            id: docSnapshot.id,
            title,
            items,
            imageUrl,
            isFrozen,
            isCooled,
            order
        };
        return acc;
    }, {});

    return categoryMap;
};

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log("done");
};