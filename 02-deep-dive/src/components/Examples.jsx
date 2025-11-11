import TabButton from "./TabButton"
import { EXAMPLES } from "../data";
import { useState } from "react";

export default function Examples() {
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
    <section id="examples">
      <h2>Examples</h2>
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
  )
}