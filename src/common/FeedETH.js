import React from 'react';
import TransactionCard from '../components/TransactionCard';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';


const QUERY_TRANSACTIONS = gql `

    query GETTRANSACTION{

            getTransactions{
                _id,
                currency
                transaction_type


            }
        }


`;

function FeedETH() {

    const { loading, errors, data } = useQuery(QUERY_TRANSACTIONS);
    console.log(loading, errors, data);
    return (
        <>
        <div className="comven">
        <div className="container">
        <div className="text-center">

    <h3 >Precio</h3>
    <h5 >5000 MXN</h5>
    <div className="d-flex justify-content-around">
    <a href="/comprabtc" className="btn btn-secondary">Compra</a>
    <a href="#" className="btn btn-secondary">Venta</a>

    </div>


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
                                                        <h2>Movimientos</h2>

                            {data.getTransactions ?
                            data.getTransactions.map( transaction => (
                                // <TransactionCard title={transaction.currency}
                                // id={transaction._id} key={transaction._id}/>

                                <ul className="list-group">
                                <li className="list-group-item"><h5>{transaction.currency}</h5><h5>{transaction.transaction_type}</h5></li>
                                
                              </ul>
                            ))
                            :
                            (<h2></h2>)
                            }

     
                        </>
                    }
            </div>
            {/* <div className="clearfix">
                <a className="btn btn-primary float-right" href="#">
                    Older Posts &rarr;</a>
            </div> */}


        </div>

        <div className="botonToken">
        <div className= "d-flex justify-content-around"   >

      <a href="/"> <img src="https://res.cloudinary.com/dhzled9ox/image/upload/v1573761382/iconfinder_bitoin_btc_coin_crypto_2844381_ve79tj.png" alt="..."  style={{height: 100}}>
                        </img> </a>
                        <a href="/eth">  <img src="https://res.cloudinary.com/dhzled9ox/image/upload/v1573761478/ethLogo_i2sxh9.png" alt="..."  style={{height: 100}}>
                        </img> </a>
                        <a href="/neo">   <img src="https://res.cloudinary.com/dhzled9ox/image/upload/v1573761382/iconfinder_neo_neocoin_2844393_lptyse.png" alt="..."  style={{height: 100}}>
                        </img> </a>
        </div>
        </div>




    </>
    );
}

export default FeedETH;
