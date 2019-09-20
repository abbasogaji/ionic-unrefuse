import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Garbage } from '../garbage/garbage';
import { GarbageService } from '../garbage/garbage.service';
import { ToastController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { API_URL } from '../app-commons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {

  currentImage: any;
  lng : number = 3.3717544;
  lat : number = 6.5142624;  
  constructor(
    private camera: Camera,
    private garbageService : GarbageService,
    public toastController: ToastController,
    private geolocation: Geolocation, 
    private filePath : FilePath,
    private fileTransfer : FileTransfer
    ) { }

  takePicture() {
    this.setCurrentLocation()
    console.log("Clicked")
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.filePath.resolveNativePath(imageData).then(filePath => {
            this.createGarbage(filePath)
      });
      
      }, (err) => {
        console.log("Camera issue:" + err);
    });
  }


  setCurrentLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat =  resp.coords.latitude
      this.lng = resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }


  createGarbage(filePath){
    const newGarbage = new Garbage({
      garbageType :  'ramdom',
      contents : ['plastic', 'organic-waste', 'unknown'],
      latitude : this.lat,
      longitude : this.lng,
      dirtLevel : 1,
    })

    this.transferFileWithData(filePath, newGarbage.params)
    
  }

  
  transferFileWithData(filePath, params){
    let fileName = filePath.substr(filePath.lastIndexOf('/') + 1);
    console.log(fileName)
      const ftOptions : FileUploadOptions = {
        fileKey : 'image',
        fileName : fileName,
        mimeType: "image/jpeg",
        chunkedMode: false,
        params : {fields : params}
      }
      const fileTransferObj: FileTransferObject = this.fileTransfer.create();
      fileTransferObj.upload(filePath, API_URL.GARBAGE+'/new', ftOptions)
      .then((data) => {
          // success
            
      }, (err) => {
          // error
          console.log("Ops error occured!!", err)
      })
  }

}
