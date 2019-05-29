let character = 
{
    name: 'Julie',
    age: 21,
    items: ['cap', 'glasses', 'gloves'],
    giveItem: function() 
    {
            let randomItem = this.items[Math.floor(Math.random()*this.items.length)];
            console.log(randomItem);
        
    }
}

for (let key in character) {
    console.log(key);
    console.log(character[key]);
}

character.giveItem();

