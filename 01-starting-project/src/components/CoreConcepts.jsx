export default function CoreConcepts({ ...concepts }) {
  return (
    <li>
      <img src={concepts.image} alt={concepts.title} />
      <h3>{concepts.title}</h3>
      <p>{concepts.description}</p>
    </li>
  );
}