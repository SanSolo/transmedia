import { Component, OnInit } from '@angular/core';
import { Scene } from './scene';
import { SceneService } from './scene.service';

const SCENES: Scene[] = [
	{ id: 1, sceneTitle: 'Première scène', scenePlotText: 'Petit texte pour mettre bien', scenePlotImgUrl: './img/scene1.jpg'},
	{ id: 2, sceneTitle: 'Première scène', scenePlotText: 'Petit texte pour mettre bien', scenePlotImgUrl: './img/scene2.jpg'}
];

@Component ({
	selector:'scene-page',
	templateUrl: './scene.template.html',
	providers: [ SceneService]
})

export class SceneComponent implements OnInit{
	errorMessage: string;
	scenes: Scene[];
	mode = 'Observable';

	constructor (private sceneService: SceneService) {}

	ngOnInit() { this.getScenes(); }

	getScenes() {
    this.sceneService.getScenes()
                   	 .subscribe(
                       scenes => this.scenes = scenes,
                       error =>  this.errorMessage = <any>error);
  }

	/*
	scene: Scene = {
		id: 1,
		sceneTitle: 'Ceci un est autre test',
		scenePlotText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper, neque posuere ornare auctor, ante libero hendrerit tortor, a vulputate magna augue ut orci. Nullam vitae interdum ante. Phasellus eu eros sit amet lectus egestas molestie. Aenean iaculis, dolor nec tincidunt ultrices, ex nibh semper dui, sit amet malesuada mauris neque venenatis risus. Praesent eu neque erat. Nulla imperdiet porta augue, bibendum rhoncus ante sollicitudin sit amet. Etiam pellentesque congue arcu, id condimentum mauris rutrum at. Nullam porttitor mauris eu massa pretium, at dignissim enim consectetur. Aliquam tincidunt neque leo, et bibendum justo volutpat et. Suspendisse nec ultrices tortor. Cras sollicitudin ipsum est, ut auctor diam placerat vitae. Nunc in dolor ex. Ut eu eros malesuada, consectetur libero vel, pellentesque nunc. Vestibulum elit velit, tempus at lacinia at, varius quis turpis. Vestibulum ut placerat erat. Ut velit ex, pretium eget ante ut, aliquet rhoncus magna. Integer iaculis elit id gravida auctor. Donec ultricies tincidunt ante, ac faucibus ipsum elementum eget. Donec ac finibus justo. In nisl ante, pulvinar vel augue vitae, scelerisque efficitur nulla. ',
		scenePlotImgUrl: './img/scene1.jpg'
	};*/
}


