import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mensagens:[]
        }
    }

    leInput(e) {
        if (e.keyCode === 13) {
            this.setState({mensagens: [...this.state.mensagens,e.target.value]})
            e.target.value = '';
        }
    }

    renderList(mensagem){
        return(
            <div key={mensagem}>
                <p>{mensagem}</p>
            </div>
        )
    }

    render(props) {
        return (
            <div>
                <h1>Sou um formulário {this.props.conteudo}</h1>
                <input onKeyDown={(e) => this.leInput(e)} type="text" name="" id="" />
                <p> Digitado: {this.state.mensagens} </p>

                {
                    this.state.mensagens.map((mensagem)=>{
                    return this.renderList(mensagem)
                 })
                }
            </div>

        )
    }
}


export default Form