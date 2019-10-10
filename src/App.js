import React,{Component} from 'react';
import Header from './components/Header';
import Noticias from './components/Noticias';
import Formulario from './components/Formulario';
class App extends Component{
  state ={
    noticias:[]
  }
  componentDidMount(){
    this.consultarNoticias();
  }
  consultarNoticias = (categoria = 'general') =>{
    let url =`https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=7fdac1fae53840778aeec153e71bec31`;
    
    fetch(url)
      .then(respuesta =>{
        return respuesta.json();
      })
      .then(noticias =>{
        this.setState({
          noticias: noticias.articles
        })
      })
  }
  render(){
  return (
    <div className="contenedor-app">
      <Header
        titulo='Noticias'
      />
      <div className="container white contenedor-noticias">
        <Formulario
          consultarNoticias = {this.consultarNoticias}
        />
        <Noticias 
          noticias = {this.state.noticias}
        />
      </div>
    </div>
  );
}
}

export default App;
