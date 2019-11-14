import React from 'react';
import PostCard from '../components/PostCard';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';


const QUERY_POSTS = gql `

    query GETPOST{
        getPosts {
            _id,
            title,
            author{
                first_name
            }
        }
    }

`;

function FeedETH() {

    const { loading, errors, data } = useQuery(QUERY_POSTS);
    console.log(loading, errors, data);
    return (
        <>
        <div className="container">
        <div className="text-center">
  
    <h3 >Precio</h3>
    <h5 >5000 MXN</h5>
    <div className="d-flex justify-content-around">
    <a href="#" className="btn btn-secondary">Compra</a>
    <a href="#" className="btn btn-secondary">Venta</a>

    </div>
    

  </div>
  
</div>
    
    
    
            < div className = "row" >
                < div className = "col-lg-8 col-md-10 mx-auto" >
                    {
                        loading ? <>
                            <h3>Cargando...</h3>
                        </>  
                        :
                        <>
                            {data.getPosts ? 
                            data.getPosts.map( post => (
                                <PostCard title={post.title} edit author={post.author.first_name}
                                id={post._id} key={post._id}/>
                            ))
                            :
                            (<h2></h2>)
                            }

                            <h2>Movimientos</h2>
                            <ul class="list-group">
  <li class="list-group-item"><h5>Compra ETH</h5></li>
  <li class="list-group-item"><h5>Compra ETH</h5></li>
  <li class="list-group-item"><h5>Compra NEO</h5></li>
  
</ul>
                        </> 
                    }
            </div>
            {/* <div className="clearfix">
                <a className="btn btn-primary float-right" href="#">
                    Older Posts &rarr;</a>
            </div> */}
                   

        </div>
        <div className=" row ">
        < div className = "col-lg-8 col-md-10 mx-auto" >
            
        <img src="https://res.cloudinary.com/dhzled9ox/image/upload/v1573761382/iconfinder_bitoin_BTC_coin_crypto_2844381_ve79tj.png" alt="..."  style={{height: 100}}>
                        </img>
                        <img src="https://res.cloudinary.com/dhzled9ox/image/upload/v1573761478/ethLogo_i2sxh9.png" alt="..."  style={{height: 100}}>
                        </img>
                        <img src="https://res.cloudinary.com/dhzled9ox/image/upload/v1573761382/iconfinder_neo_neocoin_2844393_lptyse.png" alt="..."  style={{height: 100}}>
                        </img>

        </div>
        </div>



    </>
    );
}

export default FeedETH;