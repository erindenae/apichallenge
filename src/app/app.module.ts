import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CtaBannerComponent } from './cta-banner/cta-banner.component';
import { TwoUpFeatureComponent } from './two-up-feature/two-up-feature.component';
import { ThreeCardComponent } from './three-card/three-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CtaBannerComponent,
    TwoUpFeatureComponent,
    ThreeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
