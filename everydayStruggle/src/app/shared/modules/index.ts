import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { IconsModule } from './icons';

import { NgBoostrapModule } from '../../modules/ng-bootstrap/ng-bootstrap.module';

export const sharedModules = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  InfiniteScrollModule,
  IconsModule,
  NgBoostrapModule
];
