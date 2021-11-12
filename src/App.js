import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import AuthProvider from './Context/AuthProvider';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Review from './Components/Review/Review';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ExploreWatches from './Components/ExploreWatches/ExploreWatches';
import WatchDetail from './Components/WatchDetail/WatchDetail';
import ShopFeature from './Components/ShopFeature/ShopFeature';
import DashBord from './Components/Dashbord/DashBorad/DashBord';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import AddReview from './Components/Dashbord/AddReview/AddReview';
import AddWatch from './Components/Dashbord/AddWatch/AddWatch';
import MakeAdmin from './Components/Dashbord/MakeAdmin/MakeAdmin';
import ManageOrder from './Components/Dashbord/ManageOrder/ManageOrder';
import ManageService from './Components/Dashbord/ManageService/ManageService';
import MyOrder from './Components/Dashbord/MyOrder/MyOrder';
import Pay from './Components/Dashbord/Pay/Pay';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/feature">
              <ShopFeature></ShopFeature>
            </Route>
            <Route path="/watches">
              <ExploreWatches></ExploreWatches>
            </Route>
            <PrivateRoute path="/watchdetail/:watchid">
              <WatchDetail></WatchDetail>
            </PrivateRoute>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/dashboard">
              <DashBord></DashBord>
            </PrivateRoute>
            <PrivateRoute path="/addreview">
              <AddReview></AddReview>
            </PrivateRoute>
            <PrivateRoute path="/addwatch">
              <AddWatch></AddWatch>
            </PrivateRoute>
            <PrivateRoute path="/makeadmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute path="/manageorder">
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <PrivateRoute path="/manageservice">
              <ManageService></ManageService>
            </PrivateRoute>
            <PrivateRoute path="/myorder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/pay">
              <Pay></Pay>
            </PrivateRoute>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
