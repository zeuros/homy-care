import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {NewPostingPageComponent} from './components/new-posting-page/new-posting-page.component';
import {PostingCategoriesSelectComponent} from './components/posting-categories-select/posting-categories-select.component';
import {SearchPageComponent} from './components/search-page/search-page.component';
import {YourAccountComponent} from './components/your-account/your-account.component';
import {ClientAccountComponent} from './components/your-account/client-account/client-account.component';
import {SellerAccountComponent} from './components/your-account/seller-account/seller-account.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatRippleModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatRadioModule,
    MatButtonToggleModule,
    FontAwesomeModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchPageComponent,
    NewPostingPageComponent,
    PostingCategoriesSelectComponent,
    YourAccountComponent,
    ClientAccountComponent,
    SellerAccountComponent,
    LoginComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    MatDatepickerModule,
  ]
})
export class CoreModule {
}
