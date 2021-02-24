import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailComponent from '../../components/itemdetail';

const ItemDetailContainer = (props) => {
    
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams();
    console.log(itemId)
    const [item, setItem] = useState();
    console.log("hola " +props.showDetails)

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
                            setLoading(false)
                        }
                    })
                })
        },2000)
        return () => {}
    },[itemId])

    return(
        <>
            <div className="submain container-fluid px-0">
                <div className="modal-body row"> 
                    <div className="col-md-12">
                        <div className="row row__orden">
                            {loading ? 
                                <div className="spinner-border" role="status" style={{marginBottom: 15}}>
                                    <span className="sr-only">Loading...</span>
                                </div> 
                                : 
                                item ? 
                                    props.showDetails ? 
                                        <ItemDetailComponent setShowDetails={props.setShowDetails} item={item}/> 
                                        : 
                                        <ItemDetailComponent showDetails={props.showDetails} item={item}/> 
                                    : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetailContainer;