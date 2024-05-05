
import { AppModuleModule } from './app/app-module.module'; // Make sure the path to AppModule is correct
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//bootstrapApplication(AppComponent, appConfig)
  //.catch((err) => console.error(err));

  platformBrowserDynamic().bootstrapModule(AppModuleModule)
  .catch(err => console.error(err));
