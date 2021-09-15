import React, { useState } from 'react'

import { TextField, Button, CircularProgress } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import QuizModal from '../../components/QuizModal/QuizModal'

import './Main.css'

const Main = ({ userName, numberOfQuestions, setNumberOfQuestions, getDataAndStartQuiz }) => {

    const history = useHistory();

    const results = localStorage.getItem('result0');

    const [quizModal, setQuizModal] = useState(false);
    const [reportModal, setReportModal] = useState(false);

    const dismissQuizModal = () => {
        setQuizModal(false);
    }

    const dismissReportModal = () => 
    {
        setReportModal(false);
    }

    return (
        <div className='container'>


            <div className='row'>
                <img src='/img/waving.png' />
                <h1 className='title'>Olá {userName}</h1>
            </div>



            <Button size='large' color='primary' variant='contained'

                style={{
                    width: '90%'
                }}

                onClick={() => { setQuizModal(true) }}

            ><h3 className='text color-white'>INICIAR NOVO QUIZ</h3></Button>

            {results && <Button size='large' color='default' variant='contained'

                style={{
                    width: '90%',
                    marginTop: '32px'
                }}

                onClick={() => {history.push("/results")}}

            ><h3 className='text'>RELATÓRIO DE RESULTADOS</h3></Button>
            }

            {quizModal === true && <QuizModal dismissQuizModal={dismissQuizModal} dismissReportModal={dismissReportModal}
                numberOfQuestions={numberOfQuestions} setNumberOfQuestions={setNumberOfQuestions}
                getDataAndStartQuiz={getDataAndStartQuiz}
            />}


        </div>
    )
}

export default Main
