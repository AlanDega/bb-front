import React from "react";
import { Link } from 'react-router-dom';
import {useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';

const DELETE_TRANSACTION = gql`

  mutation deleteTransaction($id:ID!){ 
    deleteOneTransaction(id:$id)
  }

`;

function TransactionCard({currency, client, id, edit, remove}) {
  const [deleteTransaction] = useMutation(DELETE_TRANSACTION);


    return (
        <>
        <div className="post-preview">
          <Link to={`/transaction/${id}`}>
            < h2 className= "post-title" >
              {currency}
            </h2>
          </Link>
          < p className= "post-meta" > Posted by
            <Link to="#">{client}</Link> 
          </p>
          <p>
            {
              edit ? <Link to={`/update/${id}`}>Editar </Link>: <></>
            } 
            {
              remove ? <button onClick={
                () => {

                    deleteTransaction({variables:{id}}).then(()=>{
                      window.location.reload();
                    })
                  
                }
              }>Borrar transaction </button>
              : <></>
            }           
          </p>
        </div>
        </>
    );
}

export default TransactionCard;