import { Component } from '@angular/core';
import {AppService} from './aap.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private _contractInfoTabService: AppService) { }
  fileChange(event) {
      const fileList: FileList = event.target.files;
     if (fileList.length > 0) {
     const file: File = fileList[0];
     const fileSize: number = fileList[0].size;
     if (fileSize <= 10485760) {
     const formData: FormData = new FormData();
     formData.append('Document', file);
     formData.append('ClientId', '12');
     formData.append('NetworkOrgID', '101');
     formData.append('DocumentType', 'ClientContractDoc');


     this._contractInfoTabService.UploadClientContractDoc(formData).subscribe(val => {
      if (val.json().status === 'success') {
        // this.networkContract.FilePath = val.json().data.fileName;
      }
    //  this.alertService.show(val.json());
    });
   //  }
  //    else {
  //    this.alertService.error('Client Name and Contract Org is not selected, please select Client Name and Contract Org first.');
  //    }
  //    }
  //    else
  //    {
  //      this.alertService.error('File size is exceeded');
  //    }
  //  }
  //  else
  //  {
  //    this.alertService.error('Something went Wrong.');
   }
}
}
}
