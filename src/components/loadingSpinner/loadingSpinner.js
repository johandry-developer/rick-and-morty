import react from "react";

const LoadingSpinner = () => {
    return(
        <div className="loading-overlay">
            <div className="spinner"/>
            <p className="spinner-text"></p>
        </div>
    )
}

export default LoadingSpinner