import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProcessBudgetFileService } from 'src/app/services/process-budget-file.service';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-filedropzone',
  templateUrl: './filedropzone.component.html',
  styleUrls: ['./filedropzone.component.css']
})
export class FiledropzoneComponent {
  public files: any[] = [];
  fileContent: string | ArrayBuffer = '';
  @Output() onFileContentChange = new EventEmitter();
  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog,private fileProcesser:ProcessBudgetFileService){}

  onFileChange(event){

    let pFileList: File[];
    pFileList = event.target.files;
    this.files = Object.keys(pFileList).map((key : any) => pFileList[key]);
    this._snackBar.open("Successfully upload!", 'Close', {
      duration: 2000,
    });
    let file =pFileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function(x) {
      self.fileContent = fileReader.result;
    }
    fileReader.readAsText(file);
    
  }

  deleteFile(f : any){
    this.files = this.files.filter(function(w){ return w.name != f.name });
    this._snackBar.open("Successfully delete!", 'Close', {
      duration: 2000,
    });
  }

  openConfirmDialog(pIndex : any): void {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      panelClass: 'modal-xs'
    });
    dialogRef.componentInstance.fName = this.files[pIndex].name;
    dialogRef.componentInstance.fIndex = pIndex;


    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.deleteFromArray(result);
      }
    });
  }

  deleteFromArray(index :number) {
    console.log(this.files);
    this.files.splice(index, 1);
  }

  onUpload(){
    this.onFileContentChange.emit(this.fileContent);
    
  }
}
