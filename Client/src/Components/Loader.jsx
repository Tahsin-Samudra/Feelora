import React from "react";

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen">                    
            <div>
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                <p className="text-center mt-4 text-gray-600">Loading...</p>
            </div>
        </div>
    )
}

export default Loader