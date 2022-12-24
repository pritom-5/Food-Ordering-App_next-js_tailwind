import { useContext } from "react";
import ItemsContext from "../store/ItemsContext";
// import ItemsContext from "../components/store/ItemsContext";

export default function CartItem({ item, index }) {
  const itemsCtx = useContext(ItemsContext);

  // addItem takes item as arg.
  const onAddHandler = (item) => {
    itemsCtx.addItem(item);
  };

  // removeItem
  const onRemoveHandler = (id) => {
    itemsCtx.removeItem(id);
  };

  // delete item
  const onDeleteHandler = (id) => {
    itemsCtx.deleteItem(id);
  };

  return (
    <div
      key={item.id}
      className="grid grid-cols-[30px_200px_30px_80px_min-content_auto_24px] items-center gap-4 px-8 py-4 border-b-2 border-yellow-600"
    >
      <div id="no">{index + 1}</div>
      <div>{item.title}</div>
      <div className="justify-self-center">{item.amount}</div>
      <div id="amount">$ {item.price}</div>

      <div id="addRemoveButton" className="border-yellow-500 border-2 flex">
        {/* plus minus svg here */}

        <button
          id="plus"
          onClick={onAddHandler.bind(this, item)}
          className="cart-icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="inherit"
            // class="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
        <button
          id="minus"
          onClick={onRemoveHandler.bind(this, item.id)}
          className="cart-icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
            // class="w-5 h-5"
            stroke="inherit"
          >
            <path
              fillRule="evenodd"
              d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
              // clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div>$ {(item.price * item.amount).toFixed(2)}</div>

      {/* add a delete svg here */}

      <button
        id="deleteButton"
        onClick={onDeleteHandler.bind(this, item.id)}
        className="fill-red-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="inherit"
          // class="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
            // clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
