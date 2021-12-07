__NUXT_JSONP__("/blog/termius-port-forwarding", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar){return {data:[{post:{slug:"termius-port-forwarding",description:"Explanation of a bit strange GUI",title:"Port forwarding using Termius",author:Q,posted:1621414954000,updated:1622047387000,tags:["Blog",z,H],keywords:[I,"ssh port forwarding","termius port forwarding",Q,"Ryoidenshi Aokigahara","blog","peronal blog"],toc:[{id:R,depth:t,text:S},{id:T,depth:t,text:H},{id:U,depth:J,text:V},{id:W,depth:J,text:X},{id:Y,depth:J,text:Z},{id:I,depth:t,text:z},{id:_,depth:t,text:$},{id:aa,depth:t,text:ab},{id:ac,depth:t,text:ad}],body:{type:"root",children:[{type:b,tag:u,props:{id:R},children:[{type:b,tag:l,props:{href:"#disclaimer",ariaHidden:m,tabIndex:n},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:S}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"There are thousands (or millions) articles in blogs and etc. about port forwarding. In most cases they describes how to open some port on your device or router, how to passthrough traffic from the internet into local network (concrete device). This post is not about such port forwarding process."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Here I will talk about port forwarding feature of SSH. SSH assumes the presence of some server, which can be directly accessed from anywhere through SSH-connection. So probably this post is not what you're searching for."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"But if you using "},{type:b,tag:l,props:{href:"https:\u002F\u002Ftermius.com",rel:[ae,af,ag],target:ah},children:[{type:a,value:z}]},{type:a,value:" and searched for ssh port forwarding feature - welcome here :)"}]},{type:a,value:c},{type:b,tag:u,props:{id:T},children:[{type:b,tag:l,props:{href:"#ssh-port-forwarding",ariaHidden:m,tabIndex:n},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:H}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"I guess this feature is known by most of SSH users. Short reminder:"}]},{type:a,value:c},{type:b,tag:K,props:{id:U},children:[{type:b,tag:l,props:{href:"#local",ariaHidden:m,tabIndex:n},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:V}]},{type:a,value:c},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,L]},children:[{type:b,tag:E,props:{},children:[{type:a,value:"ssh -L 8080:localhost:3000 user@remote-server\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"This will redirect requests on your local 8080 port to remote server's 3000 port"}]},{type:a,value:c},{type:b,tag:K,props:{id:W},children:[{type:b,tag:l,props:{href:"#remote",ariaHidden:m,tabIndex:n},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:X}]},{type:a,value:c},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,L]},children:[{type:b,tag:E,props:{},children:[{type:a,value:"ssh -R 3000:127.0.0.1:8080 user@remote-server\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"This will redirect requests on your server's port 3000 to your local 8080 port"}]},{type:a,value:c},{type:b,tag:K,props:{id:Y},children:[{type:b,tag:l,props:{href:"#dynamic-socks5-proxy",ariaHidden:m,tabIndex:n},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:Z}]},{type:a,value:c},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,L]},children:[{type:b,tag:E,props:{},children:[{type:a,value:"ssh -D 8080 user@remote-server\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"This will setup SOCKS5 proxy on remote server and forward it's to your local 8080 port, so you can add anywhere a SOCKS5 proxy with address 127.0.0.1:8080"}]},{type:a,value:c},{type:b,tag:"v-alert-warning-slot",props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:F}]},{type:a,value:" is shown in examples because in some systems localhost points to IPv6("},{type:b,tag:q,props:{},children:[{type:a,value:"::1"}]},{type:a,value:") instead of IPv4("},{type:b,tag:q,props:{},children:[{type:a,value:F}]},{type:a,value:") while most frameworks listen for connections on IPv4. You still can use "},{type:b,tag:f,props:{},children:[{type:a,value:"localhost"}]},{type:a,value:", but if it doesn't work, try to replace it with "},{type:b,tag:f,props:{},children:[{type:a,value:F}]},{type:a,value:"."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"v-alert-info-slot",props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Remember, that if you need to access target port not only from localhost, but also from other networks (local\u002Fglobal) you need to use "},{type:b,tag:f,props:{},children:[{type:a,value:"0.0.0.0"}]},{type:a,value:" instead of "},{type:b,tag:f,props:{},children:[{type:a,value:F}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:u,props:{id:I},children:[{type:b,tag:l,props:{href:"#termius",ariaHidden:m,tabIndex:n},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Termius is cross-platform app, that provide us comfortable GUI for most of setups of SSH connection. Yes, of course we can look for introduction for ssh-aliases, config files and etc., but I guess most of users likes GUI apps and Termius very well here."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"In Termius we get:"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"Add host and provide all data with fields instead of specifying them on each connect or making alias in config file"}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"Sort your list with groups (actually folders)"}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"Import hosts from few sources (local ssh config, SecureCRT, PuTTY, KiTTY, CSV, AWS, Digital Ocean)"}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"Supported protocols are SSH, Telnet and Mosh"}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"Port Forwarding as simply as adding hosts"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"In premium there are also data sync with SFTP, but our post is not about that."}]},{type:a,value:c},{type:b,tag:u,props:{id:_},children:[{type:b,tag:l,props:{href:"#problem-with-adding-port-forwarding",ariaHidden:m,tabIndex:n},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:$}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"They behave like switches: once added, it can be enabled or disabled with double-click. Simple and easy. But the problem appears when you want to add first port forwarding."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"We will not talk about Dynamic forwarding(SOCKS proxy) cause UI of adding it is fully understandable:"}]},{type:a,value:c},{type:b,tag:G,props:{source:"https:\u002F\u002Fi.imgur.com\u002FrHIVwjo.png",description:"Screenshot of adding Dynamic forwarding rule"},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:x}]},{type:a,value:" here is target remote host which will be our proxy, "},{type:b,tag:f,props:{},children:[{type:a,value:r}]},{type:a,value:" (why "},{type:b,tag:q,props:{},children:[{type:a,value:"from"}]},{type:a,value:"?) and "},{type:b,tag:f,props:{},children:[{type:a,value:"Bind address"}]},{type:a,value:" are local ip and port for using proxy."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Let's look at "},{type:b,tag:f,props:{},children:[{type:a,value:"Local forwarding"}]},{type:a,value:ai}]},{type:a,value:c},{type:b,tag:G,props:{source:"https:\u002F\u002Fi.imgur.com\u002FtCaSssN.png",description:"Screenshot of adding Local forwarding rule"},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Well, it looks understandable, but you will fail with forwarding, if you try to fill them intuitive. When you see "},{type:b,tag:f,props:{},children:[{type:a,value:x}]},{type:a,value:M},{type:b,tag:f,props:{},children:[{type:a,value:r}]},{type:a,value:" intuition says that they both belong to remote server, the same is with "},{type:b,tag:f,props:{},children:[{type:a,value:N}]},{type:a,value:M},{type:b,tag:f,props:{},children:[{type:a,value:y}]},{type:a,value:" - they feels to belong local machine. Finally picture is that we forwards answers from remote "},{type:b,tag:f,props:{},children:[{type:a,value:x}]},{type:a,value:aj},{type:b,tag:f,props:{},children:[{type:a,value:r}]},{type:a,value:" to local "},{type:b,tag:f,props:{},children:[{type:a,value:N}]},{type:a,value:aj},{type:b,tag:f,props:{},children:[{type:a,value:y}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"If you don't agree with me about intuition - welcome to comments :D"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"If we fill these fields intuitive, and after that goes to your server and check for listening ports, you will fail. Just because "},{type:b,tag:f,props:{},children:[{type:a,value:r}]},{type:a,value:" realy belong to our local machine and vice versa "},{type:b,tag:f,props:{},children:[{type:a,value:y}]},{type:a,value:" is the port on remote server to which we want to connect."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"In example:"}]},{type:a,value:" we have MySQL on remote server working on non-default port "},{type:b,tag:q,props:{},children:[{type:a,value:O}]},{type:a,value:". We're trying to forward it to our local machine on default port "},{type:b,tag:q,props:{},children:[{type:a,value:P}]},{type:a,value:". If we fill all fields intuitively, we are:"}]},{type:a,value:c},{type:b,tag:"ol",props:{},children:[{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"Connecting to port "},{type:b,tag:q,props:{},children:[{type:a,value:P}]},{type:a,value:" on our remote server which is not used, because our MySQL working on "},{type:b,tag:q,props:{},children:[{type:a,value:O}]}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"We forward "},{type:b,tag:f,props:{},children:[{type:a,value:"nothing"}]},{type:a,value:" to port "},{type:b,tag:q,props:{},children:[{type:a,value:O}]},{type:a,value:" on local machine, but thinking that forwarded it to "},{type:b,tag:q,props:{},children:[{type:a,value:P}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Finaly we failed twice thanks to non-intuitive labels."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"To fix that you need to swap values of "},{type:b,tag:f,props:{},children:[{type:a,value:r}]},{type:a,value:M},{type:b,tag:f,props:{},children:[{type:a,value:y}]},{type:a,value:" fields"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Does it feel strange for you? For me - yes, but explanation will be later. Now let's look at "},{type:b,tag:f,props:{},children:[{type:a,value:"Remote forwarding"}]},{type:a,value:ai}]},{type:a,value:c},{type:b,tag:G,props:{source:"https:\u002F\u002Fi.imgur.com\u002FajYfxvy.png",description:"Screenshot of adding Remote forwarding rule"},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Do you see here any difference here? Okay, excluding tab name."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"At first let's try to fill it intuitive:"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:x}]},{type:a,value:" feels as local, because we forwarding our local server to external network. But we're wrong here - it's 100% is our remote host, because we have to choose it from already added hosts."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:r}]},{type:a,value:" feels as local due to the same reason as "},{type:b,tag:f,props:{},children:[{type:a,value:x}]},{type:a,value:" above, but is it? We remember strangeness of "},{type:b,tag:f,props:{},children:[{type:a,value:r}]},{type:a,value:" from "},{type:b,tag:f,props:{},children:[{type:a,value:ak}]},{type:a,value:"... And yes, you're right, if after "},{type:b,tag:f,props:{},children:[{type:a,value:ak}]},{type:a,value:" you think that "},{type:b,tag:f,props:{},children:[{type:a,value:r}]},{type:a,value:" is not intuitive label. It's field for our remote port."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:N}]},{type:a,value:" - our local hostname or ip address. Strange again, at least for me, because we forward our local port "},{type:b,tag:f,props:{},children:[{type:a,value:"to"}]},{type:a,value:" external network with our remote server."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:y}]},{type:a,value:" - remains as local just because "},{type:b,tag:f,props:{},children:[{type:a,value:r}]},{type:a,value:" is already our remote port."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"That's a bit strange, but there we can use another logic: we're not forwarding traffic "},{type:b,tag:f,props:{},children:[{type:a,value:"from our local server to remote"}]},{type:a,value:", we are forwarding requests "},{type:b,tag:f,props:{},children:[{type:a,value:"from remote server to local machine"}]},{type:a,value:". Then at least "},{type:b,tag:f,props:{},children:[{type:a,value:"Remote forwarding rule"}]},{type:a,value:" become looks nice."}]},{type:a,value:c},{type:b,tag:u,props:{id:aa},children:[{type:b,tag:l,props:{href:"#mapping-to-ssh-command",ariaHidden:m,tabIndex:n},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:ab}]},{type:a,value:c},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,"language-md"]},children:[{type:b,tag:E,props:{},children:[{type:b,tag:d,props:{className:[e,"table"]},children:[{type:b,tag:d,props:{className:[e,"table-header-row"]},children:[{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:i}]},{type:b,tag:d,props:{className:[e,v,w]},children:[{type:a,value:"  Forwarding  "}]},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:i}]},{type:b,tag:d,props:{className:[e,v,w]},children:[{type:a,value:"  Bind address  "}]},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:i}]},{type:b,tag:d,props:{className:[e,v,w]},children:[{type:a,value:"  Port from  "}]},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:i}]},{type:b,tag:d,props:{className:[e,v,w]},children:[{type:a,value:"  Host to  "}]},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:i}]},{type:b,tag:d,props:{className:[e,v,w]},children:[{type:a,value:"  Port to  "}]},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:i}]},{type:b,tag:d,props:{className:[e,v,w]},children:[{type:a,value:"  Host from  "}]},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:i}]},{type:a,value:c}]},{type:b,tag:d,props:{className:[e,"table-line"]},children:[{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:":----------:"}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:":------------:"}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:al}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:am}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:am}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:al}]},{type:a,value:j},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:i}]},{type:a,value:c}]},{type:b,tag:d,props:{className:[e,"table-data-rows"]},children:[{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:i}]},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:"    ssh -L    "}]},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:i}]},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:an}]},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:i}]},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:"    8080     "}]},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:i}]},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:ao}]},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:i}]},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:"   3000    "}]},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:i}]},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:ap}]},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:i}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:i}]},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:"    ssh -R    "}]},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:i}]},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:an}]},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:i}]},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:"    3000     "}]},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:i}]},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:ao}]},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:i}]},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:"   8080    "}]},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:i}]},{type:b,tag:d,props:{className:[e,k]},children:[{type:a,value:ap}]},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:i}]},{type:a,value:c}]}]}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"P.S.: I don't know why, but this mapping is not listed at "},{type:b,tag:l,props:{href:aq,rel:[ae,af,ag],target:ah},children:[{type:a,value:aq}]}]},{type:a,value:c},{type:b,tag:u,props:{id:ac},children:[{type:b,tag:l,props:{href:"#conclusion",ariaHidden:m,tabIndex:n},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:ad}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"The one thing that I don't understand is using \"from\u002Fto\" in labels. Why not \"local\u002Fremote\"? I guess it will be more clear for everybody."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"There are few strangeness in the UI, so finally don't forget to write correct names for your forwarding rules."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"All saved rules has something like \"avatar\" on the left side - there is only one letter which indicates type of rule: L (Local), R (Remote) or D (Dynamic)."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Also, active rules are highlighted with green color in their \"avatar\". Green border indicates selected (by last click) rule."}]},{type:a,value:c},{type:b,tag:G,props:{source:"https:\u002F\u002Fi.imgur.com\u002FyZ7dhpt.png",description:"How looks added forwarding rules and a toggled one"},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"But finally we have all needed rules, which can be enabled with just double-click :)"}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Ftermius-port-forwarding",extension:".md",createdAt:ar,updatedAt:ar}}],fetch:{},mutations:[]}}("text","element","\n","span","token","strong","p","punctuation","|"," ","table-data","a","true",-1,"icon","icon-link","em","Port from","li",2,"h2","table-header","important","Host from","Port to","Termius","div","nuxt-content-highlight","pre","line-numbers","code","127.0.0.1","centered-image-md","SSH port forwarding","termius",3,"h3","language-text"," and ","Host to","3333","3306","NEK-RA","disclaimer","Disclaimer","ssh-port-forwarding","local","Local","remote","Remote","dynamic-socks5-proxy","Dynamic (SOCKS5 proxy)","problem-with-adding-port-forwarding","Problem with adding port forwarding","mapping-to-ssh-command","Mapping to SSH command","conclusion","Conclusion","nofollow","noopener","noreferrer","_blank"," rule UI:",":","Local rule",":---------:",":-------:","   127.0.0.1    "," localhost "," user@server ","https:\u002F\u002Fdocs.termius.com\u002Ftermius-handbook\u002Fport-forwarding","2021-12-07T18:27:48.380Z")));