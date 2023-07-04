import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import { SideBarData } from "./Components/sideBarData";
import ListOfPlayList from "./pages/listOfPlayList";
import CreatePlayList from "./pages/createPlayList";

function App() {
  //Se debe de guardar todo esto
  return (
    <div className="App">
      <div className="sidebar-container">
        <ul className="nav-list">
          {SideBarData.map((val, index) => {
            return (
              <li className="nav-item" key={index}>
                <NavLink
                  to={val.path}
                  className="nav-link"
                  activeClassName="active"
                >
                  <div className="nav-link-icon">{val.icon}</div>
                  <span>{val.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<ListOfPlayList />} />
        <Route path="/create-playlist" element={<CreatePlayList />} />
      </Routes>
    </div>
  );
}

export default App;
