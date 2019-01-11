import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Bloco from './Bloco';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 15,
      personagem1: {
        nome: 'Cleuber',
        sexo: 'masculino',
        n: 1
      },
      personagem2: {
        nome: '',
        sexo: '',
        n: 2
      },

      personagem3: {
        nome: '',
        sexo: '',
        n: 3
      },

      personagem4: {
        nome: '',
        sexo: '',
        n: 4
      },

      personagem5: {
        nome: '',
        sexo: '',
        n: 5
      },

      personagem6: {
        nome: '',
        sexo: '',
        n: 6
      },
      personaAtivos: [1], // , 2, 3, 4, 5, 6
      tesourosUsados: [],
      allTesouros: {
        for: [
          {
            nome: "Lâmina de sangue",
            atributo: 2,
          },
          {
            nome: "Arco lunar",
            atributo: 2,
          }
        ],
        con: [
          {
            nome: "Armadura de espinhos",
            atributo: 2
          },
          {
            nome: "Manto de rapina",
            atributo: 3
          },
          {
            nome: "Proteção glacial",
            atributo: 2
          }
        ],
        des: [
          {
            nome: "Botas da mobilidade",
            atributo: 1,
          },
          {
            nome: "Passos de mercúrio",
            atributo: 3,
          },
          {
            nome: "Força da trindade",
            atributo: 2,
          }
        ],
        int: [
          {
            nome: "Cajado do arcanjo",
            atributo: 4
          }
        ],
        sab: [
          {
            nome: "Capítulo perdido",
            atributo: 2
          },
          {
            nome: "Códex demoníaco",
            atributo: 2
          }
        ],
        car: []
      },
      monsters: [
        [
          { nome: "Javali", teste: "Constituição" },
          { nome: "Espantalho", teste: "Carisma" },
          { nome: "Boarman", teste: "Força" },
          { nome: "Abalin", teste: "Destreza" },
          { nome: "Carp Giant", teste: "Sabedoria" },
          { nome: "Morcegos", teste: "Inteligência" },
          { nome: "Troll do Deserto", teste: "Carisma" },
          { nome: "Hiena", teste: "Destreza" },
          { nome: "Vigia", teste: "Sabedoria" },
          { nome: "Aarakocra", teste: "Força" }
        ],
        [
          { nome: "Yéti", teste: "Força" },
          { nome: "Lobo do Ártico", teste: "Destreza" },
          { nome: "Carrapato de Tarrasque", teste: "Sabedoria" },
          { nome: "Ettercap", teste: "Carisma" },
          { nome: "Mega Javali", teste: "Constituição" },
          { nome: "Lobos da Colina", teste: "Inteligência" },
          { nome: "Ankheg", teste: "Sabedoria" },
          { nome: "Smilodon", teste: "Destreza" },
          { nome: "Cobras", teste: "Inteligência" },
          { nome: "Yutri", teste: "Força" }
        ],
        [
          { nome: "Roagring Primadox", teste: "Constituição" },
          { nome: "Malboro", teste: "Sabedoria" },
          { nome: "Naga de Osso", teste: "Destreza" },
          { nome: "Salamandra", teste: "Carisma" },
          { nome: "Morcegos Gigantes", teste: "Inteligência" },
          { nome: "Panteras", teste: "Força" },
          { nome: "Roca", teste: "Destreza" },
          { nome: "Crocopotámo", teste: "Força" },
          { nome: "Demonios do Deserto", teste: "Inteligência" },
          { nome: "Actaeon", teste: "Carisma" }
        ],
        [
          { nome: "Atropal", teste: "Carisma" },
          { nome: "Simurgh", teste: "Destreza" },
          { nome: "Esporos Gasosos", teste: "Sabedoria" },
          { nome: "Catoplebas", teste: "Constituição" },
          { nome: "Greel", teste: "Inteligência" },
          { nome: "Tubarão", teste: "Força" },
          { nome: "Bruxas", teste: "Sabedoria" },
          { nome: "Neh-Thalggu", teste: "Destreza" },
          { nome: "Agrutha", teste: "Constituição" },
          { nome: "Leões das Cavernas", teste: "Força" }
        ],
        [
          { nome: "Monstro da Ferrugem", teste: "Constituição" },
          { nome: "Harpias", teste: "Carisma" },
          { nome: "Urso das Arvores", teste: "Força" },
          { nome: "Gárgulas", teste: "Destreza" },
          { nome: "Precioso", teste: "Inteligência" },
          { nome: "Quetzal", teste: "Sabedoria" },
          { nome: "Sapo gigante", teste: "Inteligência" },
          { nome: "Avolakia", teste: "Destreza" },
          { nome: "Umber Hulk", teste: "Força" },
          { nome: "Predator", teste: "Carisma" }
        ],
        [
          { nome: "Wyrvern", teste: "Destreza" },
          { nome: "Core Hound", teste: "Constituição" },
          { nome: "Mega Crocodilo", teste: "Força" },
          { nome: "Dragão esqueleto", teste: "Sabedoria" },
          { nome: "Arbusto Errante", teste: "Inteligência" },
          { nome: "Queen Spider", teste: "Destreza" },
          { nome: "Gnoll", teste: "Sabedoria" },
          { nome: "Minotauro", teste: "Constituição" },
          { nome: "Basilosaurus", teste: "Inteligência" },
          { nome: "Gimlorck", teste: "Força" }
        ],
        [
          { nome: "Dragão Zumbi", teste: "Sabedoria" },
          { nome: "Manticore", teste: "Destreza" },
          { nome: "Colemagg", teste: "Força" },
          { nome: "OwlBear", teste: "Inteligência" },
          { nome: "Gorgona", teste: "Carisma" },
          { nome: "Megaleão", teste: "Constituição" },
          { nome: "Demon", teste: "Carisma" },
          { nome: "Aboleth", teste: "Destreza" },
          { nome: "Coatlniss", teste: "Constituição" },
          { nome: "Pantera deslocadora", teste: "Força" }
        ],
        [
          { nome: "Quimera", teste: "Destreza" },
          { nome: "Worm Monster", teste: "Constituição" },
          { nome: "Dragão da floresta", teste: "Inteligência" },
          { nome: "Dragão de Aguá", teste: "Sabedoria" },
          { nome: "Dragão", teste: "Carisma" },
          { nome: "Magtheridon", teste: "Força" },
          { nome: "Plantas Carnívoras Gigantes", teste: "Destreza" },
          { nome: "Devorador de Mentes", teste: "Inteligência" },
          { nome: "Dragão do Gelo", teste: "Constituição" },
          { nome: "Esfinge", teste: "Sabedoria" }
        ],
        [
          { nome: "Makara", teste: "Destreza" },
          { nome: "Cérbero", teste: "Constituição" },
          { nome: "Vermes do Deserto", teste: "Sabedoria" },
          { nome: "Súcubus", teste: "Carisma" },
          { nome: "Ningyo", teste: "Inteligência" },
          { nome: "Tubarão Gigante", teste: "Força" },
          { nome: "Lizardman King", teste: "Destreza" },
          { nome: "Belial", teste: "Constituição" },
          { nome: "Dragão Planar", teste: "Inteligência" },
          { nome: "Gigante da Tempestade", teste: "Força" }
        ],
        [
          { nome: "Cthulhu", teste: "Carisma" },
          { nome: "Dragão Ancião", teste: "Sabedoria" },
          { nome: "Tarrasque", teste: "Força" },
          { nome: "Leviatã", teste: "Destreza" },
          { nome: "Guardião do Inferno", teste: "Constituição" },
          { nome: "Baleia Megalockk", teste: "Constituição" },
          { nome: "Kraken", teste: "Destreza" },
          { nome: "Darktentacles", teste: "Força" },
          { nome: "Demon Lord", teste: "Carisma" },
          { nome: "Zaratan", teste: "Sabedoria" }
        ]
      ],
      boss: [
        { nome: "Aarakocra", teste: "Força" },
        { nome: "Smilodon", teste: "Destreza" },
        { nome: "Malboro", teste: "Sabedoria" },
        { nome: "Agrutha", teste: "Constituição" },
        { nome: "Sapo gigante", teste: "Int" },
        { nome: "Mega Crocodilo", teste: "Força" },
        { nome: "Demon", teste: "Carisma" },
        { nome: "Dragão de Aguá", teste: "Sabedoria" },
        { nome: "Belial", teste: "Constituição" },
        { nome: "Tarrasque", teste: "Força" }
      ],
      estagio: 1,
      monstroAtual: "???",
      lvlMonstroAtual: "?",
      ptsMonstroAtual: 0,
      attMonstroAtual: 'Teste de atributos',
      basePtsMonstros: [
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25],
        [26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35],
        [36, 37, 38, 39, 40],
        [41, 42, 43, 44, 45],
        [46, 47, 48, 49, 50],
        [51, 52, 53, 54, 55]
      ]
    }
  }

  setPersonagem1 = (personagem1) => {
    this.setState = ({ personagem1 });
  }

  setPersonagem2 = (personagem2) => {
    this.setState = ({ personagem2 });
  }

  setPersonagem3 = (personagem3) => {
    this.setState = ({ personagem3 });
  }

  setPersonagem4 = (personagem4) => {
    this.setState = ({ personagem4 });
  }

  setPersonagem5 = (personagem5) => {
    this.setState = ({ personagem5 });
  }

  setPersonagem6 = (personagem6) => {
    this.setState = ({ personagem6 });
  }

  setTesourosUsados = (tesourosUsados) => {
    this.setState({ tesourosUsados });
  }

  setAllTesouros = (allTesouros) => {
    this.setState({ allTesouros });
  }

  setMonstroAtual = (monstroAtual) => {
    this.setState({ monstroAtual });
  }

  setLvlMonstroAtual = (lvlMonstroAtual) => {
    this.setState({ lvlMonstroAtual });
  }

  setPtsMonstroAtual = (ptsMonstroAtual) => {
    this.setState({ ptsMonstroAtual });
  }

  setAttMonstroAtual = (attMonstroAtual) => {
    this.setState({ attMonstroAtual });
  }

  setPersonasAtivos = (personaAtivos) => {
    this.setState({ personaAtivos });
  }

  upEstagio = () => {
    this.setState({
      estagio: this.state.estagio + 1
    });
  }

  regress = () => {
    var btn = document.getElementById('btn_initial');
    btn.style.display = "none";
    var time = this.state.time;
    if ((time - 1) === 14) {
      this.sumonerMonster();
      this.setState(() => ({
        time: time - 1,
      }));
      setTimeout(this.regress, 1000);
    } else if ((time - 1) === 13) {
      this.luta();
      this.setState(() => ({
        time: time - 1,
      }));
      setTimeout(this.regress, 1000);
    } else if ((time - 1) > 0) {
      this.setState(() => ({
        time: time - 1,
      }));
      setTimeout(this.regress, 1000);
    } else {
      this.setState(() => ({
        time: 15
      }));
      setTimeout(this.regress, 1000);
    }
  }

  sumonerMonster() {
    var estagio = Math.trunc(this.state.estagio / 10);
    var monsters = this.state.monsters;
    var boss = this.state.boss;
    var pts = this.state.basePtsMonstros;
    var random = Math.floor(Math.random() * 10);
    var lvlRandom = Math.floor(Math.random() * 3) + 1;
    var ptsRandom = Math.floor(Math.random() * 5);
    switch (estagio) {
      case 0:
        this.setMonstroAtual(monsters[estagio][random].nome);
        this.setAttMonstroAtual(monsters[estagio][random].teste);
        if (lvlRandom === 1 && this.state.estagio > 1) {
          this.setLvlMonstroAtual(this.state.estagio - 1);
          this.setPtsMonstroAtual(pts[estagio][ptsRandom] + (lvlRandom * (this.state.estagio - 1)));
        } else if (lvlRandom === 2 && this.state.estagio > 1) {
          this.setLvlMonstroAtual(this.state.estagio);
          this.setPtsMonstroAtual(pts[estagio][ptsRandom] + (lvlRandom * this.state.estagio));
        } else if (lvlRandom === 3) {
          this.setLvlMonstroAtual(this.state.estagio + 1);
          this.setPtsMonstroAtual(pts[estagio][ptsRandom] + (lvlRandom * (this.state.estagio + 1)));
        } else {
          this.setLvlMonstroAtual(this.state.estagio);
          this.setPtsMonstroAtual(pts[estagio][ptsRandom] + (lvlRandom * this.state.estagio));
        }
        break;
      case 10:
        alert("Boss");
        this.setMonstroAtual(boss[estagio - 1].nome);
        this.setAttMonstroAtual(boss[estagio - 1].teste);
        if (lvlRandom === 1) {
          this.setLvlMonstroAtual(this.state.estagio - 1);
          this.setPtsMonstroAtual(pts[estagio - 1][4] + (lvlRandom * (this.state.estagio - 1)));
        } else if (lvlRandom === 2) {
          this.setLvlMonstroAtual(this.state.estagio);
          this.setPtsMonstroAtual(pts[estagio - 1][4] + (lvlRandom * this.state.estagio));
        } else {
          this.setLvlMonstroAtual(this.state.estagio + 1);
          this.setPtsMonstroAtual(pts[estagio - 1][4] + (lvlRandom * (this.state.estagio + 1)));
        }
        break;
      default:
        if (this.state.estagio % 10 === 0) {
          alert("Boss");
          this.setMonstroAtual(boss[estagio - 1].nome);
          this.setAttMonstroAtual(boss[estagio - 1].teste);
          if (lvlRandom === 1) {
            this.setLvlMonstroAtual(this.state.estagio - 1);
            this.setPtsMonstroAtual(pts[estagio - 1][4] + (lvlRandom * (this.state.estagio - 1)));
          } else if (lvlRandom === 2) {
            this.setLvlMonstroAtual(this.state.estagio);
            this.setPtsMonstroAtual(pts[estagio - 1][4] + (lvlRandom * this.state.estagio));
          } else {
            this.setLvlMonstroAtual(this.state.estagio + 1);
            this.setPtsMonstroAtual(pts[estagio - 1][4] + (lvlRandom * (this.state.estagio + 1)));
          }
        } else {
          this.setMonstroAtual(monsters[estagio][random].nome);
          this.setAttMonstroAtual(monsters[estagio][random].teste);
          if (lvlRandom === 1) {
            this.setLvlMonstroAtual(this.state.estagio - 1);
            this.setPtsMonstroAtual(pts[estagio][ptsRandom] + (lvlRandom * (this.state.estagio - 1)));
          } else if (lvlRandom === 2) {
            this.setLvlMonstroAtual(this.state.estagio);
            this.setPtsMonstroAtual(pts[estagio][ptsRandom] + (lvlRandom * this.state.estagio));
          } else {
            this.setLvlMonstroAtual(this.state.estagio + 1);
            this.setPtsMonstroAtual(pts[estagio][ptsRandom] + (lvlRandom * (this.state.estagio + 1)));
          }
        }
        break;
    }
  }

  spawnarItem(tipo, lvl) {
    var caunt = 0;
    var tesouros = this.state.allTesouros;
    var att = (Math.floor(Math.random() * 8) + 1);
    console.log(att);
    switch (tipo) {
      case 'Força':
        tesouros.for[tesouros.for.length] = { nome: 'força_' + lvl, atributo: att }
        this.setAllTesouros(tesouros);
        break;
      case 'Constituição':
        tesouros.con[tesouros.con.length] = { nome: 'constituição_' + lvl, atributo: att }
        this.setAllTesouros(tesouros);
        break;
      case 'Destreza':
        tesouros.des[tesouros.des.length] = { nome: 'destreza_' + lvl, atributo: att }
        this.setAllTesouros(tesouros);
        break;
      case 'Inteligência':
        tesouros.int[tesouros.int.length] = { nome: 'inteligência' + lvl, atributo: att }
        this.setAllTesouros(tesouros);
        break;
      case 'Sabedoria':
        tesouros.sab[tesouros.sab.length] = { nome: 'sabedoria_' + lvl, atributo: att }
        this.setAllTesouros(tesouros);
        break;
      case 'Carisma':
        tesouros.car[tesouros.car.length] = { nome: 'carisma_' + lvl, atributo: att }
        this.setAllTesouros(tesouros);
        break;
      default:
        break;
    }
  }

  luta() {
    var acao1 = document.getElementById(1 + '_btn_recall').innerHTML;
    var estado1 = document.getElementById(1 + '_estado').value;
    var persona1 = { acao: acao1, estado: estado1 };

    // var acao2 = document.getElementById(2 + '_btn_recall').innerHTML;
    // var estado2 = document.getElementById(2 + '_estado').value;
    // var persona2 = { acao: acao2, estado: estado2 };

    // var acao3 = document.getElementById(3 + '_btn_recall').innerHTML;
    // var estado3 = document.getElementById(3 + '_estado').value;
    // var persona3 = {acao: acao3, estado: estado3};

    // var acao4 = document.getElementById(4 + '_btn_recall').innerHTML;
    // var estado4 = document.getElementById(4 + '_estado').value;
    // var persona4 = {acao: acao4, estado: estado4};

    // var acao5 = document.getElementById(5 + '_btn_recall').innerHTML;
    // var estado5 = document.getElementById(5 + '_estado').value;
    // var persona5 = {acao: acao5, estado: estado5};

    // var acao6 = document.getElementById(6 + '_btn_recall').innerHTML;
    // var estado6 = document.getElementById(6 + '_estado').value;
    // var persona6 = {acao: acao6, estado: estado6};

    var allPersonas = [persona1];
    // allPersonas = [persona1, persona2, persona3, persona4, persona5, persona6];

    var personas = this.state.personaAtivos;
    var attPersonas = [];
    for (var i = 0; i < personas.length; i++) {
      if (allPersonas[i].acao === "Recuar" && allPersonas[i].estado === "Vivo") {
        var teste_for = parseInt(document.getElementById(personas[i] + "_Atributo_Força").innerHTML);
        var teste_con = parseInt(document.getElementById(personas[i] + "_Atributo_Constituição").innerHTML);
        var teste_des = parseInt(document.getElementById(personas[i] + "_Atributo_Destreza").innerHTML);
        var teste_int = parseInt(document.getElementById(personas[i] + "_Atributo_Inteligência").innerHTML);
        var teste_sab = parseInt(document.getElementById(personas[i] + "_Atributo_Sabedoria").innerHTML);
        var teste_car = parseInt(document.getElementById(personas[i] + "_Atributo_Carisma").innerHTML);
        var campeao = personas[i];
        attPersonas[i] = { for: teste_for, con: teste_con, des: teste_des, int: teste_int, sab: teste_sab, car: teste_car, campeao: campeao };
      }
    }

    var atributoMonstroTeste = this.state.attMonstroAtual;
    var campeao1 = { att: 0, n: 0 };
    var campeao2 = { att: 0, n: 0 };
    var temporario = { att: 0, n: 0 };
    var x;
    switch (atributoMonstroTeste) {
      case 'Força':
        for (x = 0; x < attPersonas.length; x++) {
          if (attPersonas[x].for > campeao1.att) {
            temporario.att = campeao1.att;
            temporario.n = campeao1.n;
            campeao1.att = attPersonas[x].for
            campeao1.n = attPersonas[x].campeao
            if (temporario.att > campeao2.att) {
              campeao2 = temporario;
            }
          } else if (attPersonas[x].for > campeao2.att) {
            campeao2.att = attPersonas[x].for
            campeao2.n = attPersonas[x].campeao
          }
        }
        break;
      case 'Constituição':
        for (x = 0; x < attPersonas.length; x++) {
          if (attPersonas[x].con > campeao1.att) {
            temporario.att = campeao1.att;
            temporario.n = campeao1.n;
            campeao1.att = attPersonas[x].con
            campeao1.n = attPersonas[x].campeao
            if (temporario.att > campeao2.att) {
              campeao2 = temporario;
            }
          } else if (attPersonas[x].con > campeao2.att) {
            campeao2.att = attPersonas[x].con
            campeao2.n = attPersonas[x].campeao
          }
        }
        break;
      case 'Destreza':
        for (x = 0; x < attPersonas.length; x++) {
          if (attPersonas[x].des > campeao1.att) {
            temporario.att = campeao1.att;
            temporario.n = campeao1.n;
            campeao1.att = attPersonas[x].des
            campeao1.n = attPersonas[x].campeao
            if (temporario.att > campeao2.att) {
              campeao2 = temporario;
            }
          } else if (attPersonas[x].des > campeao2.att) {
            campeao2.att = attPersonas[x].des
            campeao2.n = attPersonas[x].campeao
          }
        }
        break;
      case 'Inteligência':
        for (x = 0; x < attPersonas.length; x++) {
          if (attPersonas[x].int > campeao1.att) {
            temporario.att = campeao1.att;
            temporario.n = campeao1.n;
            campeao1.att = attPersonas[x].int
            campeao1.n = attPersonas[x].campeao
            if (temporario.att > campeao2.att) {
              campeao2 = temporario;
            }
          } else if (attPersonas[x].int > campeao2.att) {
            campeao2.att = attPersonas[x].int
            campeao2.n = attPersonas[x].campeao
          }
        }
        break;
      case 'Sabedoria':
        for (x = 0; x < attPersonas.length; x++) {
          if (attPersonas[x].sab > campeao1.att) {
            temporario.att = campeao1.att;
            temporario.n = campeao1.n;
            campeao1.att = attPersonas[x].sab
            campeao1.n = attPersonas[x].campeao
            if (temporario.att > campeao2.att) {
              campeao2 = temporario;
            }
          } else if (attPersonas[x].sab > campeao2.att) {
            campeao2.att = attPersonas[x].sab
            campeao2.n = attPersonas[x].campeao
          }
        }
        break;
      case 'Carisma':
        for (x = 0; x < attPersonas.length; x++) {
          if (attPersonas[x].car > campeao1.att) {
            temporario.att = campeao1.att;
            temporario.n = campeao1.n;
            campeao1.att = attPersonas[x].car
            campeao1.n = attPersonas[x].campeao
            if (temporario.att > campeao2.att) {
              campeao2 = temporario;
            }
          } else if (attPersonas[x].car > campeao2.att) {
            campeao2.att = attPersonas[x].car
            campeao2.n = attPersonas[x].campeao
          }
        }
        break;
      default:
        break;
    }

    var somaPersonas = campeao1.att + campeao2.att;
    if (somaPersonas >= this.state.ptsMonstroAtual) {
      alert("Personagens mais forte que o monstro");
      this.upEstagio();

      switch (campeao1.n) {
        case 1:
          this.Bloco1.up();
          break;
        case 2:
          this.Bloco2.up();
          break;
        case 3:
          this.Bloco3.up();
          break;
        case 4:
          this.Bloco4.up();
          break;
        case 5:
          this.Bloco5.up();
          break;
        case 6:
          this.Bloco6.up();
          break;
        default:
          break;
      }

      switch (campeao2.n) {
        case 1:
          this.Bloco1.up();
          break;
        case 2:
          this.Bloco2.up();
          break;
        case 3:
          this.Bloco3.up();
          break;
        case 4:
          this.Bloco4.up();
          break;
        case 5:
          this.Bloco5.up();
          break;
        case 6:
          this.Bloco6.up();
          break;
        default:
          break;
      }

      this.spawnarItem(this.state.attMonstroAtual, this.state.lvlMonstroAtual);
    } else {
      alert("Personagens não conseguiram derrotar o monstro");
      this.upEstagio();
      if (this.state.personaAtivos.length > 1) {
        switch (campeao2.n) {
          case 1:
            this.Bloco1.morreu();
            break;
          case 2:
            this.Bloco2.morreu();
            break;
          case 3:
            this.Bloco3.morreu();
            break;
          case 4:
            this.Bloco4.morreu();
            break;
          case 5:
            this.Bloco5.morreu();
            break;
          case 6:
            this.Bloco6.morreu();
            break;
          default:
            break;
        }
      } else {
        switch (campeao1.n) {
          case 1:
            this.Bloco1.morreu();
            break;
          case 2:
            this.Bloco2.morreu();
            break;
          case 3:
            this.Bloco3.morreu();
            break;
          case 4:
            this.Bloco4.morreu();
            break;
          case 5:
            this.Bloco5.morreu();
            break;
          case 6:
            this.Bloco6.morreu();
            break;
          default:
            break;
        }
      }
      this.morrer(campeao2.n);
    }
  }

  morrer(id) {
    var personas = this.state.personaAtivos;
    personas.splice(id - 1, 1);
    this.setPersonasAtivos(personas);
  }

  render() {
    return (
      <div>
        <Nav onRef={ref => (this.Nav = ref)} time={this.state.time} cronometro={this.regress} estagioAtual={this.state.estagio} monstroAtual={this.state.monstroAtual} lvlMonstroAtual={this.state.lvlMonstroAtual} ptsMonstroAtual={this.state.ptsMonstroAtual} attMonstroAtual={this.state.attMonstroAtual} />
        <Bloco onRef={ref => (this.Bloco1 = ref)} persona={this.state.personagem1} setPersona={this.setPersonagem1} usados={this.state.tesourosUsados} usar={this.setTesourosUsados} allTesouros={this.state.allTesouros} setAll={this.setAllTesouros} />
        {/* 
        <Bloco onRef={ref => (this.Bloco2 = ref)} persona={this.state.personagem2} setPersona={this.setPersonagem2} usados={this.state.tesourosUsados} usar={this.setTesourosUsados} allTesouros={this.state.allTesouros} setAll={this.setAllTesouros} />
        <Bloco onRef={ref => (this.Bloco3 = ref)} persona={this.state.personagem3} setPersona={this.setPersonagem3} usados={this.state.tesourosUsados} usar={this.setTesourosUsados} allTesouros={this.state.allTesouros} setAll={this.setAllTesouros} />
        <Bloco onRef={ref => (this.Bloco4 = ref)} persona={this.state.personagem4} setPersona={this.setPersonagem4} usados={this.state.tesourosUsados} usar={this.setTesourosUsados} allTesouros={this.state.allTesouros} setAll={this.setAllTesouros} />
        <Bloco onRef={ref => (this.Bloco5 = ref)} persona={this.state.personagem5} setPersona={this.setPersonagem5} usados={this.state.tesourosUsados} usar={this.setTesourosUsados} allTesouros={this.state.allTesouros} setAll={this.setAllTesouros} />
        <Bloco onRef={ref => (this.Bloco6 = ref)} persona={this.state.personagem6} setPersona={this.setPersonagem6} usados={this.state.tesourosUsados} usar={this.setTesourosUsados} allTesouros={this.state.allTesouros} setAll={this.setAllTesouros} /> 
        */}
      </div>
    );
  }
}

export default App;
