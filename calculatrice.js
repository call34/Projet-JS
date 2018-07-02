function calcule(a,signe,b) 
{
 var a=a;
 var b=b;
 switch (signe) {
  case "+":
    return (a+b);
    break;
  case"-":
    return (a-b);
    break;
  case "*":
    return (a*b);
    break;
 }
}
console.log(calcule(45,"+",6));
console.log(calcule(32,"-"12));
console.log(calcule(65,"-",9));
console.log(calcule(5,"*",8));
/* cette petite calculette  va nous permettre de voir le fonctionnement de la boucle 
switch */
