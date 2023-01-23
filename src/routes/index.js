import Home from '../components/pages/Home';
import Following from '../components/pages/Following';
import Profile from '../components/pages/Profile';
import Search from '../components/pages/Search';
import { default as routesConfig } from '../config/route';
import { HeaderOnly } from '../components/Layout';

const publishRoutes = [
    {
        path: routesConfig.home,
        component: Home,
    },
    {
        path: routesConfig.following,
        component: Following,
    },
    {
        path: routesConfig.profile,
        component: Profile,
        layout: HeaderOnly,
    },
    {
        path: routesConfig.search,
        component: Search,
        layout: null,
    },
];

const privateRoutes = [];

export { publishRoutes, privateRoutes };
