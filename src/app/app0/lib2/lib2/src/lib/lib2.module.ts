import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Childlib0Module } from '../../../childlib0/src/index';
import { Childlib1Module } from '../../../childlib1/src/index';
import { Childlib2Module } from '../../../childlib2/src/index';
import { Childlib3Module } from '../../../childlib3/src/index';
import { Childlib4Module } from '../../../childlib4/src/index';
import { Childlib5Module } from '../../../childlib5/src/index';
import { Childlib6Module } from '../../../childlib6/src/index';
import { Childlib7Module } from '../../../childlib7/src/index';
import { Childlib8Module } from '../../../childlib8/src/index';
import { Childlib9Module } from '../../../childlib9/src/index';
import { Childlib10Module } from '../../../childlib10/src/index';
import { Childlib11Module } from '../../../childlib11/src/index';
import { Childlib12Module } from '../../../childlib12/src/index';
import { Childlib13Module } from '../../../childlib13/src/index';
import { Childlib14Module } from '../../../childlib14/src/index';
import { Childlib15Module } from '../../../childlib15/src/index';
import { Lib2parentComponent } from './lib2parent/lib2parent.component';

@NgModule({
  imports: [
    CommonModule,
    Childlib0Module,
    Childlib1Module,
    Childlib2Module,
    Childlib3Module,
    Childlib4Module,
    Childlib5Module,
    Childlib6Module,
    Childlib7Module,
    Childlib8Module,
    Childlib9Module,
    Childlib10Module,
    Childlib11Module,
    Childlib12Module,
    Childlib13Module,
    Childlib14Module,
    Childlib15Module,
  ],
  declarations: [Lib2parentComponent],
  exports: [Lib2parentComponent],
})
export class Lib2Module {}
