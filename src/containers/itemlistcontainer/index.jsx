import ItemListComponent from "../../components/itemList";
import { useParams } from 'react-router-dom';

function ItemListContainer(){
    const {categoryName} = useParams();
    console.log(categoryName.slice(0,-1));
    


    return (
        <>  

            <div className="row row__orden">
                {categoryName ? <ItemListComponent categoryName={categoryName}/> : null}   
            </div>
             
        </>
    );
}

export default ItemListContainer;