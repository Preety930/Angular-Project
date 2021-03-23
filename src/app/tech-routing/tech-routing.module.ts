import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JavaComponent } from '../java/java.component';
import { WebComponent } from '../web/web.component';
import { ProdDetailsComponent } from '../prod-details/prod-details.component';
import { CustDetailsComponent } from '../cust-details/cust-details.component';
import { HomeComponent } from '../home/home.component';
import { JavascriptComponent } from '../javascript/javascript.component';
import { AngularComponent } from '../angular/angular.component';
import { CoreJavaComponent } from '../core-java/core-java.component';
import { AdvJavaComponent } from '../adv-java/adv-java.component';
import { TempDrivenFormComponent } from '../temp-driven-form/temp-driven-form.component';
import { ModelDrivenFormComponent } from '../model-driven-form/model-driven-form.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { DotnetComponent } from '../dotnet/dotnet.component';
import { NewComponent } from '../new/new.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  
    

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  { path: 'product', component: ProdDetailsComponent },
  { path: 'customer', component: CustDetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'form', component: TempDrivenFormComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'new', component: NewComponent },
  { path: 'modeldrivenform', component: ModelDrivenFormComponent },
  {
    path: 'technologies', component: TechnologiesComponent,
    children: [

      {
        path: 'web', component: WebComponent,
        children: [
          { path: 'javascript', component: JavascriptComponent },
          { path: 'angular', component: AngularComponent },
        ]
      },
      {
        path: 'java', component: JavaComponent,
        children: [
          { path: 'coreJava', component: CoreJavaComponent },
          { path: 'advJava', component: AdvJavaComponent },
        ]
      },
      { path: 'dotnet', component: DotnetComponent }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class TechRoutingModule { }
export const routingComponents = [ProdDetailsComponent, CustDetailsComponent, HomeComponent, WebComponent, JavaComponent, JavascriptComponent, AngularComponent, CoreJavaComponent, AdvJavaComponent, TempDrivenFormComponent, ModelDrivenFormComponent, ReviewsComponent, TechnologiesComponent, DotnetComponent, NewComponent]
