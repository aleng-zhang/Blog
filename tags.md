---
layout: page
title: "Tags"
description: "Portal" 
header-img: "img/page-bg0.jpg" 
---

<div id='tag_cloud'>
  {% for tag in site.tags %}
    <a href="#{{ tag[0] }}" title="{{ tag[0] }}"</a>
  {% endfor %}
</div>

---

<ul id='tag_list'>
{% for tag in site.tags %}
  <li class='tag_item' id='{{ tag[0] }}'>
    <span class='tag_name'>{{ tag[0] }}</span>
    <span>
      <ul>
      {% for post in tag[1] %}
        <li class='tag_post'><a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></li>
      {% endfor %}
      </ul>
    </span>
  </li>
{% endfor %}
</ul>

<script src="/js/jquery.min.js" type="text/javascript" charset="utf-8"></script> 