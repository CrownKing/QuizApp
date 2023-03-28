const quizData=[
    {
        pergunta:'Qual o jogo mais vendido do mundo',
        a:'Minecraft',
        b:'Tetris',
        c:'GTA V',
        d:'Fortnite',
        correta:'b'
    },
    {
        pergunta:'Qual o maior planeta do sistema solar',
        a:'Venus',
        b:'Saturno',
        c:'Jupter',
        d:'Uranus',
        correta:'c'
    },
    {
        pergunta:'Qual a lingua mais falada no mundo',
        a:'Inlges',
        b:'Portugues',
        c:'Frances',
        d:'Alemao',
        correta:a,
    },
    {
        pergunta:'Quem é o maior responsavel por produzir Oxigenio para o mundo',
        a:'Floresta amazonica',
        b:'Algas marinhas',
        c:'Caatinga',
        d:'Manguezais',
        correta:'b'
    }
]
const pergEl = document.getElementById('pergunta')
const answersEls = document.querySelectorAll(".resposta");

const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let pgAtualQuiz = 0;
loadQuiz();

function loadQuiz(){
    const pgAtualQuizData = quizData[pgAtualQuiz];
    pergEl.innerText = pgAtualQuizData.pergunta;
    a_text.innerText = pgAtualQuizData.a;
    b_text.innerText = pgAtualQuizData.b;
    c_text.innerText = pgAtualQuizData.c;
    d_text.innerText = pgAtualQuizData.d;

}   
function getSelected(){

    let answer = undefined;
    answersEls.forEach((answersEl) => {
        if(answersEl.checked){
            answer = answersEl.id
        }
    });
    return answer;
}
function deselectAnswer(){
    answersEls.forEach((answersEl)=>{
        answersEl.checked = false;
    })
}
submitBtn.addEventListener("click",()=>{
    const resposta = getSelected();
    if (resposta && resposta === quizData[pgAtualQuiz].correct){
        score++
    }
    pgAtualQuiz++;
    if(pgAtualQuiz<quizData.length){
        loadQuiz();
    } else{
        quizData.innerHTML = `<h2> Acertos: ${score}/${quizData.length}</h2>`
        alert("Parabens não fui capaz de te proporcionar um desafio.")
    }
})