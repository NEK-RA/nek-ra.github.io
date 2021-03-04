__NUXT_JSONP__("/blog/cloudflare-wrangler-32bit", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af){return {data:[{post:{slug:"cloudflare-wrangler-32bit",description:"Cool story about how I built it from sources and what I used for that :D",title:"Cloudflare Wrangler for 32-bit Windows",author:B,posted:1614589968000,updated:1614879962000,tags:["Blog",v,"Building from source","Unofficial binaries"],keywords:["cloudflare","workers",C,"serverless","build software","windows 32-bit",B,"Ryoidenshi Aokigahara","blog","peronal blog"],toc:[{id:D,depth:r,text:v},{id:E,depth:r,text:F},{id:G,depth:r,text:H},{id:I,depth:r,text:J},{id:K,depth:r,text:L},{id:M,depth:r,text:N},{id:O,depth:r,text:P}],body:{type:"root",children:[{type:b,tag:s,props:{id:D},children:[{type:b,tag:e,props:{href:"#cloudflare-workers",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"First of all - about this software."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Most of us know the company called \"Cloudflare\" and that they provide many different services for developers. One of these services is "},{type:b,tag:w,props:{},children:[{type:a,value:v}]},{type:a,value:". You can get all info from "},{type:b,tag:e,props:{href:Q,rel:[g,h,i],target:j},children:[{type:a,value:Q}]},{type:a,value:", but if shortly - "},{type:b,tag:w,props:{},children:[{type:a,value:"Workers"}]},{type:a,value:" is service which can execute some code writen in JavaScripton cloudflare servers. Workers backend is not fully backend in standard meaning of this word. They run code writen in JavaScript, but there is no filesystem access, there is no direct database connections and etc. More details you can find in official docs at "},{type:b,tag:e,props:{href:"https:\u002F\u002Fdevelopers.cloudflare.com\u002Fworkers\u002Fruntime-apis",rel:[g,h,i],target:j},children:[{type:a,value:"Runtime APIs"}]},{type:a,value:", but this post is not about that."}]},{type:a,value:c},{type:b,tag:s,props:{id:E},children:[{type:b,tag:e,props:{href:"#what-is-wrangler",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Unfortunately, each worker is only one file. It's enough when you write small scripts and familiarizing with service. But if you interested in service and want to write something more complex, you understand that writing everything in one file is not a good idea, it's not comfortable. So, to help you write more comfortable, Cloudflare created Wrangler command-line tool, which allow to write worker as a project in different languages, that will be compiled to JavaScript(or WebAssembly) and deployed to your cloudflare account."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fdevelopers.cloudflare.com\u002Fworkers\u002Fplatform\u002Flanguages",rel:[g,h,i],target:j},children:[{type:a,value:"Supported languages"}]},{type:a,value:" are:"}]},{type:a,value:c},{type:b,tag:z,props:{id:"native"},children:[{type:b,tag:e,props:{href:"#native",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:"Native"}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"JavaScript "},{type:b,tag:e,props:{href:R,rel:[g,h,i],target:j},children:[{type:a,value:R}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"TypeScript "},{type:b,tag:e,props:{href:S,rel:[g,h,i],target:j},children:[{type:a,value:S}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:z,props:{id:"compiled-to-webassembly"},children:[{type:b,tag:e,props:{href:"#compiled-to-webassembly",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:"Compiled to WebAssembly"}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Rust "},{type:b,tag:e,props:{href:T,rel:[g,h,i],target:j},children:[{type:a,value:T}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"C "},{type:b,tag:e,props:{href:U,rel:[g,h,i],target:j},children:[{type:a,value:U}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Cobol "},{type:b,tag:e,props:{href:V,rel:[g,h,i],target:j},children:[{type:a,value:V}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:z,props:{id:"compiled-to-javascript"},children:[{type:b,tag:e,props:{href:"#compiled-to-javascript",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:"Compiled to JavaScript"}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Kotlin "},{type:b,tag:e,props:{href:W,rel:[g,h,i],target:j},children:[{type:a,value:W}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Dart "},{type:b,tag:e,props:{href:X,rel:[g,h,i],target:j},children:[{type:a,value:X}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Python "},{type:b,tag:e,props:{href:Y,rel:[g,h,i],target:j},children:[{type:a,value:Y}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Scala "},{type:b,tag:e,props:{href:Z,rel:[g,h,i],target:j},children:[{type:a,value:Z}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Reason\u002FOCaml "},{type:b,tag:e,props:{href:_,rel:[g,h,i],target:j},children:[{type:a,value:_}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Perl "},{type:b,tag:e,props:{href:$,rel:[g,h,i],target:j},children:[{type:a,value:$}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"PHP "},{type:b,tag:e,props:{href:aa,rel:[g,h,i],target:j},children:[{type:a,value:aa}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"FSharp "},{type:b,tag:e,props:{href:ab,rel:[g,h,i],target:j},children:[{type:a,value:ab}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"All links above are official language template prepared by Cloudflare to get started."}]},{type:a,value:c},{type:b,tag:s,props:{id:G},children:[{type:b,tag:e,props:{href:"#reason-for-this-post",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:H}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Originally Wrangler delivered by two ways: Cargo(rust package manager) and NPM(nodejs package manager). I never used Rust, so I choosed the NPM way. At this moment I have two OS installed on my small laptop - 32-bit Windows and 64-bit KDE Neon. Usually I use Neon for any 64-bit software when there's no version for 32-bit, but with Wrangler I don't found any \"Supported\u002FUnsupported platforms\" so I've just tried to install it into my 32-bit windows."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Installation was failed, because no matter which way you choosed, in both cases you'll get binary for your platform. So... I got installation error with message that my 32-bit windows is not supported. In Discord community of Workers service I got info, that there's just no pre-built binaries for my case. With a bit of sadness I've decided to try it in cloud IDE ("},{type:b,tag:e,props:{href:"https:\u002F\u002Fgist.github.com\u002FNEK-RA\u002Fb7eda3e0a8cb1b64767454fe7ceb7f0a",rel:[g,h,i],target:j},children:[{type:a,value:"more details"}]},{type:a,value:") after success and small playing with it I found that:"}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Wrangler binary downloaded to "},{type:b,tag:q,props:{},children:[{type:a,value:"~\u002F.wrangler"}]},{type:a,value:" folder"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Cloudflare has prebuilt binaries only for 64-bit Windows, Linux and MacOS. And nothing more."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"So I looked for "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fcloudflare\u002Fwrangler\u002F",rel:[g,h,i],target:j},children:[{type:a,value:"Wrangler repo"}]},{type:a,value:", docs and didn't found any limitations about architecture. And I decided to try make binary for my 32-bit windows :D"}]},{type:a,value:c},{type:b,tag:s,props:{id:I},children:[{type:b,tag:e,props:{href:"#first-fail-another-one-and-how-much-space-it-takes",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As I said before - I never used Rust, I don't know that, so while having laptop with small storage I don't want to make it locally. I've searched for cross-compilation in Rust and also got advised to see one instruction. My first try was to build 32-bit binary for windows on 64-bit host in linux. I found cloud IDE where was too much space (as I thought), root access and got prepared. I've launched build few times, got few fails and learned that they caused by incompleted prepares. After few hours I prepared it finally, launched build and... I failed again."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Small offtop: if somebody never user Rust (as me), in build progress it shows shortly: "},{type:b,tag:q,props:{},children:[{type:a,value:"compiling \"some dependency\""}]},{type:a,value:" and on last line total counter "},{type:b,tag:q,props:{},children:[{type:a,value:"(already built\u002Ftotal tasks)"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Build task "},{type:b,tag:q,props:{},children:[{type:a,value:C}]},{type:a,value:" was pre-last task (the last one was "},{type:b,tag:q,props:{},children:[{type:a,value:"wrangler-bin"}]},{type:a,value:") and it failed. While searching for reasons I found that finaly Rust is not always friendly to pc-windows-gnu targets while cross-compiling. So cross-compilation failed. People in internet recommend to make windows builds in windows host system with msvc target. I don't want to say anything bad about Rust, no. But in cloud IDE I cross-compilations used about 6GB of storage, while pre-build binaries of Wrangler for 64-bit systems weights about 20MB. And it's too much space for \"just to try\". I thrown away idea tio built it for about one week."}]},{type:a,value:c},{type:b,tag:s,props:{id:K},children:[{type:b,tag:e,props:{href:"#building-on-32-bit-windows",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:L}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Few days ago I needed to reset my small laptop, so instead of cleaning it (from programs and files that I don't need) I just deleted all partitions and installed fresh windows from USB. I've installed few programs I need and yesterday idea to build Wrangler visited me again, and i decided:"}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:y},{type:b,tag:p,props:{},children:[{type:a,value:A}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The system is clean, I have enough free space, so why not? Probably it's the best time to try again, but now in 32-bit windows"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Said - done. I've downloaded rustup installer and found first surprise: rustup says that I need to install MSVC Build Tools with Win10 SDK and english language pack. There is no even mention about MinGW. Also rustup notification says that I can install build tools only, or Visual Studio with required components. Thanks to rustup - I got installer for Build Tools only. Where is surprise? In MSVC Build Tools! When I launched installer and selected required components, I noticed that I need 6GB of storage only for Build Tools! 6GB Carl!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Small notification: while tried to cross-compile from linux, I didn't checked total size of project folder, so I didn't know how much space taken but rust itself, by toolchains and dependencies. There was a linux container with ubuntu installed and 10BG additional space for files. IDE where I tried to cross-compile has something like \"system monitor\" tab, where was info about CPU, network, disk usage and etc. And disk was 0% used when container was launched and ready to use. And after installing Rust, mingw, toolchains, few builds, I've got 60% space usage, that mean all files, packages, dependencies, Rust with it's toolchains taken only 6GB of 10GB total space."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"That's why I was "},{type:b,tag:"del",props:{},children:[{type:a,value:"a little"}]},{type:a,value:"very surprised when only MSVC Build Tools asked me for 6GB of space... But okay, I have enough space, so I continued process.\nAt this time one user add another \"surprise\":"}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:y},{type:b,tag:p,props:{},children:[{type:a,value:"Walshy - February 28, 2021"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I'm not sure you will be able to build a 32bit compatible binary though. If it isn't natively 32 bit I'm sure there's reasons behind it"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This is only one thought, simple guess, but it made me question the wisdom of the whole process(probably incorrect, this phrase taken from translator). But I reassured myself with the two things:"}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"I've already spent space for installing MSVC Build tools and Rust"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"As I meant before - I didn't found any warning that project doesn't support 32-bit(or others) architectures"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Thanks to previous fails in linux cross-compiling - now I've prepared everything correctly and launched build. On my laptop this process took a bit less than one hour, but it's mostly because of hardware (CPU 4x1.33GHz, which speed up to 1.57GHz), but it still more fast than in cloud IDE. It was about 11 PM in my time zone, when the build was succeed. But I've done the strange thing after that."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I've checked "},{type:b,tag:q,props:{},children:[{type:a,value:ac}]},{type:a,value:" through PowerShell and got nothing. No errors, no warnings, nothing. Build process also doesn't contain any warnings errors and etc."}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:y},{type:b,tag:p,props:{},children:[{type:a,value:A}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"May be something wrong with my PowerShell?"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"With this thought I opened context menu thinking to open CMD in this folder and run binary from CMD, but... I've noticed that CMD is not in context menu for long time already. PowerShell replaced it. And I launched Git Bash inside this folder, because I thought that it uses CMD. "},{type:b,tag:q,props:{},children:[{type:a,value:ac}]},{type:a,value:" in Git Bash gives me the result I wanted - usage info, so I reassure myself with it, turn off my laptop and goes to sleep."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"And from this time I'm haunted by a thought:"}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:y},{type:b,tag:p,props:{},children:[{type:a,value:A}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Why didn't I checked run from CMD? What if I made mistake while thinking that Git Bash uses CMD?"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Today right at morning I turned on my laptop, opened CMD, got into build folder and launched binary. And I got 2 errors:"}]},{type:a,value:c},{type:b,tag:"ol",props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:p,props:{},children:[{type:a,value:"libssl-1_1.dll"}]},{type:a,value:ad}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:p,props:{},children:[{type:a,value:"libcrypto-1_1.dll"}]},{type:a,value:ad}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I searched for this error and found that both these dlls related to OpenSSL and should be placed in "},{type:b,tag:q,props:{},children:[{type:a,value:"C:\\Windows\\System32"}]},{type:a,value:". I don't realy know what's(and how) calling these dlls, probably they may placed in any location which exists in PATH, but I found info that they're from System32 folder. If you know better - welcome to comments :)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Finaly, after solving problem with dlls I've got correct output about usage both in CMD and PowerShell. The next strange thing is that I'm writing this post instead of testing most used wrangler commands with builted binary... But let's leave it as one more strange in strange blog of strange user :D"}]},{type:a,value:c},{type:b,tag:s,props:{id:M},children:[{type:b,tag:e,props:{href:"#download",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:N}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To make this post as strange as possible, I've packed binaries in 7zip archive. And if you want to test it too, you can "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.dropbox.com\u002Fs\u002Fx07h3np5bugjypf\u002FWrangler%201.13.0%2032bit%20debug%20and%20release%20build.7z?dl=0",rel:[g,h,i],target:j},children:[{type:a,value:"download binaries from Dropbox"}]},{type:a,value:". I packed into archive both debug and release versions."}]},{type:a,value:c},{type:b,tag:ae,props:{type:"error",outlined:u,text:u,prominent:u},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Please notice: Cloudflare doesn't provide binaries for 32-bit platforms (as well as for ARM platform). And I don't know their reasons for that.\nSo these binaries are "},{type:b,tag:w,props:{},children:[{type:a,value:"experiment only"}]},{type:a,value:"! They both provided in archive \"as-is\" without any warranties."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:ae,props:{type:"warning",outlined:u,text:u,prominent:u},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you not developer don't use it for something serious. If you're developer and face any problems, I guess debug version of binary will provide more details about problems (not even sure :\u002F)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you will make an issue at Wrangler's Github repo - don't forget to write that problem faced on unofficial binary for 32-bit windows platform. Cause I'm not sure that we will know if problem related to Wrangler at all, or to 32-bit platform."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Also some info:"}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Host: "},{type:b,tag:p,props:{},children:[{type:a,value:"Windows 10, version 20H2, 32-bit"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Used: "},{type:b,tag:p,props:{},children:[{type:a,value:"MSVC Build Tools from "},{type:b,tag:w,props:{},children:[{type:a,value:"Visual Studio 2019"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"SDK: "},{type:b,tag:p,props:{},children:[{type:a,value:"Windows 10 SDK 10.0.18362"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Rust target: "},{type:b,tag:p,props:{},children:[{type:a,value:"i686-pc-windows-msvc"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"br",props:{},children:[]},{type:a,value:c},{type:b,tag:s,props:{id:O},children:[{type:b,tag:e,props:{href:"#conclusion",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:P}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This post already very long, so I don't even know what to write here... Oh, wait, I know! Do you remember \"surprises\" about weight of all tools and etc in Linux? And that on windows I need the same space only for MSVC Build Tools? Finaly, after successfull geting output about usage (it was like a \"everything is ok\" flag) I removed cloned repo with everything inside (built binaries, dependencies), removed Rust and MSVC Buildt Tools. And wow - I freed up about 9GB of storage. And these 9 GB was needed to get debug binary which has 30MB size. But c'mon, do you geting debug version of software on your devices instead of release versions? No :D And release version of Wrangler binary for 32-bit windows takes only... *drums* a bit more than 9MB. Do you feel it? :D Getting 9GB to get 9MB :D I don't know if it's typical situation for Rust on Windows, but for me it's as strange as all this post with a \"cool story\" :D"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Thanks for reading, if this \"cool story\" was usefull for you in any meanings, feel free to leave comments :)"}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Fcloudflare-wrangler-32bit",extension:".md",createdAt:af,updatedAt:af}}],fetch:[],mutations:[]}}("text","element","\n","p","a","li","nofollow","noopener","noreferrer","_blank","true",-1,"span","icon","icon-link","em","code",2,"h2","ul","","Cloudflare Workers","strong","quote","\n \n","h4","my thoughts","NEK-RA","wrangler","cloudflare-workers","what-is-wrangler","What is Wrangler","reason-for-this-post","Reason for this post","first-fail-another-one-and-how-much-space-it-takes","First fail, another one and \"how much space it takes\"","building-on-32-bit-windows","Building on 32-bit Windows","download","Download","conclusion","Conclusion","https:\u002F\u002Fworkers.cloudflare.com\u002F","https:\u002F\u002Fgithub.com\u002Fcloudflare\u002Fworker-template","https:\u002F\u002Fgithub.com\u002Fcloudflare\u002Fworker-typescript-template","https:\u002F\u002Fgithub.com\u002Fcloudflare\u002Frustwasm-worker-template","https:\u002F\u002Fgithub.com\u002Fcloudflare\u002Fworker-emscripten-template","https:\u002F\u002Fgithub.com\u002Fcloudflare\u002Fcobol-worker-template","https:\u002F\u002Fgithub.com\u002Fcloudflare\u002Fkotlin-worker-hello-world","https:\u002F\u002Fgithub.com\u002Fcloudflare\u002Fdart-worker-hello-world","https:\u002F\u002Fgithub.com\u002Fcloudflare\u002Fpython-worker-hello-world","https:\u002F\u002Fgithub.com\u002Fcloudflare\u002Fscala-worker-hello-world","https:\u002F\u002Fgithub.com\u002Fcloudflare\u002Freason-worker-hello-world","https:\u002F\u002Fgithub.com\u002Fcloudflare\u002Fperl-worker-hello-world","https:\u002F\u002Fgithub.com\u002Fcloudflare\u002Fphp-worker-hello-world","https:\u002F\u002Fgithub.com\u002Ffable-compiler\u002Fcfworker-hello-world",".\u002Fwrangler.exe"," not found","v-alert","2021-03-04T19:47:29.706Z")));