import { lazy, Suspense } from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import * as ROUTES from './constants/routes';

const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/sign-up'));
// const Dashboard = lazy(() => import('./pages/dashboard'));
// const Profile = lazy(() => import('./pages/profile'));
// const NotFound = lazy(() => import('./pages/not-found'));

function App() {
  return (
   <Router>
     <Suspense fallback={<p>Loding.....</p>}>
     <Switch>
       <Route path={ROUTES.LOGIN}  component={Login}/>
       <Route path={ROUTES.SIGN_UP} component={SignUp} />
     </Switch>
     </Suspense>
   </Router>
  );
}

export default App;
