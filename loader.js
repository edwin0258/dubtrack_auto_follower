var load = function(){
  console.log('Loading Extension..');
  var extension = document.createElement('script');
  extension.type = 'text/javascript';
  extension.id = 'extension_loader';
  extension.src = chrome.extension.getURL('dubtrack_extension.js');
  document.head.appendChild(extension);
}
load();