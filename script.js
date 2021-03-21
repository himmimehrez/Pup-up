// var a =true;
// declaration dune variable
// alert(typeof a);
// afficher le type de la variable 

// var x ="bonjour";
// alert(x);
// afficher la chaine de caractere
// alert(typeof x);

// var nom=prompt("entrer votre nom");
// elle permet a l'utilisateur de saisir les donnée
// alert('bonjour' +nom);
// var a =prompt("entrer un choffre");
// var b =prompt("entrer un choffre");
// var r=parseInt(a) + parseInt(b); 
// // pour convertir en choffre
// alert(r);
 
// var a ='3';
// var b=2;
// // var r=a=b;
// // comparer les valeurs 
// var r=a!==b;
// // var r=a===b;
// // comparer les valeurs et les types 
// alert(r);

// var r=a!=b;
// comprer asq ils nont de valeur differentes 

// les conditions
// if(2<5){
//     alert("la condition est verifie")
// }

// pour demander a lutilisateur sil daccord pour un truc ou pas on utilise la fonction confirm()

// if(confirm('vous voulez supp')){
//     alert('fichier supp');
// }
// else{
//     alert("fichier non supp");
// }

// la condition switch

// les ternaires 

// var adulte=true;
// var r =adulte?'+18':'-18';
// alert('vous avez ' + r + ' ans ');

// les fontions anonymes

// var sayHello=function()
// {
//     alert('bonjour');
// };
// sayHello();
 
// (function sayHello(){
//     alert('izaaaaaan');
// })();


// l'objet string
// var s='salut';
// alert(s.toUpperCase());


// var s='salut';
// alert(s.length);


// Declaration d'un tableau;
// var montableau=['mahrez','hamza','lydia','zakou'];
// afficher un tableau
// alert(montableau[2]);
// pour ajouter un item au tableau on utilise la methode "puch"  a la fin de mon tableau
// montableau.push('mamou','papou');
// au debut de mon tableau on utulise unshift() 
// montableau.unshift('izann');
// pour supprimer les items shif() pour retirer au debut pop() a la fin 
// montableau.pop();
// montableau.shift();
// alert(montableau[0]);



// var montab=["s","d","m","m","j"];
// console.log(montab[1]);
// var montab=[1,2,"s","d","m","m","j",["a","b"], true, false];
// montab.unshift('mahrezzzz');
// montab.push('momo');
// montab.pop();
// montab.shift();
// console.log(montab);

// supprimer un item quelconque on la fonction ***splice()** 
// montab.splice(3,1); 
// telque 3 c lemplacement de l'ement a supprimeer et 1 c le nombre d'element a supprimer 


// l'objet littéral (il rassemble au tableau)
// var familly={
//     pere:'nacer',
//     mere:'yamina',
//     soeur1:'sonia',
//     soeur2:'maya',
//     frere1:'yanis',
//     frere2:'mouloud',
// }
// // pour acceder au items on utilise familly['pere]; ou familly.pere;
// alert(familly.pere);

// transformer un tab ou chaine de caractere 
// var  tab=['mahrez','hamza','zakou'];
// var s=tab.join('-');
// alert(s);

// transformarer une chaine au tab on utulise la fonction split()
// var chaine=("bonjour je suis mahrez");
// var v=chaine.split(' ');
// console.log(v);

// pour voire asq il existe un element dans un tableau ou non on utilise la fonction ****include*****
// var  tab=['mahrez','hamza','zakou'];
// var s=tab.includes("iza");
// alert(s);

// ***les dom****

// var div=document.getElementById('d');
// console.log(div);

// var score=12;
// if(score===10){
//     console.log("oui");
// }
// else if(score===11){
//     alert('oui')
// }
// else{
//     console.log("non");
// }
   
// la condition switch

// var score=12;
// switch(score){
//     case 10:
//         alert("ou, la 1 condition a ete verifie");
//         break;
//     case 11:
//         alert("ou, la 2 condition a ete verifie");break;
//     case 12:
//         alert("ou, la 3 condition a ete verifie");break;
//     default:
//         alert("non, la  condition n'a pas ete verifie");

// }
//  l'operateur ternaire
// var a=10; var b=12;
// var r= a===b?"a est egale a b ": (a>b ? "a est supp à b":"b est sup à a ");
// alert(r);

// ******  la boucle while ******
// var  i =2;
// while(i<=20){
//     console.log("log :", i);
//     i=i+2;
// }
// console.log("la nouvelle valeur de i est :", i);

// **********la boucle for***********
// for(var i=0;i<=1;i++){
//     console.log("log :",i);
// }

// ******l'instruction*****
// for(var i=0;i<=10;i++){
//     if(i===5){
//         continue;
//     }
//     console.log("log :",i);
// }

// *********parcourir les elements d'un tableau*********
// var tab=["mahrez","zakou","maman","zahir","hamza"];
// for(var i=0; i<tab.length; i++){
//     console.log(tab[i]);
// }

// ********l'objet date *********
// var maintenant=new Date();
// // pour afficher la date actualle
// console.log(maintenant);
// // pour afficher le jour actual
// console.log(maintenant.getUTCDate());
// // pour afficher lanné 
// console.log(maintenant.getFullYear());

// ******** les expression regulaire**********
// les expressions réguliere sont une chaine de texte spécial pour decrire un modele de recherchce ; en javascript les expressions reguliere utulise pour valider des informations dans un formulaire par exemple verifie si l'adresse email est une syntaxe correct 
   
// tester si "on " existe dans machaine
// var machaine="Bonjour tout le monde ! "
// // var monregexp=new RegExp("On","gi"); le i pour linsenssible a la casse 
// // la syntax des expression regulaires 
// var monregexp=/on/g;
// console.log(monregexp.exec(machaine) );

// *****les tableaux à deux dimensions******
// ******les fonctions*******

// var monscore=0;
// function calculescore(points){
// monscore=points+monscore;
// console.log(monscore);
// }
// calculescore(1);
// calculescore(5);
// calculescore(1);
    
// retourner plusieurs valeus depuins une fonction 

// function add_s(v1,v2){
//     var somme = v1+v2;
//     var diffrence=v1-v2;
//     return {somme :somme ,diffrence:diffrence};
//     // pour afficher plusieur valeur depuis une fonction en utilisant les tableaux
//     // return [somme,difference];
// }
// var r =add_s(10,5);
// console.log("somme:"+r.somme);
// console.log("diffrence:"+r.diffrence);

// *****la porté des variable (la porté locale et la porté globle)******

// ****les objets*****
// var personne ={
//     nom_complet :"mahrez",
//     age:24
// }
// console.log(personne);
// function id (p,n,a){
//     this.prenom=p;
//     this.nom=n;
//     this.age=p;

// }
// var monobject= new id ("mahrez","himmi",25);
// alert('mon prenom est : ' +  monobject.prenom );
