---
layout: page
title: "Tags"
description: "Portal" 
header-img: "img/red.jpg" 
---


<div id="tag_cloud">
  {% for tag in site.tags %}
    <a href="#{{ tag[0] }}-ref" title="{{ tag[0] }}" rel="{{ tag[1].size }}">
      {{ tag[0] }}&nbsp;
    </a>
  {% endfor %}
</div>>


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


<script src="/js/jquery.min.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
  var jq = jQuery.noConflict();
</script>

<script src="/js/jquery.tagcloud.js" type="text/javascript" charset="utf-8"></script> 
<script language="javascript">
    $.fn.tagcloud.defaults = {
        size: {start: 12, end: 22, unit: 'px'},
        color: {start: '#7CCD7C', end: '#CD0000'}
    };
    $(function () {
        $('#tag_cloud a').tagcloud();
    });
</script>
