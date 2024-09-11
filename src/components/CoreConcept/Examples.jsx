import { useState } from "react";
import { EXAMPLES } from "../../data";
import TabButton from "./TabButton/TabButton";
import Section from "../Section";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let tabContent = <p> Please select a topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>
          {EXAMPLES[selectedTopic].title}
          <p>
            {EXAMPLES[selectedTopic].description}
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </p>
        </h3>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples">
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => handleSelect("components")}
        >
          Concepts
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </Section>
  );
}
