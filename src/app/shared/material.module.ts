import { NgModule } from '@angular/core';
import { MatToolbarModule, MatSidenavModule, MatInputModule, MatButtonModule, MatAutocompleteModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatRadioModule, MatMenuModule, MatCardModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatListModule, MatStepperModule, MatTabsModule, MatTreeModule, MatButtonToggleModule, MatBadgeModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule, MatRippleModule, MatBottomSheetModule, MatDialogModule, MatSnackBarModule, MatTooltipModule, MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

// remark unnecessary module if you don't need it.
const moduleList = [
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSortModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
];

@NgModule({
  imports: moduleList,
  exports: moduleList
})
export class MaterialModule { }
