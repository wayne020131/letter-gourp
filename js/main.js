$(document).ready(function() {

	var controller3 = new ScrollMagic.Controller();
	
	var wipeAnimations = new TimelineMax()
		.fromTo('section.panel.black', 1, { x: '100%'	}, { x: '0%', ease: Linear.easeNone})
		.fromTo('section.panel.green', 1, { x: '100%'	}, { x: '0%', ease: Linear.easeNone})
		.fromTo('section.panel.yellow', 1, { x: '100%'	}, { x: '0%', ease: Linear.easeNone})
		.fromTo('section.panel.red', 1, { x: '100%'	}, { x: '0%', ease: Linear.easeNone})
	    .fromTo('section.panel.purple', 1, { opacity: 0	}, { opacity: 1, ease: Linear.easeNone});
	
new ScrollMagic.Scene({
	triggerElement: '#pin-container',
	triggerHook: 'onLeave',
	duration: '500%'
})
	.setPin('#pin-container')
	.setTween(wipeAnimations)
	.addTo(controller3);
	
	
});

