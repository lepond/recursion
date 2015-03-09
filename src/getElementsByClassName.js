var getElementsByClassName = function(className){
  var hasClass = [], 
      checkClass = function (node) {
        if (node.classList && node.classList.contains(className)) {
            hasClass.push(node);
        }
        if (node.childNodes) {
          for (var i = 0; i < node.childNodes.length; i++) {
            checkClass(node.childNodes[i]);
          }
        }
      };
  checkClass(document.body);
  return hasClass;
};
