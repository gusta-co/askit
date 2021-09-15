import React, {useState} from 'react'
import './Getuser.css'

import {TextField, Button, CircularProgress} from '@material-ui/core'
import { useHistory } from 'react-router-dom'



const Getuser = () => 
{

    const history = useHistory();
    
    const [nameError, setNameError] = useState("");
    const [name, setName] = useState("");
    const [disable, setDisable] = useState(false);

    const setUsername = () => {
        if(name.length >= 3)
        {
            setDisable(true);
            setNameError(false);  
            localStorage.setItem("userName", name);

            setTimeout(function() {
                window.location.reload();
            }, 2500);

        }
        else
        {
            setNameError(true);
        }
    }

    return (
        <div className='container'>
            <h2 className='title'
            
             
            style={{
                width: '98%',
                lineHeight: '40px'
            }}

            >Olá, é a sua primeira vez por aqui.<br/>Insira o seu nome campo abaixo:</h2>

            <TextField id='' className='text' label='nome' variant='outlined' disabled={disable}
            
            style={{
                width: '80%',
                marginTop: '16px'
            }}

            onChange={(e) => {setName(e.target.value)}}
            />

            <Button variant='contained'  size='large' color='primary' disabled={disable}


            style={{
                width: '80%',
                marginTop: '16px',
            }}

            onClick={setUsername}
            >CONFIRMAR</Button>

            {nameError === true && <h4 className='error-msg text'>Por favor, insira um nome válido.<br/>(Mínimo de 3 caracteres)</h4>}

            {nameError === false && <CircularProgress
            style={{ marginTop: '16px'}}
            />}

        </div>
    )
}

export default Getuser
