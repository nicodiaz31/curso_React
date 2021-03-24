import React from 'react';

const LoadingComponent = () => {
    return(
        <>
        <div className="spinner-border" role="status" style={{marginBottom: 15}}>
            <span className="sr-only">Loading...</span>
        </div>
        </>
    )
}

export default LoadingComponent;