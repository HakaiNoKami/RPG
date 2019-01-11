import React, { Component } from 'react';
import './App.css';

const dados = {
    raça: [
        {
            nome: "Humano",
            for: 11,
            des: 10,
            con: 11,
            int: 11,
            sab: 9,
            car: 10,
            associacao: ["Guerreiro", "Paladino", "Clérigo", "Mago", "Bardo", "Ladino"]
        },
        {
            nome: "Elfo",
            for: 9,
            des: 13,
            con: 6,
            int: 11,
            sab: 12,
            car: 11,
            associacao: ["Guerreiro", "Mago", "Bardo", "Ladino"]
        },
        {
            nome: "Anão",
            for: 12,
            des: 10,
            con: 14,
            int: 10,
            sab: 10,
            car: 6,
            associacao: ["Guerreiro", "Paladino", "Clérigo"]
        },
        {
            nome: "Meio-Orc",
            for: 15,
            des: 9,
            con: 13,
            int: 7,
            sab: 9,
            car: 11,
            associacao: ["Guerreiro", "Clérigo"]
        },
        {
            nome: "Halfling",
            for: 6,
            des: 15,
            con: 11,
            int: 10,
            sab: 9,
            car: 11,
            associacao: ["Mago", "Bardo", "Ladino"]
        },
        {
            nome: "Gnomo",
            for: 8,
            des: 12,
            con: 13,
            int: 14,
            sab: 6,
            car: 9,
            associacao: ["Mago", "Ladino"]
        },
    ],

    classe: [
        {
            nome: "Guerreiro",
            for: 5,
            des: 2,
            con: 3,
            int: 0,
            sab: 0,
            car: -2,
            associacao: ["Humano", "Elfo", "Anão", "Meio-Orc"],
            attPrincipal: 'for'
        },
        {
            nome: "Paladino",
            for: 2,
            des: 0,
            con: 2,
            int: 0,
            sab: 2,
            car: 2,
            associacao: ["Humano", "Anão"],
            attPrincipal: 'con'
        },
        {
            nome: "Clérigo",
            for: 0,
            des: 0,
            con: 2,
            int: 0,
            sab: 4,
            car: 2,
            associacao: ["Humano", "Anão", "Meio-Orc"],
            attPrincipal: 'int'
        },
        {
            nome: "Mago",
            for: -2,
            des: 0,
            con: -2,
            int: 8,
            sab: 4,
            car: 0,
            associacao: ["Humano", "Elfo", "Halfling", "Gnomo"],
            attPrincipal: 'car'
        },
        {
            nome: "Bardo",
            for: -2,
            des: 2,
            con: -2,
            int: 2,
            sab: 0,
            car: 8,
            associacao: ["Humano", "Elfo", "Halfling"],
            attPrincipal: 'sab'
        },
        {
            nome: "Ladino",
            for: -1,
            des: 7,
            con: -1,
            int: 2,
            sab: -1,
            car: 2,
            associacao: ["Humano", "Elfo", "Halfling", "Gnomo"],
            attPrincipal: 'des'
        },
    ],
}

class Modal extends Component {
    render() {
        return (
            <div className="modalFull">
                <div className="modal float_left" id={this.props.idUser.n + "_modal_" + this.props.nome}>
                </div>
                <button className="btn_teste btn_modal float_left" onClick={this.props.confirma} id={this.props.idUser.n + "_btn_modal_" + this.props.nome}>Confirmar</button>
            </div>
        );
    }
}

class Btn extends Component {
    alternaChar() {
        var newLabel;
        if (this.props.label.acao === 'Recuar') {
            newLabel = { acao: 'Avançar', estado: 'vivo' }
            this.props.metodo(newLabel)
        }
        else {
            newLabel = { acao: 'Recuar', estado: 'vivo' }
            this.props.metodo(newLabel)
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.alternaChar()} className="btn" id={this.props.idUser.n + "_btn_recall"}>{this.props.label.acao}</button>
                <input type="hidden" id={this.props.idUser.n + "_estado"} value={this.props.label.estado} />
            </div>
        );
    }
}

class Atributo extends Component {
    render() {
        return (
            <div className="float_left">
                <span id={this.props.idUser.n + "_Atributo_" + this.props.title} title={this.props.title}>{this.props.valor}</span>
                <span> - {this.props.title}</span>
            </div>
        );
    }
}

