import ItemListComponent from "../../components/itemList";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ItemListContainer(){
    const {categoryName} = useParams();
    const [categoryList, setCategoryList] = useState(categoryName)
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    //esto lo puedo hacer en un solo useEffect pero no se cual es la mejor aplicacion

    useEffect(() =>{
        if (categoryName === 'guitarras' || categoryName === 'bajos' || categoryName === 'destacados' || categoryName === 'descuentos'){
            const catName = categoryName.slice(0,-1);
            setCategoryList(catName)
        } else if (categoryName === "amplificadores"){
            const catName = categoryName.slice(0,-2);
            setCategoryList(catName)
        } else {
            setCategoryList(categoryName)
        }
        return () => {}
    },[categoryName])
    
    
    useEffect(() =>{
        setLoading(false)
        setTimeout(() => {
            fetch('/articles.json')
                .then(result => {
                    return result.json()
                })
                .then(value => {
                    setItems([]);
                    if (categoryList === 'destacado' || categoryList === 'descuento' || categoryList === 'novedades'){
                        value.forEach(element =>{
                            if(element[categoryList] === true){
                                setItems(prevArray => [...prevArray, element])
                                setLoading(true)
                            }
                        })
                    } else {
                        value.forEach(element =>{
                            if(element.tipo === categoryList){
                                setItems(prevArray => [...prevArray, element])
                                setLoading(true)
                            }
                        })
                    }
                })
        },2000)
        return () => {}
    }, [categoryList])


    return (
        <>  

            <div className="row row__orden">
                {categoryName ? <ItemListComponent categoryName={categoryList} loading={loading} items={items}/> : null}   
            </div>
             
        </>
    );
}

export default ItemListContainer;