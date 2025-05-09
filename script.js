let question = document.getElementById("question");
let optionsBody = document.getElementById("optionsBody");
let prevBtn = document.getElementById("prevBtn");
let scoreCount = document.getElementById('scoreCount');
let buttonDiv = document.getElementById('buttonDiv');
let quizBody = document.getElementById('quizBody');

let scoreCountVariable = 0;
document.addEventListener('DOMContentLoaded' , () => {

    let questionsDataArr = [
        {
            eachQuestion : "What is the capital of France?",
            options : [ "Berlin" , "Madrid", "Paris" , "Rome" ] ,
            correctAnswer : "Paris"
        },
        {
            eachQuestion : "Which planet is known as the Red Planet?",
            options : [ "Earth", "Mars", "Venus", "Jupiter" ],
            correctAnswer : "Mars"
        },
        {
            eachQuestion : "Who wrote the play 'Romeo and Juliet'?",
            options : [ "Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen" ],
            correctAnswer : "William Shakespeare"
        },
        {
            eachQuestion : "Which element has the chemical symbol 'O'?",
            options : [ "Gold", "Oxygen", "Osmium", "Ozone" ],
            correctAnswer : "Oxygen"
        },
        {
            eachQuestion : "In what year did World War II end?",
            options : [ "1939", "1942", "1945", "1950" ],
            correctAnswer : "1945"
        },
        {
            eachQuestion : "Which is the largest ocean on Earth?",
            options : [ "Atlantic", "Indian", "Pacific", "Arctic" ],
            correctAnswer : "Pacific"
        },
        {
            eachQuestion : "How many continents are there?",
            options : [ "5", "6", "7", "8" ],
            correctAnswer : "7"
        },
        {
            eachQuestion : "What is the main language spoken in Brazil?",
            options : [ "Spanish", "Portuguese", "English", "French" ],
            correctAnswer : "Portuguese"
        },
        {
            eachQuestion : "What is 15 × 3?",
            options : [ "45", "35", "30", "50" ],
            correctAnswer : "45"
        },
        {
            eachQuestion : "Which animal is known as the ‘King of the Jungle’?",
            options : [ "Tiger", "Elephant", "Lion", "Bear" ],
            correctAnswer : "Lion"
        }
    ];

    let questionNumber = 0;      // question no initillized from zero(0 index of arr,)

    const optionDisplayFunction = () => {        //display options from arrobj
        let count = 0;
        document.querySelectorAll('.option').forEach((option)=>{
            option.textContent = `${questionsDataArr[questionNumber].options[count]}`
            count++

        })
    }

    const arrOfOptionsToVarifyanswer = document.querySelectorAll('.option');

    let optionSelectionFunction = () => {

    for (let i = 0; i < arrOfOptionsToVarifyanswer.length; i++) {
        
        arrOfOptionsToVarifyanswer[i].addEventListener('click',()=>{

            console.log("clicked : " + arrOfOptionsToVarifyanswer[i].innerHTML)    
            if(arrOfOptionsToVarifyanswer[i].textContent==questionsDataArr[questionNumber].correctAnswer){  //if click option is correct answer
                console.log("correct")
                optionsBody.style.pointerEvents = "none";
                arrOfOptionsToVarifyanswer[i].style.backgroundColor = "#116b0e";
                arrOfOptionsToVarifyanswer[i].style.color = "white";

                if(scoreCountVariable<10){                 //To ensure that maxscore is 10 , not exceeding 10
                    scoreCountVariable = scoreCountVariable + 1; 
                    scoreCountFunction()
                }
            }

            else{
                console.log("incorrect")
                optionsBody.style.pointerEvents = "none"
                arrOfOptionsToVarifyanswer[i].style.backgroundColor = "#851414"
                arrOfOptionsToVarifyanswer[i].style.color = "white"

                arrOfOptionsToVarifyanswer.forEach((element)=>{      //Acting as 'where' both equal, -set color to green
                    if(element.textContent == questionsDataArr[questionNumber].correctAnswer){
                        element.style.backgroundColor = "#116b0e";
                        element.style.color = "white";
                    }
                }) 
                
            }
            buttonDiv.innerHTML= `
                <button id="nextBtn" class="next-button bg-blue-800 w-[170px] h-[35px] sm:h-[37px] p-2 flex justify-center items-center text-[1rem] sm:text-[1.1rem] cursor-pointer text-white rounded-[5px] hover:bg-blue-900 m-1">
                    Next Question
                </button>`
                let nextBtn = document.getElementById('nextBtn');
                nextBtn.addEventListener('click',nextQuestionFunction)


        })

    }
}
    const questionDisplayFunction = () => {
        // console.log(questionNumber)
        question.textContent = `${questionsDataArr[questionNumber].eachQuestion}`  //takes question from arrofquestion and display
    }

    const nextQuestionFunction = () => {
        buttonDiv.innerHTML = "";
        if(questionNumber<9){
        optionsBody.style.pointerEvents = "auto"                // to ensure it does not work on 9 index,else it would be incremented to 10
        arrOfOptionsToVarifyanswer.forEach((option)=>{          //(out of bound)
            option.style.backgroundColor = "#eff6ff "
            option.style.color = "black"
            console.log(option.classList.contains('hover:bg-blue-100'))
        })
            questionNumber = questionNumber + 1 ;
            questionDisplayFunction()
            optionDisplayFunction()
            console.log("question number " + questionNumber)
        }
        else{
            console.log("No more questions")
            endingMesaageFunction();
        }
    }

    const previosQuestionFunction = () => {
        optionsBody.style.pointerEvents = "auto"

        if(questionNumber>0){                             //this if-else ensure that color change does not effect when we are at first  
        arrOfOptionsToVarifyanswer.forEach((option)=>{     //question (0 index of arr)
            option.style.backgroundColor = "#eff6ff "
            option.style.color = "black"
        })                            
            questionNumber = questionNumber - 1 ;         //here it would reduce index by 1 to move a step back of array, this only works
            questionDisplayFunction()                     //if index is greater than 0 , because else would go in negative
            optionDisplayFunction()
            console.log("question number " + questionNumber)
        }
        else{
            console.log("No previous questions")
        }
    }

    let scoreCountFunction = () => {
            scoreCount.innerHTML = `${scoreCountVariable}/10`
    }

    const endingMesaageFunction = () =>{
        question.innerHTML = "";
        buttonDiv.innerHTML = `
            <button id="playAgain" class="next-button bg-blue-800 w-[170px] h-[35px] sm:h-[37px] p-2 flex justify-center items-center text-[1rem] sm:text-[1.1rem] cursor-pointer text-white rounded-[5px] hover:bg-blue-900 m-1">
                Play Again
            </button>`
            optionsBody.classList.add('hidden')
            question.classList.add('justify-center')
            question.classList.remove('text-[1.3rem]')
            question.classList.add('text-[2.1rem]')
            question.classList.add('mt-[100px]')
            question.innerHTML = `Result = ${scoreCountVariable}/10`;

            let playAgain = document.getElementById('playAgain');       //creating playagain button which 'd reset functions and variables 
            playAgain.addEventListener('click', () =>{
                question.innerHTML = "";
                question.classList.remove('justify-center')
                question.classList.remove('text-[2.1rem]')
                question.classList.add('text-[1.3rem]')
                question.classList.remove('mt-[100px]')
                scoreCountVariable  = 0;
                scoreCountFunction();
                questionNumber = 0; 
                buttonDiv.innerHTML = "";
                optionsBody.classList.remove('hidden')

                if(questionNumber<9){
                    optionsBody.style.pointerEvents = "auto"                // to ensure it does not work on 9 index,else it would be incremented to 10
                    arrOfOptionsToVarifyanswer.forEach((option)=>{          //(out of bound)
                        option.style.backgroundColor = "#eff6ff "
                        option.style.color = "black";
                    })
                }
                questionDisplayFunction();
                optionDisplayFunction();

            })
    }

    questionDisplayFunction()
    optionDisplayFunction()
    optionSelectionFunction()

})