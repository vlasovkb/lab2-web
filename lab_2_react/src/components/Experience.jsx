function Experience({ items }) {
  return (
    <section>
      <h2>Досвід роботи / Проєкти</h2>
      {items.map((item) => (
        <article key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </section>
  );
}

export default Experience;
