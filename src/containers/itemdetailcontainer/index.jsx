import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailComponent from '../../components/itemdetail';
import { GlobalContext } from '../../context/GlobalContext';

const ItemDetailContainer = (props) => {
    const { setSearchItemId, itemFound } = useContext(GlobalContext)
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams();
    console.log(itemId)
    const [item, setItem] = useState();
    console.log("hola " +props.showDetails)

    useEffect(()=>{
        itemId ? setSearchItemId(itemId): console.log("nada")
        return () => {}
    },[setSearchItemId, itemId])

    useEffect(() =>{
        setItem()
        setLoading(true)
        if(itemFound !== undefined) {
            setItem(itemFound)
            setLoading(false)
        }
        return () => {}
    },[itemFound])

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