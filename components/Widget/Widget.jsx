import {WordContext} from "context";
import React, {useContext, useEffect} from 'react';

function Widget({setWidget, ...props}) {
   const {word} = useContext(WordContext);

   let widget;
   let views = 0;
   let curTrack = 0;
   let totalTracks = 0;

   useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://youglish.com/public/emb/widget.js';
      script.async = true;
      document.body.appendChild(script);
      script.onload = onAPIReady;

      return () => {
         document.body.removeChild(script);
      };

   }, [word.text]);

   function onAPIReady(e) {
      widget = new window.YG.Widget("widget", {
         width: 1000,
         suggestedWidth: 800,
         autoStart: 0,
         components: 2 + 8 + 64, // search box & caption
         events: {
            'onFetchDone': onFetchDone,
            'onVideoChange': onVideoChange,
            'onCaptionConsumed': onCaptionConsumed,
            'onPlayerReady': onPlayerReady,
         }
      });
      widget.fetch(word.text, "english");
   }

   function onPlayerReady() {
      setWidget(true)
   }

   function onFetchDone(event) {
      if (event.totalResult === 0) {
         alert('No result found');
      } else {
         totalTracks = event.totalResult;
      }
   }

   function onVideoChange(event) {
      curTrack = event.trackNumber;
      views = 0;
   }

   function onCaptionConsumed(event) {
      if (++views < 3) {
         widget.replay();
      } else if (curTrack < totalTracks) {
         widget.next();
      }
   }

   return (
      <div {...props} id="widget"></div>
   );
}

export default Widget;