var mark=parseInt(prompt("Enter the student mark"))
switch (true) {
    case mark>=90:
        document.write("Grade A")
        break;

case mark>=80:
    document.write("Grade B")
    break;

case mark>=60:
    document.write("Grade C")
    break;
               
case mark>=40:
    document.write("Grade D")
    break;
 
case mark<40:
    document.write("Your are fail")   
    break; 

    default:
        document.write("Enter correct")
}