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