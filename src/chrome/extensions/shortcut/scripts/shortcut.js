/**
 * @author kingfo  oicuicu@gmail.com
 */
var shortcut = (function(){
	var NAME = "Need For Ready!",
		nfr,t;
		
		function flush(){
			chrome.management.get(nfr.id,function(o){
				nfr = o;
				updateICON();
			});
		}
		
		function setEnabled(){
			chrome.management.setEnabled(nfr.id,!nfr.enabled);
			flush();
		}
		
		function updateICON(){
			chrome.browserAction.setIcon({
                        path: "images/"+(nfr.enabled?'on':'off')+"_icon_016.png"
            });
		}
		
		function init(){
			chrome.management.getAll(function(list){
				var i , o;
				for (i in list){
					o = list[i];
					if(o.name === NAME){
						nfr = o;
						break;
					}
				}	
			});
			
			chrome.browserAction.onClicked.addListener(function (tab){
				setEnabled();
			});
			
			updateICON();
		}
		
		
	
	return{
		init:init
	}
})();

