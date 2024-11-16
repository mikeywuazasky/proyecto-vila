import logo from './logo.svg';
import './App.css';
import AvatarJsx from './components/AvatarJsx';
import Counter from './components/Counter/Counter';
import Title from './components/Title/Title';
import { toHaveAccessibleDescription } from '@testing-library/jest-dom/matchers';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemListContainer/ItemCount';
import Effect from './components/Effect/Effect';
import { useState } from 'react';

function App() {

  const [show, setshow] = useState(true)

  const handleOnAdd = (quantity) => {
    console.log('Se agregaron ${quantity} items al carrito')
  }

  return (
    <div className="App">
      <button onClick={() =>setshow (!show)}>Show/Hide</button>
      <Navbar>
        <ItemListContainer greeting={'Bienvenidos'}></ItemListContainer>
      </Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AvatarJsx name= "marta" id= "1"desc= "tengo 18 años"  ></AvatarJsx>
        <h1>BIENVENIDOS</h1>
        
        <Button label={"cancelar"} acction= {accept}></Button>
        <Button label={"aceptar"} action= {() => console.log ("acepte")}></Button>
        <p className='Titulo' onClick={() => console.log('click')}>BIENVENIDOS</p>
        <button></button>

        <input></input>
      </header>
      <Counter>
        <Title title = 'Contar pasteles'></Title>
      </Counter>
      <Counter>
        <Title title= 'Contar Cupcakes'></Title>
      </Counter>
      <h1>Contador con boton</h1>
      <ItemCount stock={10} initial={0} onAdd={handleOnAdd}></ItemCount>
      {show ? <Effect></Effect>:null} 
    </div>
  );
}

export default App;
