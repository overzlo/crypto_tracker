import CoinListItem from "./CoinListItem.tsx";
import { useAppDispatch, useAppSelector } from "../features/hooks.ts";
import { useEffect } from "react";
import { fetchCrypto } from "../features/cryptoSlice.ts";

const CoinList = () => {
  const coins = useAppSelector((state) => state.crypto.crypto);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCrypto(1));
  }, [dispatch]);

  console.log(coins);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {coins.map((coin) =>
        coin.market_cap_rank == 1 ? (
          <CoinListItem
            key={coins[0].id}
            coin={coins[0]}
            className="col-span-full flex-row justify-center items-end bg-amber-200 gap-10 "
            classNameImg="w-40 h-40"
          />
        ) : (
          <CoinListItem key={coin.id} coin={coin} />
        ),
      )}
    </div>
  );
};

export default CoinList;
