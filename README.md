# Trabalho-lixo eletrônico

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="E-WASTE: aprenda sobre lixo eletrônico, reciclagem e reutilização de componentes.">
  <title>E-WASTE | Conscientização Eletrônica</title>
  <link rel="stylesheet" href="av3.css"
  <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/1048/1048942.png">
</head>
<body>

  <header class="header">
    <a href="#inicio" class="logo">E-<span>WASTE</span></a>

    <button class="menu-toggle" id="menuToggle" aria-label="Abrir menu">☰</button>

    <nav id="nav">
      <a href="#inicio">Início</a>
      <a href="#sobre">Sobre</a>
      <a href="#impactos">Impactos</a>
      <a href="#reutilizacao">Reutilização</a>
      <a href="#descarte">Descarte</a>
      <a href="#quiz">Quiz</a>
    </nav>
  </header>

  <main id="conteudo">

    <!-- INÍCIO -->
    <section class="hero" id="inicio">
      <div class="hero-content">
        <span class="tag">TECNOLOGIA + SUSTENTABILIDADE</span>
        <h1>O futuro também depende do destino do nosso <span>lixo eletrônico.</span></h1>
        <p>
          Descubra como o descarte correto e a reutilização de equipamentos
          eletrônicos podem ajudar a proteger o planeta.
        </p>
        <a href="#sobre" class="btn">Conheça o projeto</a>
      </div>

      <div class="hero-image">
        <div class="electronic-icon">♻</div>
        <h2>REDUZA • REUTILIZE • RECICLE</h2>
        <p>Uma atitude sustentável começa com você.</p>
      </div>
    </section>

    <!-- PAINEL DE ACESSIBILIDADE -->
    <section class="accessibility" aria-labelledby="accessTitle">
      <div>
        <h2 id="accessTitle">Acessibilidade</h2>
        <p>Personalize a visualização e utilize os recursos de voz.</p>
      </div>

      <div class="access-buttons">
        <button id="increaseFont" aria-label="Aumentar tamanho do texto">A+</button>
        <button id="decreaseFont" aria-label="Diminuir tamanho do texto">A-</button>
        <button id="contrastButton">Alto contraste</button>
        <button id="readingMode">Modo de leitura</button>
        <button id="resetAccess">Restaurar visual</button>
      </div>

      <div class="voice-controls">
        <button id="readPage">🔊 Ouvir página</button>
        <button id="pauseReading">⏸ Pausar</button>
        <button id="resumeReading">▶ Continuar</button>
        <button id="stopReading">⏹ Parar</button>
      </div>

      <div class="voice-controls">
        <button id="voiceCommand">🎙 Ativar comandos de voz</button>
        <span id="voiceStatus" role="status" aria-live="polite">
          Recursos de voz prontos.
        </span>
      </div>
    </section>

    <!-- SOBRE -->
    <section class="section" id="sobre">
      <div class="section-heading">
        <span>ENTENDA O PROBLEMA</span>
        <h2>O que é lixo eletrônico?</h2>
      </div>

      <p class="section-description">
        Lixo eletrônico, também chamado de e-waste, é o conjunto de aparelhos
        elétricos e eletrônicos descartados por não funcionarem mais ou por
        terem sido substituídos. Exemplos incluem celulares, computadores,
        televisores, impressoras e baterias.
      </p>

      <div class="cards">
        <article class="card">
          <div class="card-icon">📱</div>
          <h3>Celulares</h3>
          <p>Aparelhos antigos, quebrados ou sem utilidade para seus donos.</p>
        </article>

        <article class="card">
          <div class="card-icon">💻</div>
          <h3>Computadores</h3>
          <p>Notebooks, monitores, teclados, mouses e outros acessórios.</p>
        </article>

        <article class="card">
          <div class="card-icon">📺</div>
          <h3>Televisores</h3>
          <p>Equipamentos de imagem e som que não são mais utilizados.</p>
        </article>

        <article class="card">
          <div class="card-icon">🔋</div>
          <h3>Baterias</h3>
          <p>Precisam de coleta apropriada e nunca devem ser descartadas no lixo comum.</p>
        </article>
      </div>
    </section>

    <!-- IMPACTOS -->
    <section class="section dark-section" id="impactos">
      <div class="section-heading">
        <span>CONSEQUÊNCIAS</span>
        <h2>Impactos do descarte incorreto</h2>
      </div>

      <div class="impact-grid">
        <article>
          <span>🌱</span>
          <h3>Solo contaminado</h3>
          <p>O descarte inadequado pode liberar substâncias perigosas no ambiente.</p>
        </article>

        <article>
          <span>💧</span>
          <h3>Água contaminada</h3>
          <p>Resíduos podem atingir rios e outras fontes de água.</p>
        </article>

        <article>
          <span>🌍</span>
          <h3>Poluição ambiental</h3>
          <p>O acúmulo de resíduos prejudica ecossistemas e comunidades.</p>
        </article>

        <article>
          <span>♻️</span>
          <h3>Desperdício de recursos</h3>
          <p>Materiais que poderiam ser recuperados acabam sendo desperdiçados.</p>
        </article>
      </div>
    </section>

    <!-- REUTILIZAÇÃO -->
    <section class="section" id="reutilizacao">
      <div class="section-heading">
        <span>ECONOMIA CIRCULAR</span>
        <h2>O que pode ser reutilizado?</h2>
      </div>

      <p class="section-description">
        Muitos equipamentos possuem peças que podem ser reaproveitadas
        quando estão em boas condições e são compatíveis com o novo aparelho.
      </p>

      <div class="filter-buttons">
        <button class="filter-btn active" data-filter="todos">Todos</button>
        <button class="filter-btn" data-filter="celular">Celulares</button>
        <button class="filter-btn" data-filter="computador">Computadores</button>
        <button class="filter-btn" data-filter="televisao">Televisores</button>
        <button class="filter-btn" data-filter="outros">Outros</button>
      </div>

      <div class="reuse-grid">

        <article class="reuse-card" data-category="celular">
          <h3>📱 Celulares</h3>
          <ul>
            <li>Tela em boas condições</li>
            <li>Câmeras</li>
            <li>Alto-falantes</li>
            <li>Botões e carcaça</li>
            <li>Peças de conexão compatíveis</li>
          </ul>
          <p>As peças precisam ser testadas e compatíveis com o aparelho de destino.</p>
        </article>

        <article class="reuse-card" data-category="computador">
          <h3>💻 Computadores</h3>
          <ul>
            <li>Memória RAM</li>
            <li>SSD e HD</li>
            <li>Teclado e mouse</li>
            <li>Ventoinhas</li>
            <li>Gabinete</li>
          </ul>
          <p>Memórias e unidades de armazenamento dependem da compatibilidade técnica.</p>
        </article>

        <article class="reuse-card" data-category="televisao">
          <h3>📺 Televisores</h3>
          <ul>
            <li>Alto-falantes</li>
            <li>Suportes</li>
            <li>Cabos</li>
            <li>Conectores</li>
            <li>Algumas placas eletrônicas</li>
          </ul>
          <p>Placas e componentes internos devem ser avaliados por profissionais.</p>
        </article>

        <article class="reuse-card" data-category="outros">
          <h3>🖨️ Impressoras</h3>
          <ul>
            <li>Motores</li>
            <li>Engrenagens</li>
            <li>Cabos</li>
            <li>Estrutura externa</li>
            <li>Algumas placas</li>
          </ul>
          <p>O reaproveitamento depende do modelo e do estado das peças.</p>
        </article>

        <article class="reuse-card" data-category="outros">
          <h3>🎮 Videogames</h3>
          <ul>
            <li>Botões</li>
            <li>Controles</li>
            <li>Cabos</li>
            <li>Ventoinhas</li>
            <li>Carcaças</li>
          </ul>
          <p>Alguns acessórios podem ser usados em outros equipamentos compatíveis.</p>
        </article>

        <article class="reuse-card" data-category="outros">
          <h3>🎧 Fones e caixas de som</h3>
          <ul>
            <li>Alto-falantes</li>
            <li>Cabos</li>
            <li>Conectores</li>
            <li>Botões</li>
            <li>Carcaças</li>
          </ul>
          <p>O funcionamento e a compatibilidade precisam ser verificados.</p>
        </article>

      </div>

      <div class="warning">
        <strong>⚠ Atenção:</strong>
        não tente desmontar baterias, fontes ou componentes internos sem
        orientação adequada. Peças danificadas devem ser encaminhadas a
        profissionais ou pontos de coleta especializados.
      </div>
    </section>

    <!-- DESCARTE -->
    <section class="section dark-section" id="descarte">
      <div class="section-heading">
        <span>FAÇA A SUA PARTE</span>
        <h2>Como descartar corretamente?</h2>
      </div>

      <div class="steps">
        <article>
          <span>01</span>
          <h3>Separe</h3>
          <p>Não misture eletrônicos com o lixo doméstico comum.</p>
        </article>

        <article>
          <span>02</span>
          <h3>Procure um ponto de coleta</h3>
          <p>Encontre locais especializados em receber resíduos eletrônicos.</p>
        </article>

        <article>
          <span>03</span>
          <h3>Entregue o material</h3>
          <p>Leve o equipamento ao local de recebimento adequado.</p>
        </article>

        <article>
          <span>04</span>
          <h3>Reutilize quando possível</h3>
          <p>Se o aparelho ainda funcionar, considere consertar ou doar.</p>
        </article>
      </div>

      <a class="btn" href="https://sinir.gov.br/" target="_blank" rel="noopener">
        Consultar informações sobre resíduos
      </a>
    </section>

    <!-- CALCULADORA -->
    <section class="section" id="calculadora">
      <div class="section-heading">
        <span>DESCUBRA</span>
        <h2>Calculadora de resíduos</h2>
      </div>

      <p class="section-description">
        Informe quantos aparelhos eletrônicos você pretende encaminhar
        para descarte ou reciclagem.
      </p>

      <div class="calculator">
        <label for="deviceCount">Quantidade de aparelhos:</label>
        <input type="number" id="deviceCount" min="0" max="10000" value="1">
        <button class="btn" id="calculateButton">Calcular</button>
        <p id="calculatorResult" role="status" aria-live="polite">
          Informe a quantidade de aparelhos.
        </p>
      </div>
    </section>

    <!-- DESAFIOS -->
    <section class="section dark-section" id="desafios">
      <div class="section-heading">
        <span>MUDE SEUS HÁBITOS</span>
        <h2>Desafios sustentáveis</h2>
      </div>

      <p class="section-description">
        Marque as atitudes que você já realizou.
      </p>

      <div class="missions">
        <label><input type="checkbox" class="mission"> Separei eletrônicos sem uso.</label>
        <label><input type="checkbox" class="mission"> Pesquisei um ponto de coleta.</label>
        <label><input type="checkbox" class="mission"> Evitei descartar uma peça no lixo comum.</label>
        <label><input type="checkbox" class="mission"> Conversei com alguém sobre lixo eletrônico.</label>
      </div>

      <p id="missionProgress">0 de 4 desafios concluídos.</p>
      <div class="progress-track">
        <div id="missionBar"></div>
      </div>
      <p id="missionFeedback" aria-live="polite"></p>
    </section>

    <!-- QUIZ -->
    <section class="section" id="quiz">
      <div class="section-heading">
        <span>TESTE SEUS CONHECIMENTOS</span>
        <h2>Quiz E-WASTE</h2>
      </div>

      <div class="quiz-box">
        <p id="questionCounter">Pergunta 1 de 5</p>
        <div class="progress-track">
          <div id="quizProgress"></div>
        </div>

        <h3 id="questionText">Carregando pergunta...</h3>
        <div id="answerOptions" class="answer-options"></div>
        <p id="quizFeedback" role="status" aria-live="polite"></p>

        <button class="btn" id="nextQuestion" disabled>Próxima pergunta</button>

        <div id="quizFinal" hidden>
          <h3>Quiz finalizado!</h3>
          <p id="finalScore"></p>
          <p id="bestScore"></p>
          <button class="btn" id="restartQuiz">Tentar novamente</button>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section" id="faq">
      <div class="section-heading">
        <span>DÚVIDAS FREQUENTES</span>
        <h2>Perguntas e respostas</h2>
      </div>

      <details>
        <summary>Posso jogar pilhas no lixo comum?</summary>
        <p>Não. Pilhas e baterias devem ser entregues em pontos de coleta apropriados.</p>
      </details>

      <details>
        <summary>Todo eletrônico pode ser reciclado?</summary>
        <p>Muitos podem ser reciclados, mas o processo depende dos materiais e da estrutura do equipamento.</p>
      </details>

      <details>
        <summary>O que fazer com um aparelho que ainda funciona?</summary>
        <p>Você pode continuar usando, consertar ou doar, desde que esteja em boas condições.</p>
      </details>

      <details>
        <summary>Por que reutilizar peças?</summary>
        <p>Porque isso pode reduzir o desperdício de materiais e prolongar a vida útil de componentes.</p>
      </details>
    </section>

  </main>

  <footer class="footer">
    <h2>E-WASTE</h2>
    <p>O futuro é eletrônico. A responsabilidade é de todos.</p>
    <p>Projeto educativo sobre lixo eletrônico e sustentabilidade.</p>
    <p>© <span class="copyright"></span> E-WASTE</p>
  </footer>

  <script src="javas.js"></script>
