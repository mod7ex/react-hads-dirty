import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// type Merge<A, B> = A extends object ? (B extends object ? { [K in keyof A | keyof B]: K extends keyof B ? B[K] : K extends keyof A ? A[K] : undefined } : A) : B extends object ? B : {};
type ExcludeKey<T extends object, K extends keyof T> = { [Key in Exclude<keyof T, K>]: T[Key] };

export type TProduct = { id: number; name: string; price: number; quantity: number };

type TState = { items: TProduct[]; show_cart: boolean; changed: boolean };

const initialState: TState = {
  items: [],
  show_cart: false,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    replace(state, action: PayloadAction<TState["items"]>) {
      state.items = action.payload;
    },

    setChanged(state, action: PayloadAction<boolean | undefined>) {
      state.changed = action.payload ?? false;
    },

    add(state, action: PayloadAction<ExcludeKey<TProduct, "quantity">>) {
      const { price, name, id } = action.payload;

      const existingItem = state.items.find(({ id: _id }) => _id === id);

      if (existingItem) existingItem.quantity++;
      else state.items.push({ id, price, name, quantity: 1 });

      state.changed = true;
    },

    remove(state, action: PayloadAction<TProduct["id"]>) {
      const product = state.items.find(({ id }) => id === action.payload);

      if (!product) return;

      if (product.quantity > 1) product.quantity--;
      else state.items = state.items.filter(({ id }) => id !== action.payload);

      state.changed = true;
    },

    toggle_cart(state) {
      state.show_cart = !state.show_cart;
    },
  },
});

export const cartActions = cartSlice.actions;

export type CartState = ReturnType<typeof cartSlice.getInitialState>;

export default cartSlice;