class Atributos extends Component {
    render() {
        return (
            <div className="clear caixa">
                <h4>Atributos:</h4>
                <div>
                    <Atributo idUser={this.props.idUser} valor={this.props.atributos[0] + this.props.tesouros[0] + this.props.modificadores[0]} title="Força" />
                    <Atributo idUser={this.props.idUser} valor={this.props.atributos[1] + this.props.tesouros[1] + this.props.modificadores[1]} title="Constituição" />
                    <Atributo idUser={this.props.idUser} valor={this.props.atributos[2] + this.props.tesouros[2] + this.props.modificadores[2]} title="Destreza" />
                    <Atributo idUser={this.props.idUser} valor={this.props.atributos[3] + this.props.tesouros[3] + this.props.modificadores[3]} title="Inteligência" />
                    <Atributo idUser={this.props.idUser} valor={this.props.atributos[4] + this.props.tesouros[4] + this.props.modificadores[4]} title="Sabedoria" />
                    <Atributo idUser={this.props.idUser} valor={this.props.atributos[5] + this.props.tesouros[5] + this.props.modificadores[5]} title="Carisma" />
                </div>
            </div>
        );
    }
}

class Tesouro extends Component {
    add() {
        var idUser = this.props.idUser.n;
        var elementRaca = document.getElementById(idUser + '_raca');
        var optionsRaca = elementRaca.options;
        var selectedRaca = optionsRaca[elementRaca.selectedIndex].value;
        var elementClasse = document.getElementById(idUser + '_classe');
        var optionsClasse = elementClasse.options;
        var selectedClasse = optionsClasse[elementClasse.selectedIndex].value;
        if (selectedRaca !== "null" && selectedClasse !== "null") {
            this.modal();
        } else {
            alert("selecione uma raça e uma classe");
        }
    }

    modal() {
        var id = this.props.idUser.n + "_modal_" + this.props.nome;
        var element = document.getElementById(id);
        var btn = this.props.idUser.n + "_btn_modal_" + this.props.nome;
        var elementBtn = document.getElementById(btn);
        var tesouros = this.props.tesouros;
        var html = "";
        var caunt = 0;
        if (tesouros.length > 0) {
            for (var i = 0; i < tesouros.length; i++) {
                if (this.props.usados.length > 0) {
                    var tesouroJaUsado = false;
                    for (var j = 0; j < this.props.usados.length; j++) {
                        if (tesouros[i].nome === this.props.usados[j].nome) {
                            tesouroJaUsado = true;
                            caunt++;
                        }
                    }
                    if (tesouroJaUsado !== true) {
                        html += '<input type="radio" name="' + id + '" value="' + tesouros[i].nome + '" id="' + id + i + '"/>' +
                            '<label for="' + id + i + '">' + tesouros[i].nome + '</label>'
                    } else {
                        html += '<input type="hidden" name="' + id + '" value="' + tesouros[i].nome + '" id="' + id + i + '"/>'
                    }
                } else {
                    html += '<input type="radio" name="' + id + '" value="' + tesouros[i].nome + '" id="' + id + i + '"/>' +
                        '<label for="' + id + i + '">' + tesouros[i].nome + '</label>'
                }
            }
            if (i === caunt) {
                html += '<span>Nenhum tesouro de ' + this.props.nome + '</span>'
            }
            var modalsS = document.getElementsByClassName('modal');
            for (var xS = 0; xS < modalsS.length; xS++) {
                modalsS[xS].style.display = 'none';
            }
            var btnsS = document.getElementsByClassName('btn_modal');
            for (var yS = 0; yS < btnsS.length; yS++) {
                btnsS[yS].style.display = 'none';
            }
            element.innerHTML = html;
            element.style.display = "inline";
            elementBtn.style.display = "inline";
        }
        else {
            var modals = document.getElementsByClassName('modal');
            for (var x = 0; x < modals.length; x++) {
                modals[x].style.display = 'none';
            }
            var btns = document.getElementsByClassName('btn_modal');
            for (var y = 0; y < btns.length; y++) {
                btns[y].style.display = 'none';
            }
            html = '<span>Nenhum tesouro de ' + this.props.nome + '</span>'
            element.innerHTML = html;
            element.style.display = "inline";
            elementBtn.style.display = "inline";
        }
    }

    comfirm() {
        var id = this.props.idUser.n + "_modal_" + this.props.nome;;
        var element = document.getElementById(id);
        var btn = this.props.idUser.n + "_btn_modal_" + this.props.nome;
        var elementBtn = document.getElementById(btn);
        var radio = document.getElementsByName(id);
        var check;
        for (var i = 0; i < radio.length; i++) {
            check = document.getElementById(id + i);
            if (check.checked === true) {
                var tesourosUsados = [];
                for (var j = 0; j < this.props.usados.length; j++) {
                    tesourosUsados[j] = this.props.usados[j];
                }
                var newTesouro = { nome: radio[i].value, personagem: this.props.idUser.n }
                tesourosUsados[j] = newTesouro;
                this.props.usar(tesourosUsados);
                this.attTesouros(radio[i].value, this.props.nome);
            }
        }
        element.innerHTML = "";
        elementBtn.style.display = "none";
    }

