(()=>{console.log("JS load");document.addEventListener("DOMContentLoaded",function(){});document.getElementById("quoteSearch").addEventListener("input",function(a){var o=a.target.value.toLowerCase(),r=document.querySelectorAll(".quote-container");r.forEach(function(e){var n=e.textContent.toLowerCase();console.log(n),n.indexOf(o)!=-1?e.style.display="":e.style.display="none"});var l=document.getElementById("quoteSearch").value,c=document.getElementById("quotesContainer"),t=new Mark(c);t.unmark({done:function(){t.mark(l,{separateWordSearch:!1,accuracy:"partially",element:"span",className:"highlight"})}})});})();
