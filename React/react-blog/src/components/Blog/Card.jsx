import Cdata from "./CData";

const Card = () => {
    return (
        <div className="card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
    {Cdata.map((data) => {
        return (
            <div className="box bg-white rounded-lg shadow-md overflow-hidden" key={data.id}>
                <div className="img relative">
                    <img src={data.cover} alt={data.title} className="w-full h-48 object-cover"/>
                    <span className="absolute top-2 left-2 bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded">{data.category}</span>
                </div>
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">{data.title}</h2>
                </div>
            </div>
        );
    })}
</div>


    );
}

export default Card;
