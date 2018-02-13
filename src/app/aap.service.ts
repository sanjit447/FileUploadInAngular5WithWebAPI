import { Injectable } from '@angular/core';
import { Http, HttpModule} from '@angular/http';

@Injectable()

export class AppService {

  constructor(private http: Http) { }
  UploadClientContractDoc(formData: FormData) {
     return this.http.post('http://localhost:21416/api/DocumentUpload/MediaUpload', formData);
            // .map((response: Response) => {
            //   return response;
            // }).catch(this.handleError);
  }

}
