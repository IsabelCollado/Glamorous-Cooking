import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import ListCard from './ListCard';
import Footer from './Footer';
import projectListData from '../data/projects.json';
import '../styles/App.scss';

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route
          path="/"
          element={<ListCard projectListData={projectListData} />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
