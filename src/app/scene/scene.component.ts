import { NgModule, Component, OnInit, AfterViewInit } from '@angular/core';
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
	providers: [ SceneService]
})

export class SceneComponent implements OnInit{
	errorMessage: string;
	private scenes: Array<Scene> = [];
	sceneId = '1';
	private scene: Scene;
	choix: string = '';
	private toasterService: ToasterService;

	constructor (private sceneService: SceneService, toasterService: ToasterService) {
		this.toasterService = toasterService;
	}
	public toasterconfig : ToasterConfig =
        new ToasterConfig({
            showCloseButton: false,
            tapToDismiss: false,
            timeout: 0
    });
	ngOnInit() { this.getScenesById('1'); }
	ngAfterViewInit() {this.popToast();}

	nextScene(choix: string){
		this.getScenesById(choix);

	}
	popToast() {
        this.toasterService.pop('success','Emilie', 'this.scene.acf.description_1');
    }

	getScenesById(sceneId: string){
		this.sceneService.getScenesById(sceneId)
                   	 .subscribe(
                       scene => this.scene = scene,
                       error =>  this.errorMessage = <any>error
                     );

	}

}
