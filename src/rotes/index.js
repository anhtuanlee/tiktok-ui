import { HeaderOnly } from '../component/Layout';

import Home from '../component/pages/Home/';
import Following from '../component/pages/Following/';
import Profile from '../component/pages/Profile/';
import Search from '../component/pages/Search/';
import Upload from '../component/pages/Upload/';
// Viet router rieng le
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
        path: '/profile',
        component: Profile,
    },
    {
        path: '/search',
        component: Search,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
];

const privateRoutes = [];

export { publishRoutes, privateRoutes };
