import Home from '../components/pages/Home';
import Following from '../components/pages/Following';
import Profile from '../components/pages/Profile';
import Search from '../components/pages/Search';

import { HeaderOnly } from '../components/Layout';
const publishRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/@/:nickname',
        component: Profile,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },
];

const privateRoutes = [];

export { publishRoutes, privateRoutes };