</body>
</html>

:root {
  --graphite: #202A35;
  --metal: #65717D;
  --green: #00A878;
  --blue: #00B8D9;
  --yellow: #D99A32;
  --white: #F4F7F8;
  --text: #26323D;
  --light: #EAF0F2;
  --font-scale: 1;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  color: var(--text);
  background: var(--white);
  font-size: calc(16px * var(--font-scale));
  line-height: 1.6;
}

button, input {
  font: inherit;
}

button, a {
  -webkit-tap-highlight-color: transparent;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

/* CABEÇALHO */

.header {
  min-height: 75px;
  padding: 15px 8%;
  background: var(--graphite);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  font-size: 1.8rem;
  font-weight: 900;
  letter-spacing: 2px;
}

.logo span {
  color: var(--green);
}

.header nav {
  display: flex;
  gap: 22px;
  align-items: center;
}

.header nav a {
  font-size: 0.9rem;
  transition: color .2s;
}

.header nav a:hover {
  color: var(--blue);
}

.menu-toggle {
  display: none;
  border: 0;
  color: white;
  background: transparent;
  font-size: 1.8rem;
}

/* INÍCIO */

.hero {
  min-height: 540px;
  padding: 80px 8%;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 45px;
  align-items: center;
  background: linear-gradient(120deg, #202A35, #344451);
  color: white;
}

.tag,
.section-heading span {
  color: var(--green);
  font-weight: bold;
  letter-spacing: 2px;
  font-size: .8rem;
}

.hero h1 {
  font-size: clamp(2.2rem, 5vw, 4rem);
  line-height: 1.1;
  margin: 20px 0;
}

.hero h1 span {
  color: var(--green);
}

.hero p {
  max-width: 550px;
  color: #d5e0e4;
  margin-bottom: 28px;
}

.hero-image {
  min-height: 300px;
  border: 1px solid #536574;
  border-radius: 25px;
  background: linear-gradient(145deg, #263b47, #15232e);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
}

.electronic-icon {
  font-size: 8rem;
  color: var(--green);
  line-height: 1.3;
}

.hero-image h2 {
  font-size: 1.2rem;
  margin: 15px 0;
}

/* BOTÕES */

.btn {
  display: inline-block;
  border: none;
  border-radius: 8px;
  padding: 13px 22px;
  background: var(--green);
  color: white;
  font-weight: bold;
  transition: .2s;
}

.btn:hover {
  background: #008c64;
  transform: translateY(-2px);
}

button:focus-visible,
a:focus-visible,
input:focus-visible,
summary:focus-visible {
  outline: 3px solid var(--yellow);
  outline-offset: 4px;
}

/* ACESSIBILIDADE */

.accessibility {
  padding: 28px 8%;
  background: #dce7e9;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.accessibility h2 {
  color: var(--graphite);
}

.access-buttons,
.voice-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.access-buttons button,
.voice-controls button {
  padding: 10px 15px;
  border: 1px solid var(--metal);
  border-radius: 7px;
  background: white;
  color: var(--graphite);
  font-weight: bold;
}

.access-buttons button:hover,
.voice-controls button:hover {
  background: var(--graphite);
  color: white;
}

#voiceStatus {
  font-size: .9rem;
  font-weight: bold;
}

/* SEÇÕES */

.section {
  padding: 85px 8%;
}

.section-heading {
  text-align: center;
  margin-bottom: 35px;
}

.section-heading h2 {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  color: var(--graphite);
  margin-top: 8px;
}

.section-description {
  max-width: 800px;
  margin: 0 auto 35px;
  text-align: center;
  color: #586570;
}

/* CARTÕES */

.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.card {
  background: white;
  padding: 28px 22px;
  border-radius: 13px;
  border: 1px solid #dce3e6;
  box-shadow: 0 5px 20px #182b3510;
  transition: .2s;
}

.card:hover {
  transform: translateY(-5px);
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 12px;
}

.card h3 {
  color: var(--graphite);
  margin-bottom: 8px;
}

/* IMPACTOS */

.dark-section {
  background: var(--graphite);
  color: white;
}

.dark-section .section-heading h2 {
  color: white;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.impact-grid article {
  padding: 25px;
  background: #2d3b48;
  border-radius: 12px;
}

.impact-grid article span {
  font-size: 2.5rem;
}

.impact-grid h3 {
  margin: 12px 0;
  color: var(--blue);
}

/* REUTILIZAÇÃO */

.filter-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
}

.filter-btn {
  border: 1px solid var(--green);
  padding: 10px 18px;
  border-radius: 30px;
  color: var(--graphite);
  background: white;
}

.filter-btn.active,
.filter-btn:hover {
  color: white;
  background: var(--green);
}

.reuse-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.reuse-card {
  background: white;
  border: 1px solid #dce3e6;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 5px 20px #182b3510;
}

.reuse-card h3 {
  margin-bottom: 15px;
  color: var(--graphite);
}

.reuse-card ul {
  padding-left: 22px;
  margin-bottom: 15px;
}

.reuse-card li {
  margin: 5px 0;
}

.reuse-card p {
  color: #596570;
  font-size: .92rem;
}

.reuse-card[hidden] {
  display: none;
}

.warning {
  margin-top: 30px;
  padding: 20px;
  border-left: 5px solid var(--yellow);
  border-radius: 8px;
  background: #fff4df;
  color: #59421d;
}

/* DESCARTE */

.steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 35px;
}

.steps article {
  background: #2d3b48;
  padding: 25px;
  border-radius: 12px;
}

.steps article span {
  font-size: 2rem;
  font-weight: bold;
  color: var(--green);
}

.steps h3 {
  margin: 10px 0;
}

/* CALCULADORA */

.calculator {
  max-width: 500px;
  margin: auto;
  padding: 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 20px #182b3510;
}

.calculator label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}

