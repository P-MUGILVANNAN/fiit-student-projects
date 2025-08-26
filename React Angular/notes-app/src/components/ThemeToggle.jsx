const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        id="themeToggle"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
      <label className="form-check-label" htmlFor="themeToggle">
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </label>
    </div>
  );
};

export default ThemeToggle;