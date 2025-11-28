import TabButton from "./TabButton"
import { EXAMPLES } from "../data";
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";

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
    <Section id="examples" title="Examples">
      <Tabs
        ButtonsContainer="menu"
        buttons={
        <>
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
        </>
      }>
      {SelectedTopic()}
      </Tabs >
    </Section>
  )
}