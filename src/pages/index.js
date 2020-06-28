import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

export default () => (
    <Layout>
        <h1>Home</h1>
        <p>Gatsby Intro Demo</p>
        <Link to="/about">About page</Link>
    </Layout>
);
