const character = {
    name: 'Snortleblat',
    image: 'images/snortleblat.webp',
    imageAlt: 'Snortblat the alligator man standing in a swamp',
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100,
    attacked: function(){
        if (this.health > 0){
            this.health -= 20
        } else {
            alert(this.name + ' has died')
        }
        
    },
    levelUp: function(){
        this.level += 1
        this.health +=40
    }
}

function statsTemplate(character) {
    return `
    <p> Level: ${character.level}</p>
    <p> Health: ${character.health}</p>
    `
}

function loadCharacterInfo(character) {
    document.querySelector('img').setAttribute('src', character.image);
    document.querySelector('img').setAttribute('alt', character.imageAlt);
    document.querySelector('img').setAttribute('width', 400);
    document.querySelector('.name').textContent = 'Name: ' + character.name;
    document.querySelector('.stats').innerHTML = statsTemplate(character);
}

document.querySelector(".attacked").addEventListener("click", () => {
    character.attacked();
    loadCharacterInfo(character);
});

document.querySelector(".levelUp").addEventListener("click", () => {
    character.levelUp();
    loadCharacterInfo(character);
});

loadCharacterInfo(character);