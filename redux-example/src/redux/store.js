import { configureStore } from "@reduxjs/toolkit";
import { reduceAction } from "./reducers";
export const store1 = configureStore({ reducer: reduceAction });
export const store2 = configureStore({ reducer: reduceAction });
// console.log("Ayush",store.getState());
