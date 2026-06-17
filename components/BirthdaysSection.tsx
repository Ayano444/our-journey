"use client";

import {
  JSX,
  useEffect,
  useState,
} from "react";

import { useRouter } from "next/navigation";

type SceneText = {
  type: "text";
  content: string[];
  duration: number;
};

type SceneImage = {
  type: "image";
  src: string;
  duration: number;
};

type SceneVideo = {
  type: "video";
  src: string;
};

type Scene =
  | SceneText
  | SceneImage
  | SceneVideo;

const scenes: Scene[] = [

{
type:"text",
content:[
"And then came January.",
"",
"The month of birthdays.",
],
duration:5500,
},

{
type:"text",
content:[
"After everything",
"December left behind—",
"",
"January felt different.",
"",
"Lighter.",
"",
"Warmer.",
],
duration:7000,
},

{
type:"text",
content:[
"And undoubtedly—",
"",
"it became",
"the best month for us.",
],
duration:6500,
},

{
type:"text",
content:[
"We decided.",
"",
"If we're meeting—",
"",
"let's meet",
"on our birthdays.",
],
duration:7000,
},

{
type:"text",
content:[
"29 January",
"",
"my birthday.",
],
duration:4000,
},

{
type:"image",
src:"/memories/birthdays/29/1.jpeg",
duration:3500,
},

{
type:"image",
src:"/memories/birthdays/29/2.jpeg",
duration:3500,
},

{
type:"text",
content:[
"I don't remember",
"every conversation.",
"",
"But I remember",
"how happy I looked.",
],
duration:5500,
},

{
type:"image",
src:"/memories/birthdays/29/3.jpeg",
duration:3500,
},

{
type:"image",
src:"/memories/birthdays/29/4.jpeg",
duration:3500,
},

{
type:"text",
content:[
"For once—",
"",
"I wasn't counting days.",
"",
"I was living one.",
],
duration:5500,
},

{
type:"image",
src:"/memories/birthdays/29/5.jpeg",
duration:3500,
},

{
type:"video",
src:"/memories/birthdays/29/cake.mp4",
},

{
type:"text",
content:[
"30 January",
"",
"The next day.",
"",
"And somehow",
"it still didn't feel over.",
],
duration:6000,
},

{
type:"image",
src:"/memories/birthdays/30/1.jpeg",
duration:3500,
},

{
type:"image",
src:"/memories/birthdays/30/2.jpeg",
duration:3500,
},

{
type:"text",
content:[
"It felt strange.",
"",
"Like time slowed down.",
"",
"And we just stayed there.",
],
duration:6000,
},

{
type:"image",
src:"/memories/birthdays/30/3.jpeg",
duration:3500,
},

{
type:"image",
src:"/memories/birthdays/30/4.jpeg",
duration:3500,
},

{
type:"video",
src:"/memories/birthdays/30/video.mp4",
},

{
type:"text",
content:[
"Three birthdays.",
"",
"Three days.",
"",
"And somehow—",
"",
"none of them felt separate.",
],
duration:7000,
},

{
type:"text",
content:[
"31 January",
"",
"your birthday.",
],
duration:4500,
},

{
type:"image",
src:"/memories/birthdays/31/1.jpeg",
duration:3200,
},

{
type:"image",
src:"/memories/birthdays/31/2.jpeg",
duration:3200,
},

{
type:"text",
content:[
"And then—",
"",
"your day arrived.",
],
duration:4500,
},

{
type:"image",
src:"/memories/birthdays/31/3.jpeg",
duration:3200,
},

{
type:"image",
src:"/memories/birthdays/31/4.jpeg",
duration:3200,
},

{
type:"image",
src:"/memories/birthdays/31/5.jpeg",
duration:3200,
},

{
type:"text",
content:[
"I still remember",
"looking at you",
"",
"and thinking—",
"",
"this is real now.",
],
duration:6500,
},

{
type:"image",
src:"/memories/birthdays/31/6.jpeg",
duration:3200,
},

{
type:"image",
src:"/memories/birthdays/31/7.jpeg",
duration:3200,
},

{
type:"image",
src:"/memories/birthdays/31/8.jpeg",
duration:3200,
},

{
type:"video",
src:"/memories/birthdays/31/cake.mp4",
},

{
type:"text",
content:[
"Three days.",
"",
"A lot of memories.",
"",
"And somehow—",
"",
"they still feel close.",
],
duration:7000,
},

];

export function BirthdaySection(): JSX.Element {

const router =
useRouter();

const [current,setCurrent]=
useState(0);

const [visible,setVisible]=
useState(true);

const scene =
scenes[current];

function next(){

setVisible(false);

setTimeout(()=>{

if(
current <
scenes.length-1
){

setCurrent(
v=>v+1
);

setVisible(
true
);

}

},900);

}

useEffect(()=>{

if(
scene.type===
"video"
)
return;

const timer=
setTimeout(
next,
scene.duration
);

return()=>
clearTimeout(
timer
);

},[
current
]);

const done=
current===
scenes.length-1;

return(

<section
className="
h-screen
bg-black
overflow-hidden
relative
"
>

<div
className={`
absolute
inset-0

transition-all
duration-1000

${
visible
? "opacity-100"
: "opacity-0"
}
`}
>

{scene.type==="text"&&(

<div
className="
h-full
flex
items-center
justify-center
text-center
px-10
"
>

<div
className="
text-3xl
md:text-6xl

leading-[1.9]

font-light

whitespace-pre-line
"
>

{"content" in scene &&
scene.content.map(
(
x,
i
)=>(

<div key={i}>
{x}
</div>

)
)}

</div>

</div>

)}

{scene.type==="image"&&(

<div
className="
w-full
h-full

flex
items-center
justify-center

bg-black
"
>

<img
src={
scene.src
}
className="
max-w-[92vw]
max-h-[92vh]

w-auto
h-auto

object-contain

scale-[1.01]

transition-transform
duration-[7000ms]
"
/>

</div>

)}

{scene.type==="video"&&(

<div
className="
w-full
h-full

flex
items-center
justify-center

bg-black
"
>

<video
autoPlay
muted
playsInline
controls={false}
preload="auto"

onCanPlay={(e)=>{
e.currentTarget
.play()
.catch(()=>{});
}}

onEnded={()=>{
setTimeout(
next,
500
);
}}

className="
max-w-[95vw]
max-h-[95vh]

w-auto
h-auto

object-contain
"
>

<source
src={
scene.src
}
type="video/mp4"
/>

</video>

</div>

)}

</div>

{done&&(

<div
className="
absolute

bottom-16
left-1/2

-translate-x-1/2

opacity-0

animate-[fadeIn_2s_forwards]
"
>

<button
onClick={()=>
router.push(
"/favorites"
)
}

className="
px-10
py-4

border
border-white/20

text-white

hover:bg-white
hover:text-black

transition
"
>

Continue →

</button>

</div>

)}

</section>

);

}