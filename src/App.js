import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Blog from "./components/Blog";
import BlogHeader from "./components/Header";
import Login from './components/Login'
import AddArticle from "./components/AddArticle";
import ArticleDetails from "./components/ArticleDetails";
import Component404 from "./components/Component404";

const AppContainer = styled.div`
  width:100%;
  margin: 0 auto;
`

function App() {
  return (
    <Router>
      <AppContainer >
        <BlogHeader />
        <Switch>
          <Route exact path='/'>
            <Blog />
          </Route>
          <Route path='/add-article'>
            < AddArticle />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/articles/:id'>
            <ArticleDetails />
          </Route>
          <Route path='*'>
            <Component404 />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;
