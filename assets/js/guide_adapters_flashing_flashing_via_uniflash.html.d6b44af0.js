"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[25371],{30585:(e,a,i)=>{i.r(a),i.d(a,{comp:()=>m,data:()=>d});var t=i(6254);const s=i.p+"assets/img/start.10278640.png",l=i.p+"assets/img/erase.0312ac3e.png",n=i.p+"assets/img/sectors.57eb3039.png",o=i.p+"assets/img/load.f03e2f41.png",r={},m=(0,i(35459).A)(r,[["render",function(e,a){return(0,t.uX)(),(0,t.CE)("div",null,a[0]||(a[0]=[(0,t.Fv)('<h1 id="flashing-via-uniflash" tabindex="-1"><a class="header-anchor" href="#flashing-via-uniflash"><span>Flashing via UNIFLASH</span></a></h1><p>UNIFLASH can be used to flash certain Texas Instruments MCUs (e.g. CC26X2R1 and CC1352P-2). It runs on Windows, macOS and Linux.</p><p><strong>n.b.</strong> UNIFLASH sometimes needs to update the programmer firmware, and this can fail if the device is connected to a USB 3 port. If this occurs, switch to a USB 2 port.</p><p><strong>Note for flashing on Linux:</strong> Uniflash does not work well on some distributions. specifically, Fedora 31 may have some issue. Combinations that are verified to be working are:</p><ul><li><em>Ubuntu 18.4 (LTS)</em>: <ul><li>fresh install</li><li><code># sudo apt install libgconf-2-4</code></li><li><code># sudo apt install libusb-0.1-4</code></li><li>... then follow the instructions below</li></ul></li></ul><h2 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions"><span>Instructions</span></a></h2><ol><li>Download and install UNIFLASH: <a href="http://www.ti.com/tool/download/UNIFLASH" target="_blank" rel="noopener noreferrer">download link</a></li><li>Plug your device</li><li>Start UNIFLASH, your device will automatically be detected, press <em>Start</em><img src="'+s+'" alt="Start"></li><li>Go to <em>Settings &amp; Utilities</em> -&gt; <em>Manual Erase</em> and press <em>Erase Entire Flash</em><img src="'+l+'" alt="Erase"></li><li>Go to <em>Settings &amp; Utilities</em> -&gt; <em>Program Load</em> and select <em>All Unprotected Sectors</em>, click <em>Perform Blank Check</em><img src="'+n+'" alt="Load"></li><li>Go to <em>Program</em> -&gt; <em>Flash Image(s)</em>, press <em>Browse</em> to select the firmware. Ensure that the path and file name do not contain any spaces (otherwise flashing may fail with &quot;Error! Unable to open file ...&quot;).</li><li>Now click <em>Load image</em> to upload the firmware <img src="'+o+'" alt="Load"></li><li>Done!</li></ol>',7)]))}]]),d=JSON.parse('{"path":"/guide/adapters/flashing/flashing_via_uniflash.html","title":"Flashing via UNIFLASH","lang":"en-US","frontmatter":{"pageClass":"content-page"},"headers":[{"level":2,"title":"Instructions","slug":"instructions","link":"#instructions","children":[]}],"git":{"updatedTime":1732041609000},"filePathRelative":"guide/adapters/flashing/flashing_via_uniflash.md"}')}}]);