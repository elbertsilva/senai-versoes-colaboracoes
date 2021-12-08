import {Component, OnInit} from "@angular/core"
import {CadastroService} from '../../service/cadastro.service'
import {Router} from '@angular/router'
import {Cadastro} from '../../model/cadastro.model'
// import { create } from "./componentes/cadastro/cadastro.service"

@Component({
    selector: 'app-cadastro-create',
    templateUrl: './cadastro-create.component.html',
    styleUrls: ['./cadastro-create.component.css']
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