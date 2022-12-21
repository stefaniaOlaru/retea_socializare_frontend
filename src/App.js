
import './App.css';
import SimpleBottomNavigation from "./components/MainNav";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopRated from "./Pages/TopRated/TopRated";
import Chat from "./Pages/Chat/Chat";
import Search from "./Pages/Search/Search";
import Container from '@mui/material/Container';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="app">
    <Container>
          <Switch>
            <Route path='/' component={TopRated} exact />
            <Route path='/chat' component={Chat} />
            <Route path='/search' component={Search} />
          </Switch>
          </Container> 
    </div>

    <SimpleBottomNavigation />
    </BrowserRouter>
  )
}

export default App;
