import ItemListComponent from "../../components/itemList";
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from "../../context/GlobalContext";

function ItemListContainer(){
    const { allItems, setCategory } = useContext(GlobalContext)
    const {categoryName} = useParams();
    const [categoryList, setCategoryList] = useState(categoryName)
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() =>{
        if (categoryName === 'guitarras' || categoryName === 'bajos' || categoryName === 'destacados' || categoryName === 'descuentos'){
            const catName = categoryName.slice(0,-1);
            setCategoryList(catName)
            setCategory(catName)
        } else if (categoryName === "amplificadores"){
            const catName = categoryName.slice(0,-2);
            setCategoryList(catName)
            setCategory(catName)
        } else {
            setCategoryList(categoryName)
            setCategory(categoryName)
        }
        return () => {}
    },[categoryName,setCategory])
    
    useEffect(()=>{
        setLoading(false)
        setItems([]);
        if (categoryList === 'destacado' || categoryList === 'descuento' || categoryList === 'novedades'){
            allItems.forEach(element =>{
                if(element[categoryList] === true){
                    console.log(element)
                    setItems(prevArray => [...prevArray, element])
                    setLoading(true)
                }
            })
        } else {
            allItems.forEach(element =>{
                if(element.tipo === categoryList){
                    setItems(prevArray => [...prevArray, element])
                    setLoading(true)
                }
            })
        }
        return () => {}
    },[allItems, categoryList])

    return (
        <>  

            <div className="row row__orden">
                {categoryName ? <ItemListComponent categoryList={categoryList} loading={loading} items={items} categoryName={categoryName}/> : null}   
            </div>
             
        </>
    );
}

export default ItemListContainer;