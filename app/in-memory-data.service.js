"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var users = [
            { id: 11, name: 'Mr. Nice', username: 'admin', role: 'admin', password: '123' },
            { id: 12, name: 'Narco', username: 'editor-1', role: 'editor', password: '123' },
            { id: 13, name: 'Bombasto', username: 'editor-2', role: 'editor', password: '123' },
            { id: 14, name: 'Celeritas', username: 'editor-3', role: 'editor', password: '123' },
            { id: 15, name: 'Magneta', username: 'editor-4', role: 'editor', password: '123' },
            { id: 16, name: 'RubberMan', username: 'editor-5', role: 'editor', password: '123' },
            { id: 17, name: 'Dynama', username: 'editor-6', role: 'editor', password: '123' },
            { id: 18, name: 'Dr IQ', username: 'editor-7', role: 'editor', password: '123' },
            { id: 19, name: 'Magma', username: 'editor-8', role: 'editor', password: '123' },
            { id: 20, name: 'Tornado', username: 'editor-9', role: 'editor', password: '123' }
        ];
        var players = [
            { id: 346413513, firstname: "Narco", lastname: "Cropper", username: "player1", status: "pending", matches: 5, avatar: "http://www.infosportinc.com/frings,%20sebastian%201.jpg" },
            { id: 635663543, firstname: "Celeritas", lastname: "Dabney", username: "player2", status: "approved", matches: 35, avatar: "http://cdn.ghanaweb.com/imagelib/pics/30617586.jpg" },
            { id: 757867867, firstname: "Magneta", lastname: "David", username: "player3", status: "blocked", matches: 350, avatar: "http://cfisocceracademy.com/wp-content/uploads/frings.jpg" },
            { id: 876745676, firstname: "Dynama", lastname: "Eccleston", username: "player4", status: "approved", matches: 79, avatar: "http://www.nisfa.co.uk/images/galleries/U16%20Player%20Profiles/Adam%20Mc%20v%202.jpg" },
            { id: 767676762, firstname: "Tornado", lastname: "Edison", username: "player5", status: "approved", matches: 213, avatar: "http://vignette1.wikia.nocookie.net/armchair-new/images/8/81/Player_profile_Michael_Johnson_(soccer_player).jpg/revision/latest?cb=20100906163529" },
            { id: 787845455, firstname: "Mr.Nice", lastname: "Foster", username: "player6", status: "approved", matches: 111, avatar: "http://vignette1.wikia.nocookie.net/armchair-new/images/8/81/Player_profile_Michael_Johnson_(soccer_player).jpg/revision/latest?cb=20100906163529" },
            { id: 749665221, firstname: "RubberMan", lastname: "Franklin", username: "player7", status: "pending", matches: 56, avatar: "http://vignette1.wikia.nocookie.net/armchair-new/images/8/81/Player_profile_Michael_Johnson_(soccer_player).jpg/revision/latest?cb=20100906163529" },
        ];
        var teams = [
            { id: 111, name: 'Arsenal', description: 'Some description about Arsenal', remarks: 'some remarks' },
            { id: 222, name: 'Chelsea', description: 'Some description about Chelsea', remarks: 'some remarks' },
            { id: 333, name: 'Burnley', description: 'Some description about Burnley', remarks: 'some remarks' },
            { id: 444, name: 'Everton', description: 'Some description about Everton', remarks: 'some remarks' },
            { id: 555, name: 'Liverpool', description: 'Some description about Liverpool', remarks: 'some remarks' },
        ];
        var seasons = [
            { id: 111, name: 'First Season', description: 'Some description about First Season', remarks: 'some remarks' },
            { id: 222, name: 'Second Season', description: 'Some description about Second Season', remarks: 'some remarks' },
            { id: 333, name: 'Third Season', description: 'Some description about Third Season', remarks: 'some remarks' },
            { id: 444, name: 'Fourth Season', description: 'Some description about Fourth Season', remarks: 'some remarks' },
            { id: 555, name: 'Fifth Season', description: 'Some description about Fifth Season', remarks: 'some remarks' },
        ];
        return { users: users, players: players, teams: teams, seasons: seasons };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map