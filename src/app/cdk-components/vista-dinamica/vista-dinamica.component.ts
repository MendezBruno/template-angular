import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit, TemplateRef } from '@angular/core';
import { ActionButtonComponent } from './action-button.component';
import { Portal, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { FaceGoogleComponent } from '../../vistas/logins/face-google/face-google.component';
import { SupportComponent } from './support/support.component';

@Component({
  selector: 'app-vista-dinamica',
  templateUrl: './vista-dinamica.component.html',
  styleUrls: ['./vista-dinamica.component.css']
})
export class VistaDinamicaComponent {
  
  action = ActionButtonComponent

  handleClick() {
    console.log('Principal click');
  }
  
  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<any>;
  selectedPortal: Portal<any>;
  componentPortal: ComponentPortal<SupportComponent>;
  templatePortal: TemplatePortal<any>;

  constructor(private _viewContainerRef: ViewContainerRef) {}

  ngAfterViewInit() {
    this.componentPortal = new ComponentPortal(SupportComponent);
    this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
  }

  supportClick() {
    console.log('vista click')
  }
}

@Component({ 
  selector: 'component-portal-example',
  template: `Hello, this is a component portal`
})
export class ComponentPortalExample {}