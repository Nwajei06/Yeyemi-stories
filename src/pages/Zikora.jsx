import React from 'react'
import { useState } from 'react'
import img1 from "../../public/images//godchild.jpeg"
import { Link } from 'react-router-dom'
function Zikora() {
       const [displays, displayNow]=useState(false);
        const [show, setShow]=useState(true) ;   
        const [shows, showset]=useState(false);
        const [hide, hideshow]=useState(false);
        const [chpfour, chpFour]=useState(false);   
        const [chpfive,chpFive]=useState(false)
        const [chpsix,chpSix]=useState(false)
        const [chpseven,chpSeven]=useState(false)
        const [chpeight,chpEight]=useState(false)
        const [chpnine,chpNine]=useState(false)
    
  return (
    <div className='gather'>
        
        <Link className='linkk' to="/Fresh">  <li class="fas fa-arrow-left"></li></Link>
                          {
                           displays? <div className='btns'>
                          <center> <img className='chap-img 'src={img1} alt="" /></center> 
                            <br /><br />
                            <hr />
                      <span onClick={()=>{
                        setShow(true); showset(false); hideshow(false);
                        chpFour(false); chpFive(false); chpSix(false);
                        chpSeven(false); chpEight(false); chpNine(false);
                        }}> 
                        <center> Page 1 </center></span>
                      <br />
                      <span onClick={()=>{
                        showset(true); setShow(false); hideshow(false);
                        chpFour(false); chpFive(false); chpSix(false); 
                        chpSeven(false); chpEight(false);chpNine(false);
                        }}> 
                        <center> Page 2 </center></span> <br />
                      <span onClick={()=>{
                        hideshow(true); showset(false); setShow(false);
                        chpFour(false); chpFive(false); chpSix(false);
                        chpSeven(false); chpEight(false); chpNine(false);
                        } }> 
                        <center> Page 3 </center></span>
                <br />
                <span onClick={()=>{
                    chpFour(true); hideshow(false); showset(false);
                    setShow(false);chpFive(false);chpSix(false);
                    chpSeven(false);chpEight(false);chpNine(false);
                    }}> 
                    <center> Page 4 </center></span><br />
                <span onClick={()=>{
                    chpFive(true);chpFour(false);hideshow(false);
                    showset(false);setShow(false);chpSix(false);
                    chpSeven(false);chpEight(false);chpNine(false);
                }} > <center> Page 5 </center></span><br />
                <span onClick={()=>{
                    chpSix(true); chpFive(false);chpFour(false);
                    hideshow(false); showset(false); setShow(false);
                    chpSeven(false); chpEight(false); chpNine(false);
                }} >
                     <center> Page 6 </center></span>
                <br />
                <span onClick={()=>{
                    chpSeven(true);chpSix(false);chpFive(false);
                    chpFour(false); hideshow(false);showset(false);
                    setShow(false);chpEight(false);chpNine(false);
                }}> 
                <center> Page 7 </center></span><br />
                <span onClick={()=>{
                  chpEight(true);chpSeven(false);chpSix(false);
                  chpFive(false);chpFour(false);hideshow(false);
                  showset(false);setShow(false);chpNine(false);
                }} >
                
                     </span>
                
                      </div> :null
                      }
                      <div className="handburgar-menu"><i id='bars' onClick={()=>displayNow(true)} class="fas fa-bars"></i></div>
                    <div className='chapter-container'>
                      
                      <br /><br /><br />
                      {    
                       show?<div onClick={()=>displayNow(false)} className='chap1'>
                       <center> <h1 className='abi'> 
                       Zilora : A Short Story </h1> <br />
                       <h3 className='nov'>by</h3> <br />
                        <i className="italics">Chimamanda Ngozi Adichie</i> 
                            </center><br /> <br /><br /><br />
                       <section className='info-child'>
                  </section> <br /><br /><br />
                <div className="one"><center>   <h1 className="abi">Page 1</h1></center>
                
                All through the night my mother sat near me but never touched me. <br /><br />
At Once, I screamed, a short scream that lanced the air in the
hospital room, and she said, “That’s how labor is,” in Igbo, and I
wanted to say, “No shit,” but of course she didn’t understand
colloquial Americanisms. I had prepared for pain but this was not mere
pain. It was something like pain and different from pain. It sat like fire in
my back, spreading to my thighs, squeezing and crushing my insides,
pulling downward, spiraling. It felt like the Old Testament. A plague. A
primitive wind blowing at will, evil but purposelessly so, an overcoming in
my body that didn’t need to be. Hour after hour of this, and yet the nurses
said I wasn’t progressing. “You’re not progressing,” the smaller nurse said as though it were my fault.
The room felt too warm and then too cold. My arms itched, my scalp
itched, and malaise lay over me like a mist. I wanted nothing touching my
body. I yanked off my hospital gown, the flimsy blue fabric with its effete
dangling ropes that gaped open at the back as if designed to humiliate.
Naked, I perched on the edge of the bed and retched. Relief was
impossible; everything was impossible. I stood up, sat down, and then I
got on my hands and knees, my taut belly hanging in between. The
clenching in my lower body came and went, random, irregular, like mean surprises.
The bigger nurse was saying something.
I shouted at her, “I need it now!”
“You’ll get the epidural soon,” she said.
The smaller nurse needed to check me. I rolled onto my back. An
invasion of fingers. She was gloved and I couldn’t see her nails, but her
false eyelashes, curving from her upper lids like black feathers, made me
worry that her nails were long and sharp and would pierce through the
latex and puncture my uterus. I tensed up.
“Bring your feet up and let your legs fall apart,” she said.
“What?”
“Bring your feet up and let your legs fall apart.”
Let your legs fall apart.
What did that even mean? How could legs fall apart? I began to
laugh. From somewhere outside myself I heard the hysteria in my laughter.
The nurse looked at me with the resigned expression of a person who had
seen all the forms of madness that overtook birthing women lying on their
backs with their bodies open to the world.

<p>
You’re not progressing,” she said.
Then came a wave of exhaustion, a tiredness limp and bloodless. I was
leaving my body. I could die. I could die here, now, today, like Chinyere
died in a fancy Lagos hospital that had flat-screen TVs in the labor ward. It
was her third childbirth and she was walking, chatting with the nurses,
stopping to breathe through each contraction, and then midsentence, she
paused and collapsed and died. She was my cousin’s cousin. I had not liked her but I had mourned her.
My heart was beating fast. I’d read somewhere that maternal
mortality was higher in America than anywhere else in the Western world
—or was it just higher for Black women? The subject had never really
interested me. I’d felt at most a faraway concern, as though it was
something that happened to other people. I should have paid more
attention. Now I would die in this hospital room with its rolling table and
its picture of faded flowers on the wall, and become a tiny nameless dot in
the data, and somebody somewhere would read a new report on maternal
mortality and mildly wonder if it was Black women who died more often.
My doctor came in looking unbearably calm.
“Dr. K, something is wrong. I just know something is wrong,” I said.
My body was turning on me in spasms and wrenches I had never
before known, each with a dark promise of its own return. Something had
to be wrong; childbirth could not be this gratuitous and cruel.
“Nothing is wrong, Zikora, it’s all normal.”
“I’m tired, I’m so tired,” I said, in my mind the image of Chinyere pregnant and dead on a hospital floor.
“Epidural is almost here. I know it’s difficult, but what you are feeling is perfectly normal.”
“You don’t know how it feels ,” I said. Before today, he was the
lovely Iranian doctor I’d chosen for the compassion in his eyes. Today, he
was a monstrous man pontificating opaquely about things he would never
experience. What was “normal”? That Nature traded in unnecessary pain?
It wasn’t his intestines being set on fire, after all.
I caught my mother’s glance, that icy expression she had when I was
a child and did something in public where she couldn’t slap me right away as she would have liked.
Once, I was about nine, and my father’s second wife, Aunty
Nwanneka, had just had a baby, my brother Ugonna (“Your half brother ,”
my mother always said). To visit the baby, my mother asked me to wear a goingout dress, red and full skirted, as though for church. Aunty
Nwanneka offered us plantain and fish, the house smelled of delicious
frying, and my mother said no thank you, that we had just eaten, but when
I went to pee, I told Aunty Nwanneka I was hungry, and she brought me a
plate, smiling, her face plump and fresh. Later, as we walked to the car, my mother slapped me. “Don’t disgrace me like that again,” she said
calmly, and for a long time I remembered the sudden vertigo, feeling
surprise rather than pain as her palm struck the back of my head.
I was disgracing her now; I was not facing labor with laced-up
dignity. She wanted me to meet each rush of pain with a mute grinding of
teeth, to endure pain with pride, to embrace pain, even. When I had severe
cramps as a teenager, she would say, “Bear it, that is what it means to be a
woman,” and it was years before I knew that girls took Buscopan for period pain.
The epidural person, a pale-faced man with a reddish mustache, was
saying, “I need your help to get this done, okay? I need you to be very still, okay?”
He did not inspire confidence, with his false cheer and his saying
“okay?” so often. I began to wonder if he was qualified, where he had
trained, whether his animation was a shield for incompetence.
“That’s your mom?” he asked. “Hi, Mom! I’d like you to help us out
here, okay? If you can hold her so she doesn’t move . . .”
Before he finished speaking, my mother, still seated on the armchair, said, “She can manage.”
The smaller nurse raised her eyebrows. It made no sense to be angry
with the nurse, but I was angry with the nurse. Why did she have to make
that face? Did it really surprise her? Did other mothers sit there overnight
as my mother had, still as a coffin, glasses gold framed, face perfectly
powdered in MAC NC45? Was she thinking that it should have been the
father of my baby here with me? How dare she judge me? Was the father of
her children in their life, what with her outlandish lashes and all? She
probably had three children, each with a different father, and here she was
judging me for having a cold mother instead of a husband by my side. I
would write a complaint about her ridiculous lashes. The labor and delivery ward needed to have a falseeyelash policy. I would have chosen a different hospital if my health insurance company hadn’t been so
difficult about things. I felt angry and I felt ugly and I welcomed both like a bitter refuge.
The epidural man would not stop talking. “As still as you can, okay?
Don’t flinch, okay?”
I bent over and hugged the pillow and held still. There was the cold
smear of a liquid on my back and the brief prick of a needle. Tears filled

</p>
                
                
                
                </div>
                
                </div>:null
                      } 
                       {
                       shows?<div onClick={()=>displayNow(false)}   className='chap2' ><center> <h1 className="abi">Page2</h1></center>
                
                my eyes; my anger began to curdle into a darkness close to grief. It really
should be Kwame here with me, holding me, sitting on the chair my
mother was in, finding a way to make a joke about nutty . In a rush I
reached for my cell phone and sent him a text: I’m in labor at East Memorial.
I held on to my phone in the delivery room, and I kept
checking it, willing Kwame’s reply to appear on the screen, until my doctor asked me to push.
We met at a book launch that I almost didn’t go to. A woman I worked
with had left the firm to write a cookbook, and she launched it downtown
in a rooftop space, with someone at the microphone describing each
complicated canapé served. After the author introduced us, Kwame leaned
toward me and said with a casual intimacy that wasn’t inappropriate, as
though we already knew each other but only as good friends, “When they
say something tastes nutty, do we know which nut they mean? Because a walnut tastes nothing like a cashew nut.”
“I think they mean a texture, not a taste,” I said, then laughed, a little
too eagerly, because I hadn’t expected to meet anyone and now here was a cleanlooking Black man and a thrill in the air.
On our first date he said, “Looking nutty good!”
He had a boyish quality, which was not, as in some men, mere cover for immaturity; he was a grownup who could still touch in himself the wonder and innocence of childhood.
Nutty became our word, an adverb, an endearment, an adjective, and even when it wasn’t funny, it was still ours.
On the day we broke up he said, looking me over, “Nutty dress.”
Neither of us knew we would break up that evening as we went to his law
firm’s gala, holding hands, him in a dark suit, me in an emerald dress, my hair in a bouncy twistout, a young Black couple in Washington, DC, with
glittering promise spread before us. I had never met a man like him, so
attentive, so free of restlessness. He volunteered details about his life, and
at first his openness confused me, because I dated men who were so
guarded they made secrets of simple things. When Kwame saw me, he let his face show its light—
he didn’t hide, he didn’t pretend not to care too
much. He said “I love you” before I did. He was supposed to be like other
single, straight, successful Black men in Washington, DC: intoxicated by
their own rarity, replete with romance opportunities, always holding out
for the next better thing. For the first few weeks, I held my breath, waiting.
He was too much what I wanted, it was too good, he would change, crack
open and reveal the sinister center. But he didn’t change, and soon I unfurled wholly into our life together.

<p>I was a little older than him, but sometimes I felt older, as though I knew
better than he how uneven life’s seams could be. It puzzled me that he
could not see the insincerity in people or the ill will of some friends, which
was often as obvious to me as a brightly colored stain. He said jokingly
that I needed to vet his friends, to protect him, a joke with the undertones
of truth. “You would have probably warned me about Jamila,” he said
once with a laugh. Jamila, the long-term girlfriend from college and into
law school, who cheated on him and left him reeling, single and celibate
for years. He said he loved how I “got” him, and what was unsaid was that
Jamila hadn’t. He said how similar our backgrounds were, and yet it felt to
me that his American childhood was more restrained, and more fraught,
than my African one. He grew up with his dreams already dreamt for him.
There was his Ghanaian father’s immigrant intensity, and there was his
African American mother from Virginia, determined to open for him some
of the many doors that had been closed to her. He and his younger brother
had violin lessons and went to private school in formal uniforms, and
every summer, his father pasted reading lists on the refrigerator and
arranged tutors on the weekends. He had barely gotten his acceptance to
Cornell before his father was talking about law school. The first time he
took me to Sunday lunch at his parents’ house in Bethesda, I was surprised
by his father’s effusive warmth, his mother’s deliciously sly humor. I hadn’t quite expected to
enjoy them, and to be at ease with them, but I
knew, too, that their approval would have come slower had I not had the
right bona fides, my Georgetown degree, my wealthy Nigerian family. We
went in the summer to his mother’s family reunion, and I was moved that Kwame had ordered a Tshirt for me too, with their family name printed
beside an image of a multibranched tree. I watched him throw a Frisbee
with the teenage boys, and I could see how much they liked and looked up
to him, this handsome older cousin, a DC lawyer with his pockets full of
cool. I was sitting in the shade eating watermelon with his parents and saw
the pride in the eloquence of their body language: he had turned out as
they had hoped. The women relatives flirted with him and he, generously,
harmlessly, paid them lavish compliments. He charmed people without
trying. I felt myself sitting up straighter, as though I had won a prize I was
not sure I deserved, and so needed to prove my worthiness. He was the
kind of man you married, the kind people called, minutes into meeting
him, “a good man.” We didn’t talk about marriage itself, but we talked
often of the future, what we would do and wouldn’t do in five years, in ten
years, as though we both knew it was inevitable that we would be together.

“Water, this is why it’s best to wait for the right person, and not just
settle,” I said over FaceTime to my cousin Mmiliaku.
I was boasting actually, a callous boast. Only days before, Mmiliaku
had said, “Emmanuel still waits until I’m asleep, then he climbs on me,
and of course I’m dry and I wake up in pain. Sixteen years.”
She had settled. She had been living at home after university
graduation, working as contract staff in telecom customer service, the kind
of middling job that asked little of her and promised nothing to her. Her
parents expected her home before 9:00 p.m. every day, her penniless
boyfriend lived in his uncle’s Boys Quarters and was looking for money to go to China and try his luck in importexport. And then came Emmanuel, older and wealthy, holding his intentions like jewels.
To marry Emmanuel was her only way into the world of adults.
I did not understand this then. I had moved to America for college,
and after a few years away, the pressures of Nigerian life seemed easier to
overcome. Why didn’t she run off to China with the guy she loved? What
did “It’s time to get married” mean, anyway? Why did she have to marry at all?
She had laughed at me. “Please, I am not in America like you. Daddy
will never allow me to get my own place. And Emmanuel is nice.”
Nice. “I don’t think that is how to describe a man you want to marry,”
I told her. Nice.
And Mmiliaku laughed some more. Mmiliaku, my cousin with the
beautiful name, water of wealth, wealth’s water, wealth like a river. The
cousin that was like a sister, clever. Mmiliaku, who had advised me and
taught me things, was now marrying a man who had asked her to stop
working because he could afford to keep her at home. They had been
married only a few weeks when Emmanuel said he didn’t want her best
friend to visit them anymore because married women shouldn’t keep single friends.
I once told Kwame the story, and he rolled his eyes in a kind of
disbelieving amusement. “What, the single friend will seduce the husband,
or the single friend will make the wife want to be single again?”
“Maybe both?”
“He sounds like a sad specimen,” Kwame said.
I liked the description “sad specimen,” because it cast Emmanuel as
apart, a different species of man, and therefore completely removed from Kwame himself.
On the day we broke up, we went back to my apartment after the gala, and
I told Kwame, “So I’m very late and I’m never late.”</p>
<p>
    
He looked confused.
“I might be pregnant.” I was so certain of his delight that I made my
tone playful, almost singsong. But his face didn’t relax, instead it went
still, as though all his features had paused, and suddenly this communicative man retreated into the cryptic.
He said, “We’re at different places in our lives.”
He said, “I’ll take care of everything,” in a voice that belonged to
someone else, in words that he had heard somewhere else. Take care of everything.
How absurd; we were both lawyers, and I earned a little more than he did.
He said, “It’s a shock.”
I said, “You came inside me.”
He said, “I thought you let me because you had protection.”
I said, “What are you talking about? You know I stopped taking the
pill because it made me fat, and I assumed you knew what it meant, what it could mean.”
He said, “There was miscommunication.”
“Kwame,” I said finally, in a plea and a prayer, looking at him, loving
him. Our conversation felt juvenile; an unreal air hung over us. I wanted to say, “I’m thirty-nine and you’re thirtyseven, employed and stable, I have
a key to your apartment, your clothes are in my closet, and I’m not sure
what conversation we should be having but it shouldn’t be this one.”
I wanted to rewind and redo. Have us walk into my apartment again,
laughing, me saying, Let’s make margaritas, and him saying, I really want
a burger; I don’t know what that tiny Chilean bass thing at dinner was
about. Then I saw it, the almost imperceptible shrug. A shrug. He
shrugged. His response was a shrug. From the deepest vaults of his being, a shrug.
“I think I should leave. Is that okay?” he asked as though he needed
my permission to abandon me. He would kill you, but he would do it courteously.
The pregnancy websites said no soft cheese, and I stopped eating all
cheese. They said don’t take any medicines for nausea, and so I sucked
natural ginger sweets, but I always felt a mere breath away from vomiting.
Day after slow day, I nursed nausea, until I no longer remembered what it
felt like to be free of my biliousness. I took breaks from meetings to throw
up in the toilet, and then walked back in with perfect aplomb, as though I
had just gone to retouch my lipstick. At first I wore stylish loose-fitting
dresses that hid my burgeoning middle, and when I couldn’t hide it
anymore, I stayed late every day, noisily late, and at morning meetings I 11
made sure to note with false casualness how traffic thinned after 9:00 p.m.
My colleague Donna was my closest competitor for making partner, the
only woman as senior as me, and everyone knew the partners wanted a woman next. Donna was “childfree,” an expression she used often; she was thin and vegan and did yoga and wore dresses cut for flatchested women. She watched me with the eyes of a person willing you to stumble.
“Do you need anything, Zikora?” she asked often, especially when
the men could hear, her eyes hard and bright.
“I don’t have a debilitating illness, Donna. I’m only pregnant,” I would say. I made jokes about pregnancy.
See, I can balance files on the belly! I told her I still drank once in a while, because my mother had drunk
Guinness stout throughout her pregnancy with me. It was a lie, my mother
had not drunk, nor did I, but I wanted to seem, to Donna, in control, even
slightly reckless, as though my pregnancy were a glamorous adventure that would certainly not affect my work.
“I figured I better have this baby, because it might be my last chance.
I probably wouldn’t want to keep it if it were ten years ago,” I told her
breezily. “It’s funny how pregnancy is like body hair. We scrub and scrape
our armpits and upper lip and legs because we hate to have hair there.
Then we pamper and treat the hair on our heads because we love hair
there. But it’s all hair. It’s the wanting that makes the difference.”
“I can’t believe you’re saying a baby is like body hair,” Donna said.
She was being deliberate, and her lips had that downward curve of the
righteous, the same curve as when she spoke of people who ate beef.
“Oh, come on, I’m not saying a child is like body hair. I’m saying our
relationship with body hair is similar to our relationship with pregnancy. It
could be the thing we most desperately want and also the thing we most desperately don’t want.”
Donna, lips still downward turned, changed the subject.
“Are you sleeping okay?” she asked.
“I’m sleeping really well,” I said.
In fact I barely slept, propped up on three pillows, tossing this way
and that, seeking an elusive comfort, my chest aflame with heartburn, and
a stubborn throbbing ache in the joints of my fingers.
Each morning, I coated concealer on the dark bags under my eyes.
Most days, I caressed a bottle of Advil, longing for the translucent green
pills, but knowing that I would never take them. I poured glasses of merlot
and tipped them over to watch the redness trickle down my kitchen drain.
It was a sweet-and-sour time, a time of exquisite paradoxes. I raged at
Nature but wanted to appease Nature, to secure the safety of my
pregnancy. I obeyed the rules, dutiful and seething. On weekends, I lay
blankly on my couch reading Kwame’s past text messages, as the hours 
</p>
        
                <br /><br /><br />
                
                       </div>:null
                       } 

{
           hide?<div onClick={()=>displayNow(false)}  className="chap2"> <center><h1 className='abi'>Page3</h1> </center>
           slid one into another. Time spent on remembering, time lost on remembering.
I lingered on the messages he had sent when he stopped at my
favorite Indian restaurant to buy me pakoras. No veg today, babes. Meat okay?
Or when he drove to the Middle Eastern place in Silver Spring to
get me hummus. They ran out of regular, just red pepper, sorry babes.
How well he knew me. It was real hummus or nothing for me,
none of those flavors invented to appeal to the American obsession for
variety. I read somewhere that love was about this, the nuggets of
knowledge about our beloved that we so fluently hold.
“Stop reading his texts,” Mmiliaku told me on FaceTime. “You’ll
start questioning everything, and wondering if any of it was even real.”
“Yes,” I said, but I didn’t question whether it was real, because I
knew it was. I questioned where it had gone. How could emotions just
change? Where did it go, the thing that used to be?
Each time I called, I felt newly surprised at the burr-burr-burr of his
phone ringing unanswered. How could he have turned, and so quickly? I
knew him well, but I could not have known him well. He was lovely, he
truly was. Silence was not his fighting tool; he was a man who talked
things through. But he ignored my calls and texts, and sent back my
apartment key in an envelope, the lone metal key wrapped in plain paper.
Some days I was fine and some days I was underwater, barely breathing.
At my twenty-week checkup, I smiled at the moving grainy gray image on the ultrasound screen, flush with wellbeing, and I waved at the front-desk
women as I left, but in the elevator, I burst into tears, a sudden sense of
dissolving all around me. I sent Kwame a text: I’m 20 weeks today.
He replied three days later: It’s manipulative to send me this. You
know you made a decision that excluded me. I didn’t want things to end this way. I’m hurting too.
I read it over and over; it felt like something written by somebody
who was not Kwame, like an exercise from law school, an argument about
case law, hard and elegant and empty. To my Can we please at least talk?
Kwame did not respond. Ours was an ancient story, the woman
wants the baby and the man doesn’t want the baby and a middle ground does not exist.
What would a middle ground be? We couldn’t have half a baby.
“Water, everyone at work knows I was dumped while pregnant,” I
told Mmiliaku. “I hate the way they look at me.”
“It’s all in your head,” Mmiliaku said.
Maybe she was right and I was merely suffering from the paranoia of
the abandoned. I cared now what people thought, and I had never cared before.
“I just want them to know I can handle it, I can do it alone,” I said.
“Some of us have men and are still doing it alone,” Mmiliaku said.
She could have gloated. She could have asked, “Isn’t this the perfect man
you won by deciding not to settle?” She could have been passive
aggressive, or resentful, or lectured me in that world-weary way of a
woman who believed that men would be men. But she didn’t, and so with
the light streaming through my apartment window, I began to weep
because my cousin had grace and I lacked grace. I cried and cried. I no
longer had friends, all my time so focused on Kwame. I cried and cried,
and even though people said crying made them feel better, it made me feel frightened and small.
I sifted through my memories, as though through debris, trying to find a
reason. Was it how I had told him? Was it because I said it so lightly, so
playfully, that there was no question of how I felt? Did he know, too, as I
knew, that I was pregnant even as I was telling him that I might be? It had
never occurred to me not to have the baby, and he must have heard it in
my voice. The knowledge came to him as an already-sealed box.
He said so often that we had to make decisions together, and it
amused me sometimes, how seriously he meant this, even for small things
like which table to select when making a restaurant reservation online.
“Okay, babes?” he would ask, and wait for my nod. Was he recoiling
because I had made this decision already? If he was going to have a child,
of course he should have a say, but how much of a say, since the body was
mine, since in creating a child, Nature demanded so much of the woman
and so little of the man. I remembered taking him to visit a relative in
Delaware who had come from Lagos to have her baby. She had brought
her toddler, too, and a nanny, and it surprised me how quickly Kwame
displaced the nanny for the length of our visit and was on his knees,
slipping his palm into a puppet and wiggling his fingers, his voice tuned to
a funny high pitch. I had watched the two-year-old, who was riveted and
adorably giggly, and saw the father Kwame would be.
“I just don’t understand it. It’s as if an artery burst inside him and
suddenly his whole body is wired differently and he is no longer the
person he was,” I told Mmiliaku. “I don’t understand how we could have
unprotected sex for so long and then when I get pregnant, he reacts like he never knew it could happen.”
“Zikky, have you considered that maybe he didn’t know?”
14
“What do you mean?”
“Men know very little about women’s bodies.”
I felt betrayed by her. I was annoyed, and wanted to tell her that not
everyone was her Emmanuel, warped and stunted, raping her while she slept.
“How can you say that?” I asked.
“Seriously. Men don’t know how women’s bodies work. Remember
Amaka, my friend from university? She moved to Canada some years ago.
She has a blog where she interviews men anonymously. You should read it.”
Kwame thought I couldn’t get pregnant because I hadn’t explained
that stopping birth control pills and not using condoms meant I could get
pregnant? How ludicrous. I hung up, my dark day further darkened.
Yet I began to think about it. On the blog, I read about men who as
boys were separated from the girls in sex ed class, and were never taught
about the bodies of girls. They learned instead from mainstream
pornography, where women were always shaved smooth and never had
periods, and so they became men who thought the contrived histrionics
onscreen were How Things Were Done. The blog annoyed me, and I
resisted it while also seeing its sense. It was possible that a sophisticated, welleducated man with a healthy sex life could still harbor a naivety, a
shrunken knowledge, about the inner workings of female bodies. Could it
be that Kwame was fuzzy about this, that it had not occurred to him that I
might get pregnant, that when he said “Okay, babes” to my “I’m stopping
the pill,” it was not what I thought it was?
One sleepy weekend morning in his apartment, after slow sex, and a
slower brunch of eggs I made and pancakes he made, he was playing a
video game with lots of noise and flashes, and I was reading the news
online, and I looked up and said, “Can you believe an elected US official
actually asked why women can’t hold their periods in?” I laughed, and so
did he, but I remembered now his first fleeting reaction, the slightest of
hesitations, as though he was holding back from saying, “You mean they can’t?”
And I thought about the night I was patting cream on my face and examining again the ugly brownpurple patch that had appeared on my
cheek. “It has to be my birth control pills causing this,” I said, and there
was again that small hesitation from him, a restraint, from discomfort
rather than deceit. I could have been clearer when I stopped the pill, we
could have talked plainly, as we talked about so much. Did I choose to
assume he understood, because I didn’t want to give him the chance to say
he didn’t want a child? Now I was blaming myself. I was bearing the responsibility of a fullgrown man. It felt self-flagellating, as though I 15
were looking for a reason to excuse him, but the alternative was to accept
that the Kwame I knew was a lie. My head pounded and throbbed, and my
vision fogged over. I worried that my stress was harming the baby, and the
worry added layers to my stress. I called Mmiliaku again sobbing, saying I
was scared to do it alone, I was scared to be alone, I was so secure in my
relationship with Kwame that I just never considered being alone.
For a while, she let me cry.
“Zikky, it won’t be easy, but it won’t be as hard as you think. How
you imagine something will be is always worse than how it actually ends
up being,” she said. The easy wisdom, her emollient words slipping out so
smoothly, rankled rather than soothed me. As if Mmiliaku sensed this, she
asked, “Remember when I called you from Nitel?”
When I called you from Nitel.
Years had passed since that phone call, and Mmiliaku had never
referred to it; we had picked up and continued as though the phone call had
never happened. She had gone to a Nitel office in central Lagos to call
from a grimy public phone because she was worried that Emmanuel—who was not even home—
would somehow hear our conversation if she used
her cell phone. A bright winter morning in Washington, DC. I was
sweeping pillows of snow from the top of my car and missed the first call
as my gloved hand fumbled in my coat pocket, and then I almost didn’t
answer, because I thought the strange number was a telemarketer.
“Zikky,” she said.
“Water!” I said. “What number is this?”
“I’m pregnant,” she said.
Right away something felt off, her flat tone didn’t match her news.
“Ah-ah,” I said. Her fifth child was six months old.
“I should have put in the coil, but I was waiting for my stitches to
heal well first, and then I had to deal with the nipple infection and then
Baby’s pneumonia, and I just forgot.”
She was crying.
“Water, calm down.”
“Amuchago m,” she said. “I’m done having children.”
We mostly spoke English; Igbo was for mimicking relatives and for
saying painful things. When our grandmother died, Mmiliaku had called me and said, “MamaNnukwu anwugo,” with a firmness that gave no
room. I had no choice but to accept the news. She sounded the same now as she said, “Amuchago m.”
I pictured her from my last visit at Christmas, in her harried living
room, little children stumbling about, the eldest just six, an endless loop of
cartoons on television, and the faint smell of urine in the slightly warm air.
Emmanuel traveled a lot, she said, and when he was in a bad mood, he 16
  <br /><br /><br />
           </div>:null
            }
            {
                chpfour?<div onClick={()=>displayNow(false)}  className='chap2'><center><h1 className='abi'>Page4</h1> </center> 
             refused to pay the oldest child’s school fees. “I don’t understand that,” I
said, and she looked at me blankly as if to say, “How do you expect me to
understand it?” She had a nanny, but she seemed always to be laboring,
distracted by tasks and things unfinished. Why is this diaper leaking
again? Let’s add banana to the sweet potato puree. If he doesn’t sleep
now, he will be unmanageable this evening. This rash is getting worse.
“Amuchago m,” she said again.
“Water, I understand. Do you know where you’ll go?”
“I’ll ask Dr. Ngozi. I trust her.”
“It will be okay. I’ll send the money today. I wish I could be there with you.”
Nigerian banks were not yet modernized, online transfers didn’t exist,
and so I drove, windscreen frosted with ice, to a Western Union. I sent her
the money in dollars, so she could get the best rates on the black market,
and she hid it in her daughter’s underwear drawer, where Emmanuel
would never go, until she went to a discreet doctor’s clinic.
I pushed out a baby boy. Wrinkled and silent, scaly skinned, wet black
curls plastered on his head. He came out with his mouth full of shit, and
the bigger nurse, chuckling, said, “Not the best first meal,” while
somebody swiftly took him away to suction the feces from his mouth.
Now here he was wrapped like a tidy sausage roll and placed on my
chest. He was warm and so very small. I held him with stiff hands. I was
suspended in a place of no feeling, waiting to feel. I could not separate this
moment from the stories of this moment—years of stories and films and
books about this scene, mother and child, mother meeting child, child in
mother’s arms. I knew how I was supposed to feel, but I did not know how
I felt. It was not transcendental. There was a festering red pain between my
legs. Somewhere in my consciousness, a mild triumph hovered, because it
was over, finally it was over, and I had pushed out the baby. So animalistic, so violent—
the push and pressure, the blood, the doctor urging
me, the cranking and stretching of flesh and organ and bone. At the final
push, I thought that here in this delivery room we are reduced, briefly and brutishly, to the animals we truly are.
“Beautiful boy,” my mother said, smiling down at him.
To me she said, “Congratulations,” and it stung of the perfunctory. I
reached for my phone. There was no response from Kwame. In a surge of
disbelief and desperation, I sent another message: It’s a boy. Now that he
knew it was no longer just about me, he might respond. Or appear at the
hospital, holding a balloon and flowers, limp flowers from the supermarket 17
because he wouldn’t have had time to go to a florist. I felt pathetic.
“You’ve had a tear,” my doctor said, needle in hand. Did it never
end? Nature must not want humans to reproduce, otherwise birthing would
be easy, even enjoyable: babies would easily slip out, and mothers would
remain unmarked and whole, merely blessed by having bestowed life.
At the needle’s pierce of tender raw skin, I cried out.
“Shouldn’t the epidural still be working?” I asked.
My mother glanced at me with eloquent eyes. Get yourself together and stop making noise.
Then she looked away and asked the doctor a question. “Will it be
possible to have his circumcision today?”
“Not until he has urinated,” the doctor said. “And I don’t do circumcisions. It’ll be done by another doctor.”
“And when can we expect him to urinate?” my mother asked.
“I won’t circumcise him,” I said. How could they be having a
conversation while he slid needle and thread in and out of my flesh?
“Of course you will circumcise him,” my mother said coolly.
“I won’t!” I said, my voice raised, and for a moment I felt an intense desire to pass out and escape my life.
“Done,” my doctor said, still holding the needle. “It should heal nicely.”
My mother was asking about the circumcision consent forms. “Can we get them today?”
“I said I won’t circumcise him.”
“Why?” She trained her eyes on me.
“Barbarism,” I said, surprising myself, remembering a post on a
pregnancy website. You Americans may circumcise, but we don’t do
barbarism here in Europe. The only reason it’s tolerated at all is so we don’t get called Islamophobic.
I mostly ignored posts about baby boys because I thought I was
having a girl, I sensed it, and all the mythical girl signs were there: I
carried the pregnancy high, I had bad morning sickness, my skin turned greasy.
But I remembered the post because I had disagreed, bristled at it.
Now it was convenient ammunition.
“Circumcision is barbaric,” I said. “Why should I cause my child pain?”
“Cause your child pain?” my mother repeated as if I was making no sense.
I checked my phone, still nothing from Kwame. I sent another text: Your son.
I felt ragged and hopeless, high on my desperation. I had 
already ripped up my dignity, so I might as well scatter the pieces. I called
him, and his phone rang and went to voice mail, and I called again, and
again, and the fourth or fifth time, I heard a beep instead of a ringing, and I
knew that he had just blocked my number. I closed my eyes. In my head,
there was a queue of emotions I could not name, wanting to be tried out
one after the other. A fog blanketed me, a kind of deadness. I didn’t cry;
crying seemed too ordinary for this moment.
When my mother left the room, the smaller nurse gently asked, “Is it really
about causing Baby pain?” I stared at her. Her eyelashes made her eyes dolllike and difficult to take seriously. “Baby won’t remember the pain. If
everyone in your culture does it, you should do it too. Kids hate being
different. I used to work in a pediatrician’s office and that’s one thing I
learned. We don’t have kids yet, my fiancé is training to be a police
officer, but I’m keeping that in mind for my kids.”
She held the circumcision consent forms in her hand for a moment
before placing them on the table. Something about her manner made sobs
gather at my throat. Compassion. She thought what I was feeling mattered.
Had I missed it before or had she suddenly changed?
“Thank you,” I said, wanting to say sorry, too, wanting to reach out to
hold her hand, even though I knew it might be a bit too much, but she had turned to leave.
“I don’t know if I want to circumcise him,” I told my doctor.
“It’s your decision. Boys live happy lives whether circumcised or not.”
It felt to me a glib thing to say.
“Are you?” I asked.
“What?”
“Are you circumcised?” I could ask him that, surely, after the shared intimacy of delivering my baby.
He smiled a small smile but did not respond. “Your mother speaks so
well, she sounds almost British. I like hearing proper English. My relatives
in Iran speak like that. She owns two private schools in Nigeria?”
“Yes,” I said, and wondered when she had told him that.
In the nursery procedure room, he was placed on a board under a warming
light, restrained, his arms and legs strapped down. It felt sacrificial.
Afterward he fussed and cried. His tiny mouth was pinkly open. From it came a highpitched wail. My baby boy, his skin peeling, his gums bare, 19
and between his legs, an angry raw nub. I cradled him and hushed him and
pushed my nipple into his mouth and then I, too, began to cry. Why had I
done it? Why had I signed those forms, with my mother looking over my
shoulder? I had caused my son unnecessary pain. My son. Those words:
my son . He was my son. He was mine. I had given birth to him and I was
responsible for him and already he knew me, moving his face blindly at
my breasts. He was mine, and his tiny translucent arms lay precious
against my skin. He was mine. My son. I would die for him. I thought this
with a new wonder because I knew it to be true; something that had never
been true in my life now suddenly was true. I would die for him. His tiny tongue quivered as he cried his highpitched, screeching cry. My mother
took him from me and paced back and forth, holding him pressed to her chest, and soon he fell asleep.
She laid him in the glass-walled crib next to my bed.
“Mummy, I would die for him,” I said, partly to make peace with her
and partly because I needed to speak this miraculous momentous thing that was true.
“Thank God you managed to get pregnant at your age,” she said.
“What?”
“Many women find it difficult at your age.”
Why was this an appropriate response? How was this an appropriate
response? For long moments I could not find any words to fling at her.
“I’ve been pregnant before, so I knew very early on,” I said finally.
She said nothing. She began looking through the file the lactation nurse had left on the table.
“Thank God I was able to remove that pregnancy,” I said.
Her silence bruised the air between us.
“I was so relieved,” I said.
“Some things are better left unsaid.” She turned away.
I wanted to wound her, but I wasn’t sure why I chose this to wound
her with. Now her indifference grated. Did it even matter to her? And what would matter—
that I ended a pregnancy, that I got pregnant at nineteen,
that she hadn’t known? Only Mmiliaku knew, and I never told the boy
who didn’t love me, the boy I was trying to make love me when I didn’t
yet know that you cannot nice your way into being loved. I met him in
sophomore year of college, my second year in America. A basketball
player. He was very dark and very beautiful, near-comical in his selfregard, tall, his head always held high, his gait something of a trot. He
often said, “I don’t do commitment,” with a rhythm in his voice, as though
miming a rap song, but I didn’t hear what he said; I heard what I wanted to hear: he hadn’t done commitment
yet . From the beginning I was of no real
consequence to him. At some level I knew this, because I had to have 20
known this, but I was also nineteen and feeding the insecurities of that age.
The first time I knelt naked in front of him, he yanked a fistful of my
braids, then pushed at my head so that I gagged. It was a gesture replete
with unkindness. He could have done it differently, had he wanted me to
do things differently, but that push was punitive, an action whose theme was the word
bitch . Still, I said nothing. I made myself boneless and
amenable. I spent weekends willing the landline next to my bed to ring.
Often it didn’t. Then he would call, before midnight, to ask if I was still
up, so he could visit and leave before dawn. When my grandmother died, I
called him crying, and he said, “Sorry,” and then in the next breath, “Has
your period ended so I can stop by?” My period had not ended and so he
did not stop by. I believed then that love had to feel like hunger to be true.
“The rubber came off,” he said carelessly that night. He’d been drinking and I had not.
“It’s so funny how you say ‘rubber,’” I tittered, wishing he weren’t
already distracted, reaching for his clothes, eyes on his car keys. I thought
nothing of it; the condom slipping off once couldn’t possibly matter.
Symptoms can mean nothing if a mind is convinced, if a thing just
cannot be, and so the sore nipples, the sweeping waves of fatigue, had to
have other meanings until they no longer could, and I walked to Rite Aid
after class and bought a pregnancy test. How swift the moment is when
your life becomes a different life. I had never considered myself getting
pregnant, never imagined it, and for moments after the test showed
positive, I sat drowning in disbelief. I didn’t know what to do; I had never
thought I would need to know. I went to the health center and lied to the
nurse practitioner, telling her the condom slipped off the night before. She gave me a white morningafter pill, which I swallowed with tepid water
from the dispenser in the waiting room. It was too late of course, I knew,
but still I did other desperate nonsensical things: I jumped up and threw
myself down on the floor, violently, and it left me stunned, too jolted to try
it again. I drank cans of lemon soda, dissolved sachets of fizzy liver salts
in glasses of water. I disfigured a hanger in my closet and held it steely in
my hand, trying to imagine what distraught women did in old films. A
clutch of emotions paralyzed me, bleeding into each other, disgust-horror-fearpanic. Like slender talismans, I lined up different pregnancy tests on
my sink, and each one I urinated on I willed to turn negative. They were
all positive. Something was growing inside me, alien, uninvited, and it felt like an infestation.
Some kindnesses you do not ever forget. You carry them to your
grave, held warmly somewhere, brought up and savored from time to time.
Such was the kindness of the African American woman with short pressed
hair at the Planned Parenthood clinic on Angel Street. She smiled with all 

<br /><br /><br />
                </div>:null
            }
            {
                chpfive? <div onClick={()=>displayNow(false)}  className="chap2"><center><h1 className='abi'>Page 5</h1></center>
                
                We laughed whenever I mimicked my law school classmate, a
humorless American woman, face scrubbed, asking me to “acknowledge
the contradiction” of my mother. It was after my presentation on
traditional Igbo property laws, and I’d used my mother’s story: a woman
from a wealthy family marries a man from a wealthy family, has one
daughter, three miscarriages, and an emergency hysterectomy, after which
her husband decides to marry again because he needs to have sons, and she
agrees, and it is those sons who will inherit the family property.
“My mother is uncommon but normal,” I had replied to the woman, and then corrected myself with, “Uncommon
and normal.”
“Perfect response,” Kwame always said each time we laughed about
that story. He had an uncle in Ghana, a government minister, who had married a second wife.
“Can’t have been easy for either wife,” he said when he told me the
story, and I nodded, agreeing, loving him for his sensitivity.
We told and retold each other stories from our past lives, until we felt
as though we had been there. I felt flooded by sadness in the brightly lit
hospital room. I could not imagine being with someone else, someone who
was not Kwame, who did not know me as Kwame did and did not say the
things that Kwame said and did not have Kwame’s easy laugh.
“He looks just like me!” my father announced when my mother placed the phone above my son’s face.
“Ziko, congratulations, God has blessed us,” Aunty Nwanneka said,
and a slice of her face appeared above my father’s on the screen. “How are you feeling?”
“Tired,” I said, and sensed my mother’s disapproval. She would have
wanted me to tell Aunty Nwanneka that I was perfectly fine.
“Aunty, congratulations,” Aunty Nwanneka said to my mother. She
had always called my mother “Aunty” to show respect.
“Thank you,” my mother said serenely.
“My girl, is anybody else there with you apart from Mummy?” my father asked.
“No, Daddy.”
Is Kwame there? Has Kwame called? Does Kwame know? The
questions he wanted to ask but didn’t. My mother hadn’t asked either. I
sensed her suspicion, as though I had not told the truth and there was more
unsaid. How could Kwame have left me because I got pregnant—Kwame,
who came to Lagos with me last Christmas for two weeks and tried to
kneel when he met my father, until my father laughed and said, “No, no,
we don’t do that, that’s Yoruba,” and Kwame said, “I can’t believe I didn’t

do my research better.” “Do your research better” became their joke, in
that blustery male way of men who felt unthreatened by each other, and
the evening my father took Kwame to his club alone, it was, he joked, to
do his research better. My father had liked him right away, but my mother
watched him for a while before she, too, caved. On the phone I heard her say to a friend, “Zikora’s fiancé.”
My father was asking to see the baby’s face again. My mother hovered the phone above his tiny sleeping form.
“My girl, I won’t be able to make it after all, but I’ll definitely see
him before he’s one month old,” my father said.
“Okay, Daddy.” I had expected it. When he said that he would come
from Lagos to be there for the baby’s birth, I knew it was just one more of the many promises he made.
“I have a stubborn cold,” he said. “So it’s best not to be around a newborn.”
“Yes,” I agreed, even though I knew the cold was as good a reason as
any. It could have been a business meeting or a last-minute issue at work.
My mother handed me the phone and walked to the window.
“I’ve had this cold for almost two weeks now, and it doesn’t help that
this house is like a freezer,” my father said. “The air conditioner is so cold,
but your aunty still wants to reduce the temperature. I’ve told her that we
have to reach a compromise because we don’t have the same condition!”
He was laughing, that mischievous laugh that meant he knew his joke was
less than decorous. But what was the joke? I laughed a little too, because I
always laughed at my father’s jokes. Then I realized it was about Aunty
Nwanneka’s menopausal symptoms, her feeling hot when nobody else did.
I looked at my mother, by the window, turned away, separate and apart
from the conversation. My father would never have joked about her
menopause. With my mother his jokes were smaller and safer; he was
careful always to show her respect. Respect: a starched deference, a string
of ashen rituals. It was my mother who sat beside my father at weddings
and ceremonies; it was her photo that appeared above the label of “wife”
in the booklet his club published in his honor. Respect was her reward for
acquiescing. She could have been difficult about Aunty Nwanneka, fought
with my father, quarreled with his sisters, disrupted things with relatives.
Instead she always bought Christmas and birthday presents for Aunty
Nwanneka’s sons. She was civil, proper, restrained, running her schools,
always nicely dressed, a subdued gloss in her gold-framed eyeglasses.
Senior wife. My aunty Uzo, my father’s sister, said “senior wife” like a
title, a thing that came with a crown.
24
“You are the senior wife, nothing will change that,” Aunty Uzo told
my mother a few days after my father moved out of our house. My brother
(my half brother) Ugonna, only in primary school, had been caught
cheating on an exam. A teacher saw him sneak out a piece of paper from
his pocket and shouted at him to hand it over, but instead of giving up the
paper, Ugonna threw it in his mouth and swallowed. My father decided to
move in with Aunty Nwanneka to set Ugonna right. “He needs to see me
every morning when he wakes up. Boys can so easily go wrong, girls don’t
go wrong,” he told my mother. It was a Sunday, with the slow lassitude of
Sundays in the air, and we were in the living room upstairs, playing cards,
as we always did after lunch, before my father left to spend the rest of the
day at Aunty Nwanneka’s. I remembered that afternoon in drawn-out,
static images: my father blurting out the words, eyes trained on the cards in
his hand, words he must have been thinking about how to say for days, and
my mother staring at him, her body so rigid and still.
Later, she stood at the top of the stairs, in my father’s way, as he tried
to go downstairs. She reached out and pushed him backward, and he,
surprised, tottered. “This is not what we agreed!” she shouted. She was a
different person, shaken, splintered, and she held on to the railings as
though she might fall. My father left anyway. The next day, his workers
moved his clothes and books, his collection of tennis rackets, his study
desk, to Aunty Nwanneka’s house. For weeks I spoke to my mother only
in sullen monosyllables, because I thought she could have better handled
it. If she had not raised her voice, if she had not pushed him, my father
would not have left. For some months my parents were estranged. My
father did not visit us; he sent his driver to pick me up on weekends and
bring me to his tennis club, where we drank Chapmans and he told me
jokes but said nothing about moving out of our house.
Slowly, things thawed, and my mother accepted that he would no
longer come home to us, that we were now the family who would merely
be visited. She began to hang her newest dresses in his wardrobe, which
was almost empty, a few of his unloved shirts hanging there.
I looked at my mother, standing by the window. How had I never
really seen her? It was my father who destroyed, and it was my mother I
blamed for the ruins left behind. My parents decided early on that I would
go abroad for university, and in the evenings after school, lesson teachers
came to our house to prepare me for the SATs and A levels. My father
wanted me to go to America because America was the future, and my
mother wanted me to go to the UK because education was more rigorous
there. “I want to go to America,” I said. Had I really wanted America or
did I want what my father wanted or did I not want what my mother
wanted? The way she said “rigorous” had irritated me. Her addiction to 25
 <br /><br /><br />
                </div>:null
            }
            {
                chpsix?<div  onClick={()=>displayNow(false)}  className="chap2"><center><h1 className='abi'>Page 6</h1> </center>
            dignity infuriated me, alienated me, but I always looked past why she held so stiffly to her own self-possession.
“I’ll call you tomorrow, my princess,” my father said. “Send another photo of my grandson once we hang up.”
“Okay, Daddy, I love you.”
We left the hospital in the early afternoon. My mother dressed my son in
the yellow onesie I had packed, newborn-sized but still big for him, the
sleeves flopping around his tiny arms. In the taxi, his car seat lodged
between my mother and me, I felt a wind pull through me, emptying me
out. An intense urge overcame me, to hide from my mother and my son,
from myself. You don’t know how bristly sanitary pads are until you have
worn postbirth pads in the hospital and then switched to sanitary pads at
home. I was constipated, and on the toilet, I tried not to strain while
straining still, tentative, panic in my throat, afraid I might tear my stitches.
A geyser of anxiety had erupted deep inside me and I was spurting fear. I
sat in the warm sitz bath, worried that I hadn’t sat for long enough, even
though I set my timer for fifteen minutes. What if I got an infection? I
would need medication, which would taint my breast milk and affect my
son. My son. My son could not latch on to my breasts properly, always my
nipple slipped out of his little hungry mouth. He wailed and wailed. His
cries seared into my head and made me so jittery I wanted to smash things.
My mother called a lactation nurse for a home visit, a tiny platinum-haired
woman who coaxed and cooed and tried to get my son’s mouth to open
and close, but he pulled back and wailed. Was it something about being
back home? I had breastfed him in the hospital. The nurse gave me a
plastic nipple shield, to place between my nipple and my son’s mouth, and
for a brief moment he sucked in silence, and then began to cry again. I
pumped my breasts with a machine that vibrated, funnels affixed to my
nipples, spurts of thin liquid filling the attached bottles. The pumping was
tortuously slow; my breasts recoiled from the machine and so gave up little
of their milk. My son slept in a crib by my bed. At first, my mother slept in
the next room, and then she pulled her mattress into my bedroom and set it
by the couch. At night, she fed my son a bottle of breast milk with a slim curved nipple.
“Sleep, try and sleep,” she said to me, but I couldn’t sleep. I hardly
slept, and I could hear in the silence of my luxury apartment the gurgle of my son’s swallowing.
My tear itched badly. My appetite grew with a fury, and I ate whole
loaves of bread, large portions of salmon. The sun slanting through the
windows my mother opened every morning. The tinkly music from my
 <br /><br /><br />
                </div>:null
            }
        {
            chpseven? <div onClick={()=>displayNow(false)}  className="chap2"><center><h1 className='abi'>Page 7</h1> </center>
         son’s crib mobile. The frequent flare of sad longing. I missed Kwame. I
looked ahead and saw a future dead with the weight of his absence. I
thought of getting a new number and calling him, to tell him we could
make it work, that he could do as little as he wanted as a father just as long
as he was there. But I was wearied of his rejection, his ignoring my texts,
his blocking my number, and I felt translucent, so fragile that one more
rejection would make me come fully undone.
“Why don’t I call his parents? To inform them. They deserve to
know,” my mother suddenly said one morning as she fed my son, and I
was startled that she could read my mind.
“Who?” I asked foolishly.
She looked at me evenly. “Kwame.”
“No,” I said. “Not yet.”
My son began to cry. He was fed, his tiny belly tautly round, and yet he cried. He cried and cried.
“Some babies just cry,” my mother said calmly.
What am I supposed to do with him? I thought to myself. It had only
been a few days. There would be more days and weeks of this, not
knowing what to do with a squalling person whose needs I feared I could
never know. Only in my mother’s arms did his wails taper off, briefly,
before they began again. Only while asleep was he fully free of tears. My
mother laid him in his crib and after a moment said, “Look how he’s raised
his arms!” She was smiling, and I had never seen delight so naked on her
face. My son’s tiny arms were raised up, as though in salute to sleep. It made me smile too.
“I don’t know what I’ll do when you leave,” I said.
“My visa is long stay,” she said. “I’m not going anywhere yet.”
“Thank you, Mummy,” I said, and I began to cry. Tears were so cheap now.
How do some memories insist on themselves? I remembered the
night of Aunty Nwanneka’s birthday party. A big party. Canopies ringed
by balloons had been set up in her compound. My mother asked me not to
go. It was shortly after my father had moved out of our house, the strain
between my parents still ripe and raw.
“Stay and stand by me,” my mother said, and I scoffed silently, thinking she was being dramatic.
Chill out, it’s not as if this is a blood feud.
I went to the party. When I came home, unsteady from the wine
Mmiliaku and I had drunk straight from the bottles, our househelp let me
in. My mother was in the living room reading.
“Mummy, good evening,” I greeted, and she said nothing. She looked 27
up from her book, as though to show she had heard me, and then turned
away. A recurring image: my mother turning away, retreating, closing windows on herself.
My son woke up and began to cry. My mother hurried to his crib. I
watched her cradle him and lower her head, as though to inhale him,
touching the skin of his face with the skin of hers.


<br /><br />
        <center><h1>THE END</h1></center> <br /><br /><br />

 <br /><br /><br />
            </div>:null
        }
        

       
                        <br />
                    </div>
                
    </div>
  )
}

export default Zikora