// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { PLATFORM_DIRECTIVES, provide } from '@angular/core';


import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';

// The usual bootstrapping imports
import { bootstrap }      from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent }         from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';


bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms(),
    APP_ROUTER_PROVIDERS,
    ...HTTP_PROVIDERS,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA, useClass: InMemoryDataService },      // in-mem server data
    provide(PLATFORM_DIRECTIVES, { useValue: [ROUTER_DIRECTIVES], multi: true })
])
    .catch((err: any) => console.error(err));