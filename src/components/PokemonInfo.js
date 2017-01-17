import React from 'react';
import {Radar} from 'react-chartjs'

const PokemonInfo = ({pokemon}) => {

  let labelsPokemon = pokemon.stats.map(info => {
    return info.stat.name;
  });

  const dataSetPokemon = pokemon.stats.map(info =>{
    return info.base_stat;
  });

  const chartDataSet = {
    labels: labelsPokemon,
    datasets:[
      {
        data: dataSetPokemon,
        backgroundColor: "rgba(179,181,198,0.2)",
        fillColor: "rgba(220,220,220,0.2)",
  			strokeColor: "rgba(220,220,220,1)",
  			pointColor: "rgba(220,220,220,1)",
  			pointStrokeColor: "#fff",
  			pointHighlightFill: "#fff",
  			pointHighlightStroke: "rgba(220,220,220,1)"
      }
    ]};

    return(
        <div>
          <Radar data={chartDataSet} width="300" height="300"/>
          <img src={pokemon.sprites.front_default} />
        </div>


    )

}

export default PokemonInfo;
