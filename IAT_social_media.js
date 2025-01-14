define(['pipAPI', 'https://cdn.jsdelivr.net/gh/opineno/opineno.github.io@main/fullscript.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
                //OP note: This overrides the categories in fullscript.js
		//OP note: category1 and category2 now inverted to match their compatible attributes in the main source code
    
          	category1 : {
			name : 'Social media', //Will appear in the data.
		        title : {
	          	media : {word : 'Social media'}, //Name of the category presented in the task.
	          	css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
          		height : 4 //Used to position the "Or" in the combined block.
            		}, 
            		stimulusMedia : [ //Stimuli content as PIP's media objects
    		    	{image : 'Facebook.jpg'}, 
        		{image : 'Instagram.jpg'}, 
        		{image : 'Snapchat.jpg'}, 
        		{image : 'TikTok.jpg'}, 
        		{image : 'X.jpg'}, 
        	        {image : 'YouTube.jpg'}  ], 
        	    	//Stimulus css
            		stimulusCss : {color:'#31940F','font-size':'1.8em'}
	      	      },
          	category2 : {
			name : 'Productivity', //Will appear in the data.
		        title : {
		        media : {word : 'Productivity'}, //Name of the category presented in the task.
		        css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
			height : 4 //Used to position the "Or" in the combined block.
		        }, 
		        stimulusMedia : [ //Stimuli content as PIP's media objects
    		        {image : 'Calculator.jpg'}, 
    	        	{image : 'Calendar.jpg'}, 
    	        	{image : 'Clock.jpg'}, 
            		{image : 'Maps.jpg'}, 
            		{image : 'Notes.jpg'}, 
    	        	{image : 'Weather.jpg'}  ], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		      },	
    
		base_url : {//Where are your images at?
			image : 'https://opineno.github.io/IAT_social_media/images/'
		} 
	});
});
