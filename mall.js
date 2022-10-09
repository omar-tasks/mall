let images = document.querySelectorAll('.img');
let form = document.getElementById('form');
let result = document.getElementById('result');
let count = document.getElementById('count');
let imgArray = ['abella', 'adriana', 'alanah', 'alexis', 'angela', 'chanel', 'dani', 'jordi', 'johny', 'natasha', 'nina', 'phonix', 'rome', 'sara', 'zib']
let defaultVotes = 7;
let votesNumber = 0;
let totalseen = 0;
let data = [];

randompic();

// Binding events to Elements.......................
for(let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', voting);
}

count.addEventListener('click', show);
form.addEventListener('submit', choose);

// Choosing how many times the user can vote.
function choose(event) {
    event.preventDefault();
    defaultVotes = event.target.votes.value;
}

// Handling our voting system.
function voting(event) {
    if(defaultVotes <= votesNumber){
        return;
    }

    votesNumber++;


    const source = event.target.src; // http://1.023./images/angela.jpg
    for(let i = 0; i < data.length; i++) {
        if(data[i].src === source) {
            data[i].vote++;
        }
    }

    randompic();
}

// Generating three random images and displaying it on my screen.
function randompic () {
    let repeat = [];
    for(let i = 0; i < images.length; i++) {
        let random = imgArray[Math.floor(Math.random()* 14) + 0];
        
        if (repeat.includes(random)) {

            while(repeat.includes(random))  {
                random = imgArray[ Math.floor(Math.random()* 14) + 0];
            }
            
            repeat.push(random);
        } else {
            repeat.push(random);
        }

        const source = 'http://127.0.0.1:5501/images/' + random + '.jpg'
        images[i].src = source;

        let isExist = false;
        for(let i = 0; i < data.length; i++) {
            if(source === data[i].src) {
                isExist = true;
                data[i].seen++;
            }
        }

        if (!isExist) {
            const obj = new ImageClass(source, 0, random, 1);
            data.push(obj);
        }
    }

    repeat = [];
}

// Our object creator ( functional constructor (class) )
function ImageClass(src, vote, name, seen) {
    this.src = src;
    this.vote = vote;
    this.name = name;
    this.seen = seen;
}

function show (event) {

    for (let i = 0; i < data.length; i++){
        let out = document.createElement('h4');
        let outTwo = document.createElement('h1');
        let outThree = document.createElement('h4');
        out.textContent = 'this is how much time you vote baby 👅 🍆 ➡️ ' + data[i].vote;
        outTwo.textContent = 'my name as a bitch  👅 ' + data[i].name;
        outThree.textContent = 'how match time you see me : ' + data[i].seen;
        result.appendChild(outTwo);
        result.appendChild(out);
        result.appendChild(outThree);
    }

}
