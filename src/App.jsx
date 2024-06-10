import reactImg from '../src/assets/react-core-concepts.png'
import {CORE_CONCEPTS, EXAMPLES} from '../src/data'
// import {EXAMPLES} from './data'
import Header from './components/Header/Header';
import CoreConcept from './components/Core-Concept';
import TabButton from './components/TabButton';
import { useState } from 'react';

function App() {
const [selectedTopic, setSelectedTopic] = useState ('components')

  function handleSelect (selectedButton) {
    // selectedButton = components, props, Jsx, state
    setSelectedTopic(selectedButton)
    console.log(selectedTopic)
   }

console.log("STRUCTURAL ARRANGEMENTS")

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
        <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title = {CORE_CONCEPTS[0].title}
            description = {CORE_CONCEPTS[0].description} 
            image = {CORE_CONCEPTS[0].image}/>
             {/* above is a longer alternative, below are shorter alternative */}

            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
             {/* using spread operators (...), since the object names are the same with this component names
             you can use a spread operator to extract   */}
            
          </ul>
        </section>
        
        <section id='examples'>
          <h2>Examples</h2>
          {/* menu is a default in React used to create list items in JSX */}
          <menu> 
             <TabButton onSelect={() => handleSelect ('component')}>Components</TabButton>
             <TabButton onSelect={() => handleSelect ('Jsx')}>Jsx</TabButton>
             <TabButton onSelect={() => handleSelect ('props')}>Props</TabButton>
             <TabButton onSelect={() => handleSelect ('state')}>State</TabButton>
          </menu>
          <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
       
      </main>
    </div>
  );
}

export default App;