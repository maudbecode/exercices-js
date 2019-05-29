let objets = [
    {
    title: "epee",
    physic: 6,
    magic: 3,
    minLevel: 11,
    available: true
  },
  {
    title: "hache",
    physic: 7,
    magic: 5,
    minLevel: 1,
    available: false,
  },
  {
    title: "septre",
    physic: 4,
    magic: 6,
    minLevel: 3,
    available: true,
  },
  { 
    title: "fusil",
    physic: 8,
    magic: 2,
    minLevel: 10,
    available: false,
  },
  ];
  for (i= 0; i <objets.length; i++) {
     console.log(objets[i].title);
   }
   
   for (i= 0; i <objets.length; i++) {
     if (objets[i].available === true) {
    console.log(objets[i].available);
     }
  }
  for (i= 0; i <objets.length; i++) {
    if (objets[i].minLevel >=10) {
   console.log(objets[i].minLevel);
    }
  }