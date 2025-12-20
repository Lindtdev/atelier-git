"use client"; 
import { useState } from 'react';
import { useRouter } from 'next/router';
// import { useEffect } from "react";


export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      router.push('/page');
    } else {
      setError('Nom d’utilisateur ou mot de passe incorrect');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Nom d’utilisateur</label>
        <input value={username} onChange={e => setUsername(e.target.value)} />
        <label>Mot de passe</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Se connecter</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}