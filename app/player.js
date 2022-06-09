"use strict";
var Player = (function () {
    function Player(id, fName, lName, uName, status) {
        this.id = id;
        this.firstname = fName;
        this.lastname = lName;
        this.username = uName;
        this.status = status;
        this.matches = 0;
    }
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=player.js.map