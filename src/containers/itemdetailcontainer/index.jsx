import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailComponent from '../../components/itemdetail';

const ItemDetailContainer = (props) => {
    
    
    const {itemId} = useParams();
    console.log(itemId)
    const [item, setItem] = useState();

    useEffect(() =>{
        setTimeout(() => {
            fetch('/articles.json')
                .then(result => {
                    return result.json()
                })
                .then(value => {
                    value.forEach(element => {
                        if(element.id === parseInt(itemId)){
                            setItem(element)
                        }
                    })
                })
        },2000)
        return () => {}
    },[itemId])

    return(
        <>
        {item ? <ItemDetailComponent setShowDetails={props.setShowDetails} item={item}/> : null}
        </>
    )
}

export default ItemDetailContainer;