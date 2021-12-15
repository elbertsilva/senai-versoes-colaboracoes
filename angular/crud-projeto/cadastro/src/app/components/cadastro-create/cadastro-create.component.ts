import { Component, OnInit } from '@angular/core';
import { CadastroCreateService } from '../../services/cadastro-create.service';
import { Router } from '@angular/router';
import { Cadastro } from '../../model/cadastro.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro-create',
  templateUrl: './cadastro-create.component.html',
  styleUrls: ['./cadastro-create.component.css'],
})
export class CadastroCreateComponent implements OnInit {
  cadastro: Cadastro = {
    usuario: '',
    senha: ' ',
  };
  constructor(
    private snackBar: MatSnackBar,
    private cadastroService: CadastroCreateService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  showMessege(): void {
    this.snackBar.openFromComponent(PopupSuccess, {
      duration: 6000,
      verticalPosition: 'bottom',
    });
  }
  showError(): void {
    this.snackBar.openFromComponent(PopupError, {
      duration: 6000,
      verticalPosition: 'bottom',
    });
  }
  showError2(): void {
    this.snackBar.openFromComponent(PopupError2, {
      duration: 6000,
      verticalPosition: 'bottom',
    });
  }

  createCadastro(): void {
    this.cadastroService.create(this.cadastro).subscribe(
      () => {
        this.showMessege();
      },
      () => {
        this.showError();
      },
      () => {
        this.showError2();
      }
    );
  }
  cancelarCadastro(): void {
    this.router.navigate(['']);
  }
  tabelaCadastro(): void {
    this.router.navigate(['/cadastro/tabela']);
  }
}
@Component({
  selector: 'snack-bar-component-example-snack',
  template: `<span class="popup-party">Usuário Cadastrado!</span>`,
  styles: [
    `
      .popup-party {
        color: hotpink;
      }
    `,
  ],
})
export class PopupSuccess {}

@Component({
  selector: 'snack-bar-component-example-snack',
  template: `<span class="popup-party">Usuário não Cadastrado!</span>`,
  styles: [
    `
      .popup-party {
        color: hotpink;
      }
    `,
  ],
})
export class PopupError {}

@Component({
  selector: 'snack-bar-component-example-snack',
  template: `<span class="popup-party">Usuário não Editado!</span>`,
  styles: [
    `
      .popup-party {
        color: hotpink;
      }
    `,
  ],
})
export class PopupError2 {}
