describe('Initialize with null data', {
	'before all': function(){
		window.show = new Slideshow('show'); 
	},

	'after all': function(){
  	window.show.destroy('reset');
	},

	'should have 10 images as data': function(){
		value_of(window.show.data.images.length).should_be(10);
	},
	
	'should have a caption matching the original alt text': function(){
		value_of(window.show.data.captions[5]).should_be("5");
	}
});

describe('Initialize with null data and broken image', {
  '_delay': 2000,
  
	'before all': function(){
	  $$('img')[5].src = '';
		window.show = new Slideshow('show', null, { delay: 10, duration: 10 }); 
	},

	'after all': function(){
	  console.log(window.show.data.images);
  	window.show.destroy('empty');
	},

	'should not have broken image in data array': function(){
		value_of(window.show.data.images.length).should_be(9);
		value_of(window.show.data.images.contains('assets/5.jpg')).should_be(false);
	}
});