(()=>{var w,y,h,_,f=window.innerWidth;function v(){window.innerWidth!==f&&(clearTimeout(_),_=setTimeout(function(){window.location.reload(),f=window.innerWidth},250))}window.addEventListener("resize",v);function q(){function o(){w=new SplitText("[data-split-letters]",{type:"words, chars",wordsClass:"word",lettersClass:"letter"}),y=new SplitText("[data-split-lines]",{type:"lines",linesClass:"line"}),h=new SplitText("[data-split-words]",{type:"lines, words",wordsClass:"word",linesClass:"line"})}o();let r=$(window).innerWidth();window.addEventListener("resize",function(){r!==$(window).innerWidth()&&(r=$(window).innerWidth(),w.revert(),y.revert(),h.revert(),o())})}function T(){let o=document.querySelector(".project_thumbnails_highlighter"),r=document.querySelectorAll(".project_thumbnails_img_wrap"),x=document.querySelectorAll(".project_number_item"),i=document.querySelector(".project_number_inside"),s=document.querySelectorAll(".project_heading_item"),c=document.querySelectorAll(".project_text-item"),u=document.querySelectorAll(".project_tags_wrap"),a=document.querySelectorAll(".project_img_item_link"),p=!1,d,g=document.querySelector(".project_thumbnails_img_wrap.active");r.forEach((l,j)=>{l.addEventListener("click",e=>{e.target.closest(".project_thumbnails_img_wrap").classList.contains("active")||p||(d=document.querySelector(".project_thumbnails_img_wrap.active"),r.forEach(t=>t.classList.remove("active")),l.classList.add("active"),g=document.querySelector(".project_thumbnails_img_wrap.active"),S())}),l.addEventListener("mouseenter",()=>{let e=Flip.getState(o);l.appendChild(o),Flip.from(e,{duration:.3,ease:"power1.inOut"})}),l.addEventListener("mouseleave",()=>{let e=Flip.getState(o);g.appendChild(o),Flip.from(e,{duration:.3,ease:"power1.inOut"})});function S(){if(p=!0,!d)return;let e=[...r].findIndex(m=>m===d),t=[...r].findIndex(m=>m.classList.contains("active"));if(e===-1||t===-1)return;let n=t<e;gsap.to(i,{yPercent:`-${t*100}`,duration:.8,ease:"expo.out"}),gsap.fromTo(s[e].querySelectorAll(".word"),{yPercent:0,autoAlpha:1},{yPercent:n?50:-50,autoAlpha:0,duration:.6,stagger:.08,ease:"expo.out"}),gsap.fromTo(c[e].querySelectorAll(".line"),{yPercent:0,autoAlpha:1},{yPercent:n?50:-50,autoAlpha:0,stagger:.05,duration:1,ease:"expo.out"}),gsap.fromTo(u[e].querySelectorAll(".project_tags_item"),{yPercent:0,autoAlpha:1},{yPercent:n?50:-50,autoAlpha:0,duration:.6,stagger:.08,ease:"expo.out"}),gsap.set(a[e],{zIndex:0}),gsap.fromTo(a[e],{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},{clipPath:n?"polygon(100% 100%, 100% 0%, 100% 100%, 0% 100%)":"polygon(0% 0%, 100% 0%, 0% 0%, 0% 100%)",duration:1,ease:"expo.out"}),gsap.fromTo(a[e].querySelector(".project_img_item"),{scale:1},{scale:1.3,duration:1,ease:"expo.out"}),gsap.set(s[t],{autoAlpha:1}),gsap.fromTo(s[t].querySelectorAll(".word"),{yPercent:n?-50:50,autoAlpha:0},{yPercent:0,autoAlpha:1,stagger:.08,duration:.6,delay:.6,ease:"expo.out"}),gsap.set(c[t],{autoAlpha:1}),gsap.fromTo(c[t].querySelectorAll(".line "),{yPercent:n?-50:50,autoAlpha:0},{yPercent:0,autoAlpha:1,stagger:.05,duration:1,delay:.2,ease:"power4.inOut",onComplete:()=>{p=!1}}),gsap.set(u[t],{autoAlpha:1}),gsap.fromTo(u[t].querySelectorAll(".project_tags_item"),{yPercent:n?-50:50,autoAlpha:0},{yPercent:0,autoAlpha:1,stagger:.05,duration:1,delay:.2,ease:"power4.inOut"}),gsap.set(a[t],{autoAlpha:1,zIndex:1}),gsap.fromTo(a[t],{clipPath:n?"polygon(0% 0%, 100% 0%, 0% 0%, 0% 100%)":"polygon(100% 100%, 100% 0%, 100% 100%, 0% 100%)"},{clipPath:"polygon(100% 100%, 100% 0%, 0% 0%, 0% 100%)",duration:1,ease:"expo.out"}),gsap.fromTo(a[t].querySelector(".project_img_item"),{scale:1.3},{scale:1,duration:1,ease:"expo.out"})}})}function P(){gsap.set(".cursor",{xPercent:-0,yPercent:10});let o=gsap.quickTo(".cursor","x",{duration:.6,ease:"power3"}),r=gsap.quickTo(".cursor","y",{duration:.6,ease:"power3"});window.addEventListener("mousemove",i=>{o(i.clientX),r(i.clientY)}),document.querySelectorAll(".project_img_item_link").forEach(i=>{i.addEventListener("mouseenter",()=>{let s=i.getAttribute("data-cursor");document.querySelector(".cursor-text").textContent=s})})}var A=!1;document.fonts.onloadingdone=()=>{A||(q(),A=!0)};T();P();})();
