import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { WebcamModule } from 'ngx-webcam';
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
export class CamComponent {
  public webcamImage: any;
  imgs: any = [];

  private trigger: Subject<void> = new Subject<void>();
  triggerSnapshot(): void {
    this.trigger.next();
  }

  handleImage(webcamImage: WebcamImage): void {
    //this.webcamImage = webcamImage;
    this.imgs.push(webcamImage);
    this.sendImg(webcamImage);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  constructor(private firestore: Firestore) {}

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.triggerSnapshot();
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
    }, 7000);
  }

  //onsubmit
  sendImg(img: any) {
    return new Promise((resolve, reject) => {
      const usersImg = collection(this.firestore, 'userImg');
      addDoc(usersImg, { userImg: img._imageAsDataUrl })
        .then((res: any) => {
          console.log(res);
        })
        .catch((err: any) => {
          console.log(err);
        });
    });
  }
  // WIDTH = 640;
  // HEIGHT = 480;

  // @ViewChild('video')
  // public video!: ElementRef;

  // @ViewChild('canvas')
  // public canvas!: ElementRef;

  // captures: string[] = [];
  // error: any;
  // isCaptured!: boolean;

  // async ngAfterViewInit() {
  //   await this.setupDevices();
  // }

  // async setupDevices() {
  //   if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  //     try {
  //       const stream = await navigator.mediaDevices.getUserMedia({
  //         video: true,
  //       });
  //       if (stream) {
  //         this.video.nativeElement.srcObject = stream;
  //         this.video.nativeElement.play();
  //         this.error = null;
  //       } else {
  //         this.error = 'You have no output video device';
  //       }
  //     } catch (e) {
  //       this.error = e;
  //     }
  //   }
  // }

  // capture() {
  //   this.drawImageToCanvas(this.video.nativeElement);
  //   this.captures.push(this.canvas.nativeElement.toDataURL('image/png'));
  //   this.isCaptured = true;
  // }

  // removeCurrent() {
  //   this.isCaptured = false;
  // }

  // setPhoto(idx: number) {
  //   this.isCaptured = true;
  //   var image = new Image();
  //   image.src = this.captures[idx];
  //   this.drawImageToCanvas(image);
  // }

  // drawImageToCanvas(image: any) {
  //   this.canvas.nativeElement
  //     .getContext('2d')
  //     .drawImage(image, 0, 0, this.WIDTH, this.HEIGHT);
  // }
}
