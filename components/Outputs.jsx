import Image from 'next/image';
import React, { useState } from "react";
import axios from 'axios';
import gql from "graphql-tag";


const GET_NOTICES = gql`
  query {
    notices {
      edges {
        node {
          index
          input {
            index
          }
          payload
        }
      }
    }
  }
`;

const Outputs = () => {

    const [graphql, setGraphql] = useState('');
    const [server, setServer] = useState('');
    const [answer, setAnswer] = useState("Insert the link of the verifier state contract");
    const [payloadImage, setPayloadImage] = useState("");


    function hexToString(hex) {
        let string = "";
        for (let i = 0; i < hex.length; i += 2) {
          string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        }
        return string;
      }
    
    const handleAuxiliarContracts = async () => {
        try {
          if (!server) {
            console.error("Please fill in all fields.");
            return;
          }
          const header = {"ngrok-skip-browser-warning": "69420"}
          axios.get(server,{ headers: header })
          .then(function (response) {
            console.log(response)
            setAnswer(hexToString(response.data["reports"]["0"]["payload"]))
          })
          .catch(function (error) {
            console.error('Erro na requisição:', error);
          });
        
        } catch (error) {
          console.error(error);
        }
      }

    const handleLastNotice = async () => {
    const url = graphql + "graphql";
    const requestOptions = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        query:
            "{ notices(last: 1) { edges { node { index input { index } payload } } } }",
        }),
    };

    fetch(url, requestOptions)
        .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
        })
        .then((data) => {
        console.log("Response:", data);

        const hexString = data.data.notices.edges[0].node.payload;
        const regularString = hexToString(hexString);
        const baseString = "data:image/jpeg;base64,";
        const fullString = baseString + regularString;
        const cleanedPayloadImage = fullString.replace(/\0/g, ""); // Replace all null characters with an empty string
        console.log(cleanedPayloadImage)
        setPayloadImage(cleanedPayloadImage);

        })
        .catch((error) => {
        console.error("Error:", error);
        });
    };

	return (
        <div>
        <h1 className='text-white font-bold text-3xl flex justify-center mt-8 mb-4'>Outputs</h1>
        <div className='flex justify-around'>
            <div className='flex flex-col items-center'>
                <h1 className='text-xl text-white font-bold py-4' >Image output</h1>
                <div className='flex flex-col'>
                    <label className=" text-white py-1" >GraphQL Manager:</label>
                    <input 
                    onChange={(e) => setGraphql(e.target.value)}
                    className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen" ></input> 
                </div>
                <button 
                onClick={handleLastNotice}
                className='bg-lightgreen w-72 px-2 h-8 py-4 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 ease-in-out flex items-center justify-center font-semibold'>Request output image</button>
                
                
                <div>
                    <h1 className='mt-8 w-72 text-white font-semibold'>Result:</h1>
                    {payloadImage && <img width="300" src={payloadImage}></img> }
                
                    
                </div>


            </div>
            <div className='flex flex-col  items-center'>
                <h1 className='text-xl text-white font-bold py-4' >Sensors output</h1>
                <div className='flex flex-col'>
                    <label className=" text-white py-1" >Server Manager:</label>
                    <input
                    onChange={(e) => setServer(e.target.value)} 
                    className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen" ></input> 
                </div>
                <button 
                onClick={handleAuxiliarContracts}
                className='bg-lightgreen w-72 px-2 h-8 py-4 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 ease-in-out flex items-center justify-center font-semibold'>Request sensors output</button>
                <div>
                    <h1 className='mt-8 text-white font-semibold'>Result:</h1>
                    <p className='text-white mt-2 w-72'>{answer}</p>
                </div>
                
            </div>
        </div>
    </div>
	);
};

export default Outputs;
