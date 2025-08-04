import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Film, Tv, Gamepad2, User, Mail, Home } from 'lucide-react';
import './App.css';

// Importando as imagens
import heroImage from './assets/ue8zJN6xhczO.jpg';
import thunderboltsImage from './assets/Ug1SLGZFEysS.jpg';
import gamingSetupImage from './assets/Bmx8zmjzDXgR.jpg';

// Componente Header
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition-colors">
            OnerdFeliz
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="flex items-center space-x-2 hover:text-purple-400 transition-colors">
              <Home size={18} />
              <span>Início</span>
            </Link>
            <Link to="/filmes" className="flex items-center space-x-2 hover:text-purple-400 transition-colors">
              <Film size={18} />
              <span>Filmes</span>
            </Link>
            <Link to="/series" className="flex items-center space-x-2 hover:text-purple-400 transition-colors">
              <Tv size={18} />
              <span>Séries</span>
            </Link>
            <Link to="/jogos" className="flex items-center space-x-2 hover:text-purple-400 transition-colors">
              <Gamepad2 size={18} />
              <span>Jogos</span>
            </Link>
            <Link to="/sobre" className="flex items-center space-x-2 hover:text-purple-400 transition-colors">
              <User size={18} />
              <span>Sobre</span>
            </Link>
            <Link to="/contato" className="flex items-center space-x-2 hover:text-purple-400 transition-colors">
              <Mail size={18} />
              <span>Contato</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-2">
            <Link to="/" className="block py-2 hover:text-purple-400 transition-colors">Início</Link>
            <Link to="/filmes" className="block py-2 hover:text-purple-400 transition-colors">Filmes</Link>
            <Link to="/series" className="block py-2 hover:text-purple-400 transition-colors">Séries</Link>
            <Link to="/jogos" className="block py-2 hover:text-purple-400 transition-colors">Jogos</Link>
            <Link to="/sobre" className="block py-2 hover:text-purple-400 transition-colors">Sobre</Link>
            <Link to="/contato" className="block py-2 hover:text-purple-400 transition-colors">Contato</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

// Componente Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2025 OnerdFeliz. Todos os direitos reservados.</p>
        <p className="mt-2 text-gray-400">Universo Geek & Nerd - Filmes, Séries e Jogos</p>
      </div>
    </footer>
  );
};

