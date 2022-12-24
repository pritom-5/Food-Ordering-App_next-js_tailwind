import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import CartSubmitForm from "../form/CartSubmitForm";
import ItemsContext from "../store/ItemsContext";
import SuccessModal from "../ui/SuccessModal";
import CartItem from "./CartItem";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function CartItems() {
  const itemsCtx = useContext(ItemsContext);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(null);

  const [animateParent] = useAutoAnimate();

  // automatically close success modal after 5 seconds
  useEffect(() => {
    const interval = setInterval(() => setShowSuccess(false), 5000);

    return () => clearInterval(interval);
  }, [showSuccess]);

  // items
  const itemsList = itemsCtx.itemsInfo.items;

  // order handler
  const orderHandler = () => {
    setOpenConfirm(true);
  };

  // this function will be passed to the SuccessModal and executed there on click of the cross button.
  const closeModalHandler = () => {
    setShowSuccess(null);

    /////
    // console.log("modal closed");
  };

  // order confirm handler
  // take value from form
  // connect to mongo to submit the cart items and personal infos
  const confirmHandler = async (info) => {
    const { name, email, address } = info;
    const cartInfo = { name, email, address, items: itemsList };

    const response = await fetch("/api/cartSubmit", {
      method: "POST",
      body: JSON.stringify(cartInfo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    const { message, status } = data;
    // console.log(data);

    setShowSuccess({ message, status });
  };

  return (
    <div id="cart-page" className="pt-20 pb-32 font-ptSans">
      {/* success modal */}
      {showSuccess && (
        <SuccessModal
          message={showSuccess.message}
          status={showSuccess.status}
          closeModalHandler={closeModalHandler}
        />
      )}
      <div id="cart-section" className="my-4 py-8 w-fit mx-auto shadow-2xl">
        <div id="container" className="max-w-6xl px-8">
          {/* on order button click state change and open form of confirm email, username, address */}

          {itemsList.length !== 0 && !openConfirm && (
            <button id="Order" onClick={orderHandler} className="button-brown">
              Order
            </button>
          )}

          <div id="items-list" ref={animateParent}>
            {itemsList.map((item, index) => (
              // cartItem.jsx
              <CartItem key={item.id} item={item} index={index} />
              //
            ))}
          </div>

          {itemsList.length !== 0 && (
            <div id="totalRow" className="grid grid-cols-[50%_50%]">
              <div id="text" className="text-slate-600">
                Total price
              </div>
              <div id="totalPrice" className="justify-self-center font-bold">
                $ {itemsCtx.itemsInfo.totalPrice.toFixed(2)}
              </div>
            </div>
          )}

          {/* add form here */}
          {openConfirm && (
            <div>
              <CartSubmitForm confirmHandler={confirmHandler} />
            </div>
          )}

          {itemsList.length === 0 && (
            <div id="no-item" className="flex flex-col items-center gap-6 mt-8">
              <h1 className="text-2xl">No items added to the cart.</h1>
              <Link href="/">
                <div className="button-brown cursor-pointer w-fit">Home</div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