.calculator input {
  width: 100%;
  padding: 13px;
  border: 1px solid var(--metal);
  border-radius: 7px;
  margin-bottom: 15px;
}

#calculatorResult {
  margin-top: 15px;
  font-weight: bold;
}

/* DESAFIOS */

.missions {
  max-width: 650px;
  margin: auto;
  display: grid;
  gap: 14px;
}

.missions label {
  padding: 15px;
  background: #2d3b48;
  border-radius: 8px;
  cursor: pointer;
}

.missions input {
  margin-right: 10px;
  accent-color: var(--green);
}

#missionProgress,
#missionFeedback {
  text-align: center;
  margin-top: 20px;
}

.progress-track {
  width: 100%;
  height: 12px;
  background: #dce3e6;
  border-radius: 20px;
  overflow: hidden;
  margin: 15px 0;
}

.progress-track div {
  height: 100%;
  width: 0%;
  background: var(--green);
  transition: width .3s;
}

/* QUIZ */

.quiz-box {
  max-width: 650px;
  margin: auto;
  padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 20px #182b3510;
}

.quiz-box h3 {
  margin: 20px 0;
  color: var(--graphite);
}

.answer-options {
  display: grid;
  gap: 12px;
  margin-bottom: 20px;
}

.answer-options button {
  padding: 13px;
  border: 1px solid #cbd5da;
  border-radius: 8px;
  background: #f4f7f8;
  text-align: left;
}

