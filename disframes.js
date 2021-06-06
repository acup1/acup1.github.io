function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
function createFrame(link){
  e=getElementByXpath("/html/body/div/div[2]")
  css="<style>#qwe {position:absolute;z-index:100 ;background-color:#f1f1f1;text-align:center;top:200px;right:200px;width:720px;height:480px;} .fb {color:black;vertical-align: middle;}</style>"
  html="<div id='qwe'><div style='background-color:red;height:20px;text-align: right;'><a onclick='"+'$("#qwe")[0].requestFullscreen()'+"' style='margin-right:5px;' class='fb'>o</a><a class='fb' style='margin-right:5px;' onclick='"+'$("#qwe").remove()'+"'>x</a></div>"+"<iframe is='x-frame-bypass' width=100% height=100% src='"+link+"'></iframe>"+"</div>"
  e.innerHTML=css+html+e.innerHTML;
  setTimeout('$("#qwe").draggable();$("#qwe").resizable()',500);
}
