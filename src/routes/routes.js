import Home from '../components/pages/Home';
import Following from '../components/pages/Following';
import Profile from '../components/pages/Profile';
import Search from '../components/pages/Search';
import config from '../config';
import { HeaderOnly } from '../layouts';

const publishRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.profile,
        component: Profile,
        layout: HeaderOnly,
    },
    {
        path: config.routes.search,
        component: Search,
        layout: null,
    },
];

const privateRoutes = [];

export { publishRoutes, privateRoutes };