// Página Inicial
const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-purple-900 to-blue-900 flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative container mx-auto px-4 text-white">
          <h1 className="text-5xl font-bold mb-4">Bem-vindo ao OnerdFeliz!</h1>
          <p className="text-xl mb-6">Seu portal para o universo geek e nerd - filmes, séries e jogos!</p>
          <Link 
            to="/filmes" 
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Explore Agora
          </Link>
        </div>
      </section>

      {/* Destaques */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Destaques</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src={thunderboltsImage} alt="Thunderbolts" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Thunderbolts* (2025)</h3>
                <p className="text-gray-600 mb-4">A nova equipe anti-herói da Marvel promete revolucionar o MCU...</p>
                <Link to="/filmes" className="text-purple-600 hover:text-purple-800 font-semibold">Leia mais →</Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src={gamingSetupImage} alt="Gaming Setup" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Setup Gamer Perfeito</h3>
                <p className="text-gray-600 mb-4">Dicas para montar o setup dos sonhos para suas sessões de gaming...</p>
                <Link to="/jogos" className="text-purple-600 hover:text-purple-800 font-semibold">Leia mais →</Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <Tv size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Séries em Alta</h3>
                <p className="text-gray-600 mb-4">Descubra as séries que estão dominando o universo geek...</p>
                <Link to="/series" className="text-purple-600 hover:text-purple-800 font-semibold">Leia mais →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Últimas Notícias */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Últimas Notícias</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <article key={item} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-2">Notícia Geek #{item}</h3>
                <p className="text-gray-600 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                <span className="text-sm text-gray-500">Há 2 horas</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Página de Filmes
const FilmesPage = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Filmes</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <img src={thunderboltsImage} alt="Thunderbolts" className="w-full max-w-md mx-auto mb-6 rounded-lg" />
          <h2 className="text-2xl font-bold mb-4">Crítica: Thunderbolts* (2025) - A Equipe Anti-Herói da Marvel Acerta o Alvo?</h2>
          
          <div className="prose max-w-none">
            <p className="mb-4">
              O universo cinematográfico da Marvel continua a expandir-se, e com ele, a introdução de novas equipes e conceitos. 
              <strong>Thunderbolts*</strong>, com lançamento previsto para 2025, promete trazer uma abordagem diferente ao gênero de super-heróis, 
              focando em um grupo de anti-heróis e vilões reformados. Mas será que essa aposta da Marvel Studios acerta o alvo e entrega 
              a complexidade e a ação que os fãs esperam?
            </p>

            <h3 className="text-xl font-bold mb-3">A Premissa</h3>
            <p className="mb-4">
              <strong>Thunderbolts*</strong> reúne personagens já conhecidos do MCU, como Yelena Belova (Florence Pugh), 
              Bucky Barnes (Sebastian Stan), Red Guardian (David Harbour), U.S. Agent (Wyatt Russell), Taskmaster (Olga Kurylenko) 
              e Ghost (Hannah John-Kamen), sob a liderança da enigmática Valentina Allegra de Fontaine (Julia Louis-Dreyfus). 
              A ideia é que essa equipe execute missões governamentais que os Vingadores não fariam, operando em uma zona moral cinzenta. 
              A grande questão é: eles são realmente heróis, ou apenas ferramentas para um propósito maior?
            </p>

            <h3 className="text-xl font-bold mb-3">O Elenco e as Expectativas</h3>
            <p className="mb-4">
              O elenco é, sem dúvida, um dos pontos fortes do filme. Florence Pugh e Sebastian Stan já demonstraram grande química 
              em suas aparições anteriores, e a dinâmica entre os personagens promete ser um dos pilares da narrativa. 
              A inclusão de David Harbour como Red Guardian adiciona um toque de humor e excentricidade, enquanto Wyatt Russell 
              como U.S. Agent traz a tensão de um personagem com um passado complicado.
            </p>

            <h3 className="text-xl font-bold mb-3">O Veredito Preliminar</h3>
            <p className="mb-4">
              Embora ainda seja cedo para um veredito final, <strong>Thunderbolts*</strong> tem todos os ingredientes para ser um filme impactante. 
              A proposta de explorar o lado mais ambíguo do universo Marvel, combinada com um elenco talentoso e personagens complexos, 
              cria uma expectativa positiva. Fique ligado para a crítica completa após o lançamento!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Página de Séries
const SeriesPage = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Séries</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Série Destaque #{item}</h2>
              <p className="text-gray-600 mb-4">Análise completa da série que está dominando as plataformas de streaming...</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition-colors">
                Leia Mais
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Página de Jogos
const JogosPage = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Jogos</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <img src={gamingSetupImage} alt="Gaming Setup" className="w-full max-w-2xl mx-auto mb-6 rounded-lg" />
          <h2 className="text-2xl font-bold mb-4">Como Montar o Setup Gamer Perfeito</h2>
          <p className="text-gray-600 mb-4">
            Descubra as dicas essenciais para criar o setup dos seus sonhos, desde a escolha do monitor até 
            a iluminação RGB que vai deixar seu espaço gamer incrível.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold mb-2">Review: Jogo #{item}</h3>
              <p className="text-gray-600 mb-4">Análise completa do jogo que está fazendo sucesso...</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition-colors">
                Leia Review
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Página Sobre
const SobrePage = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Sobre o OnerdFeliz</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg mb-6">
            Bem-vindo ao <strong>OnerdFeliz</strong>, seu portal definitivo para o universo geek e nerd! 
            Aqui você encontra as melhores análises, críticas e opiniões sobre filmes, séries e jogos 
            que dominam a cultura pop.
          </p>
          <p className="text-gray-600 mb-6">
            Nossa missão é trazer conteúdo de qualidade, sempre com uma abordagem descontraída e 
            opiniões honestas sobre o que está em alta no mundo geek. Seja você um fã de super-heróis, 
            um viciado em séries ou um gamer apaixonado, este é o seu lugar!
          </p>
          <p className="text-gray-600">
            Criado por um verdadeiro nerd para outros nerds, o OnerdFeliz é mais que um site - 
            é uma comunidade onde a paixão pela cultura geek se encontra.
          </p>
        </div>
      </div>
    </div>
  );
};

// Página de Contato
const ContatoPage = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Contato</h1>
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <p className="text-lg mb-6">
            Quer entrar em contato? Tem alguma sugestão ou crítica? Adoraríamos ouvir você!
          </p>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nome</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Seu nome"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="seu@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Mensagem</label>
              <textarea 
                rows="5"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Sua mensagem..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md font-semibold transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Componente Principal
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/filmes" element={<FilmesPage />} />
            <Route path="/series" element={<SeriesPage />} />
            <Route path="/jogos" element={<JogosPage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/contato" element={<ContatoPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

