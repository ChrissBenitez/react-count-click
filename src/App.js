import './App.css';
import logo from './assets/images/free-code-camp.svg';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';


function Drink({ name }) {

  let caffeine, age, plant;
  if (name === 'tea') {
    plant = 'leaf';
    caffeine = '15–70 mg/cup';
    age = '4,000+ years';
  } else {
    plant = 'bean';
    caffeine = '80–185 mg/cup';
    age = '1,000+ years';
  }

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{plant}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffeine}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}

function App() {

  const [clicks, setClicks] = useState(0);


  const clickHandler = () => {
    setClicks(clicks + 1);
  };
  const resetCounter = () => {
    setClicks(0);
  }


  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img className='freecodecamp-logo'
          src={logo}
          alt='freecodecamp logo'
        />
      </div>
      <div className='counter-container'>
        <Counter clicks={clicks} />
        <Button
          text='click'
          isClickButton={true}
          clickHandler={clickHandler}
        />

        <Button
          text='reset'
          isClickButton={false}
          clickHandler={resetCounter}
        />
      </div>
    </div>
  );
}

export default App;

