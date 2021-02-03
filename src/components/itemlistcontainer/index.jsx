import ItemCountContainer from "../itemcount";

function ItemListContainer(){
    let stock = 9;

    const initialValue = stock > 0 ? 1 : 0;

    return (
        <>  
            <p>Cantidad Disponible: { stock }</p>
            <ItemCountContainer stock={ stock } initialValue={ initialValue }/>  
        </>
    );
}

export default ItemListContainer;