import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Title from './../components/Title/index';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }  
    
    function handleSenhaChange(event) {
        setSenha(event.target.value);
    }

    return (

        <div className="container">
          <div className="mt-5 text-center">
          <Title
                        title={"Insira os dados de Login"}
                        />
          </div>
          <div className="row mt-5">
            <div className="col">
              <div>
                <div className="mt-3">
                  <label> Login </label>
                </div>
              </div>
              <div className="mt-3">
                <label htmlFor="nameInput">Email:</label><br />
                <input class="form-control" placeholder="Email" id="emailInput" type="email" value={email} onChange={handleEmailChange} /> <br />
              </div>
              <div className="mt-3">
                <label htmlFor="nameInput">Senha:</label><br />
                <input class="form-control" placeholder="Senha" id="senhaInput" type="password" value={senha} onChange={handleSenhaChange} /> <br />
              </div>

              <div>

            <Link to='/'>Ainda não tem cadastro?</Link> 
              </div>

              <div className="mt-5 text-center">
    
                  <button >Login</button>
                
            </div>
                    </div>       
                </div>
            </div>
    
      );
    }

export default Login;