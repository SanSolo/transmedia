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
	mode = 'Observable';
	sceneId = '1';
	scene: Scene;

	constructor (private sceneService: SceneService) {}

	ngOnInit() { this.getScenesById('1'); }

	getScenes() {
    this.sceneService.getScenes()
                   	 .subscribe(
                       scenes => this.scenes = scenes,
                       error =>  this.errorMessage = <any>error
                     );
	}
	
	getScenesById(sceneId: string){
		this.sceneService.getScenesById(sceneId)
                   	 .subscribe(
                       scene => this.scene = scene,
                       error =>  this.errorMessage = <any>error
                     );
		
	}
}


