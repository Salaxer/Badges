// Gracias a este podemos crear un elemento html o etiqueta
// const element = document.createElement('h1');
// // aqui le agregamos el texto
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);
// react y react dom trabajan en conjunto

// const jsx = <h1>Hello, Platzi Salaxer!</h1>;
// const element = React.createElement(
//     'a',
//     {href: 'https://platzi.com'},
//     'Ir a platzi');
// const name = 'Salaxer';
// const element = React.createElement(
//     'h1',
//     {},
//     `Hola, soy ${name}`
// )
// const sum = () => 4+4;
// const jsx = <h1>Hola, soy {sum()}</h1>;



// const jsx = (
//     <div>
//         <h1>Hola soy Salaxer</h1>
//         <p>Soy ingeniero FrontEnd</p>
//     </div>
// )

import React from 'react';
import ReactDOM from 'react-dom';
// import Badge from './components/Badge'
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import App from './components/App'
const container = document.getElementById('app');
// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<App />, container);
// Con el </> le decimos que es un elemento



// Cuando React renderiza los componentes decimos que entran en escena, cuando su estado cambia o recibe unos props diferentes se actualizan y cuando cambiamos de página se dice que se desmontan.

// Montaje:

// Representa el momento donde se inserta el código del componente en el DOM.
// Se llaman tres métodos: constructor, render, componentDidMount.
// Actualización:

// Ocurre cuando los props o el estado del componente cambian.
// Se llaman dos métodos: render, componentDidUpdate.
// Desmontaje:

// Nos da la oportunidad de hacer limpieza de nuestro componente.
// Se llama un método: componentWillUnmount.