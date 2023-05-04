import { CartItem } from "@/utility/CustomTypes";
import { createSlice } from "@reduxjs/toolkit";

type CartState = {
  cartItems: CartItem[];
  totalQuantity: number;
  totalCost: number;
};

const initialState: CartState = {
  cartItems: [],
  totalQuantity: 0,
  totalCost: 0,
};

type addCartAction = {
  payload: {
    cartItem: CartItem;
  };
};
type updateCartAction = {
  payload: {
    id: string;
    quantity: number;
  };
};
type deleteCartAction = {
  payload: {
    id: string;
  };
};

const CartSlice = createSlice({
  name: "CartSlice",
  initialState,
  reducers: {
    addCartItem(state, action: addCartAction) {
      const { cartItem } = action.payload;

      let index = -1;
      // state.totalQuantity += 1;

      if (
        state.cartItems.some((item, i) => {
          index = i;
          return item.id === cartItem.id;
        })
      ) {
        const prevItem = state.cartItems[index];
        const newItem = { ...prevItem };
        newItem.quantity += cartItem.quantity;
        state.totalCost -= cartItem.total;
        newItem.total = newItem.quantity * newItem.price;
        state.totalCost += cartItem.total;
        state.cartItems[index] = newItem;
        state.totalQuantity = state.cartItems.reduce(
          (acccumulator, item) => item.quantity + acccumulator,
          0
        );
      } else {
        state.totalCost += cartItem.total;
        state.totalQuantity += cartItem.quantity;
        state.cartItems.push(cartItem);
      }
    },
    // subCartItem(state, action: updateCartAction) {
    //   const { id } = action.payload;
    //   let index = -1;
    //   if (
    //     state.cartItems.some((item, i) => {
    //       index = i;
    //       return item.id === id;
    //     })
    //   ) {
    //     const item = state.cartItems[index];
    //     if (item.quantity <= 1) {
    //       state.cartItems = state.cartItems.filter(
    //         (cartItem) => cartItem.id !== id
    //       );
    //     } else {
    //       state.cartItems[index].quantity -= 1;
    //     }
    //   }
    // },
    updateCartItem(state, action: updateCartAction) {
      const { id, quantity } = action.payload;
      let index = -1;
      if (
        state.cartItems.some((item, i) => {
          index = i;
          return item.id === id;
        })
      ) {
        const prevItem = state.cartItems[index];
        const newItem = { ...prevItem };
        newItem.quantity = quantity;
        state.totalCost -= prevItem.total;
        newItem.total = newItem.quantity * newItem.price;
        state.totalCost += newItem.total;
        state.cartItems[index] = newItem;
        state.totalQuantity = state.cartItems.reduce(
          (acccumulator, item) => item.quantity + acccumulator,
          0
        );
      }
    },
    deleteCartItem(state, action: deleteCartAction) {
      const { id } = action.payload;
      state.cartItems = state.cartItems.filter((cartItem, index) => {
        if (cartItem.id !== id) {
          return true;
        } else {
          state.totalCost -= state.cartItems[index].total;
          state.totalQuantity -= state.cartItems[index].quantity;
          return false;
        }
      });
      //   let index = -1;
      //   if (
      //     state.cartItems.some((item, i) => {
      //       index = i;
      //       return item.id === id;
      //     })
      //   ) {

      //   }
    },
  },
});

export const { addCartItem, updateCartItem, deleteCartItem } =
  CartSlice.actions;

export default CartSlice.reducer;
