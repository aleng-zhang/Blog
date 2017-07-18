---
layout: page
title: "Tags"
description: "Portal" 
header-img: "img/page-bg0.jpg" 
---

<ul class="list-inline text-center">
* TOC
{:toc}
</ul>

<ul id='tag_list'>
{% for tag in site.tags %}
  <h4 class='tag_item' id='{{ tag[0] }}'></h4>
  <span class='tag_name'>{{ tag[0] }}</span>
  <span>
    {% for post in tag[1] %}
      <li class='tag_post'><a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }</a></li>
    {% endfor %}
  </span>
{% endfor %}
</ul>

<script src="/js/jquery.min.js" type="text/javascript" charset="utf-8"></script> 