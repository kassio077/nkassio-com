import React from 'react';

import PlacarContainer from './PlacarContainer';

const dados ={
    partida: {
        estadio: "Maracanã/RJ",
        data: "17/10/2018",
        horario: "19h",
    },

    casa: {
        nome: "Asa",
    },

    visitante: {
        nome: "Flamengo",
    }
};

export default class App extends React.Component {
    render(){
        return  <PlacarContainer partida={dados.partida}
                                 casa={dados.casa}
                                 visitante={dados.visitante}/>
    }

}