import React, { useState } from 'react';
import Title from './../components/Title/index';
import api from '../../src/services/api';




export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [nomecartao, setNomeCartao] = useState('');
    const [numcartao, setNumCartao] = useState('');
    const [cvc, setCvc] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();

      const bodyParam = {
          nome: nome,
          telefone: telefone,
          endereco: endereco,
          nomecartao: nomecartao,
          numcartao: numcartao,
          cvc: cvc,
          email: email,
          senha: senha

      }

      api.post('/clientes', bodyParam)
          .then((response) => {
              console.log(response.data)
              alert(" O usuario " + response.data.codigo + " foi criado com sucesso!")
          })
          .catch((err) => {
              console.error(err)
              alert(" Ocorreu um erro! Veja no console ..")
          })
          .finally(() => {
              setNome("")
              setTelefone("")
              setEndereco("")
              setNomeCartao("")
              setNumCartao("")
              setCvc("")
              setEmail("")
              setSenha("")
          })
  }

    return (

        <div className="container">
          <div className="mt-5 text-center">
          <Title
                        title={"Cadastro de conta"}
                        />
          </div>
          <form onSubmit={handleSubmit}>
          <div className="row mt-5">
            <div className="col">
              <div>
                <div className="mt-3">
                  <label> Dados do Assinante </label>
                </div>
              </div>
              <div className="mt-3">
                <label htmlFor="nameInput">Name:</label><br />
                <input class="form-control" placeholder="Nome Completo" id="nameInput" type="text" value={nome} onChange={(e) => { setNome(e.target.value) }} /> <br />
              </div>
              <div className="mt-3">
                <label htmlFor="nameInput">Telefone:</label><br />
                <input class="form-control" placeholder="Telefone" id="TelefoneInput" type="number" value={telefone} onChange={(e) => { setTelefone(e.target.value) }} /> <br />
              </div>
              <div className="mt-3">
                <label htmlFor="nameInput">Endereço:</label><br />
                <input class="form-control" placeholder="Endereço" id="EnderecoInput" type="text" value={endereco} onChange={(e) => { setEndereco(e.target.value) }} /> <br />
              </div>
            </div>
    
            
            <div className="col">
              <div className="mt-3">
                <label> Dados do Cartão </label>
              </div>
              <div className="mt-3">
                <label htmlFor="nameInput">Nome do Cartão:</label><br />
                <input class="form-control" placeholder="Nome do cartão" type="text" value={nomecartao} onChange={(e) => { setNomeCartao(e.target.value) }} /> <br />
              </div>
              <div className="mt-3">
                <label htmlFor="nameInput">Número do Cartão:</label><br />
                <input className="form-control" placeholder="Número do cartão"  type="text" maxLength={19} value={numcartao} onChange={(e) => { setNumCartao(e.target.value) }} /> <br />
              </div>
              <div className="mt-3">
                <label htmlFor="NumerocvcInput">Número do CVC:</label><br />
                <input className="form-control" placeholder="Número do CVC" type="password" maxLength={3} value={cvc} onChange={(e) => { setCvc(e.target.value) }} /> <br />
              </div>
              <div className="mt-3">
                <label htmlFor="NumerocvcInput">Email:</label><br />
                <input className="form-control" placeholder="Email" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} /> <br />
              </div>
              <div className="mt-3">
                <label htmlFor="NumerocvcInput">Senha:</label><br />
                <input className="form-control" placeholder="Senha" type="password" value={senha} onChange={(e) => { setSenha(e.target.value) }} /> <br />
              </div>
            </div>
          </div>
          <div>
    
    
            <div className="mt-5 text-center">
    
                  <button>Cadastrar</button>
                
            </div>
           
    
          </div>
          </form>
        </div>
       
    
      );
    }