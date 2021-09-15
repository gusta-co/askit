import React, { useState, useEffect } from 'react'

import "./Result.css"

import { Button } from '@material-ui/core';

import { useHistory } from 'react-router';

import ResultModal from '../../components/ResultModal/ResultModal';

const Result = () => 
{
    var i = 0;

    const [resultModal, setResultModal] = useState(false);
    const [resultPosition, setResultPosition] = useState()
    const [resultsNumber, setResultsNumber] = useState();

    let history = useHistory();

    var resultsArray = [];

    function CountItems() 
    {
        useEffect(() => {
            var resultChecker = false;
            var resultI = 0;
            while (resultChecker === false) {
                let thisResult = localStorage.getItem("result" + resultI);
                if (!thisResult) 
                {
                    setResultsNumber(resultI);
                    resultChecker = true;
                    setResultsNumber(resultsArray)
                  
                }
                else {
                    resultsArray.push(resultI)
                    resultI++;
                }
            }

        }, []);

        return "";
    }
    CountItems();


    const openModal = (i) =>
    {
        setResultPosition(i);
        setResultModal(true);
    }

    return (
        <div className='results-container'>

            <Button variant='contained' size='small'

                style={{ width: '100%' }}
                onClick={() => { history.push("/") }}
            ><h3 className='title'>INÍCIO</h3></Button>

            <h2 className='title'>Resultados</h2>
            {resultsNumber && <div className='results-column'>

                {resultsNumber.map((i, index) => <Button key={index} id={`option-` + index} variant='contained' size='large' color='primary'

                    style={{
                        marginTop: '24px',width: '100%'
                    }}

                    onClick={() =>{openModal(i)}}
                ><h3 className='text color-white'>{i+1}º QUIZ</h3></Button>)}

            </div>
            }



            {resultModal && <ResultModal  resultPosition={resultPosition} state="results" resultModal={resultModal} setResultModal={setResultModal}/>}



        </div>
    )
}

export default Result
