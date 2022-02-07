import {configureStore} from "@reduxjs/toolkit";
import appSlice from "@/Pages/Store/appSlice";
import uiCart from "@/Pages/Store/ui-cart";
import uiSlice from "@/Pages/Store/ui-slice";


const store = configureStore({
    reducer: {
        uicart: uiCart,
        app:appSlice,
        ui: uiSlice,
    },
});

export default store;
