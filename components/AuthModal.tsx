'use client';

import Modal from "./Modal";

const AuthModal = () => {
    return (
        <div>
            <Modal
            title="Welcome back!"
            description="Login to your account"
            isOpen
            onChange={() => {}}>
                Auth Modal Children
            </Modal>
        </div>
    );
}

export default AuthModal;