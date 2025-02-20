let numbersAPI = "http://numbersapi.com";
let numbers = [1, 2, 4];
let number = 25;

// Part 1
function part1() {
    fetch(`${numbersAPI}/${number}?json`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err));
    }

part1();

// Part 1 with async and await
async function asyncPart1() {
    try {
      let response = await axios.get(`${numbersAPI}/${number}?json`);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data for part1:", error);
    }
  }

asyncPart1();

// Part 2
function part2() {
    fetch(`${numbersAPI}/${numbers}?json`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err));
    }

part2();

// Part 2 with async and await
async function asyncPart2() {
    try {
      let response = await axios.get(`${numbersAPI}/${numbers}?json`);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data for part1:", error);
    }
  }
asyncPart2();

// Part 3
function fetchNumber(number) {
    fetch(`${numbersAPI}/${number}?json`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const markup = `<li>${data.text}</li>`;
            return document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
        })
        .catch(err => console.log(err));
}

function part3() {
    const displayMore = Array(4).fill(number).map(num => fetchNumber(num));
    Promise.all(displayMore)
        .then(() => console.log('All data fetched'))
        .catch(err => console.error('Error with one or more fetches:', err));
}        

part3();

// Part 3 with async and await
async function fetchNumber(number) {
    try {
        let response = await axios.get(`${numbersAPI}/${number}?json`);
        const markup = `<li>${response.data.text}</li>`;
        document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

async function asyncPart3() {
    try {
        const displayMore = Array(4).fill(number).map(num => fetchNumber(num));
        await Promise.all(displayMore)
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

asyncPart3();