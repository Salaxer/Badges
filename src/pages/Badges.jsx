import React from 'react';
import './styles/Badges.css'
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import { Link } from 'react-router-dom';
import api from '../api';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

class Badges extends React.Component {
// Siempre lo primero que se va a ejectar son los constructores con todos los props que reciva
  constructor(props){
    super(props);
    // console.log('1. constructor()');
    this.state = {
      loading: true,
      error: null,
      data: [],
    };
  }
// despues del render se ejecuta el componente
// Este sirve por si queremos agregar datos asincronos y no se tarde la pagina en cargas
  componentDidMount(){
    // console.log('3. componentDidMount()');
    this.fetchData();
    // todo timeout o datos asincrono debe tener la posibilidad de terminarse
  }

  fetchData = async() =>{
    this.setState({
      loading: true,
      error: null,
    })
    try{
      const data = await api.badges.list();
      this.setState({loading: false,data});
    }catch(error){
      this.setState({loading: false, error,});
    }
  }
  // Con cada actualizacion se ejecutara este componente con dos valores
  // uno con laversion anterior y otro con la version siguiente
  componentDidUpdate(prevProps, prevState){
    // console.log('5. componentDidUpdate()');
    console.log({prevProps: prevProps,prevState: prevState});
    console.log({props: this.props,state: this.state,});
  }
  // esta accion sucede cuando el componente deja de existir.
  componentWillUnmount(){
    console.log('6. componentwillUnmount()');
    clearTimeout(this.timeoutID);
  }
  // El render se ejecuta en segundo lugar con toda la info recolectada en contructor
  render() {
    console.log('2/4. render()');
    if(this.state.loading === true){
      return (
        <PageLoading/>
      );
    }
    if(this.state.error){
      return <PageError error={this.state.error}/>
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <BadgesList badges={this.state.data} />
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;