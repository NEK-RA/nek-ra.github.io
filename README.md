# Welcome

This site is built and deployed to: [https://nek-ra.github.io](https://nek-ra.github.io)

Status: 
[![Github CI](https://github.com/NEK-RA/nek-ra.github.io/actions/workflows/github-ci.yml/badge.svg)](https://github.com/NEK-RA/nek-ra.github.io/actions/workflows/github-ci.yml) [![Github Pages](https://github.com/NEK-RA/nek-ra.github.io/actions/workflows/github-cd-ghpages.yml/badge.svg)](https://github.com/NEK-RA/nek-ra.github.io/actions/workflows/github-cd-ghpages.yml)

# What is it

It's my new personal site for Github Pages service. Also simple static blog is added.
It was developed in [new-github-pages repo](https://github.com/nek-ra/new-github-pages). Basic version is finished and now arriving to [nek-ra.github.io](https://nek-ra.github.io)

# What used

Here used [Nuxt.JS](https://nuxtjs.org/) with it's module [@nuxt/content](https://content.nuxtjs.org/).

Nuxt Content module is used for easier project's info updating and also is used to create a blog section.

For the UI was used [Vuetify.js](https://vuetifyjs.com) and [Xonokai theme](https://github.com/PrismJS/prism-themes/blob/master/themes/prism-xonokai.css) for [PrismJS](https://prismjs.com/) probvided by [@nuxt/content](https://content.nuxtjs.org/) module.

Disqus service is used to provide comments at blog, because Github Pages host a static sites only. Otherwise you can start discussions at [repo's discussions](https://github.com/NEK-RA/nek-ra.github.io/discussions)

**Warning:** recently was added [Cloudflare Web Analytics](https://developers.cloudflare.com/analytics/web-analytics). Related blog post is https://nek-ra.github.io/blog/added-cf-web-analytics . If you want to block it - block requests to `static.cloudflareinsights.com` which provides JS snippet for analytics.

# TODO

- Think what to do next
