import '../style/Welcome.css'


export default function Welcome() {
  return (
    <div className="welcome-container">
        <p className="primary-welcome-text">Welcome! </p>
        <p className="secondary-welcome-text">Hello there, visitors to this website. This is a webpage that serves as an introduction about myself. I hope that this website will assist you in getting to know me better.</p>
        <p className="secondary-welcome-text">Type "help" to display list of available commands.</p>
    </div>
  );
}
