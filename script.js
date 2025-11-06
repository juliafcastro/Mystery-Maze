function pegarValor() {
  let input = document.getElementById("resposta").value.toLowerCase();

  executarFase(input);
  input = document.getElementById("resposta").value = "";
}

//pergunta inicial
let querJogar = (document.getElementById("pergunta").innerHTML =
  "Você quer jogar?");

//variavel de fases
let fase = 1;

//função pra executar as fases
function executarFase(input) {
  if (fase === 1) {
    if (input === "sim") {
      document.getElementById("historia").innerHTML =
        "Você acorda em um lugar escuro e frio. O chão é de pedra úmida, e há apenas duas passagens à sua frente. Um eco distante sugere que algo se move nas sombras...";

      document.getElementById("pergunta").innerHTML =
        "Você quer explorar o labirinto misterioso?";
    } else if (input === "não") {
      document.getElementById("pergunta").innerHTML = "";
      document.getElementById("historia").innerHTML = "Ok, talvez na próxima!";
    } else {
      document.getElementById("historia").innerHTML = "Resposta inválida.";
    }

    fase = 2;
  } else if (fase === 2) {
    if (input === "sim") {
      document.getElementById("historia").innerHTML =
        "Você segura uma tocha enfraquecida e segue em frente. Há dois caminhos: um à esquerda, iluminado por uma luz fraca, e outro à direita, mergulhado em completa escuridão.";

      document.getElementById("pergunta").innerHTML =
        "Você quer ir pra esquerda ou para a direita? ";
    } else if (input === "não") {
      document.getElementById("pergunta").innerHTML = "";
      document.getElementById("historia").innerHTML =
        "Você se vira para sair, mas a porta atrás de você desapareceu. Parece que o labirinto escolheu você...";
    } else {
      document.getElementById("historia").innerHTML = "Resposta inválida.";
    }

    fase = 3;
  } else if (fase === 3) {
    if (input === "esquerda") {
      document.getElementById("historia").innerHTML =
        "Você caminha até uma ponte antiga sobre um rio subterrâneo.A madeira range a cada passo — parece instável. Do outro lado, há algo brilhando…";

      document.getElementById("pergunta").innerHTML = "Você atravessa a ponte?";
    } else if (input === "direita") {
      document.getElementById("pergunta").innerHTML = "";
      document.getElementById("historia").innerHTML =
        "Você sente o chão desaparecer sob seus pés — era um penhasco! O som da queda ecoa por todo o labirinto... Fim.";
    } else {
      document.getElementById("historia").innerHTML = "Resposta inválida.";
    }
    fase = 4;
  } else if (fase === 4) {
    if (input === "sim") {
      document.getElementById("historia").innerHTML =
        "A ponte cede e você cai nas águas geladas. Quando tenta nadar, algo puxa seu pé para baixo... Fim da jornada.";
    } else if (input === "direita") {
      document.getElementById("pergunta").innerHTML = "";
      document.getElementById("historia").innerHTML =
        "Você decide não arriscar. Em vez disso, encontra uma trilha lateral que leva até a saída secreta do labirinto. Parabéns, você sobreviveu!";
    } else {
      document.getElementById("historia").innerHTML = "Resposta inválida.";
    }
  }
}
