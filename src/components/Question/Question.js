import React, {useState} from 'react'

import { TextField, Button, CircularProgress } from '@material-ui/core'

import "./Question.css"

const QuestionMultipleChoice = ({ questionData, questionMark, currentResult}) => 
{

    
    var questionTitle = questionData.question.replace("&quot;", "''");
    questionTitle = questionTitle.replace("&quot;?", "''?");
    questionTitle = questionTitle.replace("&quot;,", "'',");
    questionTitle = questionTitle.replace("&#039;", "'");


    const allAnswersOptions = [questionData.correct_answer,
    ...questionData.incorrect_answers];

    const shuffledAnswers = allAnswersOptions.sort(() => Math.random() - 0.5);



    const checkAnswer = (answer, index) =>
    {
        var questionResult;

            if(answer === questionData.correct_answer)
            {
                document.getElementById("option-"+index).classList.add("options-btn-right");

                questionResult = {"title": questionTitle, "checked":"correct", "answer": answer};

                for(var i = 0; i<allAnswersOptions.length; i++)
                {
                    document.getElementById("option-"+i).classList.add("disabled-button");
                }

                questionMark("right");

            }
            else if(answer !== questionData.correct_answer)
            {
                document.getElementById("option-"+index).classList.add("options-btn-wrong");

                questionResult = {"title": questionTitle, "checked":"incorrect", "answer": answer, "correct_answer": questionData.correct_answer};

                for(var i = 0; i<allAnswersOptions.length; i++)
                {
                    let currentOption = shuffledAnswers[i];
                    if(currentOption === questionData.correct_answer)
                    {
                        document.getElementById("option-"+i).classList.add("options-btn-right");
                    }
                    document.getElementById("option-"+i).classList.add("disabled-button");

                }

                questionMark("wrong");
            }

            let stringfiedResult = JSON.stringify(questionResult);
            let parcialResult = localStorage.getItem("result"+currentResult);
            if(!parcialResult)
            {
                localStorage.setItem("result"+currentResult, stringfiedResult)
            }
            else
            {
                localStorage.setItem("result"+currentResult, parcialResult +","+ stringfiedResult)
            }
            let thisResult = localStorage.getItem("result"+currentResult);
            console.log(thisResult);
      
         }



    return (
        <div>
            <h3 className='title'
            >{questionTitle}</h3>

            <div className='options-container'>

                {shuffledAnswers.map((i, index) => <Button key={index} id={`option-` + index} variant='outlined' className='options-btn'

                    style={{
                        marginTop: '8px'
                    }}

                    onClick={() =>{checkAnswer(i, index)}}
                >{i}</Button>)}
            </div>



        </div>
    )
}

export default QuestionMultipleChoice
