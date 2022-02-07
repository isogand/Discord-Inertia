import React from "react";
import {Provider} from "react-redux";
import store from "@/Pages/Store/Index";


export default function Layout(children) {
    return <Provider store={store}>{children}</Provider>;
}
