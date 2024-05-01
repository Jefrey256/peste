import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  // Estado para controlar o tema claro ou escuro
  const [darkMode, setDarkMode] = useState(false);

  // Função para alternar entre os modos claro e escuro
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // Estado para armazenar os dados da API
  const [body, setBody] = useState('');

  // UseEffect para buscar os dados da API quando o componente é montado
  useEffect(() => {
    axios.get("http://localhost:7777/get_data")
      .then((response) => {
        setBody(response.data.body);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <header>
        <h1>Seja Bem Vindo</h1>
        <button onClick={toggleDarkMode}>{darkMode ? 'Modo Claro' : 'Modo Escuro'}</button>
        <button><Link to="/tes">Ir para outra página</Link></button>
      </header>
      {/* Renderiza o corpo da resposta da API */}
      {body && <div>{body}</div>}
      <div className="pico">
        <h1>Título do Pico</h1>
      </div>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ut distinctio culpa impedit maxime reiciendis, repudiandae et molestiae soluta nam. Odio praesentium natus saepe voluptas harum possimus dolorem blanditiis suscipit.</h1>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laborum suscipit velit quod et animi adipisci rem, molestias sequi quam vitae facere ullam omnis iste explicabo cum laboriosam? Voluptatem, veniam.</div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </div>
  );
};

export default Home;

