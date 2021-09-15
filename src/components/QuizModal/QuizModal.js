import React from 'react'

import "./QuizModal.css"

import { useState } from 'react'

import { useHistory } from 'react-router'

import { Button, TextField, CircularProgress } from '@material-ui/core'

const QuizModal = ({ dismissQuizModal, dismissReportModal, numberOfQuestions, setNumberOfQuestions, getDataAndStartQuiz }) => {

    const history = useHistory();

    const [numberOfQuestionsError, setNumberOfQuestionsError] = useState("");
    const [disable, setDisable] = useState(false);


    const quizStartHandle = () => {
        if (!numberOfQuestions || numberOfQuestions <= 0 || numberOfQuestions > 30) {
            setNumberOfQuestionsError(true);
        }
        else {
            setDisable(true);
            setNumberOfQuestionsError(false);
            getDataAndStartQuiz();

            setTimeout(() => {
                history.push("/quiz");
            }, 2500);
        }
    }

    return (

        <div className='modal-container'>

            <div className='modal-container-options'>

                <h3 className='title'>Selecione o número de questões que deseja responder:</h3>

                <TextField type='number' label='Nº de questões' disabled={disable}

                    InputProps={{ inputProps: { min: 1, max: 30 } }}

                    style=
                    {{
                        width: '150px',
                        textAlignLast: 'center'
                    }}

                    onChange={(e) => { setNumberOfQuestions(e.target.value); }}
                />

                {numberOfQuestionsError === false && <CircularProgress
                    style={{ marginTop: '16px' }}
                />}
                {numberOfQuestionsError === true && <h5 className='text'>Por favor, insira um número entre 0 e 30.</h5>}


                <div className='modal-container-btns-row'>
                    <Button variant='contained' size='large' color='secondary' disabled={disable}

                        onClick={dismissQuizModal}
                    >CANCELAR</Button>


                    <Button variant='contained' size='large' color='primary' disabled={disable}

                        onClick={quizStartHandle}
                    >INICIAR QUIZ</Button>
                </div>



            </div>

        </div>
    )
}

export default QuizModal
