import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] 
})
export class HeaderComponent {
  
  logout() {
    console.log('Usuario deslogado');
  }
  
  username: string = 'NomeDoUsuario';
}
