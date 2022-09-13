import React from 'react';
import Modal from './components/ui/Modal/Modal';
import Button from './components/ui/Button/Button';

import cl from './styles/App.module.scss'


const App: React.FC = () => {
  const [open, isOpen] = React.useState<boolean>(false)

  const openModal: React.MouseEventHandler = (e): void => {
    e.preventDefault()
    isOpen(true)
  }

  const closeModal: React.MouseEventHandler = (): void => {
    isOpen(false)
  }

  return (
    <div className={cl['app']}>
      <Button open={open} openModal={(e) => openModal(e)} />
      <div onClick={closeModal} className={cl[`${open ? 'app__overlay-show' : 'app__overlay'}`]} >
        <div onClick={e => e.stopPropagation()} className={cl[`${open ? 'app__modal-show' : 'app__modal'}`]}>
          <Modal closeModal={closeModal} />
        </div>
      </div>
    </div>
  );
}

export default App;
