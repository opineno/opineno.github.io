define(['pipAPI', 'https://cdn.jsdelivr.net/gh/opineno/opineno.github.io@main/fullscript.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
                //OP note: This overrides the categories in fullscript.js
		//OP note: category1 and category2 now inverted to match their compatible attributes in the main source code
    
          	category1 : {
			name : 'Dairy milk', //Will appear in the data.
		        title : {
	          	media : {word : 'Dairy milk'}, //Name of the category presented in the task.
	          	css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
          		height : 4 //Used to position the "Or" in the combined block.
            		}, 
            		stimulusMedia : [ //Stimuli content as PIP's media objects
    		    	{image : 'Cow1.jpg'}, 
        		{image : 'Cow1.jpg'}, 
        		{image : 'Cow2.jpg'}, 
        		{image : 'Cow2.jpg'}, 
        		{image : 'Cow3.jpg'}, 
        	        {image : 'Cow3.jpg'}  ], 
        	    	//Stimulus css
            		stimulusCss : {color:'#31940F','font-size':'1.8em'}
	      	      },
          	category2 : {
			name : 'Oat milk', //Will appear in the data.
		        title : {
		        media : {word : 'Oat milk'}, //Name of the category presented in the task.
		        css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
			height : 4 //Used to position the "Or" in the combined block.
		        }, 
		        stimulusMedia : [ //Stimuli content as PIP's media objects
    		        {image : 'Oat1.jpg'}, 
    	        	{image : 'Oat1.jpg'}, 
    	        	{image : 'Oat2.jpg'}, 
            		{image : 'Oat2.jpg'}, 
            		{image : 'Oat3.jpg'}, 
    	        	{image : 'Oat3.jpg'}  ], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		      },	
    
		base_url : {//Where are your images at?
			image : 'https://opineno.github.io/IAT_foods/images/'
		} 
	});
});
