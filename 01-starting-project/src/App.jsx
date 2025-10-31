import Header from './components/Header';
import CoreConcepts from './components/CoreConcepts';
import { CORE_CONCEPTS } from './data';
import TabButton from './components/TabButton';

function App() {

  function handleSelect(event) {
    console.log(event);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>React Core Concepts!</h2>
        <ul>
          {CORE_CONCEPTS && CORE_CONCEPTS.map(concept =>
              <CoreConcepts {...concept}/>
            )}
            </ul>
        </section>
        <section id="examples">
            <menu>
              <TabButton onSelect={ () => handleSelect('Components') }>Components</TabButton>
              <TabButton onSelect={ () => handleSelect('JSX') }>JSX</TabButton>
              <TabButton onSelect={ () => handleSelect('Props') }>Props</TabButton>
              <TabButton onSelect={ () => handleSelect('State') }>State</TabButton>
            </menu>
        </section>
      </main>
    </div>
  );
}

export default App;