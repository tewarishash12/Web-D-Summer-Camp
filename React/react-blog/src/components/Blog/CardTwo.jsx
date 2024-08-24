import React from "react";
import Sdata from "../Slides/Sdata";

const CardTwo = () => {
    return ( 
        <div className="card-two grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
    {Sdata.map(value => {
        return (
            <div key={value.id} className="box bg-white rounded-lg shadow-md overflow-hidden">
                <div className="img relative">
                    <img src={value.cover} alt={value.title} className="w-full h-48 object-cover"/>
                    <span className="absolute top-2 left-2 bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded">{value.category}</span>
                </div>
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h2>
                    <p className="text-gray-700 text-base leading-relaxed">{value.desc}</p>
                </div>
            </div>
        );
    })}
</div>


     );
}
 
export default CardTwo;