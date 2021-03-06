import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {DataStorageService} from "../shared/data-storage.service";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: any) => {
          console.log(response);
        }
      );
  }

  onGetData() {
    this.dataStorageService.getRecipes();

  }
  onLogout() {
    this.authService.logout();
  }
}