    attTesouros(TesouroSelecionado, tipoTesouro) {
        var listTesouros = this.props.tesouros;
        var atributosTesouros = this.props.tesouroList;
        var addAtributto;
        for (var i = 0; i < listTesouros.length; i++) {
            if (listTesouros[i].nome === TesouroSelecionado) {
                addAtributto = listTesouros[i].atributo;
            }
        }
        switch (tipoTesouro) {
            case 'Força':
                atributosTesouros[0] = atributosTesouros[0] + addAtributto;
                break;
            case 'Constituição':
                atributosTesouros[1] = atributosTesouros[1] + addAtributto;
                break;
            case 'Destreza':
                atributosTesouros[2] = atributosTesouros[2] + addAtributto;
                break;
            case 'Inteligência':
                atributosTesouros[3] = atributosTesouros[3] + addAtributto;
                break;
            case 'Sabedoria':
                atributosTesouros[4] = atributosTesouros[4] + addAtributto;
                break;
            case 'Carisma':
                atributosTesouros[5] = atributosTesouros[5] + addAtributto;
                break;
            default:
                break;
        }
        this.props.setTesouro(atributosTesouros);
    }

    render() {
        return (
            <div className="float_left margin_bottom">
                <button id={this.props.idUser.n + "_btn_" + this.props.nome} title={this.props.title} onClick={() => this.add()}> + </button>
                <label htmlFor={this.props.idUser.n + "_btn_" + this.props.nome} className="label_click"> {this.props.nome}</label>
                <Modal idUser={this.props.idUser} nome={this.props.nome} tesouros={this.props.tesouros} confirma={this.comfirm.bind(this)} />
            </div>
        );
    }
}

class Tesouros extends Component {
    render() {
        return (
            <div className="clear caixa">
                <h4>Tesouros:</h4>
                <div>
                    <Tesouro idUser={this.props.idUser} title="Adicione um tesouro com atributo em força" nome="Força" tesouros={this.props.allTesouros.for} usados={this.props.usados} usar={this.props.usar} setTesouro={this.props.setTesouros} tesouroList={this.props.tesouros} />
                    <Tesouro idUser={this.props.idUser} title="Adicione um tesouro com atributo em constituição" nome="Constituição" tesouros={this.props.allTesouros.con} usados={this.props.usados} usar={this.props.usar} setTesouro={this.props.setTesouros} tesouroList={this.props.tesouros} />
                    <Tesouro idUser={this.props.idUser} title="Adicione um tesouro com atributo em destreza" nome="Destreza" tesouros={this.props.allTesouros.des} usados={this.props.usados} usar={this.props.usar} setTesouro={this.props.setTesouros} tesouroList={this.props.tesouros} />
                    <Tesouro idUser={this.props.idUser} title="Adicione um tesouro com atributo em inteligência" nome="Inteligência" tesouros={this.props.allTesouros.int} usados={this.props.usados} usar={this.props.usar} setTesouro={this.props.setTesouros} tesouroList={this.props.tesouros} />
                    <Tesouro idUser={this.props.idUser} title="Adicione um tesouro com atributo em sabedoria" nome="Sabedoria" tesouros={this.props.allTesouros.sab} usados={this.props.usados} usar={this.props.usar} setTesouro={this.props.setTesouros} tesouroList={this.props.tesouros} />
                    <Tesouro idUser={this.props.idUser} title="Adicione um tesouro com atributo em carisma" nome="Carisma" tesouros={this.props.allTesouros.car} usados={this.props.usados} usar={this.props.usar} setTesouro={this.props.setTesouros} tesouroList={this.props.tesouros} />
                </div>
                <div>
                    <Btn idUser={this.props.idUser} label={this.props.estado} metodo={this.props.recuar} />
                </div>
            </div>
        );
    }
}

class Lvl extends Component {
    render() {
        return (
            <div className="float_left">
                <input type="text" value={this.props.lvl} disabled />
            </div>
        );
    }
}

class Select extends Component {
    render() {
        return (
            <select id={this.props.id} onMouseOver={this.props.carrega} onChange={this.props.change} className="float_left">
                <option value="null">{this.props.optionInitial}</option>
            </select>
        );
    }
}

