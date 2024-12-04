// Logout.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const logout = async () => {
            try {
                // Отправляем запрос на сервер для выхода
                await axios.post('http://127.0.0.1:8000/logout/'); 
                // Удаляем токен из local storage
                localStorage.removeItem('token');
                // Перенаправляем на страницу входа
                navigate('/login');
            } catch (err) {
                console.error('Ошибка при выходе:', err);
                // Можно обработать ошибку, если это необходимо
            }
        };

        logout();
    }, [navigate]);
    return (
        <div>
            <h2>Вы вышли из аккаунта</h2>
        </div>
    );
};

export default Logout;