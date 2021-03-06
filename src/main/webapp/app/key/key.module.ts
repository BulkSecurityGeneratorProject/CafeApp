import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CafeAppSharedModule } from '../shared';

import { KEY_ROUTE, KeyComponent, KeyService } from './';

@NgModule({
    imports: [
      CafeAppSharedModule,
      RouterModule.forRoot([ KEY_ROUTE ], { useHash: true })
    ],
    declarations: [
      KeyComponent,
    ],
    entryComponents: [
    ],
    providers: [
      KeyService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CafeAppKeyModule {}
