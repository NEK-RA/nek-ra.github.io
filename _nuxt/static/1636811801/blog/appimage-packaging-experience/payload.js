__NUXT_JSONP__("/blog/appimage-packaging-experience", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H){return {data:[{post:{slug:"appimage-packaging-experience",description:"As always - the long boring story of first experience, now about AppImage packaging format",title:"Packaging linux apps into AppImage",author:u,posted:1636801351000,tags:["Blog","Project update","Packaging","Linux"],keywords:["linux","appimage","packaging","flutter",u,"Ryoidenshi Aokigahara","blog","peronal blog"],toc:[{id:v,depth:k,text:w},{id:x,depth:k,text:y},{id:z,depth:k,text:A},{id:B,depth:k,text:C}],body:{type:"root",children:[{type:b,tag:l,props:{id:v},children:[{type:b,tag:e,props:{href:"#intro",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Some time ago I started with Flutter and it still interesting enough for me :) But after first release you have to decide how to distribute your app to users. On first release of "},{type:b,tag:e,props:{href:"https:\u002F\u002Fnek-ra.github.io\u002Fprojects\u002Fmaterial_palette",rel:[g,h,i],target:j},children:[{type:a,value:"Material Palette"}]},{type:a,value:" I forgot about everything and as result - I just built android and web versions. Android was published to "},{type:b,tag:e,props:{href:"https:\u002F\u002Fplay.google.com\u002Fstore\u002Fapps\u002Fdetails?id=io.github.nek_ra.material_palette",rel:[g,h,i],target:j},children:[{type:a,value:"Google Play"}]},{type:a,value:" and web version was published to "},{type:b,tag:e,props:{href:"https:\u002F\u002Fnek-ra.github.io\u002Fflutter_material_palette\u002F",rel:[g,h,i],target:j},children:[{type:a,value:"Github Pages"}]},{type:a,value:". I understood that I forgot to create a windows build and moreover I didn't run project on linux yet."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"On second release I published all versions (android, windows, linux and web) and understand that I missed one important thing - packaging apps for desktop. Yes, for windows it's common thing to download any portable software, just extract is somewhere and start using. But this is not common case for Linux - in most cases software is distributed through repositories. Of course there exists \"portable\" apps, but in most cases they are single-file binaries which are easy to place into any folder added to PATH, and then use it by single command. And know, that it's also easy enough to remove app by removing this single portable binary."}]},{type:a,value:c},{type:b,tag:l,props:{id:x},children:[{type:b,tag:e,props:{href:"#why-appimage",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"To package my app for Linux I decided to try the "},{type:b,tag:e,props:{href:"https:\u002F\u002Fappimage.org\u002F",rel:[g,h,i],target:j},children:[{type:a,value:"AppImage"}]},{type:a,value:" format. I used apps packaged in such format for long time and found it comfort enough. It gives almost independent single executable file, that needs only to allow it's execution (by running "},{type:b,tag:d,props:{},children:[{type:a,value:"chmod +x"}]},{type:a,value:" or from file permission properties) and it's ready to use. It also doesn't require for setuping any repositories and etc."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"As I got known few days ago (before starting experiments) - AppImage format doesn't just create single executable file, but also bring all dependencies with app. And that's how the independency from linux distribution reached. So no matter if required library exists on target machine, because it always exists inside AppImage package and packaged app will see the required library. Yes, this increases the package size, but AppImage also compress the result, so finally it's not so fat."}]},{type:a,value:c},{type:b,tag:l,props:{id:z},children:[{type:b,tag:e,props:{href:"#my-expirience",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"The built Material Palette project for linux weights about 22MB ("},{type:b,tag:d,props:{},children:[{type:a,value:"du -sh ."}]},{type:a,value:" in output directory). My host OS is Linux Mint (Cinnamon)."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"There are few ways to package app into AppImage format, but I guess that one of the most popular tools for that is "},{type:b,tag:e,props:{href:"https:\u002F\u002Fappimage-builder.readthedocs.io\u002Fen\u002Flatest\u002Fexamples\u002Fflutter.html",rel:[g,h,i],target:j},children:[{type:a,value:r}]},{type:a,value:". It add into result some metadata like package, name, version, icon, and (what's most important) launch the entrypoint of your app to detect runtime dependencies - which libraries from host OS are used. As result it generates config (called as \"recipe\"), which can be then edited."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"According to Flutter's docs - "},{type:b,tag:e,props:{href:D,rel:[g,h,i],target:j},children:[{type:a,value:D}]},{type:a,value:" dependecies that are required to exist in target OS for the linux desktop app are:"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"libgtk-3-0"}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"libblkid1"}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"liblzma5"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"First time I run "},{type:b,tag:d,props:{},children:[{type:a,value:"appimage-builder --generate"}]},{type:a,value:" it generated me the \"recipe\" with 17 packages to be installed by "},{type:b,tag:d,props:{},children:[{type:a,value:"apt"}]},{type:a,value:" and bunch of libraries to be copied from "},{type:b,tag:d,props:{},children:[{type:a,value:"\u002Flib\u002Fx86_64-linux-gnu\u002F"}]},{type:a,value:". When I generated AppImage from this recipe, result was about 105MB, which are extremely large in my opinion for so small app (just don't forget that AppImage is also compressed)."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"My first experiments was to cleanup \"included files\" section, as I guess \"all necessary\" libraries should be installed from apt. I reffered few configs from network where were marked only few libraries for include and was "},{type:b,tag:d,props:{},children:[{type:a,value:"exclude"}]},{type:a,value:" section, which contains some DE related files (themes, fonts, icons and etc.)\nUsing that I got result about 50MB (which are still large enough)."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Next experiments were reffered from this issue - "},{type:b,tag:e,props:{href:E,rel:[g,h,i],target:j},children:[{type:a,value:E}]},{type:a,value:"\nShortly - after generating an AppImage file, there appeared file "},{type:b,tag:d,props:{},children:[{type:a,value:".bundle.yml"}]},{type:a,value:" file inside "},{type:b,tag:d,props:{},children:[{type:a,value:F}]},{type:a,value:" folder, which contains deployed libraries. Advice is to try exclude something from that. May be it's a good enough advice, but it takes too long time to check for each package\u002Flibrary if it breaks resulted AppImage file at least with official tests of "},{type:b,tag:d,props:{},children:[{type:a,value:r}]},{type:a,value:" (docker containers). I faced more broken results than any sane size reduction."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"My next experiment was to reduce dependecies which should be installed from package manager and use files from host system. I deleted "},{type:b,tag:d,props:{},children:[{type:a,value:F}]},{type:a,value:" and "},{type:b,tag:d,props:{},children:[{type:a,value:"appimage-builder-cache"}]},{type:a,value:" folders and regenerated the recipe. At next step I commented all packages which should be installed from package manager and leaved only included files. Result was fail, because of needing one package, but after adding it I got AppImage result in 36MB. That sounds much better than starting 105MB or even previous result of 50MB."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Here I got small \"boost\" - Flutter project built into AOT binaries, so they doesn't need for interpreter or runtime, only some system libraries. So I checked output of "},{type:b,tag:d,props:{},children:[{type:a,value:t}]},{type:a,value:" for my app, and then mapped list of required libraries to list of library files which were detected by "},{type:b,tag:d,props:{},children:[{type:a,value:r}]},{type:a,value:". Finally some of them was correct, some not found in "},{type:b,tag:d,props:{},children:[{type:a,value:t}]},{type:a,value:" output and some was in "},{type:b,tag:d,props:{},children:[{type:a,value:t}]},{type:a,value:" output, but were not detected by appimage-builder. I added all undetected, removed all unused. My final result is 26MB and it passed all appimage-builder tests (running in docker images of fedora, cent, debian, ubuntu and arch) :)"}]},{type:a,value:c},{type:b,tag:l,props:{id:B},children:[{type:b,tag:e,props:{href:"#conclusion",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"I understand that it's bad enough for continious building, because it will require to always check for used libraries and adapt config if something changed, but for rare enough builds I guess it's has some kind of balance between good and bad. My "},{type:b,tag:d,props:{},children:[{type:a,value:"AppImageBuilder.yml"}]},{type:a,value:" available in repo - "},{type:b,tag:e,props:{href:G,rel:[g,h,i],target:j},children:[{type:a,value:G}]},{type:a,value:". It will be wonderfull if this config (or even post) will be usefull for somebody, but if you know AppImage format well and can suggest how to improve my config for flutter - welcome here into comments, or into "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002FNEK-RA\u002Fflutter_material_palette\u002Fissues",rel:[g,h,i],target:j},children:[{type:a,value:"Material Palette issues"}]},{type:a,value:" 🤔"}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Fappimage-packaging-experience",extension:".md",createdAt:H,updatedAt:H}}],fetch:{},mutations:[]}}("text","element","\n","code","a","p","nofollow","noopener","noreferrer","_blank",2,"h2","true",-1,"span","icon","icon-link","appimage-builder","li","ldd","NEK-RA","intro","Intro","why-appimage","Why AppImage?","my-expirience","My expirience","conclusion","Conclusion","https:\u002F\u002Fflutter.dev\u002Fdesktop#linux","https:\u002F\u002Fgithub.com\u002FAppImageCrafters\u002Fappimage-builder\u002Fissues\u002F130#issuecomment-843288012","AppDir","https:\u002F\u002Fgithub.com\u002FNEK-RA\u002Fflutter_material_palette\u002Fblob\u002Fmain\u002FAppImageBuilder.yml","2021-11-13T13:55:11.126Z")));