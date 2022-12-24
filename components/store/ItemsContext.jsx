import { useState, createContext, useReducer } from "react";
import { Provider } from "react";

const ItemsContext = createContext({
  items: [],
  totalAmount: null,
  totalPrice: null,
  addItem: () => {},
  removeItem: () => {},
  deleteItem: () => {},
});

export default ItemsContext;

// reducer
// reducer actions

const ACTIONS = {
  ADD: "add",
  REMVOE: "remove",
  DELETE: "delete",
};

// initial state

const initialState = {
  items: [],
  totalAmount: 0,
  totalPrice: 0,
};

// reduer fn
const reducerFn = (state, action) => {
  // on add item
  if (action.type === ACTIONS.ADD) {
    let addedItem = action.payload;

    // update amount and price
    const updatedAmount = state.totalAmount + 1;
    const updatedPrice = state.totalPrice + addedItem.price;

    let updatedItems = [...state.items];
    // existing item logic
    // const addedItems = state.items;
    const existingItemIndex = updatedItems.findIndex(
      (i) => i.id === addedItem.id
    );

    const existingItem = updatedItems[existingItemIndex];

    if (existingItem) {
      // updated items include updated item with index

      let updatedItem = {
        ...existingItem,
        amount: existingItem.amount + 1,
      };

      // update addedItems with existingItemIndex
      updatedItems[existingItemIndex] = updatedItem;

      // return if added item already exisits
      return {
        items: updatedItems,
        totalAmount: updatedAmount,
        totalPrice: updatedPrice,
      };
    } else {
      // push addedItem from add to cart to the updatedItems
      updatedItems.push(addedItem);

      // return if added item doesn't already exist.
      return {
        items: updatedItems,
        totalAmount: updatedAmount,
        totalPrice: updatedPrice,
      };
    }
  }

  // on remove item

  // check existing item
  // if existing item > reduce itemAmount, reduce totalAmount, reduce totalPrice
  // if itemAmount becomes 0 remove item from cart.

  if (action.type === ACTIONS.REMVOE) {
    const removedItemId = action.payload;
    let existingItems = [...state.items];

    const existingItemIndex = existingItems.findIndex(
      (i) => i.id === removedItemId
    );
    const existingItem = existingItems[existingItemIndex];

    // update total amount and total price
    const updatedAmount = state.totalAmount - 1;
    const updatedPrice = state.totalPrice - existingItem.price;

    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = existingItems.filter((i) => i.id !== removedItemId);

      return {
        items: updatedItems,
        totalAmount: updatedAmount,
        totalPrice: updatedPrice,
      };
    } else {
      let updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      existingItems[existingItemIndex] = updatedItem;
      updatedItems = [...existingItems];

      return {
        items: updatedItems,
        totalAmount: updatedAmount,
        totalPrice: updatedPrice,
      };
    }
  }

  // on delete item
  if (action.type === ACTIONS.DELETE) {
    const removedItemId = action.payload;
    let existingItems = [...state.items];

    const updatedItems = existingItems.filter((i) => i.id !== removedItemId);

    // existing item
    const existingItem = existingItems.find((i) => i.id === removedItemId);

    // update total amount and total price
    const updatedAmount = state.totalAmount - existingItem.amount;
    const updatedPrice =
      state.totalPrice - existingItem.price * existingItem.amount;

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
      totalPrice: updatedPrice,
    };
  }

  // default return
  return state;
};

export function ItemsContextProvider(props) {
  const [itemsState, dispatchFn] = useReducer(reducerFn, initialState);

  const addItem = (item) => {
    dispatchFn({ type: ACTIONS.ADD, payload: item });
  };

  const removeItem = (id) => {
    dispatchFn({ type: ACTIONS.REMVOE, payload: id });
  };

  const deleteItem = (id) => {
    dispatchFn({ type: ACTIONS.DELETE, payload: id });
  };

  return (
    <ItemsContext.Provider
      value={{
        itemsInfo: itemsState,
        addItem: addItem,
        removeItem: removeItem,
        deleteItem: deleteItem,
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  );
}
