window.onload=function(){
	ping('https://rj-leisure.cf').then(function(delta) {
		console.log('Ping to rj-leisure.cf was ' + String(delta) + ' ms');
		document.getElementById("ping1").style.color=getPingColor(delta);
		document.getElementById("ping1").innerHTML+="<small>"+delta+" ms</small>";
	}).catch(function(err) {
		delta=5000;
		document.getElementById("ping1").style.color=getPingColor(delta);
		document.getElementById("ping1").innerHTML+="<small>"+delta+"+ ms</small>";
		console.error('Could not ping remote URL', err);
	});
	
	ping('https://rj-l.tk').then(function(delta) {
		console.log('Ping to rj-l.tk was ' + String(delta) + ' ms');
		document.getElementById("ping2").style.color=getPingColor(delta);
		document.getElementById("ping2").innerHTML+="<small>"+delta+" ms</small>";
	}).catch(function(err) {
		delta=5000;
		document.getElementById("ping2").style.color=getPingColor(delta);
		document.getElementById("ping2").innerHTML+="<small>"+delta+"+ ms</small>";
		console.error('Could not ping remote URL', err);
	});
	
	ping('https://rj-l.000webhostapp.com').then(function(delta) {
		console.log('Ping to rj-l.000webhostapp.com was ' + String(delta) + ' ms');
		document.getElementById("ping3").style.color=getPingColor(delta);
		document.getElementById("ping3").innerHTML+="<small>"+delta+" ms</small>";
	}).catch(function(err) {
		delta=5000;
		document.getElementById("ping3").style.color=getPingColor(delta);
		document.getElementById("ping3").innerHTML+="<small>"+delta+"+ ms</small>";
		console.error('Could not ping remote URL', err);
	});
	
	gets = readGET();
	if(gets["go"]){
		switch(gets["go"]){
			case "main":
				location.href="https://rj-leisure.cf";
				break;
			case "res1":
				location.href="https://rj-l.tk";
				break;
			case "res2":
				location.href="https://rj-l.000webhostapp.com";
				break;
			default:
				alert("Такого адреса не существует");
				break;
		}
	}
}

function getPingColor(data){
	if(data<500){
		return "lime";
	}else if(data>=500&&data<1000){
		return "orange";
	}else if(data>=1000){
		return "red";
	}
}

function readGET(){
    var params = window
    .location
    .search
    .replace('?','')
    .split('&')
    .reduce(
        function(p,e){
            var a = e.split('=');
            p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            return p;
        },
        {}
    );
    return params;
}

