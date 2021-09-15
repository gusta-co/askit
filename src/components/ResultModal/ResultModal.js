import React from 'react'

import "./ResultModal.css"

import { useState, useEffect } from 'react'

import { useHistory } from 'react-router'

import { Button, TextField, CircularProgress } from '@material-ui/core'


const ResultModal = ({ resultPosition, state, resultModal, setResultModal }) => {

    const [results, setResults] = useState();
    let thisResults = "[" + localStorage.getItem("result" + resultPosition) + "]";
    let jsonResult = JSON.parse(thisResults);

    console.log(jsonResult);

    let history = useHistory();

    const closeModal = () => 
    {
        if (state === "results") 
        {
            setResultModal(false)
        }
        else
        {
            history.push("/");
        }
    }

    function ParseJson() {
        useEffect(() => {



        }, []);

        return "";
    }
    ParseJson();

    const addItem = (index) => {
        {
           if(jsonResult[index])
           {
            if (jsonResult[index].checked == "correct") {
                var resultCard = <div className='right-card'>
                    <div className='card'>
                        <h5 className='text'>Acertou! :)</h5>
                        <h4 className='title'>{jsonResult[index].title}</h4>
                        <div className='card-row'>

                            <h5 className='right-option'>Resposta : {jsonResult[index].answer}</h5>
                        </div>
                    </div>
                </div>

                return resultCard
            }
            else {
                var resultCard = <div className='wrong-card'>
                    <div className='card'>
                        <h5 className='text'>Errou! :(</h5>
                        <h4 className='title'>{jsonResult[index].title}</h4>
                        <div className='card-row'>
                            <h5 className='wrong-option'>Resposta marcada: {jsonResult[index].answer}</h5>
                            <h5 className='right-option'>Resposta correta: {jsonResult[index].correct_answer}</h5>
                        </div>

                    </div>
                </div>
                return resultCard
            }
           }
           else
           {
               history.push("/");
           }
           
        }
    }


    return (
        <div className='result-modal-container'>

            <div className='result-modal-container-options'>

                <Button variant='contained' color='secondary' onClick={closeModal}>FECHAR</Button>

                <h3 className='title'>Resultado {resultPosition + 1}º quiz:</h3>


                <div className='results-cards-display-container'>


                    {jsonResult && <div>

                        {jsonResult.map((i, index) => addItem(index)

                        )}

                    </div>}
                </div>


            </div>

        </div>
    )
}

export default ResultModal
