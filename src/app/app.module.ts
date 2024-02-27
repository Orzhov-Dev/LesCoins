import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoinsComponent } from './coins/coins.component';
import { CoinsModalComponent } from './coins-modal/coins-modal.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoinService } from './services/coin.service';
import { HttpClientModule } from '@angular/common/http';
import { CryptoFilterPipe } from './pipes/crypto-filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CoinsComponent,
    CoinsModalComponent,
    HeaderComponent,
    CryptoFilterPipe,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule, 
  ],
  providers: [
    CoinService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
