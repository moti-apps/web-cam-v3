import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { WebcamInitError, WebcamModule, WebcamUtil } from 'ngx-webcam';
import { WebcamImage } from 'ngx-webcam';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { Subject, Observable } from 'rxjs';
@Component({
  selector: 'app-cam',
  standalone: true,
  imports: [TranslocoModule, WebcamModule],
  templateUrl: './cam.component.html',
  styleUrls: ['./cam.component.scss'],
})
export class CamComponent implements OnInit {
  @Output()
  public pictureTaken = new EventEmitter<WebcamImage>();

  // toggle webcam on/off
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string = '';
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean | string> = new Subject<
    boolean | string
  >();
  constructor(private firestore: Firestore) {}
  public ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs().then(
      (mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      }
    );
    this.handelSnapshot();
    setTimeout(() => {
      this.handleSwitchCamera();
    }, 10000);
  }

  private handelSnapshot() {
    let interval = setInterval(() => {
      this.triggerSnapshot();
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
    }, 7000);
  }

  private handleSwitchCamera() {
    this.showNextWebcam(true);
    setTimeout(() => {
      this.handelSnapshot();
    }, 1500);
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  //switch camera camera
  public showNextWebcam(directionOrDeviceId: boolean | string): void {
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.pictureTaken.emit(webcamImage);
    this.sendImg(webcamImage);
  }

  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }
  // public webcamImage: any;
  // imgs: any = [];

  // private trigger: Subject<void> = new Subject<void>();
  // triggerSnapshot(): void {
  //   this.trigger.next();
  // }

  // handleImage(webcamImage: WebcamImage): void {
  //   debugger;
  //   console.log('web cam', webcamImage);
  //   //this.webcamImage = webcamImage;
  //   this.imgs.push(webcamImage);
  //   this.sendImg(webcamImage);
  // }

  // public get triggerObservable(): Observable<void> {
  //   return this.trigger.asObservable();
  // }

  // constructor(private firestore: Firestore) {}

  // ngOnInit(): void {
  //   let interval = setInterval(() => {
  //     this.triggerSnapshot();
  //   }, 1000);

  //   setTimeout(() => {
  //     clearInterval(interval);
  //   }, 7000);
  // }

  // //onsubmit
  sendImg(img: WebcamImage) {
    const usersImg = collection(this.firestore, 'userImg');
    return addDoc(usersImg, { userImg: img.imageAsBase64 })
      .then((res) => console.log('Image saved:', res))
      .catch((err) => console.error('Error:', err));
  }
}
