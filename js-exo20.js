let mainCharacter = {
    name: 'gladiator',
    level: 7,
    life: 6,
    weapon: 'gun',
    attack: function() {
        let degats = this.level * this.life;
        console.log(this.name + " "+ "attaque avec l'arme" +" "+ this.weapon + "les dégâts sont" + " "+ degats);
    
    }
}
mainCharacter.attack();