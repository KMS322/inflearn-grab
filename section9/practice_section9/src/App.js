import "./App.css";
import MainPage from "./main";
function App() {
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="/images/icons/logo.png" />
        </div>
      </div>
      <div id="body">
        <MainPage />
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
