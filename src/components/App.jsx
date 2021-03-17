import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import Index from '../pages/Index';
import Layout from './Layout';
import Notfound from './Notfound'
import BadgeEdit from '../pages/BadgeEdit';

function App() {
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Index}/>
                    <Route exact path='/badges' component={Badges}/>
                    <Route exact path='/badges/new' component={BadgeNew}/>
                    <Route exact path='/badges/:badgeId/edit' component={BadgeEdit}/>
                    {/* Podemos colocar una variable dentro de un link */}
                    <Route component={Notfound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;