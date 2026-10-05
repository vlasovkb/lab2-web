function Skills({ items }) {
  return (
    <section>
      <h2>Навички</h2>
      <ul>
        {items.map((skill) => (
          <li key={skill.label}>
            <strong>{skill.label}:</strong> {skill.text}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
