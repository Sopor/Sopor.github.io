var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*
		GNU General Public License version 2 or later; see LICENSE.txt
*/
var JCaption=new Class({initialize:function(a){this.selector=a;$$(a).each(function(a){this.createCaption(a)},this)},createCaption:function(a){var f=document.createTextNode(a.title),c=document.createElement("div"),d=document.createElement("p"),e=a.getAttribute("width"),b=a.getAttribute("align");if(!e)e=a.width;b||(b=a.getStyle("float"));if(!b)b=a.style.styleFloat;if(b==""||!b)b="none";d.appendChild(f);d.className=this.selector.replace(".","_");a.parentNode.insertBefore(c,a);c.appendChild(a);a.title!=
""&&c.appendChild(d);c.className=this.selector.replace(".","_");c.className=c.className+" "+b;c.setAttribute("style","float:"+b);c.style.width=e+"px"}});

}
/*
     FILE ARCHIVED ON 05:38:45 May 30, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:41:33 Feb 16, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 61.62
  exclusion.robots: 0.279
  exclusion.robots.policy: 0.268
  RedisCDXSource: 0.641
  esindex: 0.012
  LoadShardBlock: 38.793 (3)
  PetaboxLoader3.datanode: 48.796 (4)
  CDXLines.iter: 18.036 (3)
  load_resource: 321.467
  PetaboxLoader3.resolve: 293.665
*/