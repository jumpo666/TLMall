import "es6-shim";
import "url-search-params-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Global } from "./models/Global";
import "./assets/app.less";
import { LazyRouteLoader } from "./components/LazyRouteLoader";
import { Tab } from "./components/Tab/Tab";

const App = () => (
    <Router history={Global.history}>
        <LazyRouteLoader
            routes={[
                {
                    path: "/home",
                    load: () => import("./views/HomeView/HomeView"),
                },
                {
                    path: "/category",
                    load: () => import("./views/CategoryView/CategoryView"),
                },
                {
                    path: "/productDetail",
                    load: () => import("./views/ProductDetailView/ProductDetailView"),
                },
                // 凌滨{ path: "/discover", load: () => import("./views/DiscoverView/DiscoverView"), },
                {
                    path: "/cart",
                    load: () => import("./views/CartView/CartView"),
                },
                {
                    path: "/settlement",
                    load: () => import("./views/SettlementView/SettlementView"),
                },
                {
                    path: "/address",
                    load: () => import("./views/AddressView/AddressView"),
                },
                {
                    path: "/mine",
                    load: () => import("./views/MineView/MineView"),
                },
                {
                    path: "/mineorder",
<<<<<<< HEAD
                    load: () =>import("./views/MineOrderView/MineOrderView"),
=======
                    load: () => import("./views/MineAllOrderView/MineAllOrderView"),
>>>>>>> d582ba5106acaab408467a823d6f5a9832ed00ab
                },
                { path: "*", load: () => import("./views/HomeView/HomeView") },
            ]}
        />
        <Tab />
    </Router>
);

ReactDOM.render(<App />, document.getElementById("main"));
