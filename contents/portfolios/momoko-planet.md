---
title: 'MOMOKO Planet'
slug: /momoko-planet
date: Augst 2012 - March 2013
info: The official website of a famous Japanese manga artist. Selling video and image content that can only be purchased from this site.
techStack: php/Cakephp/JQuery/Twitter Bootstrap
type: CMS
client: i-freek
link: ''
files:
  - momokoplanet01.png
  - momokoplanet02.png
  - momokoplanet03.png
---

import PrePostNav from '../../src/components/molecules/pre-post-nav.tsx'

export const params = {
preUrl: '/portfolio/feedlp',
postUrl: '/portfolio/s-portal',
preText: 'Home',
postText: 'S-Portal',
}

<PrePostNav {...params} />
