import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipeComponent} from "./recipe/recipe.component";
import {ShopingListComponent} from "./shoping-list/shoping-list.component";


const appRoutes: Routes = [
  {path: '', redirectTo: '/recipe', pathMatch: 'full' },
  {path: 'recipe', component: RecipeComponent},
  {path: 'shopping-list', component: ShopingListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
