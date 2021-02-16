import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Suspense } from 'react';
import { FallBackUI } from 'App/components/HOC/FallBackUI';
import { Login } from 'App/containers/login/Login';
import {
  NavMenu,
  News,
  Profile,
  Footer,
  Internships,
  InternshipInfo,
  Education,
  Employees
} from 'App/components';
import { NewsInfo } from 'App/components';
import { Registration } from 'App/containers/login/Registration';
import { withAuthRedirect } from 'App/components/HOC/WithAuthRedirect';

export const App = hot(module)(() => {
  return (
    <Switch>
      <Suspense fallback={() => <FallBackUI />}>
        <Route path={'/login'} component={Login} />
        <Route path={'/registration'} component={Registration} />
        <Route path={''} component={withAuthRedirect(NavMenu)} />
        <Route path={''} component={withAuthRedirect(Footer)} />
        <Route exact path={`/news`} component={withAuthRedirect(News)} />
        <Route exact path={`/news/:id`} component={withAuthRedirect(NewsInfo)} />
        <Route path={'/profile'} component={withAuthRedirect(Profile)} />
        <Route path={'/internships'} component={withAuthRedirect(Internships)} />
        <Route path={'/employees'} component={withAuthRedirect(Employees)} />
        <Route path={'/my-course/1'} component={withAuthRedirect(Education)} />
        <Route path={'/internshipInfo'} component={withAuthRedirect(InternshipInfo)} />
        <Route path={'/internshipInfo'} component={withAuthRedirect(InternshipInfo)} />
        <Route path={'/my-course/1'} component={withAuthRedirect(Education)} />
      </Suspense>
    </Switch>
  );
});
