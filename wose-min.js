(function(ext){ext._shutdown=function(){},ext._getStatus=function(){return{status:2,msg:"Ready"}};var uris=new Array,props=new Array,un="",pw="";ext.get_value=function(p,u,cb){$.ajax({url:uris[u],success:function(data){var st="data";0!=props[p].indexOf("[")&&(st+="."),st+=props[p],console.log(st),value=eval(st),cb(value)},error:function(t,e,s){cb(e+" "+s)},username:un,password:pw,dataType:"json",xhrFields:{withCredentials:!0},crossDomain:!0})},ext.set_uri=function(t,e){uris[t]=e},ext.set_prop=function(t,e){props[t]=e},ext.get_uri=function(t){return uris[t]},ext.get_prop=function(t){return props[t]},ext.set_uname=function(t){un=t},ext.set_pass=function(t){pw=t};var descriptor={blocks:[[" ","set address of object %n to %s","set_uri",1,"https://data.beta.mksmart.org/entity/"],[" ","define property %n as %s","set_prop",1,"live"],["R","value of property %n for object %n","get_value",1,1],["r","address of object %n","get_uri",1],["r","definition of property %n","get_prop",1],[" ","set username to %s","set_uname",""],[" ","set password to %s","set_pass",""]]};ScratchExtensions.register("Web Object Extension",descriptor,ext)}({});