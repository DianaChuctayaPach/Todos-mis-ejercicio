function main () {
   var person = {
     name: "Alex",
     surname: "Ocsa",
     dni: 43585849,
     bithday : "12/04/86",
     adress: "Los Olmos D1",
     nationality : "Peruano",
     age : function () {

     }
   };
   for (var property in person ) //property hace que se mostre person uno por uno
      alert (property + " : " + person [property] ); //person [property] hace que muestre los datos almacenados de person uno por uno
      
}
