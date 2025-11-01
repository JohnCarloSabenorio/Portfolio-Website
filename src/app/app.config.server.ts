import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideAnimations } from '@angular/platform-browser/animations';

export const serverConfig: ApplicationConfig = {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    provideServerRendering(),
    provideAnimations(),
  ],
};

export const config = serverConfig;
