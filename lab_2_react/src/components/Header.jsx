function Header({ name, role, email, github }) {
  return (
    <header>
      <h1>{name}</h1>
      <p>{role}</p>
      <p>
        Email: <a href={`mailto:${email}`}>{email}</a> |{' '}
        GitHub:{' '}
        <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer">
          github.com/{github}
        </a>
      </p>
    </header>
  );
}

export default Header;
