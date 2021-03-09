import { createContext, useEffect, useState } from 'react';
import { getFirestore } from '../firebase';


export const GlobalContext = createContext();

const GlobalProvider = ({children}) => {

    const [allItems, setAllItems] = useState([]);
    const [category, setCategory] = useState();
    const [searchItemId, setSearchItemId] = useState();
    const [itemFound, setItemFound] = useState();
    const [orderNumber, setOrderNumber] = useState();

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('ITEMS');
        if (category !== undefined){
            if(category === 'destacado' || category === 'descuento' || category === 'novedades'){
                const getItems = itemCollection.where(category,'==', true)
                setAllItems([])
                getItems.get().then((value) => {
                    value.docs.map(element => setAllItems(prevArray => [...prevArray, element.data()]));
                })
            } else {
            const getItems = itemCollection.where('tipo','==',category)
            setAllItems([])
            getItems.get().then((value) => {
                value.docs.map(element => setAllItems(prevArray => [...prevArray, element.data()]));
            })}
        }
        if (searchItemId !== undefined){
            const getItem = itemCollection.where('id','==',parseInt(searchItemId))
            setItemFound()
            getItem.get().then((value) => {
                setItemFound(value.docs[0].data())
            })
        }
        return () => {}
    },[category, searchItemId]) 

    const createOrder = (newOrder) => {
        console.log(newOrder)
        const db = getFirestore();
        const ordersCollection = db.collection('ORDERS');
        ordersCollection.add(newOrder).then((value) => {
            setOrderNumber(value.id)
        })

    }
    
    return(
        <GlobalContext.Provider value={{allItems, setCategory, setSearchItemId, itemFound, createOrder, orderNumber}}>
            {children}
        </GlobalContext.Provider>
    )

}

export default GlobalProvider;
