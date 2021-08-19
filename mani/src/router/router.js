import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HomePage from '../pages/homePage'
import PlaylistPage from '../pages/playlistPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>
                <Route exact path='/playlist'>
                    <PlaylistPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router