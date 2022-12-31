import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publishRoutes } from './rotes/index';
import { DefaultLayout } from './component/Layout';
import { Fragment } from 'react';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publishRoutes.map((route, index) => {
                        let Layout;

                        if (route.layout === null) {
                            Layout = Fragment;
                        } else if (route.layout) {
                            Layout = route.layout;
                        } else {
                            Layout = DefaultLayout;
                        }

                        const Page = route.component; // Phai dat ten Component la Chu in Hoa

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
