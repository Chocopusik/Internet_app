// LogoutConfirm.jsx
import React from 'react';
import 'LogoutConfirm';

const LogoutConfirm = ({ onConfirm, onCancel }) => {
    return (
        <div className="logout-confirmation">
            <h3>Вы действительно хотите выйти?</h3>
            <button onClick={onConfirm}>Да</button>
            <button onClick={onCancel}>Нет</button>
        </div>
    );
};

export default LogoutConfirm;