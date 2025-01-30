const CoinListItem = ({ coin, className = "", classNameImg = "" }) => {
  return (
    <div
      className={`w-full p-4 flex flex  bg-yellow-300  items-center gap-10 shadow-sm border border-gray-300 cursor-pointer hover:bg-amber-100 ${className}`}
    >
      <div>
        <div className={`w-20 h-20 ${classNameImg}`}>
          <img
            src={coin.image}
            alt={coin.name}
            title={coin.name}
            className="w-full h-full object-contain "
          />
        </div>

        <div className="flex flex-col items-center">
          <p className="font-semibold">{coin.name}</p>
          <p className="italic text-gray-600 font-thin">${coin.current_price}</p>
        </div>
      </div>
      <div className="p-5 space-y-1  text-gray-800 text-lg">
        <p>
          <span className="italic  text-lg text-red-500">
            24h high:
          </span>{" "}
          {coin.high_24h}$
        </p>
        <p>
          <span className="italic text-lg text-blue-500">
            24h low:
          </span>{" "}
          {coin.low_24h}$
        </p>
        <p>
          <p>
            <span className=" text-lg">Total Volume:</span>{" "}
            {(coin.total_volume / 1000000).toLocaleString()}MM
          </p>
        </p>
      </div>
    </div>
  );
};

export default CoinListItem;
