import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import api from '../services/api';
import Title from './../components/Title/index';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    function handleSubmit(event) {
      event.preventDefault();

      const bodyParam = {
          email: email,
          senha: senha
      }

      api.post('/auth', bodyParam)
          .then((response) => {
              console.log(response.data)
              alert(" Token gerado para o usuario " + response.data.nome)
              localStorage.setItem("token", response.data.token);
              navigate("/");
          })
          .catch((err) => {
              console.error(err.response.data) // Objeto de erro vindo do axios
              alert(" Ocorreu um erro! " + err.response.data.error)
          })
          .finally(() => {
              setEmail("")
              setSenha("")
          })
  }

    return (

        <div className="container">
          <div className="mt-5 text-center">
          <Title
                        title={"Insira os dados de Login"}
                        />
          </div>
          <div className="container text-center">
            <div className="row">
                <div className="form-custom">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>
                                Email:
                                <input type="text" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            </label>
                        </div>
                        <br />
                        <div className="form-group">
                            <label>
                                Senha:
                                <input type="password" className="form-control" value={senha} onChange={(e) => { setSenha(e.target.value) }} />
                            </label>
                        </div>
                        <div>
                                 <Link to='/'>Ainda não tem cadastro?</Link> 
                        </div>
                        <br />
                    </form>
                </div>
            </div>
        </div>

        
              <div className="mt-5 text-center">
                  <button type="submit">Login</button>
              </div>
        </div>       
    
      );
    }

export default Login;