import Image from "next/image";
import { useContext } from "react";
import ItemsContext from "../store/ItemsContext";

export default function Item({ item }) {
  // context
  const itemsCtx = useContext(ItemsContext);

  const { description, id, price, subtitle, title, image } = item;

  //   console.log(description, price, subtitle, title);

  // on add to cart button
  const addItemHandler = (item) => {
    itemsCtx.addItem(item);
  };

  // add container
  // grid; grid of 2 sm: grid of 1
  // center in the container

  return (
    <div
      id="item-section"
      className="bg-gray-100 w-[360px] font-ptSans shadow-xl"
    >
      <div id="conainer" className="">
        <div id="image">
          <Image
            src={image}
            alt={title}
            height={240}
            width={360}
            className="object-cover"
          />
        </div>

        <div
          id="info"
          className="p-4 grid grid-rows-[160px_250px_max-content_max-content] gap-8"
        >
          <div id="title-sub" className="grid grid-rows-[60px_100px] gap-4">
            <div id="title">
              <h1 className="text-3xl leading-7 font-bold font-ptSerif">
                {title}
              </h1>
            </div>
            <div id="subtitle" className="text-slate-600 text-2xl">
              <p>{subtitle}</p>
            </div>
          </div>
          <div id="description" className="leading-7">
            <p>{description}</p>
          </div>
          <div id="price" className="font-bold text-2xl font-ptSerif">
            <h2>$ {price}</h2>
          </div>
          <div id="addToCart" className="button-brown">
            {/* shadow doesn't work */}
            <button onClick={addItemHandler.bind(this, item)}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
