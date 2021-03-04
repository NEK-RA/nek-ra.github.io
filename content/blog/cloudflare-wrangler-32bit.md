---
title: Cloudflare Wrangler for 32-bit Windows
description: Cool story about how I built it from sources and what I used for that :D
author: NEK-RA
posted: 1614589968000
updated: 1614879962000
tags: 
  - Blog
  - Cloudflare Workers
  - Building from source
  - Unofficial binaries
keywords:
  - cloudflare
  - workers
  - wrangler
  - serverless
  - build software
  - windows 32-bit
---
## Cloudflare Workers
First of all - about this software.

Most of us know the company called "Cloudflare" and that they provide many different services for developers. One of these services is **Cloudflare Workers**. You can get all info from [https://workers.cloudflare.com/](https://workers.cloudflare.com/), but if shortly - **Workers** is service which can execute some code writen in JavaScripton cloudflare servers. Workers backend is not fully backend in standard meaning of this word. They run code writen in JavaScript, but there is no filesystem access, there is no direct database connections and etc. More details you can find in official docs at [Runtime APIs](https://developers.cloudflare.com/workers/runtime-apis), but this post is not about that.

## What is Wrangler
Unfortunately, each worker is only one file. It's enough when you write small scripts and familiarizing with service. But if you interested in service and want to write something more complex, you understand that writing everything in one file is not a good idea, it's not comfortable. So, to help you write more comfortable, Cloudflare created Wrangler command-line tool, which allow to write worker as a project in different languages, that will be compiled to JavaScript(or WebAssembly) and deployed to your cloudflare account. 

[Supported languages](https://developers.cloudflare.com/workers/platform/languages) are: 

#### Native
- JavaScript https://github.com/cloudflare/worker-template
- TypeScript https://github.com/cloudflare/worker-typescript-template

#### Compiled to WebAssembly
- Rust https://github.com/cloudflare/rustwasm-worker-template
- C https://github.com/cloudflare/worker-emscripten-template
- Cobol https://github.com/cloudflare/cobol-worker-template

#### Compiled to JavaScript
- Kotlin https://github.com/cloudflare/kotlin-worker-hello-world
- Dart https://github.com/cloudflare/dart-worker-hello-world
- Python https://github.com/cloudflare/python-worker-hello-world
- Scala https://github.com/cloudflare/scala-worker-hello-world
- Reason/OCaml https://github.com/cloudflare/reason-worker-hello-world
- Perl https://github.com/cloudflare/perl-worker-hello-world
- PHP https://github.com/cloudflare/php-worker-hello-world
- FSharp https://github.com/fable-compiler/cfworker-hello-world

All links above are official language template prepared by Cloudflare to get started.

## Reason for this post

Originally Wrangler delivered by two ways: Cargo(rust package manager) and NPM(nodejs package manager). I never used Rust, so I choosed the NPM way. At this moment I have two OS installed on my small laptop - 32-bit Windows and 64-bit KDE Neon. Usually I use Neon for any 64-bit software when there's no version for 32-bit, but with Wrangler I don't found any "Supported/Unsupported platforms" so I've just tried to install it into my 32-bit windows.

Installation was failed, because no matter which way you choosed, in both cases you'll get binary for your platform. So... I got installation error with message that my 32-bit windows is not supported. In Discord community of Workers service I got info, that there's just no pre-built binaries for my case. With a bit of sadness I've decided to try it in cloud IDE ([more details](https://gist.github.com/NEK-RA/b7eda3e0a8cb1b64767454fe7ceb7f0a)) after success and small playing with it I found that:
- Wrangler binary downloaded to `~/.wrangler` folder
- Cloudflare has prebuilt binaries only for 64-bit Windows, Linux and MacOS. And nothing more.

So I looked for [Wrangler repo](https://github.com/cloudflare/wrangler/), docs and didn't found any limitations about architecture. And I decided to try make binary for my 32-bit windows :D

## First fail, another one and "how much space it takes"

As I said before - I never used Rust, I don't know that, so while having laptop with small storage I don't want to make it locally. I've searched for cross-compilation in Rust and also got advised to see one instruction. My first try was to build 32-bit binary for windows on 64-bit host in linux. I found cloud IDE where was too much space (as I thought), root access and got prepared. I've launched build few times, got few fails and learned that they caused by incompleted prepares. After few hours I prepared it finally, launched build and... I failed again. 

Small offtop: if somebody never user Rust (as me), in build progress it shows shortly: `compiling "some dependency"` and on last line total counter `(already built/total tasks)`

Build task `wrangler` was pre-last task (the last one was `wrangler-bin`) and it failed. While searching for reasons I found that finaly Rust is not always friendly to pc-windows-gnu targets while cross-compiling. So cross-compilation failed. People in internet recommend to make windows builds in windows host system with msvc target. I don't want to say anything bad about Rust, no. But in cloud IDE I cross-compilations used about 6GB of storage, while pre-build binaries of Wrangler for 64-bit systems weights about 20MB. And it's too much space for "just to try". I thrown away idea tio built it for about one week.

## Building on 32-bit Windows

Few days ago I needed to reset my small laptop, so instead of cleaning it (from programs and files that I don't need) I just deleted all partitions and installed fresh windows from USB. I've installed few programs I need and yesterday idea to build Wrangler visited me again, and i decided:

<quote> *my thoughts*

The system is clean, I have enough free space, so why not? Probably it's the best time to try again, but now in 32-bit windows

</quote>

Said - done. I've downloaded rustup installer and found first surprise: rustup says that I need to install MSVC Build Tools with Win10 SDK and english language pack. There is no even mention about MinGW. Also rustup notification says that I can install build tools only, or Visual Studio with required components. Thanks to rustup - I got installer for Build Tools only. Where is surprise? In MSVC Build Tools! When I launched installer and selected required components, I noticed that I need 6GB of storage only for Build Tools! 6GB Carl!

Small notification: while tried to cross-compile from linux, I didn't checked total size of project folder, so I didn't know how much space taken but rust itself, by toolchains and dependencies. There was a linux container with ubuntu installed and 10BG additional space for files. IDE where I tried to cross-compile has something like "system monitor" tab, where was info about CPU, network, disk usage and etc. And disk was 0% used when container was launched and ready to use. And after installing Rust, mingw, toolchains, few builds, I've got 60% space usage, that mean all files, packages, dependencies, Rust with it's toolchains taken only 6GB of 10GB total space.

That's why I was ~~a little~~very surprised when only MSVC Build Tools asked me for 6GB of space... But okay, I have enough space, so I continued process.
At this time one user add another "surprise":

<quote> *Walshy - February 28, 2021*

I'm not sure you will be able to build a 32bit compatible binary though. If it isn't natively 32 bit I'm sure there's reasons behind it

</quote>

This is only one thought, simple guess, but it made me question the wisdom of the whole process(probably incorrect, this phrase taken from translator). But I reassured myself with the two things:
- I've already spent space for installing MSVC Build tools and Rust
- As I meant before - I didn't found any warning that project doesn't support 32-bit(or others) architectures

Thanks to previous fails in linux cross-compiling - now I've prepared everything correctly and launched build. On my laptop this process took a bit less than one hour, but it's mostly because of hardware (CPU 4x1.33GHz, which speed up to 1.57GHz), but it still more fast than in cloud IDE. It was about 11 PM in my time zone, when the build was succeed. But I've done the strange thing after that.

I've checked `./wrangler.exe` through PowerShell and got nothing. No errors, no warnings, nothing. Build process also doesn't contain any warnings errors and etc. 

<quote> *my thoughts*

May be something wrong with my PowerShell?

</quote>

With this thought I opened context menu thinking to open CMD in this folder and run binary from CMD, but... I've noticed that CMD is not in context menu for long time already. PowerShell replaced it. And I launched Git Bash inside this folder, because I thought that it uses CMD. `./wrangler.exe` in Git Bash gives me the result I wanted - usage info, so I reassure myself with it, turn off my laptop and goes to sleep.

And from this time I'm haunted by a thought:

<quote> *my thoughts*

Why didn't I checked run from CMD? What if I made mistake while thinking that Git Bash uses CMD?

</quote>

<v-alert type="warning" outlined text prominent>

If you not developer don't use it for something serious. If you're developer and face any problems, I guess debug version of binary will provide more details about problems (not even sure :/) If you will make an issue at Wrangler's Github repo - don't forget to write that problem faced on unofficial binary for 32-bit windows platform. Cause I'm not sure that we will know if problem related to Wrangler at all, or to 32-bit platform. 

</v-alert>

Today right at morning I turned on my laptop, opened CMD, got into build folder and launched binary. And I got 2 errors:
1. *libssl-1_1.dll* not found
2. *libcrypto-1_1.dll* not found

I searched for this error and found that both these dlls related to OpenSSL and should be placed in `C:\Windows\System32`. I don't realy know what's(and how) calling these dlls, probably they may placed in any location which exists in PATH, but I found info that they're from System32 folder. If you know better - welcome to comments :)

Finaly, after solving problem with dlls I've got correct output about usage both in CMD and PowerShell. The next strange thing is that I'm writing this post instead of testing most used wrangler commands with builted binary... But let's leave it as one more strange in strange blog of strange user :D

## Download

To make this post as strange as possible, I've packed binaries in 7zip archive. And if you want to test it too, you can [download binaries from Dropbox](https://www.dropbox.com/s/x07h3np5bugjypf/Wrangler%201.13.0%2032bit%20debug%20and%20release%20build.7z?dl=0). I packed into archive both debug and release versions.

<v-alert type="error" outlined text prominent>

Please notice: Cloudflare doesn't provide binaries for 32-bit platforms (as well as for ARM platform). And I don't know their reasons for that.
So these binaries are **experiment only**! They both provided in archive "as-is" without any warranties.

</v-alert>

<v-alert type="warning" outlined text prominent>

If you not developer don't use it for something serious. If you're developer and face any problems, I guess debug version of binary will provide more details about problems (not even sure :/) 

If you will make an issue at Wrangler's Github repo - don't forget to write that problem faced on unofficial binary for 32-bit windows platform. Cause I'm not sure that we will know if problem related to Wrangler at all, or to 32-bit platform. 

</v-alert>

Also some info:
- Host: *Windows 10, version 20H2, 32-bit*
- Used: _MSVC Build Tools from **Visual Studio 2019**_
- SDK: *Windows 10 SDK 10.0.18362*
- Rust target: *i686-pc-windows-msvc*

<br>

## Conclusion
This post already very long, so I don't even know what to write here... Oh, wait, I know! Do you remember "surprises" about weight of all tools and etc in Linux? And that on windows I need the same space only for MSVC Build Tools? Finaly, after successfull geting output about usage (it was like a "everything is ok" flag) I removed cloned repo with everything inside (built binaries, dependencies), removed Rust and MSVC Buildt Tools. And wow - I freed up about 9GB of storage. And these 9 GB was needed to get debug binary which has 30MB size. But c'mon, do you geting debug version of software on your devices instead of release versions? No :D And release version of Wrangler binary for 32-bit windows takes only... \*drums\* a bit more than 9MB. Do you feel it? :D Getting 9GB to get 9MB :D I don't know if it's typical situation for Rust on Windows, but for me it's as strange as all this post with a "cool story" :D

Thanks for reading, if this "cool story" was usefull for you in any meanings, feel free to leave comments :)