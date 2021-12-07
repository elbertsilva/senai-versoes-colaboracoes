import {Component, OnInit} from "@angular/core"
import {CadastroService} from './componentes/cadastro/cadastro.service'
import {Router} from '@angular/router'
import {Cadastro} from './componentes/cadastro/cadastro-create/cadastro.model'
// import { create } from "./componentes/cadastro/cadastro.service"

@Component({
    selector: 'app-cadastro-create',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class CadastroCreateComponent implements OnInit {
    cadastro: Cadastro = {
        usuario: '',
        senha: ' '
    
}
constructor(private cadastroService: CadastroService, private router: Router ) { }

ngOnInit(): void {

}

createCadastro(): void{
  this.cadastroService.create(this.cadastro).subscribe(() => {
    this.cadastroService.showMessege('Usuário Cadastrado!')
  })
}
cancelarCadastro(): void{
  this.router.navigate([''])
}
tabelaCadastro(): void{
  this.router.navigate(['/cadastro/tabela'])
}
}