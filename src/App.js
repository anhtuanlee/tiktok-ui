import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publishRoutes } from './routes';
import { DefaultLayout } from './components/Layout';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publishRoutes.map((route, index) => {
                        const Pages = route.component;
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            // null => no tag
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                path={route.path}
                                element={
                                    <Layout>
                                        <Pages />
                                    </Layout>
                                }
                                key={index}
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
