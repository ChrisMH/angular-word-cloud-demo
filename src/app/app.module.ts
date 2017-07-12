import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WordCloudDirective } from './word-cloud/word-cloud.directive';

@NgModule({
    declarations: [
        AppComponent,
        WordCloudDirective
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
