import { CounterDisplay, CounterControls } from './components/counter-demo';
import ThemeSwitcher from './components/theme-demo/ThemeSwitcher';
import { Profile } from './components/auth-demo';

function App() {
  return (
    <div>
      <h1>Class 21 - Zustand State Management </h1>

      <h2>Membuat Store Sederhana</h2>
      <CounterDisplay />
      <CounterControls />
      <ThemeSwitcher />
      <Profile />
    </div>
  );
}

export default App;
