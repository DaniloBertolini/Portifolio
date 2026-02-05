import newsWebsiteUi from '/newsWebsiteUi.png';
import valorantAgents from '/valorantAgents.png';
import timer from '/timer.png';
import jogoDaVelha from '/jogoDaVelha.png';
import gridHunt from '/gridHunt.png';

const projectsArray = [
  {
    title: 'Grid Hunt',
    description: 'Jogo multiplayer 2D em tempo real com estética cyberpunk. Jogadores competem coletando frutas para acumular pontos, utilizando WebSockets para comunicação instantânea e Canvas API para renderização fluida.',
    date: 'Jan 2026',
    github: 'https://github.com/DaniloBertolini/grid-hunt',
    image: gridHunt
  },
  {
    title: 'News Website UI',
    description: 'Este projeto consiste em um site de notícias, no qual mostra as notícias mais recentes. Você pode filtrar as notícias e favoritar. Cada notícia aparece a data na qual foi publicada. os dados vêm por meio de uma API do IBGE.',
    date: 'Set 2023',
    link: 'https://danilobertolini.github.io/news-website-ui/',
    github: 'https://github.com/DaniloBertolini/news-website-ui',
    image: newsWebsiteUi
  },
  {
    title: 'Valorant Agents',
    description: 'Uma aplicação que mostra os personagens do jogo Valorant.',
    date: 'Out 2023',
    link: 'https://danilobertolini.github.io/Valorant-Agents/',
    github: 'https://github.com/DaniloBertolini/Valorant-Agents',
    image: valorantAgents
  },
  {
    title: 'Timer',
    description: 'Uma aplicação para gerenciar um tempo/intervalo, através de um Temporizador ou um Cronômetro.',
    date: 'Jul 2023',
    link: 'https://danilobertolini.github.io/Timer/',
    github: 'https://github.com/DaniloBertolini/Timer',
    image: timer
  },
  {
    title: 'Jogo da Velha',
    description: 'Uma aplicação de um jogo da velha, para passar o tempo jogando com algum amigo.',
    date: 'Jun 2023',
    link: 'https://danilobertolini.github.io/Jogo-da-Velha/',
    github: 'https://github.com/DaniloBertolini/Jogo-da-Velha',
    image: jogoDaVelha
  },
]

export default projectsArray;