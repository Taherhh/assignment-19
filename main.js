// assignment 19
// print message
var guestlist = ["Ambreen", "Bilquis", "Sakina"];
console.log("Unfortunately! the new dinner table wont arrive so we can invite only 2 guest");
guestlist.unshift("Abid", "Anny");
// print message updated list
console.log("Updated list of guest:", guestlist);
// remove guest from the list
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    if (removedGuest !== undefined) {
        console.log("Sorry, ".concat(removedGuest, ", we cant invite you"));
    }
}
// print a message
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you both are invited for the dinner"));
});
// remove 2 names from the list
guestlist.splice(0, guestlist.length);
// print updated empty list
console.log("Updated list of guest:", guestlist);