.answer-options button:hover:not(:disabled) {
  border-color: var(--green);
  background: #e4f7f0;
}

.answer-options button:disabled {
  cursor: default;
}

.answer-options button.correct {
  background: #d9f4e8;
  border-color: var(--green);
}

.answer-options button.incorrect {
  background: #ffe7e2;
  border-color: #d65c4b;
}

#quizFeedback {
  min-height: 28px;
  margin-bottom: 15px;
  font-weight: bold;
}

#quizFinal {
  margin-top: 20px;
}

/* FAQ */

details {
  max-width: 800px;
  margin: 12px auto;
  padding: 18px;
  border-radius: 8px;
  background: white;
  border: 1px solid #dce3e6;
}

summary {
  cursor: pointer;
  font-weight: bold;
  color: var(--graphite);
}

details p {
  margin-top: 12px;
}

/* RODAPÉ */

.footer {
  padding: 40px 8%;
  background: #141d25;
  color: white;
  text-align: center;
}

.footer h2 {
  color: var(--green);
  margin-bottom: 10px;
}

/* ADAPTABILIDADE VISUAL */

body.high-contrast {
  --white: #000;
  --text: #fff;
  --light: #000;
  background: #000;
  color: #fff;
}

body.high-contrast .section,
body.high-contrast .accessibility {
  background: #000;
  color: #fff;
}

