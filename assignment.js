


 
function kilometerToMeter(kilometer){

    var meter  = kilometer * 1000;

    return meter;
    

}
var num1 = kilometerToMeter(3);

console.log(num1);




function budgetCalculator(watch, phone, laptop){

    var result = ((watch*5) + (phone*5) + (laptop*5));
    
    return result;
    
    }
    var TotalCost = budgetCalculator(50,100,500);
    
    console.log(TotalCost);
    



    


    function hotelCost( day ){

        var roomVara = 0;
        
        if( day <= 10){
            roomVara = day * 100;
        }
        
        else if ( day <= 20){
        
            var firstPart = 10 * 100;
        
            var due  = day - 10;
        
            var secondPart = due *80;
        
            roomVara = firstPart + secondPart;
        
        }
        else{
            var firstPart = 10 * 100;
        
            var secondPart = due *80;
        
            var due = day - 20;
        
            var thirdPart = due * 50;
            
            roomVara = firstPart + secondPart + thirdPart;
        }
        return roomVara;
        }
        
        var add = hotelCost(20);
        console.log(add);




        function megaFriend(array){

            var result = "";
            
            for( var i = 0; i < array.length; i++){
            
                var currentItems = array[i];
            
                if( currentItems.length> result.length){
                    result = array[i];
                }
            }
            return result;
            
            }
            var friendName = ["Mowsumi islam", "Mow","ponum" ];
            
            var forLargeWord = (megaFriend(friendName));
            
            console.log(forLargeWord);
    
   
    








