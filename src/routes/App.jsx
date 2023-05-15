import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Discography from '../pages/Discography';
import Layout from '../containers/Layout';
import Profile from '../pages/Profile';
// import Home from '../pages/Home';
// import NotFound from '../pages/NotFound';
import '../styles/global.css';
// import Context from '@context/AppContext';
import { ConstProvider } from '@context/AppContext';

const App = () => {
    return (
        // <Provider value={initialState}>
    // <Context.Provider>
    <ConstProvider>
        <BrowserRouter>
            <Layout>
                <Routes>
                    {/* <Route exact path="/" element={<Home />} />                 */}
				    <Route exact path="/" element={<Profile />} />
                        {/* <ConstProvider> */}
                            {/* <Route exact path="/discography" element={<Discography />} /> */}
                        {/* </ConstProvider> */}
                    {/* <Route path="*" element={<NotFound />} /> */}
                </Routes>
            </Layout>
        </BrowserRouter>
    </ConstProvider>
    // </Context.Provider>

    );
}

export default App;
