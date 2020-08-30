import "es6-shim";
import "url-search-params-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Global } from "./models/Global";
import "./assets/app.less";
import { LazyRouteLoader } from "./components/LazyRouteLoader";
import { Tab } from './components/Tab/Tab';

const App = () => (
    <Router history={Global.history}>
        <LazyRouteLoader
            routes={[
                { path: "/home", load: () => import("./views/HomeView/HomeView"), },
                // 炫兆{ path: "/category", load: () => import("./views/CategoryView/CategoryView"), },
                // 凌滨{ path: "/discover", load: () => import("./views/DiscoverView/DiscoverView"), },
                { path: "/cart", load: () => import("./views/CartView/CartView"), },
                // 金雄{ path: "/mine", load: () => import("./views/MineView/MineView"), },
                { path: "*", load: () => import("./views/HomeView/HomeView") },
            ]}
        />
        <Tab />
    </Router>
);

ReactDOM.render(<App />, document.getElementById("main"));

