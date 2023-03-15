const NavBar = () => {
  return (
    <nav>
      <Link to="/" name="Inicio" />
      <Link to="/productos" name="Productos" />
      <Link to="/contacto" name="Contacto" />
    </nav>
  );
};

const Link = ({ to, name }) => {
  return (
    <a href={to}>{name}</a>
  );
};

export default NavBar;
