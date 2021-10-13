

let findList = function(threshold, ...lists)
{
    /*
     HINT: The given arrays will be collected in the array called lists. 
     We need two nested loops; 
     one to loop over all the lists and the one to loop over the elements of each array outer loop to loop over the given lists
    */
   
};

//Please don't change the lines below
let list1 = [2,4,5,7];
let list2 = [15,20,46];
let list3 = [50,20,30];
let list4 = [34,67,89];
let list5 = [6,8,3]
let winner = findList(20,list1,list2,list3,list4);

if (winner !== undefined) {
    console.log(/*send the array to the log as one argument*/winner);
    console.log( /*send the elements of the array the log each as a seperate argument */ ...winner);
}
