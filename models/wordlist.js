/**
 * Created by lamberty on 8/6/14.
 */
module.exports = Wordlist;

function Wordlist(){
    this.name = "list";
    this.words = [];
    this.includeInCurrent= true;
}

Wordlist.prototype.isEmpty = function () {
    return this.words.length == 0;
};
Wordlist.prototype.add = function (thing) {
    this.words.push(thing);
};
Wordlist.prototype.join = function (otherList) {
    for (var i=0; i<otherList.words.length; i++) {
        this.add(otherList.words[i]);
        console.log(otherList.words[i]);
    }
};
Wordlist.prototype.find = function (thing) {
    var index = -1;
    for (var i=0; i<this.words.length; i++) {
        if (this.words[i]==thing) {
            console.log("The item " + thing + " was found at location " + i);
            return i;
        }
    }
    return index;
};
Wordlist.prototype.remove = function (thing) {
    var index = Math.max(-1, this.find(thing));
    while (index != -1) {
        this.words.splice(index, 1);
        index = Math.max(-1, this.find(thing));
    }
};
Wordlist.prototype.updateName = function(name) {
    this.name = name;
};