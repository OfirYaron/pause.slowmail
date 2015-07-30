/*
	node Quote.fm API Wrapper
*/

var request = require('request');


var nodeQuote = (function(){

	var BASE  = 'https://quote.fm/api/';


	/* Helper Functions */
		function addPage(page, start){
			if (page){
				var q = ((start === undefined)?"&":start)+"page=";
				if (Array.isArray(page)){
					return q+page.join(",");			
				}else if (isNumeric(page) && page != 0){
					q += page;
					return q;
				}
			}
			return '';
		}

		function serializeObject(object){
			var query = '?';
			if (typeof(object) === 'object'){
				for(var name in object){
					var obj = object[name]
					, 	part = name + "=";
					switch(typeof(obj)){
						case 'number' :
								part = (obj !== 0)?part+obj:'';
							break;
						case 'string' :
								part = (obj !== '')?part+obj:'';
							break;
						case 'object' :
								part = (getString(obj) !== '')?part+obj:'';
							break;
						default :
							break;
					}
					query += (part !== '')?part+ "&":'';
				}
			}
			return query.substr(0,query.length-1);
		}
		function getString(obj){
			if (Array.isArray(obj)){
				return obj.join(",");
			}
			return obj;
		}

		function isNumeric(id){
			return /^-?[0-9]+$/.test(id);
		}


	/* Private Functions */

		/* Recommendation */
		function getRecommendationList(object, type, callback){
			request(BASE + "recommendation/"+type+"/"+ serializeObject(object), function(e, r, b){
				processCallback(e, r, b, callback);
			});			
		}

		/* Articel */
		function getArticelList(object, type, callback){
			request(BASE + "article/"+type+"/" + serializeObject(object), function(e, r, b){
				processCallback(e, r, b, callback);
			});
		}


		/* User */
		function getUserList(object, type, callback){
			request(BASE + "user/"+type+"/" + serializeObject(object), function(e, r, b){
				processCallback(e, r, b, callback);
			});	
		}

		function processCallback(e, r, b, callback){
			var json = null;
			if (!e) {
				json = JSON.parse(b);
			}	
			callback(json, e);
		}

	return {

		API_VERSION : '1.0.6',

		/* Recommandation */
		getRecommendation : function (para, callback){
			var query = ((isNumeric(para))?"?id=":"?username=") + para;
			request(BASE + "recommendation/get/"+ query, function(e, r, b){
				processCallback(e, r, b, callback);
			});		
		},

		getRecommendationListByArticle : function (object, callback){
			getRecommendationList(object, "listByArticle", callback);
		},

		getRecommendationListByUser : function (object, callback){
			getRecommendationList(object, "listByUser", callback);
		},

		/* Article */

		getArticle : function(para, callback){
			if (isNumeric(para)){
				this.getArticleById(para, callback);
			}else{
				this.getArticleByUrl(para, callback);
			}
		},

		getArticleByUrl : function(url, callback){
			request(BASE + "article/get/?url=" + url, function(e, r, b){
				processCallback(e, r, b, callback);
			});
		},

		getArticleById : function(id, callback){
			request(BASE + "article/get/?id=" + id, function(e, r, b){
				processCallback(e, r, b, callback);
			});
		},

		getArticleListByPage : function(object, callback){		
			getArticelList(object, 'listByPage', callback);
		},

		getArticleListByCategories : function(object, callback){
			getArticelList(object, 'listByCategories', callback);
		},

		/* Page */

		getPage : function(para, callback){
			if (isNumeric(para)){
				this.getPageById(para, callback);
			}else{
				this.getPageByDomain(para, callback);
			}
		},

		getPageById : function(id, callback){
			request(BASE + "page/get/?id=" + id, function(e, r, b){
				processCallback(e, r, b, callback);
			});
		},

		getPageByDomain : function(domain, callback){
			request(BASE + "page/get/?domain=" + domain, function(e, r, b){
				processCallback(e, r, b, callback);
			});
		},

		getPageList : function(page, callback){		
			callback = arguments[arguments.length-1];
			request(BASE + "page/list/" + addPage(page, "?"), function(e, r, b){
				processCallback(e, r, b, callback);
			});
		},

		/* User */

		getUser : function(para, callback){
			if (isNumeric(para)){
				this.getUserById(para, callback);
			}else{
				this.getUserByName(para, callback);
			}
		},

		getUserByName : function(name, callback){
			request(BASE + "user/get/?username=" + name, function(e, r, b){
				processCallback(e, r, b, callback);
			});
		},

		getUserById : function(id, callback){
			request(BASE + "user/get/?id=" + id, function(e, r, b){
				processCallback(e, r, b, callback);
			});
		},

		getUserListFollowers : function(object, callback){
			getUserList(object, "listFollowers", callback);
		},

		getUserListFollowings : function(object, callback){
			getUserList(object, "listFollowings", callback);
		},


		/* Category */
		getCategoryList : function(callback){
			request(BASE + "category/list", function(e, r, b){
				processCallback(e, r, b, callback);
			});
		},


	}
})();

module.exports = nodeQuote;
