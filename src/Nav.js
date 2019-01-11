import React, { Component } from 'react';
import './App.css';

  class DI extends Component {
    render() {
      return (
        <div className="float_left">
          <p>Dados indefinidos</p>
        </div>
      );
    }
  }
  
  class Time extends Component {
    render() {
      return (
        <div className="float_left">
          Contador regressivo: {this.props.time}
        </div>
      );
    }
  }
  
  class Phase extends Component {
    render() {
      return (
        <div className="float_left">
          <p>estágio atual</p>
          <p>{this.props.estagioAtual} de 100</p>
        </div>
      );
    }
  }
  
  class Monster extends Component {
    render() {
      return (
        <div className="clear">
          <p>{this.props.nome} / lv. {this.props.lvl} / {this.props.att}:  {this.props.pts} pts</p>
        </div>
      );
    }
  }
  
  class Nav extends Component {
    componentDidMount() {
        this.props.onRef(this)
    }
    componentWillUnmount() {
        this.props.onRef(undefined)
    }
    
    initial() {
      var raca1 = document.getElementById('1_raca'); var racaSelected1 = raca1.options[raca1.selectedIndex].value;
      var classe1 = document.getElementById('1_classe'); var classeSelected1 = classe1.options[classe1.selectedIndex].value;
  
      // var raca2 = document.getElementById('2_raca'); var racaSelected2 = raca2.options[raca2.selectedIndex].value;
      // var classe2 = document.getElementById('2_classe'); var classeSelected2 = classe2.options[classe2.selectedIndex].value;
  
      // var raca3 = document.getElementById('3_raca'); var racaSelected3 = raca3.options[raca3.selectedIndex].value;
      // var classe3 = document.getElementById('3_classe'); var classeSelected3 = classe3.options[classe3.selectedIndex].value;
  
      // var raca4 = document.getElementById('4_raca'); var racaSelected4 = raca4.options[raca4.selectedIndex].value;
      // var classe4 = document.getElementById('4_classe'); var classeSelected4 = classe4.options[classe4.selectedIndex].value;
  
      // var raca5 = document.getElementById('5_raca'); var racaSelected5 = raca5.options[raca5.selectedIndex].value;
      // var classe5 = document.getElementById('5_classe'); var classeSelected5 = classe5.options[classe5.selectedIndex].value;
  
      // var raca6 = document.getElementById('6_raca'); var racaSelected6 = raca6.options[raca6.selectedIndex].value;
      // var classe6 = document.getElementById('6_classe'); var classeSelected6 = classe6.options[classe6.selectedIndex].value;
  
      // if(racaSelected1 !== "null" && classeSelected1 !== "null" && racaSelected2 !== "null" && classeSelected2 !== "null" && racaSelected3 !== "null" && classeSelected3 !== "null" && racaSelected4 !== "null" && classeSelected4 !== "null" && racaSelected5 !== "null" && classeSelected5 !== "null" && racaSelected6 !== "null" && classeSelected6 !== "null"){
      if (racaSelected1 !== "null" && classeSelected1 !== "null") {
        this.props.cronometro();
  
        raca1.setAttribute("disabled", true);
        classe1.setAttribute("disabled", true);
  
        // raca2.setAttribute("disabled", true);
        // classe2.setAttribute("disabled", true);
  
        // raca3.setAttribute("disabled", true);
        // classe3.setAttribute("disabled", true);
  
        // raca4.setAttribute("disabled", true);
        // classe4.setAttribute("disabled", true);
  
        // raca5.setAttribute("disabled", true);
        // classe5.setAttribute("disabled", true);
  
        // raca6.setAttribute("disabled", true);
        // classe6.setAttribute("disabled", true);
  
      } else {
        alert("Selecione a raça e a classe de todos os personagens primeiro");
      }
    }
  
    render() {
      return (
        <section>
          <div>
            <DI />
            <Time time={this.props.time} />
            <Phase estagioAtual={this.props.estagioAtual} />
          </div>
          <div>
            <Monster nome={this.props.monstroAtual} lvl={this.props.lvlMonstroAtual} pts={this.props.ptsMonstroAtual} att={this.props.attMonstroAtual} />
            <button onClick={() => this.initial()} id="btn_initial">Iniciar game</button>
          </div>
        </section>
      );
    }
  }

  export default (Nav);