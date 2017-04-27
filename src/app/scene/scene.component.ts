import { Component, OnInit } from '@angular/core';
import { Scene } from './scene';
import { SceneService } from './scene.service';

@Component ({
	selector:'scene-page',
	templateUrl: './scene.template.html',
	providers: [ SceneService]
})

export class SceneComponent implements OnInit{
	errorMessage: string;
	scenes: Scene[];
	sceneId = '1';
	scene: Scene;
	choix: string = '';

	constructor (private sceneService: SceneService) {}

	ngOnInit() { this.getScenesById('1'); }

	nextScene(){
		this.getScenesById(choix);

	}
	
	getScenesById(sceneId: string){
		this.sceneService.getScenesById(sceneId)
                   	 .subscribe(
                       scene => this.scene = scene,
                       error =>  this.errorMessage = <any>error
                     );		
	}

}