body.high-contrast .section-heading h2,
body.high-contrast .card h3,
body.high-contrast .reuse-card h3,
body.high-contrast .quiz-box h3,
body.high-contrast summary {
  color: #ff0;
}

body.high-contrast .card,
body.high-contrast .reuse-card,
body.high-contrast .quiz-box,
body.high-contrast details,
body.high-contrast .calculator {
  background: #111;
  color: #fff;
  border: 2px solid #ff0;
}

body.high-contrast .card p,
body.high-contrast .reuse-card p,
body.high-contrast .section-description {
  color: #fff;
}

body.high-contrast .dark-section,
body.high-contrast .header,
body.high-contrast .footer {
  background: #000;
  border-color: #ff0;
}

body.high-contrast .dark-section h2,
body.high-contrast .dark-section h3,
body.high-contrast .dark-section p {
  color: #fff;
}

body.high-contrast .hero {
  background: #000;
  border-bottom: 2px solid #ff0;
}

body.high-contrast button,
body.high-contrast a.btn {
  background: #ff0;
  color: #000;
  border: 2px solid #fff;
}

body.reading-mode {
  line-height: 2;
  letter-spacing: .04em;
}

body.reading-mode .section {
  max-width: 1100px;
  margin: auto;
}

body.reading-mode .hero-image {
  display: none;
}

