define(['pipAPI', 'https://cdn.jsdelivr.net/gh/opineno/opineno.github.io@main/fullscript.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Day pics', //Will appear in the data.
			title : {
				media : {word : 'Day pics'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'day1.jpeg'}, 
    			{image : 'day2.jpeg'}, 
    			{image : 'day3.jpeg'}, 
    			{image : 'day4.jpeg'}, 
    			{image : 'day5.jpeg'}, 
    			{image : 'day6.jpeg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Night pics', //Will appear in the data.
			title : {
				media : {word : 'Night pics'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'night1.jpeg'}, 
    			{image : 'night2.jpeg'}, 
    			{image : 'night3.jpeg'}, 
    			{image : 'night4.jpeg'}, 
    			{image : 'night5.jpeg'}, 
    			{image : 'night6.jpeg'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
		
		attribute1 :
			{
				name : 'Bad outcomes',
				title : {
					media : {word : 'Bad words'},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'fat'},
					{word: 'sick'},
					{word: 'weak'},
					{word: 'lazy'},
					{word: 'sleepy'},
					{word: 'anxious'},
					{word: 'depressed'},
					{word: 'vomit'}
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			},
			attribute2 :
			{
				name : 'Good words',
				title : {
					media : {word : 'Good words'},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'energized'},
					{word: 'happy'},
					{word: 'strong'},
					{word: 'healthy'},
					{word: 'focused'},
					{word: 'relaxed'},
					{word: 'motivated'},
					{word: 'fit'}
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			},


		base_url : {//Where are your images at?
			image : 'https://opineno.github.io/images/'
		} 
	});
});
