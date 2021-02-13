import React, {useState, useEffect} from 'react';
import ItemDetailComponent from '../../components/itemdetail';

const ItemDetailContainer = (props) => {

    const itemId = props.itemId;
    const [item, setItem] = useState();

    useEffect(() =>{
        setTimeout(() => {
            fetch('articles.json')
                .then(result => {
                    return result.json()
                })
                .then(value => {
                    value.forEach(element => {
                        if(element.id === itemId){
                            setItem(element)
                        }
                    })
                })
        },2000)
        return () => {}
    },[itemId])

    return(
        <>
        {item ? <ItemDetailComponent itemId={itemId} setShowDetails={props.setShowDetails} item={item}/> : null}
        </>
    )
}

export default ItemDetailContainer;