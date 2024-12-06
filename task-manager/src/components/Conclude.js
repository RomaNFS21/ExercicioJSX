import React from 'react';

function Conclude (){

    function tarefasFeitas(){
        alert("Parabéns você finalizou as tarefas do dia de hoje !")
    }

    function novasTarefas(){
        alert("Novas tarefas foram geradas !")
    }

    return (
        <div>
            <p><button onClick={tarefasFeitas}>Concluir</button> </p>
            <p><button onClick={novasTarefas}>Gerar Tarefas</button></p>
        </div>
        
    
    );

}

export default Conclude