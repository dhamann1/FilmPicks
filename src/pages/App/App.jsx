import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import MainPage from '../MainPage/MainPage';
import MoviePage from '../MoviePage/MoviePage';
import ProfilePage from '../ProfilePage/ProfilePage';
import userService from '../../utils/userService';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      user: null
    };
  }

  //User Callback Methods 
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignup = () => {
    this.setState({ user: userService.getUser() });
  }

  handleLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  //Lifecycle Methods 
  componentDidMount() {
    let user = userService.getUser();
    this.setState({ user });
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
            <Switch>
              <Route exact path='/' render={(props) =>
                <MainPage
                  {...props}
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                />
              } />
              <Route exact path='/movies' render={(props) =>
                <MainPage
                  {...props}
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                />
              } />
              <Route exact path='/movies/:id' render={(props) =>
                <MoviePage
                  {...props}
                  user={this.state.user}
                  handleLogout={this.handleLogout}

                />
              } />
              <Route exact path='/profile' render={(props) =>
              userService.getUser() ?
                <ProfilePage
                  {...props}
                  user={this.state.user}
                  handleLogout={this.handleLogout}

                />
                :
                <Redirect to='/login' />
              } />
              <Route exact path='/signup' render={(props) =>
                <SignupPage
                  {...props}
                  user={this.state.user}
                  handleSignup={this.handleSignup}
                  handleLogout={this.handleLogout}


                />
              } />
              <Route exact path='/login' render={(props) =>
                <LoginPage
                  {...props}
                  user={this.state.user}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}

                />
              } />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App; 