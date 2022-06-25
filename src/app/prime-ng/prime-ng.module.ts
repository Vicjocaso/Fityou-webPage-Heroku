import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TreeSelectModule } from 'primeng/treeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { FormsModule } from '@angular/forms';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { SplitterModule } from 'primeng/splitter';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

// import {MenuItem} from 'primeng/api';

@NgModule({
  exports: [
    ButtonModule,
    MenubarModule,
    InputTextModule,
    ImageModule,
    CardModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    RatingModule,
    RippleModule,
    DropdownModule,
    CalendarModule,
    TreeSelectModule,
    CheckboxModule,
    CardModule,
    TableModule,
    DividerModule,
    FormsModule,
    DynamicDialogModule,
    ToastModule,
    SplitterModule,
    MessageModule,
    MessagesModule,
    ProgressSpinnerModule,
  ],
})
export class PrimeNgModule {}
