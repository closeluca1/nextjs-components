import { ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <button onClick={onClose} className="float-right">Fechar</button>
                        <div className="my-10">
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
