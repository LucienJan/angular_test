/*!2017-03-09 16:56 */KSLITE.declare("tanxssp-probe",["tanxssp-utils"],function(a,b){function c(a){var b=!0,c=a.pid,e=[d.$("tanxssp-outer-con"+c),d.$("tanxssp_con_"+c),d.$("tanxssp-outer-iframe"+c),d.$("tanx_displayframe_"+c+"_l"),d.$("tanx_displayframe_"+c+"_r")];"2"!=a.distype||e[3]&&e[4]||(b=!1),"1"!=a.distype&&"5"!=a.distype||e[0]&&e[1]||(b=!1),b||d.send("https://gm.mmstat.com/tanx.err.nulldom?pid="+c+"&t="+(new Date).getTime());try{e[2]&&e[2].contentWindow.document.body.innerHTML.length>10?b=!0:d.send("https://gm.mmstat.com/tanx.err.nullcon?pid="+c+"&t="+(new Date).getTime())}catch(f){}}var d=a("tanxssp-utils");b.Def=function(a){if("17534123"==a.mid&&"mm_105888626_15422290_59782169"==a.pid){var b=a.data.match(/src=\"(.*?)\"><\/iframe>/i),d="";b&&(d=encodeURIComponent(b[1]));var e=document.createElement("iframe");e.style.cssText="width:0;height:0;display:none";var f="https://strip.alicdn.com/tfscom/TB14ONHPVXXXXaGXXXXXXXXXXXX.html?";e.src=f+"pid="+a.pid+"&mid="+a.mid+"&url="+d,document.body.insertBefore(e,document.body.firstChild)}setTimeout(function(){c(a)},1500)}});