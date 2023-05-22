// IMPORT DATA CELESTIA
function ajaxobj() {
	try {
		_ajaxobj = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
		try {
			_ajaxobj = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (E) {
			_ajaxobj = false;
		}
	}
   
	if (!_ajaxobj && typeof XMLHttpRequest!='undefined') {
		_ajaxobj = new XMLHttpRequest();
	}	
	return _ajaxobj;
}
//extract from Prometheus -> get_prometheus.php
function showdata (data,red) {
var request = new XMLHttpRequest();
         request.open("GET", "get_prometheus.php?dato="+data+"&red="+red, true);
		 async: false; // request is synchronous
		 cache: false; // not use browser cache
         request.onreadystatechange = function()
         {
             if (request.readyState == 4 && request.status == 200)
             {
                 document.getElementById(data).innerHTML = request.responseText;
		     }
         }
         request.send();		
}
//extract from RPC with param -> get_rpc.php
function rpc_ask_data (data,param,chain) {
var request = new XMLHttpRequest();
         request.open("GET", "get_rpc.php?dato="+data+"&param="+param+"&chain="+chain, true);
		  async: false; // request is synchronous
		 cache: false; // not use browser cache
         request.onreadystatechange = function()
         {
             if (request.readyState == 4 && request.status == 200)
             {
                 document.getElementById(data).innerHTML = request.responseText;
		     }
         }
         request.send();		
}
function rpc_data (data,chain) {
var request = new XMLHttpRequest();
         request.open("GET", "get_rpc.php?dato="+data+"&chain="+chain, true);
		  async: false; // La petición es síncrona
		 cache: false; // No queremos usar la caché del navegador
         request.onreadystatechange = function()
         {
             if (request.readyState == 4 && request.status == 200)
             {
                 document.getElementById(data).innerHTML = request.responseText;
		     }
         }
         request.send();		
}
function another_rpc_data (data,rpc) {
var request = new XMLHttpRequest();
         request.open("GET", "get_other_rpc.php?dato="+data+"&rpc="+rpc, true);
		  async: false; // La petición es síncrona
		 cache: false; // No queremos usar la caché del navegador
         request.onreadystatechange = function()
         {
             if (request.readyState == 4 && request.status == 200)
             {
                 document.getElementById(data).innerHTML = request.responseText;
		     }
         }
         request.send();		
}




