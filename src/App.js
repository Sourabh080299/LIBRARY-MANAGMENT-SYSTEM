import './App.css';
import Home from './Home';
import UserHome from './UserHome';
import Issue from './Issue';
import Allbooks from './Allbooks';
import { BrowserRouter as Router } from 'react-router-dom';
import {Link,Switch,Route} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Footer from './Footer';
import Addbook from './Addbook';
import Updatebook from './Updatebook';
import AdminHome from './AdminHome';
import AdminAllbooks from './AdminAllbooks';
import Issueform from './Issueform';
import Report from './Report';
import AuthProvider from './context/AuthContext'
function App() {
  return (  
        <div className="App" style={ {backgroundImage:"url('/image/bg.png')"}}>
            <Router>
              <AuthProvider>
                    <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/home/user' component={UserHome}></Route>
                    <Route exact path='/home/user/issue/' component={Issue}></Route>
                    <Route exact path='/home/user/login' component={Login}></Route>
                    <Route exact path='/home/user/signup' component={Signup}></Route>
                    <Route exact path='/home/user/books' component={Allbooks}></Route>
                    <Route exact path='/home/user/books/issue' component={Issueform}></Route>

                    <Route exact path='/home/admin' component={AdminHome}></Route>
                    <Route exact path='/home/admin/books' component={AdminAllbooks}></Route>
                    <Route exact path='/home/admin/addbook' component={Addbook}></Route>
                    <Route exact path='/home/admin/book/update' component={Updatebook}></Route>
                    <Route exact path='/home/admin/report' component={Report}></Route>
                  </Switch>
              </AuthProvider>
            </Router>
            <Footer></Footer>
        </div>
  );
}

export default App;
