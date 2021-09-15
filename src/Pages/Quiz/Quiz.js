import React, { useState, useEffect } from 'react'

import { TextField, Button, CircularProgress } from '@material-ui/core'

import Question from '../../components/Question/Question';

import { useHistory } from 'react-router';

import "./Quiz.css"

import ResultModal from "../../components/ResultModal/ResultModal"

const Quiz = ({ numberOfQuestions, setNumberOfQuestions, questionsData }) => {

    const history = useHistory();
    if (numberOfQuestions <= 0 || !questionsData) {
        history.push("/");
    }

    // numberOfQuestions = 10;
    // questionsData = [{"category":"General Knowledge","type":"multiple","difficulty":"medium","question":"Accord","correct_answer":"Red Lion","incorrect_answers":["Royal Oak","White Hart","King&#039;s Head"]},{"category":"Geography","type":"multiple","difficulty":"medium","question":"Which is the largest city in Morocco?","correct_answer":"Casablanca","incorrect_answers":["Rabat","Fes","Sale"]},{"category":"Entertainment: Video Games","type":"boolean","difficulty":"easy","question":"In Kingdom Hearts the Paopu fruit is said to intertwine the destinies for two people forever.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Entertainment: Music","type":"multiple","difficulty":"medium","question":"Who is the lead singer of Silverchair?","correct_answer":"Daniel Johns","incorrect_answers":["Ben Gillies","Chris Joannou","George Costanza"]},{"category":"Animals","type":"multiple","difficulty":"hard","question":"What scientific family does the Aardwolf belong to?","correct_answer":"Hyaenidae","incorrect_answers":["Canidae","Felidae","Eupleridae"]},{"category":"Science & Nature","type":"boolean","difficulty":"medium","question":"Scientists accidentally killed the once known world&#039;s oldest living creature, a mollusc, known to be aged as 507 years old.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Mythology","type":"boolean","difficulty":"hard","question":"Rannamaari was a sea demon that haunted the people of the Maldives and had to be appeased monthly with the sacrifice of a virgin girl.","correct_answer":"True","incorrect_answers":["False"]},{"category":"History","type":"multiple","difficulty":"hard","question":"During the Spanish Civil War (1936), Francisco Franco fought for which political faction?","correct_answer":"Nationalist Spain","incorrect_answers":["Republican Spain","Popular Front","Papal State"]},{"category":"Entertainment: Television","type":"multiple","difficulty":"easy","question":"In the show &quot;Dragonball Z&quot;, what is the name of Cell&#039;s most powerful attack?","correct_answer":"Solar Kamehameha","incorrect_answers":["Super Kamehameha","Cell Kamehameha","Android Kamehameha"]},{"category":"Geography","type":"multiple","difficulty":"medium","question":"The Pyrenees mountains are located on the border of which two countries?","correct_answer":"France and Spain","incorrect_answers":["Italy and Switzerland","Norway and Sweden","Russia and Ukraine"]}]


    var questionsMarkCounter = [];
    for (var i = 1; i <= numberOfQuestions; i++) {
        questionsMarkCounter.push(i);
    }

    const [resultModal, setResultModal] = useState(false);
    const [currentResult, setCurrentResult] = useState()
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questionType, setQuestionType] = useState(0);


    function DefaultParameters() {



        useEffect(() => {
            setTimeout(() => {
                var resultChecker = false;
                var resultI = 0;
                while (resultChecker === false) {
                    let thisResult = localStorage.getItem("result" + resultI);
                    if (!thisResult) {
                        setCurrentResult(resultI);
                        resultChecker = true;
                        console.log(resultI)
                    }
                    else {
                        resultI++;
                    }
                }


                setCurrentQuestion(0);
                document.getElementById("mark-1").classList.add("question-mark-current");
                setQuestionType(1);
            }, 100);

        }, []);

        return "";
    }
    DefaultParameters();


    const questionMark = (checked) => 
    {
        if (checked == "right") {
            document.getElementById("mark-" + (currentQuestion + 1)).classList.add("question-mark-right");
        }
        else {
            document.getElementById("mark-" + (currentQuestion + 1)).classList.add("question-mark-wrong");
        }
    }

    const questionPasser = () => {


        if(currentQuestion === numberOfQuestions-1)
        {
            openModal();
        }
        else
        {
            setCurrentQuestion(currentQuestion + 1);

      
            document.getElementById("mark-" + (currentQuestion + 1)).classList.remove("question-mark-current");

            setTimeout(() => {
                document.getElementById("mark-" + (currentQuestion + 2)).classList.add("question-mark-current");
                setQuestionType(1);
            }
                , 1500);
    
        }
       

    }


    const openModal = () => 
    {
        if(!currentQuestion)
        {
            setCurrentQuestion(0)
        }
        setResultModal(true);
        
    }





    return (
        <div className='quiz-container'>

            {!questionsData && <CircularProgress
                style={{ marginTop: '16px' }}
            />}

            {questionsData &&
                <div>
                    <div className='questions-information'>
                        <h5 className='text'>{questionsData[currentQuestion].category.replace("Entertainment: ", "")}</h5>
                        <h5 className='text'>Dificuldade: {questionsData[currentQuestion].difficulty}</h5>
                    </div>

                    <div className='question-body'>
                        {!questionType && <CircularProgress
                            style={{ marginTop: '16px', width: '6%', marginLeft: '47%', marginBottom: '32px' }}
                        />}

                        {questionType === 1 && <Question questionData={questionsData[currentQuestion]} questionMark={questionMark} currentResult={currentResult} />}


                    </div>

                    <div className='buttons-row'>
                        <Button id='finish-btn' variant='contained' color='secondary' size='large'

                            onClick={openModal}
                        >FINALIZAR</Button>

                        <Button id='next-btn' variant='contained' color='primary' size='large'

                            onClick={() => {
                                setQuestionType(0);
                                questionPasser();
                            }}
                        >AVANÇAR</Button>
                    </div>

                    <div className='questions-mark-row'>
                        {questionsMarkCounter.map((i) => <h5 key={i} id={`mark-` + i} className="question-mark-circle">{i}</h5>)}
                    </div>


                </div>



            }

            {resultModal && <ResultModal resultPosition={currentResult} state="quiz" resultModal={resultModal} setResultModal={setResultModal} />}


        </div>




    )



}

export default Quiz
