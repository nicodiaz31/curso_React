import ItemCountComponent from "../../components/itemcount";
import ItemListComponent from "../../components/itemList";

function ItemListContainer(){
    let stock = 9;

    const initialValue = stock > 0 ? 1 : 0;

    return (
        <>  
            <div className="row row__orden">
                <ItemListComponent/>    
            </div>
            <p>Cantidad Disponible: { stock }</p>
            <ItemCountComponent stock={ stock } initialValue={ initialValue }/>  
        </>
    );
}

export default ItemListContainer;