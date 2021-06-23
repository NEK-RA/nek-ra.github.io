---
title: Cloudflare Web Analytics added.
description: Today was added CF Web Analytics, which should provide some basic analytics about visitors
author: NEK-RA
posted: 1624447351000
tags: 
  - Project update
keywords:
  - cloudflare
  - analytics
  - visitors
  - stats
---
## Info
Today I'm adding Cloudflare Web Analytics on this site.

Github Pages, used by this site is a static hosting, so there's no any backend here. Everything is loaded into your browsers and magic of Nuxt.js works inside your browsers. I still want to keep this site at Github Pages, but sometimes it's interesting to me if there are any visitors and how many they are.

To get more info about this Cloudflare's service visit [https://www.cloudflare.com/web-analytics/](https://www.cloudflare.com/web-analytics/)

## Shortly

<quote> [Service page](https://www.cloudflare.com/web-analytics/)

No cookie banners needed

Our analytics don’t cookie your visitors, collect their personal information, or track them across sites. So if your site needs a cookie banner, it won’t be because of us.

</quote>

<quote> [Web Analytics overview](https://developers.cloudflare.com/analytics/web-analytics)

Cloudflare Web Analytics provides free, privacy-first analytics for your website without changing your DNS or using Cloudflare’s proxy. All you need to enable Cloudflare Web Analytics is a Cloudflare account and a JS snippet on your page to start seeing page views and visitors.

Cloudflare Web Analytics does not collect or use your visitors’ personal data.

</quote>

Also you can see which data is provided by CF Web Analytics here - [https://developers.cloudflare.com/analytics/web-analytics/understanding-web-analytics](https://developers.cloudflare.com/analytics/web-analytics/understanding-web-analytics). There are 4 links points to pages where explained each part of analytics.

## For those who don't want to "take part"

Nevertheless analytics is still analytics, no matter who is service provider. Some of us (may be even most) don't like take part in analytics and tries to block them anyway :D So that's special for you - if you want to block Cloudflare Web Analytics, you need to block exactly this URL:

```text
https://static.cloudflareinsights.com/beacon.min.js
```

Or probably even forbid requests to `static.cloudflareinsights.com`, but I don't realy know if there exists something very important scripts, which can brake any other sites. So preferred way to block is to block direct link to script

## Finally

Currently this script added as experiment only. But if this will work as expected - I'll keep CF Web Analytics active. If it will show any interesting info, it maybe posted :D
