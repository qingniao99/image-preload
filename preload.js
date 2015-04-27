/*
    sources = {    
        hashiqi: "https://dn-coding-net-production-static.qbox.me/8628eaef-1a80-420d-98a3-7982c84055ea.jpg"  }
    temporary:a default value that is live;
*/
function preloadImages(sources,callbackPercent,callbackComplete,temporary){    
    var loadedImages = 0;    
    var totalImages = 0; 
    var images = {};
    for (var src in sources) {    
        totalImages++;    
    }    
    for (var src in sources) {    
        images[src] = new Image(); 
        images[src].onload = function(){ 
            loadedImages++;
            //var percent=parseInt(loadedImages/totalImages*100)+"%";
            var percent=parseInt(loadedImages/totalImages*100)+"%";
            callbackPercent && callbackPercent(percent);   
            if (loadedImages == totalImages) { 
                callbackComplete && callbackComplete( percent );    
            }    
        }; 
        images[src].onerror = function(){ 
            loadedImages++;
            temporary && (this.src = temporary);
            //var percent=parseInt(loadedImages/totalImages*100)+"%";
            var percent=parseInt(loadedImages/totalImages*100)+"%";
            callbackPercent && callbackPercent(percent);   
            if (loadedImages == totalImages) { 
                callbackComplete && callbackComplete( percent );    
            }   
        }; 
        images[src].src = sources[src];    
    }    
}
