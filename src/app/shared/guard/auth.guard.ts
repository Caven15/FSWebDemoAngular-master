import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Inserez ici la logique...
  // permet se savoir si l'utilisateur est connecté
  const isConnected = true
  if (isConnected) {
    return true;
  }
  else{
    return false
  }
};