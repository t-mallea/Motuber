import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  /**
   * Se genera el modelo user con dos claves
   * cada clave tiene su valor inicial
   */
  user={
    usuario:"",
    password:""
  }
  constructor(private router: Router, public loadingController: LoadingController ) { } // Se debe instanciar

  ngOnInit() {
  }
  ingresar(){
    this.presentLoadingWithOptions();
    // Se declara e instancia un elemento de tipo NavigationExtras
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user // Al estado se asignamos un objeto con clave y valor
      }
    };
    this.loadingController.dismiss();
    this.router.navigate(['/home'],navigationExtras); // navegamos hacia el Home y enviamos información adicional
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      //spinner: null,
      duration: 300,
      message: 'Iniciando sesion...',
      //translucent: true,
      //cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

}
