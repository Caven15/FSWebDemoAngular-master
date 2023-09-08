import { CanActivateFn } from '@angular/router';
import { FakeAuthService } from '../services/fake-auth.service';

export const authGuard: CanActivateFn = () => {
  // Inserez ici la logique...
  // permet se savoir si l'utilisateur est connecté
  const isConnected = sessionStorage.getItem('email')
  if (isConnected) {
    return true;
  }
  else{
    return false
  }
};