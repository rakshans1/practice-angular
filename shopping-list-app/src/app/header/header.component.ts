import { Component, EventEmitter, Output } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataservice: DataStorageService, private authService: AuthService) {}
  onSaveData() {
    this.dataservice.storeRecipes()
      .subscribe(
        (response: Response) => console.log(response)
      );
  }

  onGetData() {
    this.dataservice.getRecipes();
  }
  onLogout() {
    this.authService.logOut();
  }
}
