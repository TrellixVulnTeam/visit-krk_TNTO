import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FortsPageRoutingModule } from './forts-routing.module';
import { FortsPage } from './forts.page';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function createTranslateLoader(http) {
    return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let FortsPageModule = class FortsPageModule {
};
FortsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            FortsPageRoutingModule,
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [HttpClient],
                },
            }),
        ],
        declarations: [FortsPage]
    })
], FortsPageModule);
export { FortsPageModule };
//# sourceMappingURL=forts.module.js.map