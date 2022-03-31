/* Create a computer program that converts
an 12 hour clock for example:
5:00am --> 17:00pm
9:00am --> 21:00pm
12:00pm --> 00:00am
15:00pm --> 3:00am
*/

function convert_12_hr(hour, minute) {
   if(hour < 12) {
    hour = hour + 12;
    return hour + ":" + minute + "PM";
  } else if(hour >= 12) {
     hour = hour - 12;
     return hour + ":" + minute + "AM";
  }
}
console.log(convert_12_hr(12, 0)); //Sadly you cannot do 00, 00 else it will return an error :(
