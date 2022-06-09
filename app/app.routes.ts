import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent }     from './dashboard.component';
import { UserLoginComponent }     from './user-login.component';
import { UserEditComponent }      from './user-edit.component';
import { UserRegisterComponent }  from './user-register.component';
import { ArticleEditComponent }   from './article-edit.component';
import { PlayerViewComponent }    from './player-view.component';
import { PlayerListComponent }    from './player-list.component';
import { TeamEditComponent }      from './team-edit.component';
import { TeamListComponent }      from './team-list.component';
import { SeasonListComponent }    from './season-list.component';
import { SeasonEditComponent }    from './season-edit.component';

export const routes: RouterConfig = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'login',
        component: UserLoginComponent
    },
    {
        path: 'user-register',
        component: UserRegisterComponent
    },
    {
        path: 'player-list',
        component: PlayerListComponent
    },
    {
        path: 'player-view/:id',
        component: PlayerViewComponent
    },
    {
        path: 'team-edit',
        component: TeamEditComponent
    },
    {
        path: 'team-edit/:id',
        component: TeamEditComponent
    },
    {
        path: 'team-list',
        component: TeamListComponent
    },
    {
        path: 'season-edit/:id',
        component: SeasonEditComponent
    },
    {
        path: 'season-list',
        component: SeasonListComponent
    },
    {
        path: 'article-edit',
        component: ArticleEditComponent
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    },
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];