---
layout: page
title: "Archive"
description: "Time Machine"
header-img: "img/page-bg6.jpg"
---


<ul class="listing">
{% for post in site.posts %}
	{% capture y %}{{post.date | date:"%Y"}}{% endcapture %}
	{% if year != y %}
    	{% assign year = y %}
    	<li class="listing-seperator">{{ y }}</li>
    {% endif %}
    <ul>
    	<li class="listing-item">
   	 		<time datetime="{{ post.date | date:"%m-%d" }}">{{ post.date | date:"%m-%d" }}</time>
    		<a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
  		</li>
  	</ul>
{% endfor %}
</ul>