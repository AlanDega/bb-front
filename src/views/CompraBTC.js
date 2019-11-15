import React, {useState} from 'react';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import Layout from '../common/Layout';
import Input from '../common/Input' 
import useForm from '../hooks/useForm';
import authHOC from '../utils/authHOC';

const CREATE_TRANSACTION = gql`
    mutation createTransaction($data:TransactionInput!){
        createNewTransaction(data:$data){
            _id
                # currency
                # transaction_type

        }
    }
`;

function CompraBTC({history}){
    const [sendTransaction] = useMutation(CREATE_TRANSACTION);
    // const [cover,setCover] = useState('');
    // const [coverPreview, setCoverPreview] = useState('');

    // const catchCover = event => {
    //     const reader = new FileReader();
    //     const file = event.target.files[0];

    //     reader.onloadend = () =>{
    //         setCover(file);
    //         setCoverPreview(reader.result);
    //     } 

    //     reader.readAsDataURL(file);

    // }

    const catchData = async (inputs) => {
        const { data, errors} = await sendTransaction({variables:{data:{...inputs}}});
        if(data) history.push('/');
        if (errors) alert(`Errores: ${errors}`);
    }

    const {
        inputs,
        handleSubmit,
        handleInputChange,
    } = useForm(catchData);
    
    return(<>
         {/* <Layout head = "Crea un post para postealo!"
        subhead = "Comparte todo lo que gustes aqui" > */}
        <div className="container">
            <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
                <form onSubmit={handleSubmit}>
                    <Input
                    name="currency"
                    label="currency "
                    type="text"
                    placeholder="currency"
                    value={inputs.currency}
                    change={handleInputChange}
                    required={true}
                    ></Input>
                    <div className="control-group">
                            <div className="form-group floating-label-form-group controls">
                                <label>Cantidad: </label>
                                <textarea className="form-control" 
                                placeholder="Cantidad"
                                name="transaction_type" onChange={handleInputChange} value={inputs.transaction_type} 
                                ></textarea>
                            </div>
                        </div>
                    {/* <Input
                    name="cover"
                    label="Cover: "
                    type="file"
                    placeholder="Selecciona el cover de tu post."
                    change={catchCover}
                    required={true}
                    ></Input>
                    <img src={coverPreview} alt="" className="d-block w-50"></img> */}
        
                <div className="clearfix mt-4">
                    <button className="btn btn-primary float-right" type="submit">
                        Compra
                        </button>
                </div>
                </form>
            </div>
            </div>
        </div>
        {/* </Layout> */}
    </>);
}

export default authHOC(CompraBTC);