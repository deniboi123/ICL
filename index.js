// This is just another way to link to your site.


 var iframe = document.getElementById("output_frame_id");
  var cookies = iframe.contentWindow.document.cookies;
  alert(cookies)
  
  // Now the cookies element has been defined, you can
  // send it to a malicious website, store it on a
  // database and yeah. Treat it like it was your
  // site and you executing JS.
