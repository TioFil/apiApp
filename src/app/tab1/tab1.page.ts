import { Component } from '@angular/core';
import { UserService } from '../servicos/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //Variaveis para paginação
  public page = 1;
  public totalPaginas = 0;

  //Dados dos Usuarios
  public usuariosPagina = 0;
  public totalUsuario = 0;

  //Lista para os usuarios
  public listaUsuarios = [];

  constructor(private userService: UserService) {
    this.buscarUsuarios(this.page);
  }

public buscarUsuarios(pagina:Number){
  this.userService.listarUsuarios(pagina).subscribe(dados=>{
    // Dados para paginação
    this.page = dados['page'];
    this.totalPaginas = dados['total_pages'];
    this.usuariosPagina = dados['per_page'];
    this.totalUsuario = dados['total'];

    // Dados para listagem de usuarios
    this.listaUsuarios = dados['data'];    
  });
}

}
