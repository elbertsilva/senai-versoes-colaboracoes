import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCreateComponent } from './component/cadastro-create/cadastro-create.component';
const routes: Routes = [{ path: 'teste', component: CadastroCreateComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
