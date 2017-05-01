import { NgModule, Component, OnInit, AfterViewInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { Scene } from './scene';
import { SceneService } from './scene.service';
import {ToasterModule, ToasterService, ToasterConfig} from 'angular2-toaster';

@NgModule({
    imports: [ToasterModule],
    declarations: [SceneComponent],
    providers: [],
    bootstrap: [SceneComponent]
})

@Component ({
	selector:'scene-page',
	templateUrl: './scene.template.html',
	providers: [ SceneService]/*,
	animations: [
        trigger('hideScene', [
            state('inactive', style({
                display: 'none'
            })),
            state('active', style({
                display: 'block'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ]),

    ]*/
})

export class SceneComponent implements OnInit{
	errorMessage: string;
	private scenes: Array<Scene> = [];
	sceneId = '1';
  cashBar = 0;
  prodBar = 0;
  popBar = 0;
	private scene: any;
	choix: string = '';
	private toasterService: ToasterService;

	constructor (private sceneService: SceneService, toasterService: ToasterService) {
		this.toasterService = toasterService;
	}
	public toasterconfig : ToasterConfig =
        new ToasterConfig({
            showCloseButton: false,
            tapToDismiss: false,
            timeout: 15000
    });

	ngOnInit() { this.getScenesById('1'); }

	//ngAfterViewInit() {this.popToast();}

	nextScene(choix: string){
		window.scrollTo(0,0);
		this.getScenesById(choix);
	}

	popToast(scene: Object) {
        this.toasterService.clear();
        this.toasterService.pop('warning','Denis', this.scene.acf.eracom);
        this.toasterService.pop('success','Emilie', this.scene.acf.comem);
        this.cashBar =+ this.scene.acf.cashbar;
        this.prodBar =+ this.scene.acf.prodbar;
        this.popBar =+ this.scene.acf.popbar;
    }

	getScenesById(sceneId: string){
		this.sceneService.getScenesById(sceneId)
                   	 .subscribe(
                       value => this.scene = value,
                       error =>  this.errorMessage = <any>error,
                       () => this.popToast(this.scene)
                     );


	}

	toggleScene() {
       // this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    }


}
