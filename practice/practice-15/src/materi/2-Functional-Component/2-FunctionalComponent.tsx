import CourseCard from './2-CourseCard';

// Functional Component (Declaration Function)
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Address</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

// Functional Component (Arrow Function)
const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2026</p>
    </footer>
  );
};

function FunctionalComponent() {
  return (
    <main>
      <Navbar />
      <br />
      <CourseCard />
      <br />
      <Footer />
    </main>
  );
}

export default FunctionalComponent;
