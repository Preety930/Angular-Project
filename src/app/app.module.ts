
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JavaComponent } from './java/java.component';
import { routingComponents, TechRoutingModule } from './tech-routing/tech-routing.module';
import { WebComponent } from './web/web.component';
import { CustDetailsComponent } from './cust-details/cust-details.component';
import { ProdDetailsComponent } from './prod-details/prod-details.component';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyThemeDirective } from './my-theme.directive';
import { HomeComponent } from './home/home.component';
import { CoreJavaComponent } from './core-java/core-java.component';
import { AdvJavaComponent } from './adv-java/adv-java.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { AngularComponent } from './angular/angular.component';
import { TempDrivenFormComponent } from './temp-driven-form/temp-driven-form.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { DotnetComponent } from './dotnet/dotnet.component';
import { LoginComponent } from './login/login.component';
import { NewComponent } from './new/new.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}​​​​​​​​



@NgModule({
  declarations: [
    AppComponent,
    JavaComponent,
    WebComponent, routingComponents, CustDetailsComponent, ProdDetailsComponent, FilterPipe, SortPipe, MyThemeDirective, HomeComponent, CoreJavaComponent, AdvJavaComponent, JavascriptComponent, AngularComponent, TempDrivenFormComponent, ModelDrivenFormComponent, HeaderComponent, FooterComponent, ReviewsComponent, TechnologiesComponent, DotnetComponent, LoginComponent, NewComponent
  ],
  imports: [
    BrowserModule,
    TechRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
