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
  private reponseId: string;
	private scenes: Array<Scene> = [];
	private sceneId: string = '1';
  private cashBar: number = 0;
  private prodBar: number = 0;
  private popBar: number = 0;
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


	nextScene(choix: string){
		window.scrollTo(0,0);
		this.getScenesById(choix);
    if(this.reponseId === 'radio1'){
      this.cashBar += parseInt(this.scene.acf.cash_1);
      this.prodBar += parseInt(this.scene.acf.production_1);
      this.popBar += parseInt(this.scene.acf.popularite_1);
    }
    if(this.reponseId === 'radio2'){
      this.cashBar += parseInt(this.scene.acf.cash_2);
      this.prodBar += parseInt(this.scene.acf.production_2);
      this.popBar += parseInt(this.scene.acf.popularite_2);
    }
    if(this.reponseId === 'radio3'){
      this.cashBar += parseInt(this.scene.acf.cash_3);
      this.prodBar += parseInt(this.scene.acf.production_3);
      this.popBar += parseInt(this.scene.acf.popularite_3);
    }
    console.log('Cashbar '+ this.cashBar);
    console.log('Prodbar '+ this.prodBar);
    console.log('Popbar '+ this.popBar);
	}

	popToast(scene: Object) {
        this.toasterService.clear();
        console.log(this.scene.acf.parle);
        if (this.scene.acf.parle === 'Comem'){
          this.toasterService.pop('warning','Denis', this.scene.acf.eracom);
          this.toasterService.pop('success','Emilie', this.scene.acf.comem);
        }
        else {
          this.toasterService.pop('success','Emilie', this.scene.acf.comem);
          this.toasterService.pop('warning','Denis', this.scene.acf.eracom);
        }
    }

	getScenesById(sceneId: string){
		this.sceneService.getScenesById(sceneId)
                   	 .subscribe(
                       value => this.scene = value,
                       error =>  this.errorMessage = <any>error,
                       () => this.popToast(this.scene)
                     );


	}

  getId(event: any){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    console.log(value);
    this.reponseId = value;
  }

	toggleScene() {
       // this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    }


}