body.reading-mode .hero {
  grid-template-columns: 1fr;
  min-height: auto;
}

/* RESPONSIVIDADE */

@media (max-width: 1000px) {
  .cards,
  .impact-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .reuse-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .steps {
    grid-template-columns: repeat(2, 1fr);
  }

  .header nav {
    gap: 12px;
  }
}

@media (max-width: 700px) {
  .header {
    flex-wrap: wrap;
  }

  .menu-toggle {
    display: block;
  }

  .header nav {
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px 0;
  }

  .header nav.open {
    display: flex;
  }

  .hero {
    grid-template-columns: 1fr;
    padding: 60px 7%;
  }

  .hero-image {
    min-height: 220px;
  }

  .cards,
  .impact-grid,
  .reuse-grid,
  .steps {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 60px 7%;
  }

  .accessibility {
    padding: 25px 7%;
  }

  .quiz-box {
    padding: 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: .01ms !important;
    animation-duration: .01ms !important;
  }
}

/* MENU RESPONSIVO */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const aberto = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", aberto);
  menuToggle.setAttribute(
    "aria-label",
    aberto ? "Fechar menu" : "Abrir menu"
  );
});

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});


/* FILTRO DE COMPONENTES REUTILIZÁVEIS */

const filterButtons = document.querySelectorAll(".filter-btn");
const reuseCards = document.querySelectorAll(".reuse-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filtro = button.dataset.filter;

    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    reuseCards.forEach(card => {
      const categoria = card.dataset.category;
      card.hidden = filtro !== "todos" && categoria !== filtro;
    });
  });
});


/* CALCULADORA */

const deviceCount = document.getElementById("deviceCount");
const calculateButton = document.getElementById("calculateButton");
const calculatorResult = document.getElementById("calculatorResult");

calculateButton.addEventListener("click", () => {
  const quantidade = Number(deviceCount.value);

  if (
    deviceCount.value.trim() === "" ||
    !Number.isInteger(quantidade) ||
    quantidade < 0 ||
    quantidade > 10000
  ) {
    calculatorResult.textContent =
      "Digite um número inteiro entre 0 e 10.000.";
    return;
  }

  calculatorResult.textContent =
    `Você informou ${quantidade} aparelho(s). ` +
    "Procure um ponto de coleta adequado para encaminhá-los.";
});


/* DESAFIOS SUSTENTÁVEIS */

const missions = document.querySelectorAll(".mission");
const missionProgress = document.getElementById("missionProgress");
const missionBar = document.getElementById("missionBar");
const missionFeedback = document.getElementById("missionFeedback");

const savedMissions = JSON.parse(
  localStorage.getItem("ewaste-missions") || "[]"
);

missions.forEach((mission, index) => {
  mission.checked = savedMissions[index] === true;

  mission.addEventListener("change", updateMissions);
});

function updateMissions() {
  const concluidas = [];

  missions.forEach((mission, index) => {
    concluidas[index] = mission.checked;
  });

  localStorage.setItem(
    "ewaste-missions",
    JSON.stringify(concluidas)
  );

  const total = [...missions].filter(m => m.checked).length;
  const porcentagem = (total / missions.length) * 100;

  missionProgress.textContent =
    `${total} de ${missions.length} desafios concluídos.`;

  missionBar.style.width = `${porcentagem}%`;

  missionFeedback.textContent =
    total === missions.length
      ? "Parabéns! Você concluiu todos os desafios!"
      : "Continue praticando atitudes sustentáveis!";
}

updateMissions();


/* QUIZ */

