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
document.write(calcule(45,"+",6));
document.write(calcule(32,"-"12));
document.write(calcule(65,"-",9));
document.write(calcule(5,"*",8));
/* cette petite calculette  va nous permettre de voir le fonctionnement de la boucle 
switch */
