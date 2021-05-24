---
title: Port forwarding using Termius
description: Explanation of a bit strange GUI
author: NEK-RA
posted: 1621414954000
updated: 1621880364000
tags: 
  - Blog
  - Termius
  - SSH port forwarding
keywords:
  - termius
  - ssh port forwarding
  - termius port forwarding
---
## Disclaimer
There are thousands (or millions) articles in blogs and etc. about port forwarding. In most cases they describes how to open some port on your device or router, how to passthrough traffic from the internet into local network (concrete device). This post is not about such port forwarding process.

Here I will talk about port forwarding feature of SSH. SSH assumes the presence of some server, which can be directly accessed from anywhere through SSH-connection. So probably this post is not what you're searching for. 

But if you using [Termius](https://termius.com) and searched for ssh port forwarding feature - welcome here :)

## SSH port forwarding 

I guess this feature is known by most of SSH users. Short reminder:

### Local

`ssh -L 8080:127.0.0.1:3000 user@remote-server`

This will redirect requests on your local 8080 port to remote server's 3000 port

### Remote

`ssh -R 3000:127.0.0.1:8080 user@remote-server`

This will redirect requests on your server's port 3000 to your local 8080 port

### Dynamic (SOCKS5 proxy)

`ssh -D 8080 user@remote-server`

This will setup SOCKS5 proxy on remote server and forward it's to your local 8080 port, so you can add anywhere a SOCKS5 proxy with address 127.0.0.1:8080

<v-alert-md type="warning">

**127.0.0.1** is shown in examples because in some systems localhost points to IPv6(_::1_) instead of IPv4(_127.0.0.1_) while most frameworks listen for connections on IPv4. You still can use **localhost**, but if it doesn't work, try to replace it with **127.0.0.1**.

</v-alert-md>

<v-alert-md type="info">

Remember, that if you need to access target port not only from localhost, but also from other networks (local/global) you need to use **0.0.0.0** instead of **127.0.0.1**

</v-alert-md>

## Termius

Termius is cross-platform app, that provide us comfortable GUI for most of setups of SSH connection. Yes, of course we can look for introduction for ssh-aliases, config files and etc., but I guess most of users likes GUI apps and Termius very well here.

In Termius we get:

- Add host and provide all data with fields instead of specifying them on each connect or making alias in config file
- Sort your list with groups (actually folders)
- Import hosts from few sources (local ssh config, SecureCRT, PuTTY, KiTTY, CSV, AWS, Digital Ocean)
- Supported protocols are SSH, Telnet and Mosh
- Port Forwarding as simply as adding hosts

In premium there are also data sync with SFTP, but our post is not about that.

## Problem with adding port forwarding

They behave like switches: once added, it can be enabled or disabled with double-click. Simple and easy. But the problem appears when you want to add first port forwarding. 

We will not talk about Dynamic forwarding(SOCKS proxy) cause UI of adding it is fully understandable:

![Screenshot of adding Dynamic forwarding rule](https://i.imgur.com/rHIVwjo.png)

**Host from** here is target remote host which will be our proxy, **Port from** (why _from_?) and **Bind address** are local ip and port for using proxy.

Let's look at **Local forwarding** rule UI:

![Screenshot of adding Local forwarding rule](https://i.imgur.com/tCaSssN.png)

Well, it looks understandable, but you will fail with forwarding, if you try to fill them intuitive. When you see **Host from** and **Port from** intuition says that they both belong to remote server, the same is with **Host to** and **Port to** - they feels to belong local machine. Finally picture is that we forwards answers from remote **Host from**:**Port from** to local **Host to**:**Port to**

If you don't agree with me about intuition - welcome to comments :D

If we fill these fields intuitive, and after that goes to your server and check for listening ports, you will fail. Just because **Port from** realy belong to our local machine and vice versa **Port to** is the port on remote server to which we want to connect. 

**In example:** we have MySQL on remote server working on non-default port _3333_. We're trying to forward it to our local machine on default port _3306_. If we fill all fields intuitively, we are:
1. Connecting to port _3306_ on our remote server which is not used, because our MySQL working on _3333_
2. We forward **nothing** to port _3333_ on local machine, but thinking that forwarded it to _3306_ 
Finaly we failed twice thanks to non-intuitive labels.

To fix that you need to swap values of **Port from** and **Port to** fields

Does it feel strange for you? For me - yes, but explanation will be later. Now let's look at **Remote forwarding** rule UI:

![Screenshot of adding Remote forwarding rule](https://i.imgur.com/ajYfxvy.png)

Do you see here any difference here? Okay, excluding tab name.

At first let's try to fill it intuitive:

**Host from** feels as local, because we forwarding our local server to external network. But we're wrong here - it's 100% is our remote host, because we have to choose it from already added hosts.

**Port from** feels as local due to the same reason as **Host from** above, but is it? We remember strangeness of **Port from** from **Local rule**... And yes, you're right, if after **Local rule** you think that **Port from** is not intuitive label. It's field for our remote port.

**Host to** - our local hostname or ip address. Strange again, at least for me, because we forward our local port **to** external network with our remote server.

**Port to** - remains as local just because **Port from** is already our remote port.

That's a bit strange, but there we can use another logic: we're not forwarding traffic **from our local server to remote**, we are forwarding requests **from remote server to local machine**. Then at least **Remote forwarding rule** become looks nice.

## How Termius forwarding fields mapped to SSH command

```
|  Forwarding  |  Bind address  |  Port from  |  Host to  |  Port to  |  Host from  |
| :----------: | :------------: | :---------: | :-------: | :-------: | :---------: |
|    ssh -L    |   127.0.0.1    |    8080     | localhost |   3000    | user@server |
|    ssh -R    |   127.0.0.1    |    3000     | localhost |   8080    | user@server |
```

P.S.: I don't know why, but this mapping is not listed at https://docs.termius.com/termius-handbook/port-forwarding

## Conclusion

The one thing that I don't understand is using "from/to" in labels. Why not "local/remote"? I guess it will be more clear for everybody.

There are few strangeness in the UI, so finally don't forget to write correct names for your forwarding rules.

All saved rules has something like "avatar" on the left side - there is only one letter which indicates type of rule: L (Local), R (Remote) or D (Dynamic).

Also, active rules are highlighted with green color in their "avatar". Green border indicates selected (by last click) rule. 

![How looks added forwarding rules and a toggled one](https://i.imgur.com/yZ7dhpt.png)

But finally we have all needed rules, which can be enabled with just double-click :)