class Personagem extends Component {
    carregaRaça() {
        var idUser = this.props.idUser.n;
        var element = document.getElementById(idUser + '_raca');
        if (element.options.length <= 1) {
            var raca = this.props.raça;
            var html = "";
            html = '<option value="null">Selecione uma raça</option>';
            for (var i = 0; i < raca.length; i++) {
                html += '<option value="' + raca[i].nome + '">' + raca[i].nome + '</option>'
            }
            element.innerHTML = html;
        }
    }

    carregaClasse() {
        var idUser = this.props.idUser.n;
        var element = document.getElementById(idUser + '_classe');
        if (element.options.length <= 1) {
            var classe = this.props.classe;
            var html = "";
            html = '<option value="null">Selecione uma classe</option>';
            for (var i = 0; i < classe.length; i++) {
                html += '<option value="' + classe[i].nome + '">' + classe[i].nome + '</option>'
            }
            element.innerHTML = html;
        }
    }

    changeRaça() {
        var idUser = this.props.idUser.n;
        var element = document.getElementById(idUser + '_raca');
        var options = element.options;
        var selected = options[element.selectedIndex].value;
        var elementClasse = document.getElementById(idUser + '_classe');
        var optionsClasse = elementClasse.options;
        var selectedClasse = optionsClasse[elementClasse.selectedIndex].value;
        var raca = this.props.raça;
        var classe = this.props.classe;
        var html = "";
        var html2 = "";
        this.attAtributos(selected, elementClasse.selectedIndex, "raca");
        if (selected !== "null") {
            html = '<option value="null">Selecione uma classe</option>';
            for (var i = 0; i < raca.length; i++) {
                if (raca[i].nome === selected) {
                    for (var j = 0; j < raca[i].associacao.length; j++) {
                        html += '<option value="' + raca[i].associacao[j] + '">' + raca[i].associacao[j] + '</option>'
                    }
                }
            }
            elementClasse.innerHTML = html;
            if (selectedClasse !== "null") {
                elementClasse.value = selectedClasse;
            }
        }
        else if (selectedClasse === "null") {
            html = '<option value="null">Selecione uma raça</option>';
            for (var y = 0; y < raca.length; y++) {
                html += '<option value="' + raca[y].nome + '">' + raca[y].nome + '</option>'
            }
            element.innerHTML = html;

            html2 = '<option value="null">Selecione uma classe</option>';
            for (var x = 0; x < classe.length; x++) {
                html2 += '<option value="' + classe[x].nome + '">' + classe[x].nome + '</option>'
            }
            elementClasse.innerHTML = html2;
        }
    }

    changeClasse() {
        var idUser = this.props.idUser.n;
        var element = document.getElementById(idUser + '_classe');
        var options = element.options;
        var selected = options[element.selectedIndex].value;
        var elementRaca = document.getElementById(idUser + '_raca');
        var optionsRaca = elementRaca.options;
        var selectedRaca = optionsRaca[elementRaca.selectedIndex].value;
        var classe = this.props.classe;
        var raca = this.props.raça;
        var html = "";
        var html2 = "";
        this.attAtributos(selected, elementRaca.selectedIndex, "classe");
        if (selected !== "null") {
            html = '<option value="null">Selecione uma raça</option>';
            for (var i = 0; i < classe.length; i++) {
                if (classe[i].nome === selected) {
                    for (var j = 0; j < classe[i].associacao.length; j++) {
                        html += '<option value="' + classe[i].associacao[j] + '">' + classe[i].associacao[j] + '</option>'
                    }
                }
            }
            elementRaca.innerHTML = html;
            if (elementRaca !== "null") {
                elementRaca.value = selectedRaca;
            }
        }
        else if (selectedRaca === "null") {
            html = '<option value="null">Selecione uma classe</option>';
            for (var y = 0; y < classe.length; y++) {
                html += '<option value="' + classe[y].nome + '">' + classe[y].nome + '</option>'
            }
            element.innerHTML = html;

            html2 = '<option value="null">Selecione uma raça</option>';
            for (var x = 0; x < raca.length; x++) {
                html2 += '<option value="' + raca[x].nome + '">' + raca[x].nome + '</option>'
            }
            elementRaca.innerHTML = html2;
        }
    }

