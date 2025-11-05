

const pergunta = document.getElementById("pergunta").innerHTML = "Você quer jogar?"

const querJogar = document.getElementById("resposta");



if (querJogar === "sim" || "s") {
    document.getElementById("historia").innerHTML = "Você acorda em um lugar escuro e frio. O chão é de pedra úmida, e há apenas duas passagens à sua frente. Um eco distante sugere que algo se move nas sombras...";

    const explorarLabirinto = prompt("Você quer explorar o labirinto misterioso? ").toLowerCase()

    if (explorarLabirinto === "sim" || "s") {

        console.log("Você segura uma tocha enfraquecida e segue em frente. Há dois caminhos: um à esquerda, iluminado por uma luz fraca, e outro à direita, mergulhado em completa escuridão.");

        const esquerdaOuDireita = prompt("Você quer ir pra esquerda ou para a direita? ").toLowerCase();

        if (esquerdaOuDireita === "esquerda") 
            {
            console.log("Você caminha até uma ponte antiga sobre um rio subterrâneo.A madeira range a cada passo — parece instável.Do outro lado, há algo brilhando…");
            
            const atravessaPonte = prompt("Você atravessa a ponte? ").toLowerCase()

            if (atravessaPonte === "sim" || "s")
                 {
                console.log("A ponte cede e você cai nas águas geladas. Quando tenta nadar, algo puxa seu pé para baixo... Fim da jornada.")
            } else if (atravessaPonte === "não" || "nao" || "n") {
                console.log("Você decide não arriscar. Em vez disso, encontra uma trilha lateral que leva até a saída secreta do labirinto. Parabéns, você sobreviveu!")
            } else {
                console.log("Resposta inválida!");
            }


        } else if(esquerdaOuDireita === "direita" ){
            console.log("Você sente o chão desaparecer sob seus pés — era um penhasco! O som da queda ecoa por todo o labirinto... Fim.")
        } else {
                console.log("Resposta inválida!");
            }

    } else if (explorarLabirinto === "não" || "nao" || "n"){
        console.log("Você se vira para sair, mas a porta atrás de você desapareceu. Parece que o labirinto escolheu você...");
    } else {
                console.log("Resposta inválida!");
            }
} else if (querJogar === "não" || "nao" || "n"){
    console.log("Ok, talvez na próxima!")
}