import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import AddMember from '../components/AddMember';
import ViewMembers from '../components/ViewMembers';
import MemberDetails from '../components/MemberDetails';

const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/add-member" component={AddMember} />
                <Route path="/view-members" component={ViewMembers} />
                <Route path="/members/:id" component={MemberDetails} />
            </Switch>
        </Router>
    );
};

export default AppRoutes;