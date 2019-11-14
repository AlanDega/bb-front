import React from 'react';
import LayoutETH from '../common/LayoutETH';
import FeedETH from '../common/FeedETH';

function Home() {
    return(
        <>
        < LayoutETH head = "Ethereum"
        subhead = "5000 MXN" />
        <FeedETH/>
        </>
    )
}

export default Home;