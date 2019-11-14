import React from 'react';
import Navbar from './Navbar';
import HeadETH from './HeadETH';

function LayoutETH({ head, subhead, children, cover }){
    return (
    <>
      <Navbar title="Cryptapi"/>
      <HeadETH title={head} subheading={subhead} cover={cover} />
        {children}
      {/* <Head title="Bienvenidos a postealo!" subheading="Busca el post que más te guste."/> */}
    </>
  );
}

export default LayoutETH;