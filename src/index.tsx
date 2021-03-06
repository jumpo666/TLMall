import "es6-shim";
import "url-search-params-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Global } from "./models/Global";
import "./assets/app.less";
import { LazyRouteLoader } from "./components/LazyRouteLoader";
import { Tab } from "./components/Tab/Tab";
import Loading from './components/Loading/Loading';

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
                {
                    path: '/Discover',
                    load: () => import('./views/DiscoverView/DiscoverView')
                },
                {
                    path: '/Login',
                    load: () => import('./views/LoginView/LoginView')
                },
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
                    load: () => import("./views/MineOrderView/MineOrderView"),
                },
                { path: "*", load: () => import("./views/LoginView/LoginView") },
            ]}
        />
        <Tab />
        <Loading />
    </Router>
);

ReactDOM.render(<App />, document.getElementById("main"));
