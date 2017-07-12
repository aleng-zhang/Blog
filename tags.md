---
layout: page
title: "Tags"
description: "Portal" 
header-img: "img/red.jpg" 
---


<div id='tag_cloud'>
{% for tag in site.tags %}
<a href="#{{ tag[0] }}" rel="{{ tag[0].size }}">{{ tag[0] }}</a>
{% endfor %}
</div>


---


<ul class="listing">
{% for tag in site.tags %}
  <li class="listing-seperator" id="{{ tag[0] }}">{{ tag[0] }}</li>
{% for post in tag[1] %}
  <ul>
    <li class="listing-item">
    <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
    </li>
  </ul>
{% endfor %}
{% endfor %}
</ul>

<script src="/js/jquery.tagcloud.js" type="text/javascript" charset="utf-8"></script> 
<script language="javascript">
$.fn.tagcloud.defaults = {
    size: {start: 14, end: 18, unit: 'pt'},
      color: {start: '#f8e0e6', end: '#ff3333'}
};

$(function () {
    $('#tag_cloud a').tagcloud();
});
</script>
