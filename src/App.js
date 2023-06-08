import logo from './logo.svg';
import './App.css';
import FunctionalCompCounter from './components/State/FunctionalCompCounter';
import UseStateWithPreviousState from './components/State/UseStateWithPreviousState';
import UseStateWithObject from './components/State/UseStateWithObject';
import UseStateWithArray from './components/State/UseStateWithArray';
import ClassComponentWithOneExample from './components/Effect/ClassComponentWithOneExample';
// import UseEffectAfterRender from './components/Effect/UseEffectAfterRender';
import UseEffectRunBasedOnCondition from './components/Effect/UseEffectRunBasedOnCondition';
import UseEffectRunOnce from './components/Effect/UseEffectRunOnce';
import UseEffectWithCleanUp from './components/Effect/UseEffectWithCleanUp';

function App() {
  return (
    <div className="App">
      {/*<FunctionalCompCounter></FunctionalCompCounter>
     <UseStateWithPreviousState></UseStateWithPreviousState>
     <UseStateWithObject></UseStateWithObject>
     <UseStateWithArray></UseStateWithArray> 
     <ClassComponentWithOneExample></ClassComponentWithOneExample>
     <UseEffectAfterRender></UseEffectAfterRender>
     <ClassComponentWithOneExample></ClassComponentWithOneExample>
     <UseEffectRunBasedOnCondition></UseEffectRunBasedOnCondition>
    <UseEffectRunOnce></UseEffectRunOnce>

  <UseEffectWithCleanUp></UseEffectWithCleanUp>  */}
  <ClassComponentWithOneExample></ClassComponentWithOneExample>
    </div>
  );
}

export default App;
