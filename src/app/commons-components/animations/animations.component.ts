import {
	trigger,
	state,
	style,
	animate,
	transition,
	keyframes
} from "@angular/animations";


export const hideShowContent = trigger('hideShowContent', [
	state('true', style({ display: 'block', height: '*', opacity: 1 })),
	state('false', style({ display: 'none', height: '0px', opacity: 0 })),
	transition('0 => 1', animate('300ms ease-out')),
	transition('1 => 0', animate('300ms ease-out'))
])


export const SlideDownToggle = trigger("slideDownToggle", [
	state("close", style({ display: 'none', height: "0px", opacity: '0' })),
	state("open", style({ display: 'block', height: "*", opacity: '1' })),
	transition('close <=> open', animate('300ms ease-out'))
]);

export const flyLeftToRigth = trigger('flyLeftToRigth', [
	state('show', style({
	  transform: 'translateX(0)'
	})),
	state('hide',   style({
	  transform: 'translateX(-100%)'
	})),
	transition('show => hide', animate('1000ms ease-out')),
	transition('hide => show', animate('1000ms ease-in'))
  ])

export const flyRigthToLeft = trigger('flyRigthToLeft', [
	state('show', style({
	  transform: 'translateX(0)'
	})),
	state('hide',   style({
	  transform: 'translateX(+100%)'
	})),
	transition('show => hide', animate('1000ms ease-out')),
	transition('hide => show', animate('1000ms ease-in'))
  ])


