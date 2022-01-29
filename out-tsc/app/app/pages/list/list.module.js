import { __decorate } from "tslib";
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListPageRoutingModule } from './list-routing.module';
import { ListPage } from './list.page';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function createTranslateLoader(http) {
    return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let ListPageModule = class ListPageModule {
};
ListPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ListPageRoutingModule,
            SharedModule,
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [HttpClient],
                },
            }),
        ],
        declarations: [ListPage]
    })
], ListPageModule);
export { ListPageModule };
//# sourceMappingURL=list.module.js.map