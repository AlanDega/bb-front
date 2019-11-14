import React from 'react';
import Layout from '../common/Layout';
import FeedBTC from '../common/FeedBTC';

function Home() {
    return(
        <>
        < Layout head = "Bitcoin"
        subhead = "200000 MXN" />
        <FeedBTC/>
        </>
    )
}

export default Home;