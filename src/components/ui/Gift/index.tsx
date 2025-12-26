import { motion, AnimatePresence } from 'motion/react';
import "./styles.css";
import { useState } from 'react';


const Gift = ({ message }: { message: string }) => {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleGiftClick = () => {
    setOpen(true);
    setTimeout(() => setShowModal(true), 600); // tiempo para animación
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTimeout(() => setOpen(false), 400); // tiempo para cerrar animación
  };

  return (
    <>
      <div className="regalo" onClick={handleGiftClick} style={{ pointerEvents: open ? 'none' : 'auto' }}>
        <motion.div
          className="tapa"
          animate={open ? { y: -80, rotate: -20 } : { y: 0, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <span></span>
        </motion.div>
        <div className="caja">
          <span></span>
          <span></span>
        </div>
      </div>
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal-gift-bg"
            onClick={handleCloseModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ zIndex: 1000 }}
          >
            <motion.div
              className="modal-gift"
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.7, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.7, y: 40, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <h2>🎁 ¡Feliz Navidad! 🎄</h2>
              <p>{message}</p>
              <button onClick={handleCloseModal} className="modal-gift-btn">Cerrar</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gift;
