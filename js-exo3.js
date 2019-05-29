var Age = prompt('Quelle est votre age');
var Agemax = prompt('Quel sera votre age maximum?');
var Denree = prompt('Quel sera votre denree alimentaire?');
var Consom = prompt('Quel sera en sera votre consommation par jour?');
var Reste = Agemax - Age
var DenreeJour = Consom * Reste * 365

alert("Il vous reste" +DenreeJour+ "de" +Denree+ "avant d'atteindre l'age de" +Agemax);


