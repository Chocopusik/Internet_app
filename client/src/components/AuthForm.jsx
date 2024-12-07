import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
//axios.defaults.baseURL = 'http://127.0.0.1:8000/';
axios.defaults.withCredentials = true; // Включите отправку кук
const AuthForm = ({ isLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isLogin && password !== confirmPassword) {
            setError('Пароли не совпадают.');
            return;
        }
        try {
            const url = isLogin ? 'http://127.0.0.1:8000/login/' : 'http://127.0.0.1:8000/register/';
            const response = await axios.post(url, { email, password });
            console.log(response.data);
            const token = response.data.jwt; // Измените на response.data.jwt, если это ваш токен
            localStorage.setItem('token', token);
            console.log('Токен сохранен в localStorage:', localStorage.getItem('token'));
            navigate('/'); // Перенаправление на страницу с функционалом
        } catch (err) {
            if (isLogin && err.response && err.response.status === 404) {
                // Если это ошибка 404 и мы находимся на странице входа
                const confirmed = window.confirm("Пользователь не найден. Хотите зарегистрироваться?");
                if (confirmed) {
                    navigate('/register'); // Перенаправляем на страницу регистрации
                }
            } else {
                setError('Ошибка при авторизации. Проверьте введенные данные.');
                console.error(err);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{isLogin ? 'Вход' : 'Регистрация'}</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            {!isLogin && (
                <input
                    type="password"
                    placeholder="Подтвердите пароль"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            )}
            <button type="submit">{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
            {error && <p>{error}</p>}
            {!isLogin && (
                <p>
                    У вас уже есть аккаунт? <Link to="/login">Войти</Link>
                </p>
            )}
            {isLogin && (
                <p>
                    Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
                </p>
            )}
        </form>
    );
};

export const Login = () => <AuthForm isLogin={true} />;
export const Register = () => <AuthForm isLogin={false} />;