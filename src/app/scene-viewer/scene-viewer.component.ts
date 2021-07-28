import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SceneViewerService } from '../scene-viewer.service';

@Component({
  selector: 'app-scene-viewer',
  templateUrl: './scene-viewer.component.html',
  styleUrls: ['./scene-viewer.component.css']
})
export class SceneViewerComponent implements OnInit {
  @ViewChild('rendererCanvas', { static: true })
  @HostListener('unloaded')
  public rendererCanvas: ElementRef<HTMLCanvasElement>;
  public frames = 0;
  public disabled = false;
  public id;

  public constructor(
    private viewerServ: SceneViewerService,
    private _Activatedroute: ActivatedRoute,
    private elementRef: ElementRef
  ) {
    this.id = this._Activatedroute.snapshot.paramMap.get('id');
  }

  ngOnDestroy() {}

  public ngOnInit(): void {
    this.viewerServ.createScene(this.rendererCanvas, this.id);
    this.viewerServ.animate();
  }
}
