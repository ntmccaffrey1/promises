const cardsAPI = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";
const baseURL = "https://deckofcardsapi.com/api/deck";

// Part 1
// function part1() {
//     fetch(cardsAPI)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data.cards[0].value + " of " +  data.cards[0].suit);
//         })
//         .catch(err => console.log(err));
// }

// part1();

// // Part 1 Using Async and Await
// async function asyncPart1() {
//     try {
//         const cardResponse = await axios.get(`${baseURL}/new/draw/`);
//         console.log(cardResponse.data.cards[0].value + " of " +  cardResponse.data.cards[0].suit);
//     } catch (error) {
//         console.error("Error setting up deck:", error);
//     }
// }

// asyncPart1();


// // Part 2
// function part2() {
//     let deckId;
//     fetch(cardsAPI)
//         .then(response => response.json())
//         .then(data => {
//             deckId = data.deck_id;
//             return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log(deckId);
//             console.log(data.cards[0].value + " of " +  data.cards[0].suit);
//             return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log(deckId);
//             console.log(data.cards[0].value + " of " +  data.cards[0].suit);
//         })
//         .catch(err => console.log(err));
// }

// part2();

// // Part 2 Using Async and Await
// async function asyncPart2() {
//     // let deckId;
//     try {
//         const firstCardResponse = await axios.get(`${baseURL}/new/draw/`);
//         const deckId = firstCardResponse.data.deck_id;

//         const secondCardResponse = await axios.get(`${baseURL}/${deckId}/draw/`);
//         console.log(firstCardResponse.data.cards[0].value + " of " +  firstCardResponse.data.cards[0].suit);
//         console.log(secondCardResponse.data.cards[0].value + " of " +  secondCardResponse.data.cards[0].suit);
//     } catch (error) {
//         console.error("Error setting up deck:", error);
//     }
// }

// asyncPart2();


// // Part 3
// function part3() {
//     const drawCardBtn = document.getElementById("drawCard");
//     const cardContainer = document.querySelector('#cardContainer');
//     const counter = document.getElementById("count");
//     const value = document.getElementById("value");
//     const complete = document.getElementById("completed");
//     let deckId;
//     let count = 0;
//     fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//         .then(response => response.json())
//         .then(data => {
//             deckId = data.deck_id;
//         })
//         .catch(err => console.error("Error setting up deck:", err));

//         drawCardBtn.addEventListener('click', () => {
//             fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`)
//                 .then(response => response.json())
//                 .then(data => {
//                     if (data.remaining === 0) {
//                         drawCardBtn.remove();
//                         complete.innerHTML = `<p>All cards have been drawn!</p>`;
//                     } 
//                     count++;
//                     let cardData = `<div class="img"><img src="${data.cards[0].image}"></div>`;
//                     let counterData = `<div class="counter">Card Count:${count}</div>`
//                     let valueData = `<div class="value">${data.cards[0].value} of ${data.cards[0].suit}</div>`
//                     cardContainer.insertAdjacentHTML('beforeend', cardData);
//                     counter.innerHTML = counterData;
//                     value.innerHTML = valueData;
//                 })
//                 .catch(err => console.error("Error drawing card:", err));
//             })                 
// }

// part3();


// Part 3 Using Async and Await
async function asyncPart3() {
    try {
        const drawCardBtn = document.getElementById("drawCard");
        const cardContainer = document.querySelector('#cardContainer');
        const counter = document.getElementById("count");
        const value = document.getElementById("value");
        const complete = document.getElementById("completed");
        let count = 0;

        const deckResponse = await axios.get(`${baseURL}/new/shuffle/`);
        const deckId = deckResponse.data.deck_id;

        drawCardBtn.addEventListener('click', async () => {
            try {
                const cardResponse = await axios.get(`${baseURL}/${deckId}/draw/`);
                if (cardResponse.data.remaining === 0) {
                    drawCardBtn.remove();
                    complete.innerHTML = `<p>All cards have been drawn!</p>`;
                } 
                count++;
                let cardData = `<div class="img"><img src="${cardResponse.data.cards[0].image}"></div>`;
                let counterData = `<div class="counter">Card Count:${count}</div>`
                let valueData = `<div class="value">${cardResponse.data.cards[0].value} of ${cardResponse.data.cards[0].suit}</div>`
                cardContainer.insertAdjacentHTML('beforeend', cardData);
                counter.innerHTML = counterData;
                value.innerHTML = valueData;
            
            } catch (error) {
                console.error("Error drawing card:", error);
            }
        });
    } catch (error) {
        console.error("Error setting up deck:", error);
    }
}
    
asyncPart3();
          
        