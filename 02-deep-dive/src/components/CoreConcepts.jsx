import CoreConcept from "./CoreConcept"
import { CORE_CONCEPTS } from "../data"

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>React Core Concepts!</h2>
      <ul>
        {CORE_CONCEPTS && CORE_CONCEPTS.map((concept, index) =>
          <CoreConcept key={index} {...concept} />
        )}
      </ul>
    </section>
  )
}