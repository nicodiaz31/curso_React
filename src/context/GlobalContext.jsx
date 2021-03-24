import { createContext, useEffect, useState } from 'react';
import { getFirestore, getStorage } from '../firebase';


export const GlobalContext = createContext();

const GlobalProvider = ({children}) => {

    const [allItems, setAllItems] = useState([]);
    const [category, setCategory] = useState();
    const [searchItemId, setSearchItemId] = useState();
    const [itemFound, setItemFound] = useState();
    const [orderNumber, setOrderNumber] = useState();
    const [logo, setLogo] = useState();
    const [logoShoppingCart, setLogoShoppingCart] = useState();
    const [logoFb, setLogoFb] = useState();
    const [logoTw, setLogoTw] = useState();
    const [logoIg, setLogoIg] = useState();
    const [logoCards, setLogoCards] = useState()
    const [imgSearch, setImgSearch] = useState([]);
    const [categoriesImg, setCategoriesImg] = useState([]);
    const [categoryName, setCategoryName] = useState([])

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
        /* Usado para actualizar la url de la imagen a la url de storage
        
        const updateImgURL = () => {
            itemCollection.get().then((items) => {
                items.forEach(async (doc) => {
                    const newURL = await getStorage().ref().child(doc.data().imagen).getDownloadURL()
                    if (doc !== undefined && newURL !== undefined){
                        itemCollection.doc(String(doc.id)).update({
                            imagen: newURL
                        })
                    }
                })
            })
        }
        updateImgURL()*/
        return () => {}
    },[category, searchItemId]) 

    useEffect(()=>{
        const getImgs = async () => {
            setLogo(await getStorage().ref().child('images/logo.png').getDownloadURL())
            setLogoFb(await getStorage().ref().child('images/fbLogo.png').getDownloadURL())
            setLogoIg(await getStorage().ref().child('images/igLogo.png').getDownloadURL())
            setLogoTw(await getStorage().ref().child('images/twLogo.png').getDownloadURL())
            setLogoShoppingCart(await getStorage().ref().child('images/shoppingcart.png').getDownloadURL())
            setLogoCards(await getStorage().ref().child('images/pago_logos.png').getDownloadURL())
            const searchImgs = [];
            searchImgs.push(await getStorage().ref().child('/images/guitarras_card.png').getDownloadURL())
            searchImgs.push(await getStorage().ref().child('/images/bajos_card.jpeg').getDownloadURL())
            searchImgs.push(await getStorage().ref().child('/images/amplificadores_card.jpeg').getDownloadURL())
            searchImgs.push(await getStorage().ref().child('/images/auriculares_card.jpeg').getDownloadURL())
            searchImgs.push(await getStorage().ref().child('/images/novedades_card.jpeg').getDownloadURL())
            searchImgs.push(await getStorage().ref().child('/images/destacados_card.jpeg').getDownloadURL())
            setImgSearch(searchImgs)
        }
        getImgs();
        return () => {}
    },[])

    useEffect(()=>{
        const getCategoriesImg = async () => {
            setCategoriesImg([])
            const imgs = []
            if (categoryName === "instrumentos") {
                imgs.push(await getStorage().ref().child('/images/guitarras.jpeg').getDownloadURL())
                imgs.push(await getStorage().ref().child('/images/bajos.jpeg').getDownloadURL())
                setCategoriesImg(imgs)
            }
            if (categoryName === "promociones") {
                imgs.push(await getStorage().ref().child('/images/discounts.jpeg').getDownloadURL())
                imgs.push(await getStorage().ref().child('/images/promo_bancarias.jpeg').getDownloadURL())
                setCategoriesImg(imgs)
            }
            if (categoryName === "accesorios") {
                imgs.push(await getStorage().ref().child('/images/amplificadores.jpeg').getDownloadURL())
                imgs.push(await getStorage().ref().child('/images/auriculares.jpeg').getDownloadURL())
                setCategoriesImg(imgs)
            }
        }
        getCategoriesImg()
        return() => {}
    },[categoryName])    

    const createOrder = (newOrder) => {
        const db = getFirestore();
        const ordersCollection = db.collection('ORDERS');
        ordersCollection.add(newOrder).then((value) => {
            setOrderNumber(value.id)
        })

    }
    
    return(
        <GlobalContext.Provider value={{allItems, setCategory, setSearchItemId, itemFound, createOrder, 
            orderNumber, logo, logoFb, logoIg, logoTw, logoShoppingCart, getStorage, imgSearch, setCategoryName, categoriesImg, logoCards}}>
            {children}
        </GlobalContext.Provider>
    )

}

export default GlobalProvider;
