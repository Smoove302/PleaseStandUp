class PleaseStandUp {

    /*
    Have the function howOld(birthday) take the birthday parameter being passed and 
    return the age of a person with the date as their birthday.
    (ie. if birthday = June 22, 1996 then the output should be 24)
    */

   howOld(birthday){
       // Create a variabe for age and birthday
    
       // get difference between previous year and current year
       // return age
        return age;
    }

    /*
    Have the function timeConvert(numOfMins) take the numOfMins parameter being passed and 
    return the number of hours, minutes, and seconds the parameter converts to 
    (ie. if num = 63.5 then the output should be 1:3:30). Separate the number of hours,
    minutes, and seconds with colons.
    */

    timeConvert(numOfMins){
        // Return the hours only and round down
        let hours = math.floor(numOfMins/60);
        // Return the remaining value left over from hours
        let mins = math.floor(numOfMins % 60);
        // Return the remaining value left from mins
        let sec = math.floor(numOfMins % 60)
        // Return sum of hours, mins, and sec
        return hours + ":" + mins + ":" + sec;
    }

}