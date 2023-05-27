//C1
// import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { publicRoutes } from "~/routes";

//C1
// import Home from "~/pages/Home";
// import Following from "~/pages/Following";

//C1
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Home></Home>,
//     },
//     {
//         path: "/following",
//         element: <Following></Following>,
//     },
// ]);

import { DefaultLayout, HeaderOnly } from "~/components/Layout";






function App() {



    return (
        //C1
        // <RouterProvider router={router} />
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component

                        let Layout = DefaultLayout

                        if (route.layout) {
                            Layout = route.layout
                        } else if (route.layout === null) {
                            Layout = Fragment
                        }

                        return <Route key={index} path={route.path} element={
                            <Layout>
                                <Page />
                            </Layout>}>
                        </Route>
                    })}
                </Routes>
            </div>
        </Router>

    );
}

export default App;
