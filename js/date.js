let datePosted = 1642499664565;
let currentDate = Date.now();
//gets difference between posted and current time in milliseconds,
//divides by 24 hours to get days since posted
let daysSince = Math.floor(Math.abs((datePosted - currentDate) / 86400000));

for (i = 0; i < datePosted; i++) {
    if (daysSince <= 1) {
        console.log(`This was posted today`);
        // return log as variable and push to html
       // document.getElementById("date").innerHTML = "Posted today"
        break;
    } else if (daysSince > 7) {
        console.log("This was posted over a week ago")
        // return log as variable and push to html
        //document.getElementById("date").innerHTML = "Posted over one week ago"
        break;
    } else if (daysSince) {
        console.log(`This was posted ${daysSince} days ago`)
        // return log as variable and push to html
        //document.getElementById("date").innerHTML = `Posted ${daysSince} days ago`
        break;
    }

}
/*switch (daysSince) {
    case 0:
        console.log("Posted today")
        break;
    case 1:
        console.log("Posted 1 day ago")
        break;
    case 2:
        console.log("Posted 2 days ago")
        break;
    case 3:
        console.log("Posted 3 days ago")
        break;
    case 4:
        console.log("Posted 4 days ago")
        break;
    case 5:
        console.log("Posted 5 days ago")
        break;
    case 6:
        console.log("Posted 6 days ago")
        break;
    case 7:
        console.log("Posted 7 days ago")
        break;
    case 8:
        console.log("Posted 2 days ago")
        break;
} */