const questions = [
  {
    question: "O que significa lixo eletrônico?",
    options: [
      "Restos de alimentos",
      "Equipamentos eletrônicos descartados",
      "Papel e papelão",
      "Resíduos de jardinagem"
    ],
    answer: 1,
    explanation: "Lixo eletrônico é formado por equipamentos elétricos e eletrônicos descartados."
  },
  {
    question: "Onde devemos descartar pilhas e baterias?",
    options: [
      "No lixo comum",
      "Em rios",
      "Em pontos de coleta apropriados",
      "Em terrenos vazios"
    ],
    answer: 2,
    explanation: "Pilhas e baterias precisam de coleta especializada."
  },
  {
    question: "Qual é uma vantagem da reutilização?",
    options: [
      "Aumentar o desperdício",
      "Reduzir o aproveitamento de materiais",
      "Prolongar a vida útil de componentes",
      "Produzir mais lixo"
    ],
    answer: 2,
    explanation: "Reutilizar peças pode reduzir o desperdício e prolongar sua vida útil."
  },
  {
    question: "Qual destes é um exemplo de lixo eletrônico?",
    options: [
      "Casca de banana",
      "Celular antigo",
      "Folha de árvore",
      "Restos de comida"
    ],
    answer: 1,
    explanation: "Celulares são equipamentos eletrônicos."
  },
  {
    question: "O que fazer com um aparelho que ainda funciona?",
    options: [
      "Jogar no lixo comum",
      "Quebrar o aparelho",
      "Considerar consertar ou doar",
      "Abandonar na rua"
    ],
    answer: 2,
    explanation: "Consertar ou doar pode prolongar a vida útil do equipamento."
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionCounter = document.getElementById("questionCounter");
const questionText = document.getElementById("questionText");
const answerOptions = document.getElementById("answerOptions");
const quizFeedback = document.getElementById("quizFeedback");
const nextQuestion = document.getElementById("nextQuestion");
const quizProgress = document.getElementById("quizProgress");
const quizFinal = document.getElementById("quizFinal");
const finalScore = document.getElementById("finalScore");
const bestScore = document.getElementById("bestScore");
const restartQuiz = document.getElementById("restartQuiz");

function showQuestion() {
  answered = false;

  const question = questions[currentQuestion];

  questionCounter.textContent =
    `Pergunta ${currentQuestion + 1} de ${questions.length}`;

  questionText.textContent = question.question;
  answerOptions.innerHTML = "";
  quizFeedback.textContent = "";
  nextQuestion.disabled = true;
  nextQuestion.hidden = false;
  quizFinal.hidden = true;

  quizProgress.style.width =
    `${(currentQuestion / questions.length) * 100}%`;

  question.options.forEach((option, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = option;

    button.addEventListener("click", () => checkAnswer(index));

    answerOptions.appendChild(button);
  });
}

function checkAnswer(selected) {
  if (answered) return;

  answered = true;

  const question = questions[currentQuestion];
  const buttons = answerOptions.querySelectorAll("button");

  buttons.forEach((button, index) => {
    button.disabled = true;

    if (index === question.answer) {
      button.classList.add("correct");
    }

    if (index === selected && selected !== question.answer) {
      button.classList.add("incorrect");
    }
  });

  if (selected === question.answer) {
    score++;
    quizFeedback.textContent = "Correto! " + question.explanation;
  } else {
    quizFeedback.textContent = "Não foi dessa vez. " + question.explanation;
  }

  nextQuestion.disabled = false;
}

nextQuestion.addEventListener("click", () => {
  if (!answered) return;

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
});

function finishQuiz() {
  questionCounter.textContent = "Quiz concluído!";
  questionText.textContent = "Você terminou o desafio.";
  answerOptions.innerHTML = "";
  quizFeedback.textContent = "";
  nextQuestion.hidden = true;
  quizFinal.hidden = false;
  quizProgress.style.width = "100%";

  finalScore.textContent =
    `Você acertou ${score} de ${questions.length} perguntas.`;

  const recordeSalvo = Number(
    localStorage.getItem("ewaste-best-score") || 0
  );

  const recorde = Math.max(recordeSalvo, score);

  localStorage.setItem("ewaste-best-score", recorde);

  bestScore.textContent = `Seu recorde: ${recorde} acertos.`;
}

restartQuiz.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  showQuestion();
});

showQuestion();


/* ADAPTABILIDADE VISUAL */

let fontScale = 1;

function applyFontScale() {
  document.documentElement.style.setProperty(
    "--font-scale",
    fontScale
  );
}

document.getElementById("increaseFont").addEventListener("click", () => {
  fontScale = Math.min(1.5, fontScale + 0.1);
  applyFontScale();
});

