import React from 'react';
import {  BrowserRouter, Route } from 'react-router-dom';

import { Home } from '../pages/Home';


const OtherRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={Home}></Route>
        </BrowserRouter>
    );
};

export default OtherRouter;