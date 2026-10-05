function Education({ items }) {
  return (
    <section>
      <h2>Освіта</h2>
      <ul>
        {items.map((item) => (
          <li key={item.place}>
            <strong>{item.place}</strong> — {item.degree} ({item.period})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;
