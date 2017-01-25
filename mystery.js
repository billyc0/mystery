// Mystery Web Page Javascript
// Written by Billy Chandler

var name = prompt("Before we begin, type in your name: ");

alert("Greetings, " + name + "!\n\n" 
						+ "You are about to make your own mystery web page. In order to see it, you must answer a few questions. To answer these questions, you must insert the number relating to a choice of descriptions.\n\n" 
						+ "If you are using Internet Explorer, you will not be able to read all of the questions in each prompt window. To read the questions, visit\nwww.radford.edu/bchandler3/js/1/questions.html.\n\n"
						+ "Click \"OK\" to begin.");

var colors = prompt("It's a nice day outside. What do you see yourself doing?\n" 
						+ "1) Relaxing on the porch reading a good book\n" 
						+ "2) Running around letting all of your energy out\n" 
						+ "3) Playing a game of ball with some friends\n" 
						+ "...or something else");
						
var picture = prompt("If you could go on an adventure, where would your destination be?\n" 
						+ "1) The top of a mountain\n" 
						+ "2) The depths of the ocean\n" 
						+ "3) Deep in the jungle\n" 
						+ "...or something else");
						
var quote = prompt("How would you describe your partner or best friend?\n"
						+ "1) Lovable\n" 
						+ "2) Motivative\n" 
						+ "3) Hilarious\n" 
						+ "...or something else\n");

// Output for the background and foreground colors of the webpage
// The header will be printed first
						
if (colors == 1)
{
	document.write("<style> body { background-color: #FFFF00; } * { color: #0000FF; text-align: center; }</style>");
	document.write("<h1>" + name + "'s Mystery Web Page</h1>");
}
else if (colors == 2)
{
	document.write("<style> body { background-color: #FF0000; } * { color: #FFFF00; text-align: center; }</style>");
	document.write("<h1>" + name + "'s Mystery Web Page</h1>");
}
else if (colors == 3)
{
	document.write("<style> body { background-color: #0000FF; } * { color: #FFFF00; text-align: center; }</style>");
	document.write("<h1>" + name + "'s Mystery Web Page</h1>");
}
else
{
	document.write("<style> body { background-color: #008000; } * { color: #FFFF00; text-align: center; }</style>");
	document.write("<h1>" + name + "'s Mystery Web Page</h1>");
}

// Showcases the current date

var d = new Date();

var month = new Array();

month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

var dayOfWeek = new Array();

dayOfWeek[0] = "Sunday";
dayOfWeek[1] = "Monday";
dayOfWeek[2] = "Tuesday";
dayOfWeek[3] = "Wednesday";
dayOfWeek[4] = "Thursday";
dayOfWeek[5] = "Friday";
dayOfWeek[6] = "Saturday";

var dayName = dayOfWeek[d.getDay()];
var monthName = month[d.getMonth()];
var date = d.getDate();
var year = d.getFullYear();

var hours = new Array();

hours[0] = 12;
hours[1] = 1;
hours[2] = 2;
hours[3] = 3;
hours[4] = 4;
hours[5] = 5;
hours[6] = 6;
hours[7] = 7;
hours[8] = 8;
hours[9] = 9;
hours[10] = 10;
hours[11] = 11;

hours[12] = 12;
hours[13] = 1;
hours[14] = 2;
hours[15] = 3;
hours[16] = 4;
hours[17] = 5;
hours[18] = 6;
hours[19] = 7;
hours[20] = 8;
hours[21] = 9;
hours[22] = 10;
hours[23] = 11;

var minutes = new Array();

minutes[0] = "00";
minutes[1] = "01";
minutes[2] = "02";
minutes[3] = "03";
minutes[4] = "04";
minutes[5] = "05";
minutes[6] = "06";
minutes[7] = "07";
minutes[8] = "08";
minutes[9] = "09";

minutes[10] = 10;
minutes[11] = 11;
minutes[12] = 12;
minutes[13] = 13;
minutes[14] = 14;
minutes[15] = 15;
minutes[16] = 16;
minutes[17] = 17;
minutes[18] = 18;
minutes[19] = 19;

minutes[20] = 20;
minutes[21] = 21;
minutes[22] = 22;
minutes[23] = 23;
minutes[24] = 24;
minutes[25] = 25;
minutes[26] = 26;
minutes[27] = 27;
minutes[28] = 28;
minutes[29] = 29;

minutes[30] = 30;
minutes[31] = 31;
minutes[32] = 32;
minutes[33] = 33;
minutes[34] = 34;
minutes[35] = 35;
minutes[36] = 36;
minutes[37] = 37;
minutes[38] = 38;
minutes[39] = 39;

minutes[40] = 40;
minutes[41] = 41;
minutes[42] = 42;
minutes[43] = 43;
minutes[44] = 44;
minutes[45] = 45;
minutes[46] = 46;
minutes[47] = 47;
minutes[48] = 48;
minutes[49] = 49;

minutes[50] = 50;
minutes[51] = 51;
minutes[52] = 52;
minutes[53] = 53;
minutes[54] = 54;
minutes[55] = 55;
minutes[56] = 56;
minutes[57] = 57;
minutes[58] = 58;
minutes[59] = 59;

var amPM = "";

if (d.getHours() >= 1 && d.getHours() <= 11)
	amPM = "AM";
else
	amPM = "PM";

var oClockHours = hours[d.getHours()];
var oClockMinutes = minutes[d.getMinutes()];

document.write("<h3>" + dayName + ", " + monthName + " " + date + ", " + year + "<br />");
document.write(oClockHours + ":" + oClockMinutes + " " + amPM + "</h3>");

// Places an image on the web page

if (picture == 1)
{
	document.write("\n<img src=\"mountains.jpg\" width=\"500px\"");
}
else if (picture == 2)
{
	document.write("\n<img src=\"oceansunset.jpg\" width=\"500px\"");
}
else if (picture == 3)
{
	document.write("\n<img src=\"waterfall.jpg\" width=\"500px\"");
}
else
{
	document.write("\n<img src=\"newyork.jpg\" width=\"500px\"");
}

if (quote == 1)
{
	document.write("<p></p>")
	document.write("<h2><em>The best way to cheer yourself up is to try to cheer somebody else up.</em></h2>");
	document.write("<h3>Mark Twain</h3>");
}
else if (quote == 2)
{
	document.write("<p></p>")
	document.write("<h2><em>Courage is what it takes to stand up and speak. Courage is also what it takes to sit down and listen.</em></h2>");
	document.write("<h3>Winston Churchill</h3>");
}
else if (quote == 3)
{
	document.write("<p></p>")
	document.write("<h2><em>Fantasy is a necessary ingredient in living, it's a way of looking at life through the wrong end of a telescope and that enables you to laugh at life's realities.</em></h2>");
	document.write("<h3>Dr. Seuss</h3>");
}
else
{
	document.write("<p></p>")
	document.write("<h2><em>Whatever you are, be a good one.</em></h2>");
	document.write("<h3>Abraham Lincoln</h3>");
}