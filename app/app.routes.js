"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var user_login_component_1 = require('./user-login.component');
var user_register_component_1 = require('./user-register.component');
var article_edit_component_1 = require('./article-edit.component');
var player_view_component_1 = require('./player-view.component');
var player_list_component_1 = require('./player-list.component');
var team_edit_component_1 = require('./team-edit.component');
var team_list_component_1 = require('./team-list.component');
var season_list_component_1 = require('./season-list.component');
var season_edit_component_1 = require('./season-edit.component');
exports.routes = [
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'login',
        component: user_login_component_1.UserLoginComponent
    },
    {
        path: 'user-register',
        component: user_register_component_1.UserRegisterComponent
    },
    {
        path: 'player-list',
        component: player_list_component_1.PlayerListComponent
    },
    {
        path: 'player-view/:id',
        component: player_view_component_1.PlayerViewComponent
    },
    {
        path: 'team-edit',
        component: team_edit_component_1.TeamEditComponent
    },
    {
        path: 'team-edit/:id',
        component: team_edit_component_1.TeamEditComponent
    },
    {
        path: 'team-list',
        component: team_list_component_1.TeamListComponent
    },
    {
        path: 'season-edit/:id',
        component: season_edit_component_1.SeasonEditComponent
    },
    {
        path: 'season-list',
        component: season_list_component_1.SeasonListComponent
    },
    {
        path: 'article-edit',
        component: article_edit_component_1.ArticleEditComponent
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map