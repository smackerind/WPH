import { useThemeStore } from '../../stores/themeStore';

function ThemeSwitcher() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  return (
    <section
      style={{
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
      }}
    >
      <h2>Theme : {theme}</h2>

      <button onClick={toggleTheme}>Toggle Theme</button>
    </section>
  );
}

export default ThemeSwitcher;
