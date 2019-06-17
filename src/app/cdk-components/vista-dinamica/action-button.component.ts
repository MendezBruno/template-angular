import { Component, ComponentFactoryResolver, ApplicationRef, Injector, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { CdkPortal, DomPortalHost } from '@angular/cdk/portal';

@Component({
  selector: 'app-action-button',
  template: `
    <ng-container *cdkPortal> 
      <ng-content> </ng-content>
    </ng-container>
  `,
  styles: []
})
export class ActionButtonComponent implements AfterViewInit, OnDestroy {
  
  @ViewChild(CdkPortal, {static: true})
  private portal: CdkPortal;
  
  private host: DomPortalHost;
  
  constructor( 
    private componentFactoryResolver: ComponentFactoryResolver, 
    private applicationRef: ApplicationRef,
    private injector: Injector
    ) { }
    
  ngOnInit() {
  }
  
  ngAfterViewInit(): void {
   debugger;
    this.host = new DomPortalHost(
      document.querySelector('#action'),
      this.componentFactoryResolver,
      this.applicationRef,
      this.injector
  );

  this.host.attach(this.portal);
  }
  ngOnDestroy(): void {
    this.portal.detach();
  }


  }
