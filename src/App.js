import {Route, Routes} from 'react-router-dom';

import Layout from './components/Layout/Layout';

import {
    AboutMe, Contacts,
    HomePage, Portfolio, Skills
} from './pages';

function App() {

    return (
        <div className="wrap">

            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>

                    <Route path={'home'} element={<HomePage/>}/>

                    <Route path={'aboutMe'} element={<AboutMe/>}/>

                    <Route path={'skills'} element={<Skills/>}/>

                    <Route path={'portfolio'} element={<Portfolio/>}/>

                    <Route path={'contact'} element={<Contacts/>}/>

                </Route>
            </Routes>

        </div>

    );
}

export default App;