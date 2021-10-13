let parseOneObject = function(jsonFormattedString)
{
    // this will be the JS object in which we'll parse the recieved json object
    // please don't change the definition
    let plainJSObject = {};

   /*
        check whether the given string is surrounded by curly brackets
        if not, then print the message to the log using this line
         console.log("Object is not well formatted"); // please use this line as-is
        then return null.
       
    */
   if(jsonFormattedString[0] != "{" && jsonFormattedString[jsonFormattedString.length-1] != "}")
   {
       console.log("Object is not well formatted");
       return null
   }

   

    /*
        Use the string’s slice method to remove the opening and closing curly braces.
    */
        jsonFormattedString=jsonFormattedString.slice(1,jsonFormattedString.length-1);

    /*
        Use the string’s split method to separate the properties separated by commas into an array.
    */
   jsonFormattedString=jsonFormattedString.split(",");
   
    

    
      /*
        Each element of the array returned from the call in the previous step will be of the format properytName:propertyValue Separate the name from the value either using split or slice methods.

        The strings sent may contain some empty spaces surrounding the properties' names or values,
        so we'll need to trim them before any further parsing.

        Add each of the properties and its value to the plain JS object named 'resultRealObject'
     */
    for(let i=0; i<jsonFormattedString.length; i++){

        jsonFormattedString[i] = jsonFormattedString[i].split(" ");
        jsonFormattedString[i] = jsonFormattedString[i].join(" ");

        let endingName = jsonFormattedString[i].indexOf(":");
        let endingTotal = jsonFormattedString[i].length;

        plainJSObject[jsonFormattedString[i].slice(0,endingName)] = jsonFormattedString[i].slice(endingName+1, endingTotal);

    }
    

    return plainJSObject;
};


// Please don't change the lines below
let point1 = parseOneObject('{x:5,  y:6}');
console.log("point1.x = " + point1.x + "  point1.y = " + point1.y);

let point2 = parseOneObject("x:5,y:6");

let point3 = parseOneObject("{a  : 10 ,  b :20}");
console.log("point3.a = " + point3.a + "  point3.b = " + point3.b);
