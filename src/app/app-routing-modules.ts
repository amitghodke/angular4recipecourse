import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipeComponent} from "./recipe/recipe.component";
import {ShopingListComponent} from "./shoping-list/shoping-list.component";
import {RecipeStartComponent} from "./recipe/recipe-start/recipe-start.component";
import {RecipeDetailsComponent} from "./recipe/recipe-details/recipe-details.component";
import {RecipeEditComponent} from "./recipe/recipe-edit/recipe-edit.component";


const appRoutes: Routes = [
  {path: '', redirectTo: '/recipe', pathMatch: 'full' },
  {path: 'recipe', component: RecipeComponent, children: [
    {path: '', component: RecipeStartComponent },
    {path: 'new', component: RecipeEditComponent },
    {path: ':id', component: RecipeDetailsComponent },
    {path: ':id/edit', component: RecipeEditComponent }


  ]},
  {path: 'shopping-list', component: ShopingListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
