import { Component, OnInit } from '@angular/core';
//Se importa el servicio (usar todos los metodos)
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }
  
  //metodo para agregar usuarios, usando metodo de registerUser
  onSubmitAddUser(){
    this.authService.registerUser(this.email, this.password).then( (res)=>{
      this.flashMensaje.show('Usuario creado correctamente', {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/perfil']);
    }).catch( (err)=>{
      this.flashMensaje.show(err.message, {cssClass: 'alert-danger', timeout: 4000});
      console.log(err);
    });
  }
   

}
