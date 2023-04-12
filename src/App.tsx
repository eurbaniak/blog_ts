import DisplayPosts from "./components/displayPosts";
import { Routes, Route, Link } from "react-router-dom";
import Modal from "./components/modal";

function App() {
  return (
    <>
      <nav className="navbar has-shadow is-light is-spaced">
        <div className="navbar-start">Blogg</div>
        <div className="navbar-end">
          <Link to="/new">
            <button className="button is-info">Add Post</button>
          </Link>
        </div>
      </nav>
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-three-quarters">
            <Routes>
              <Route path="/" element={<DisplayPosts />} />
              <Route
                path="/new"
                element={
                  <>
                    <Modal active={true}>
                      <div>ss</div>
                    </Modal>
                    <DisplayPosts />
                  </>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
