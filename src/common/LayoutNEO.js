import React from 'react';
import Navbar from './Navbar';
import HeadNEO from './HeadNEO';

function LayoutNEO({ head, subhead, children, cover }){
    return (
    <>
      <Navbar title="eos"/>
      <HeadNEO title={head} subheading={subhead} cover={cover} />
        {children}
      {/* <Head title="Bienvenidos a postealo!" subheading="Busca el post que más te guste."/> */}
    </>
  );
}

export default LayoutNEO;