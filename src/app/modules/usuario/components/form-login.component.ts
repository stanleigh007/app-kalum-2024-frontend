import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../models/usuario';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {
  public loginForm: FormGroup;
  
  usuario: Usuario = new Usuario();
  
  constructor(private formBuilder: FormBuilder, private dialogLoginformRef: MatDialogRef<FormLoginComponent>){
    this.loginForm = formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
    });
  }
  onlogin():void{
    this.usuario.username = this.loginForm.get('username')?.value;
    this.usuario.password = this.loginForm.get('password')?.value;
    if(this.usuario.username === 'david' && this.usuario.password === 'guatemala'){
      Swal.fire({
        title: "Login",
        text: `Bienvenidos a KalumApp ${this.usuario.username}`,
        icon: "success",
        footer:"Kalum v1.0.0"
      }).then(response => {
        if(response.isConfirmed){
          this.dialogLoginformRef.close(1);
        }
      })
    }else{
      Swal.fire({
        title: "Login",
        text: `Credenciales incorrectas`,
        icon: "error",
        footer:"Kalum v1.0.0"
      })
    }
  }

  onCancel():void{
    this.dialogLoginformRef.close(0);
  }
}