    attAtributos(selecionado, index, select) {
        var raca = this.props.raça;
        var classe = this.props.classe;
        var newAtt;
        index -= 1;
        if (select === "raca" && selecionado !== "null") {
            for (var i = 0; i < raca.length; i++) {
                if (raca[i].nome === selecionado && index === -1) {
                    newAtt = [raca[i].for, raca[i].con, raca[i].des, raca[i].int, raca[i].sab, raca[i].car];
                }
                else if (raca[i].nome === selecionado) {
                    newAtt = [
                        classe[index].for + raca[i].for,
                        classe[index].con + raca[i].con,
                        classe[index].des + raca[i].des,
                        classe[index].int + raca[i].int,
                        classe[index].sab + raca[i].sab,
                        classe[index].car + raca[i].car
                    ];
                }
            }
        }
        else if (select === "classe" && selecionado !== "null") {
            for (var j = 0; j < classe.length; j++) {
                if (classe[j].nome === selecionado && index > -1) {
                    newAtt = [
                        classe[j].for + raca[index].for,
                        classe[j].con + raca[index].con,
                        classe[j].des + raca[index].des,
                        classe[j].int + raca[index].int,
                        classe[j].sab + raca[index].sab,
                        classe[j].car + raca[index].car
                    ];
                }
                else if (classe[j].nome === selecionado) {
                    newAtt = [classe[j].for + 10, classe[j].con + 10, classe[j].des + 10, classe[j].int + 10, classe[j].sab + 10, classe[j].car + 10];
                }
            }
        }
        else {
            newAtt = [10, 10, 10, 10, 10, 10];
        }
        this.props.att(newAtt);
    }


    render() {
        return (
            <div className="clear caixa">
                <h4>Personagem</h4>

                <Select idUser={this.props.idUser} id={this.props.idUser.n + "_raca"} optionInitial="Selecione uma raça" carrega={this.carregaRaça.bind(this)} change={this.changeRaça.bind(this)} />

                <Select idUser={this.props.idUser} id={this.props.idUser.n + "_classe"} optionInitial="Selecione uma classe" carrega={this.carregaClasse.bind(this)} change={this.changeClasse.bind(this)} />

                <Lvl idUser={this.props.idUser} lvl={this.props.lvl} click={this.props.upLvl} modf={this.props.modf} classe={this.props.classe} />
            </div>
        );
    }
}

class Bloco extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recuado: { acao: 'Recuar', estado: 'Vivo' },
            lvl: 1,
            att: [10, 10, 10, 10, 10, 10],
            tesouro: [0, 0, 0, 0, 0, 0],
            modf: [0, 0, 0, 0, 0, 0],
        }
    }

    componentDidMount() {
        this.props.onRef(this)
    }
    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    setRecuado = (recuado) => {
        this.setState({ recuado });
    }

    setLvl = (lvl) => {
        this.setState({ lvl });
    }

    setAtt = (att) => {
        this.setState({ att });
    }

    setTesouro = (tesouro) => {
        this.setState({ tesouro });
    }

    setModf = (modf) => {
        this.setState({ modf });
    }

    up() {
        var atual = this.state.lvl;
        this.setLvl(atual + 1);
        this.valida();
    }

    valida() {
        if ((this.state.lvl) % 4 === 0) {
            var attPrincipal = (this.state.lvl) / 4;
            var idUser = this.props.persona.n;
            var element = document.getElementById(idUser + '_classe');
            var options = element.options;
            var selected = options[element.selectedIndex].value;
            var classe = dados.classe;
            var newModf = Array;
            for (var i = 0; i < classe.length; i++) {
                if (classe[i].nome === selected) {
                    newModf[i] = attPrincipal;
                } else {
                    newModf[i] = 0;
                }
            }
            this.setModf(newModf);
        }
    }

    morreu(){
        var estado = {acao: 'Morto', estado: 'Morto'};
        this.setRecuado(estado);
        var id = this.props.persona.n;
        document.getElementById(id + '_btn_recall').setAttribute("disabled", true);
        document.getElementById(id + '_btn_Força').setAttribute("disabled", true);
        document.getElementById(id + '_btn_Constituição').setAttribute("disabled", true);
        document.getElementById(id + '_btn_Destreza').setAttribute("disabled", true);
        document.getElementById(id + '_btn_Inteligência').setAttribute("disabled", true);
        document.getElementById(id + '_btn_Sabedoria').setAttribute("disabled", true);
        document.getElementById(id + '_btn_Carisma').setAttribute("disabled", true);
    }

    render() {
        return (
            <section className="clear bloco">
                <Atributos idUser={this.props.persona} atributos={this.state.att} tesouros={this.state.tesouro} modificadores={this.state.modf} />
                <Tesouros idUser={this.props.persona} estado={this.state.recuado} recuar={this.setRecuado} allTesouros={this.props.allTesouros} usados={this.props.usados} usar={this.props.usar} setTesouros={this.setTesouro} tesouros={this.state.tesouro} />
                <Personagem idUser={this.props.persona} {...dados} lvl={this.state.lvl} att={this.setAtt} upLvl={this.setLvl} modf={this.setModf} />
            </section>
        );
    }
}

export default (Bloco);