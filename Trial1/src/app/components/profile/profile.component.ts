// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent{
//   form: FormGroup<any> = new FormGroup({});
//   file?: File;
//   public lis: any =[];

//   constructor(private fb: FormBuilder, private http: HttpClient) {}

//   onFileChange(event: any) {
//     if (event.target.files.length > 0) {
//       this.file = event.target.files[0];
//       this.form.get('fileInput')?.setValue(this.file?.name);
//     } else {
//         // this.file = null;
//       this.form.get('fileInput')?.setValue(null);
//     }

//     this.form.get('fileInput')?.markAsTouched();
//     this.form.get('fileInput')?.updateValueAndValidity();
//   }

//   onSubmit() {
//     const formData = new FormData();
//     if (this.file) {
//       formData.append('file', this.file);
//     }

//     this.http.post('https://localhost:7044/api/EmployeeAPI/Upload/', formData).subscribe((result: any) => {
//       console.log(`Image uploaded with id ${result.id}.`);
//     });
//   }
// }

import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent{
  progress: number = 0;
  message: string = '';
  @Output() public onUploadFinished = new EventEmitter();
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  uploadFile = (files: any) => {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    
    this.http.post('https://localhost:7044/api/EmployeeAPI/Img', formData, {reportProgress: true, observe: 'events'})
      .subscribe({
        next: (event) => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * (event.loaded / (event.total ?? 1)));
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }
}