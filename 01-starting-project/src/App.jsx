import Header from './components/Header';
import CoreConcepts from './components/CoreConcepts';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import TabButton from './components/TabButton';
import { useState } from 'react';

function App() {

  const [selectedTopic, setSelectedTopic] = useState();
  const [selectedTab, setSelectedTab] = useState();

  function handleSelect(event) {
    setSelectedTopic(event);
    setSelectedTab(event);
    console.log(selectedTopic);
    console.log(EXAMPLES[selectedTopic]);
  }

  const SelectedTopic = () => {
    if (!selectedTopic) {
      return <p>Please select a topic</p>
    } else {
      return (
        <div id="tab-content">
          {selectedTopic && EXAMPLES[selectedTopic] && (
            <>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </>
          )}
        </div>
      )
    }
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>React Core Concepts!</h2>
          <ul>
            {CORE_CONCEPTS && CORE_CONCEPTS.map((concept, index) =>
              <CoreConcepts key={index} {...concept} />
            )}
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onSelect={() => handleSelect('components')}
              setSelectedTopic={setSelectedTopic}
            >Components</TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => handleSelect('jsx')}
              setSelectedTopic={setSelectedTopic}
            >JSX</TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onSelect={() => handleSelect('props')}
              setSelectedTopic={setSelectedTopic}
            >Props</TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onSelect={function () { handleSelect('state') }}
              setSelectedTopic={setSelectedTopic}
            >State</TabButton>
          </menu>
          {SelectedTopic()}
        </section>
      </main>
    </div>
  );
}

export default App;