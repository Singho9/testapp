import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
function factorial(n) {
  // Base case: factorial of 0 or 1 is 1
  if (n === 0 || n === 1) {
    return 1;
  }

 

  // Recursive case: factorial of n is n multiplied by factorial of (n-1)
  return n * factorial(n - 1);
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
