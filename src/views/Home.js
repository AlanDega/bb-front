import React from 'react';
import Layout from '../common/Layout';
import FeedBTC from '../common/FeedBTC';
import PrecioBTC from '../components/PrecioBTC'

function Home() {
    return(
        <>
        < Layout head = "Bitcoin"
        subhead = "200000 MXN" />
        <PrecioBTC/>
        <FeedBTC/>
        </>
    )
}

export default Home;