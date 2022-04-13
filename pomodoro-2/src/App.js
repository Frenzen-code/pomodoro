import React, {useState} from 'react';
import Timer from './components/Timer'
import Header from './components/Header'
import "./styles/app.scss"
import Modal from './components/Modal'

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <Header />
      <Timer openModal={openModal} setOpenModal={setOpenModal} />
      {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal} />}
    </div>
  );
}

export default App;
