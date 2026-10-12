(()=>{
 const bound=new WeakSet();const fine=matchMedia('(hover:hover) and (pointer:fine)');const reduce=matchMedia('(prefers-reduced-motion:reduce)');
 function setup(){document.querySelectorAll('.mockup-pc').forEach(el=>{
  if(bound.has(el))return;bound.add(el);
  el.addEventListener('pointermove',e=>{if(!fine.matches||reduce.matches)return;const r=el.getBoundingClientRect();el.style.setProperty('--mx',`${e.clientX-r.left}px`);el.style.setProperty('--my',`${e.clientY-r.top}px`);},{passive:true});
  el.addEventListener('pointerleave',()=>{el.style.removeProperty('--mx');el.style.removeProperty('--my')});
 });}
 setup();const root=document.getElementById('app');if(root)new MutationObserver(setup).observe(root,{childList:true,subtree:true});
})();
