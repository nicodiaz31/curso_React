import React from 'react';

const ItemDetailComponent = (props) => {

    return (
        <>
            <div className='modal'>
                <div className='modal-content'> 
                    <span className="close" onClick={() =>
                        props.setShowDetails(prev => !prev)
                    }>&times;</span>
                    <span>{props.item.marca}</span>
                    <span>{props.item.modelo}</span>
                    <span>{props.item.precio}</span>
                    <span>{props.item.imagen}</span>
                </div>
            </div>
        </>
    )
}

export default ItemDetailComponent;