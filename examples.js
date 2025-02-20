// Promises

// let promise = fetch(url);

// States of a Promise
// 1. pending --> waiting for data from api
// 2. fulfilled --> data has been received from api
// 3. rejected --> some error has happened

// then is a function that receives a function be executed when it has been fulfilled
// catch receives a function be exectued if and when it has been fulfilled

// then() and or catch()

let wordnikAPI = "https://picsum.photos/200";
let giphyAPI = "https://picsum.photos/200";


// // let promise = fetch(wordnikAPI);
// // promise.then(gotData);
// // promise.catch(gotErr);

            // data.forEach(post => {
            //     listEl.insertAdjacentHTML('beforeend', `<li>${post.title}</li>`);
            // });
                // const listEl = document.querySelector('ul');

function setup() {
    // noCanvas();
    fetch(wordnikAPI)
        .then(response => {
            return response.json();
        })
        .then(json => {
            createP(json.word);
            return fetch(giphyAPI + json.word);
        })    
        .then(response => {
            return response.json();
        })
        .then(json => {
            createImageBitmap(json.data[0].images['fixed_height_small'].url)
        })
        .catch(err => console.log(err));
}

setup();

function setup() {
    wordGIF().
    then(results => {
        console.log("Hello");
        createImageBitmap(results.img);
    }).
    catch(err => console.error(err));
}

// Example of above function using async and await
async function wordGIF() {
    let response2 = await fetch(giphyAPI);
    let json2 = await response2.json();
    let img_url = json2.data[0].url;
    return {
        img: img_url
    }
}

setup();


// json => createP(json.word))  --> Shorthand for below function

// function(json) {
//     createP(json.word);
// }

// function setup() {
//     delayES8(2000)
//         .then(() => console.log('hello'))
//         .catch((err) => console.error(err));
// }

// // this function returns a promise
// async function delayES8() {

//     await delay(time);
//     return;
// }

// function delay(time) {
//     return new Promise((resolve, reject) =>  {
//         if (isNaN(time)) {
//             reject(new Error('delay needs a number'));
//         } else {
//             setTimeout(resolve, time);
//         }    
//     });    
// }

// function sayHello() {
//     console.log('hello');
// }

// setup();