import Link from "next/link";
import { useContext } from "react";
import ItemsContext from "../store/ItemsContext";

export default function Head() {
  const itemsCtx = useContext(ItemsContext);
  const totalAmount = itemsCtx.itemsInfo.totalAmount;

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-700 text-yellow-200 fixed top-0 right-0 left-0 z-10">
      <div
        id="container"
        className="flex justify-between items-center max-w-4xl px-16 py-4 mx-auto"
      >
        <div id="logo">
          <h1 className="text-2xl font-bold">
            <Link href="/">Next Food App</Link>
          </h1>
        </div>
        <div
          id="cart-icon"
          className="cursor-pointer bg-gradient-to-br from-yellow-200 to-yellow-500 px-4 py-2 rounded-md text-slate-800 hover:scale-110 transition-all ease-in duration-100"
        >
          <Link href="/cart">
            <div className="flex gap-2 items-center">
              <h2>Cart</h2>
              <div id="count-cart">
                <h2 className="px-2 rounded-full bg-slate-800 text-yellow-200 font-bold">
                  {totalAmount}
                </h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