document.getElementById("decreaseFont").addEventListener("click", () => {
  fontScale = Math.max(0.8, fontScale - 0.1);
  applyFontScale();
});

document.getElementById("contrastButton").addEventListener("click", () => {
  document.body.classList.toggle("high-contrast");
});

document.getElementById("readingMode").addEventListener("click", () => {
  document.body.classList.toggle("reading-mode");
});

document.getElementById("resetAccess").addEventListener("click", () => {
  fontScale = 1;
  applyFontScale();

  document.body.classList.remove("high-contrast", "reading-mode");
});


/* LEITURA POR VOZ */

const voiceStatus = document.getElementById("voiceStatus");

function speakPage() {
  if (!("speechSynthesis" in window)) {
    voiceStatus.textContent =
      "Seu navegador não oferece suporte à leitura por voz.";
    return;
  }

  window.speechSynthesis.cancel();

  const mainContent = document.getElementById("conteudo");
  const texto = mainContent.innerText;

  const speech = new SpeechSynthesisUtterance(texto);

  speech.lang = "pt-BR";
  speech.rate = 1;
  speech.pitch = 1;

  speech.onstart = () => {
    voiceStatus.textContent = "Lendo o conteúdo da página...";
  };

  speech.onend = () => {
    voiceStatus.textContent = "Leitura finalizada.";
  };

  speech.onerror = () => {
    voiceStatus.textContent = "Não foi possível realizar a leitura.";
  };

  window.speechSynthesis.speak(speech);
}

document.getElementById("readPage").addEventListener("click", speakPage);

document.getElementById("pauseReading").addEventListener("click", () => {
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.pause();
    voiceStatus.textContent = "Leitura pausada.";
  }
});

document.getElementById("resumeReading").addEventListener("click", () => {
  if (window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
    voiceStatus.textContent = "Leitura retomada.";
  }
});

document.getElementById("stopReading").addEventListener("click", () => {
  window.speechSynthesis.cancel();
  voiceStatus.textContent = "Leitura interrompida.";
});


/* COMANDOS DE VOZ */

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const voiceCommandButton = document.getElementById("voiceCommand");

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();

  recognition.lang = "pt-BR";
  recognition.continuous = false;
  recognition.interimResults = false;

  voiceCommandButton.addEventListener("click", () => {
    try {
      recognition.start();
      voiceStatus.textContent = "Escutando... Diga uma seção do site.";
    } catch (error) {
      voiceStatus.textContent =
        "O reconhecimento já está ativo ou não pôde iniciar.";
    }
  });

  recognition.onresult = event => {
    const comando = event.results[0][0].transcript
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    voiceStatus.textContent = `Comando identificado: ${comando}`;

    const comandos = [
      { palavras: ["inicio", "comeco"], destino: "inicio" },
      { palavras: ["sobre", "lixo eletronico"], destino: "sobre" },
      { palavras: ["impactos", "consequencias"], destino: "impactos" },
      { palavras: ["reutilizacao", "pecas"], destino: "reutilizacao" },
      { palavras: ["descarte", "reciclagem"], destino: "descarte" },
      { palavras: ["calculadora", "calcular"], destino: "calculadora" },
      { palavras: ["desafios"], destino: "desafios" },
      { palavras: ["quiz", "perguntas"], destino: "quiz" },
      { palavras: ["perguntas frequentes", "duvidas"], destino: "faq" }
    ];

    const encontrado = comandos.find(grupo =>
      grupo.palavras.some(palavra => comando.includes(palavra))
    );

    if (encontrado) {
      document.getElementById(encontrado.destino)
        .scrollIntoView({ behavior: "smooth" });

      voiceStatus.textContent =
        `Indo para a seção ${encontrado.destino}.`;
    } else {
      voiceStatus.textContent =
        "Comando não reconhecido. Tente dizer: início, sobre, impactos, reutilização, descarte ou quiz.";
    }
  };

  recognition.onerror = event => {
    voiceStatus.textContent =
      `Erro no reconhecimento de voz: ${event.error}.`;
  };

  recognition.onend = () => {
    // O reconhecimento termina após cada comando.
  };

} else {
  voiceCommandButton.disabled = true;
  voiceCommandButton.textContent = "Comandos de voz indisponíveis";
  voiceStatus.textContent =
    "Seu navegador não oferece reconhecimento de voz. A leitura por voz pode continuar disponível.";
}


/* ANO AUTOMÁTICO */

document.querySelector(".copyright").textContent =
  new Date().getFullYear();
