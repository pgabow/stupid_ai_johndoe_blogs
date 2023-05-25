/* eslint-disable react/prop-types */
import React from 'react';

import '../styles/globals.scss';
import { Layout } from '../components';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component { ...pageProps } />
						{/* не забыть потом вернуть */}
            {/* <Analytics /> */}
        </Layout>
    );
}

export default MyApp;