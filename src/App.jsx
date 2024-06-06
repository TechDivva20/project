import reactImg from '../src/assets/react-core-concepts.png'
import componentImg from '../src/assets/components.png'
import propsImage from '../src/assets/config.png'
import jsxImage from '../src/assets/jsx-ui.png'
import stateImage from '../src/assets/state-mgmt.png'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const descriptions = reactDescriptions[genRandomInt(2)]
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
       {descriptions} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function CoreConcept (props){
  return (
    <li>
      <img src = {props.image} alt='image'/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
        <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title = "COMPONENTS" 
            description = "The core UI building block" 
            image = {componentImg}/>
            <CoreConcept title = "PROPS"
            description = "Props are powerful tools"
            image = {propsImage}/>
            <CoreConcept title = "JSX"
            description = "Jsx is an acronym from Javacript"
            image = {jsxImage}/>
            <CoreConcept title = "STATE"
            description = "We are learning useState"
            image = {stateImage}/>
          </ul>
        </section>
       
      </main>
    </div>
  );
}

export default App;