import React from 'react'
import { useState } from 'react'
import img1 from "../../public/images//godchild.jpeg"
import { Link } from 'react-router-dom'

function Lion() {
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
    <div className='gather' >

         <Link className='linkk' to="/Apart">  <li class="fas fa-arrow-left"></li></Link>
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
                               The Lion and The Jewel </h1> <br />
                               <h3 className='nov'>by</h3> <br />
                                <i className="italics">Wole Soyinka</i> 
                                    </center><br /> <br /><br /><br />

                                 <h3> Characters</h3>  
SIDI the Village Belle <br />
LAkUNLE School teacher <br />
BAROKA the 'Bale' of Ilujinle <br />
SADIKU His head wife <br />
THE FAVOURITE <br />
VILLAGE GIRLS <br />
A WRESTLER <br />
A SURVEYOR <br />
SCHOOLBOYS <br />
ATTENDANTS ON THE 'BALE' <br />
Musicians, Dancers, Mummers, Prisoners, Traders, the VILLAGE 
                               <section className='info-child'>
                          </section> <br /><br /><br />
                        <div className="one">   <h1 className="abi">Morning </h1>
                        
                        A clearing on the edge of the market, dominated by an immense 'odan' tree. It is the
village centre. The wall of the bush school flanks the stage on the right, and a rude
window opens on to the stage from the wall. There is a chant of the 'Arithmetic Times'
issuing from this window. It begins a short while before the action begins. Sidi enters from
left, carrying a small pail of water on her head. She is a slim girl with plaited hair. A true
village belle. She balances the pail on her head with accustomed ease. Around her is
wrapped the familiar broad cloth which is folded just above her breasts, leaving the
shoulders bare.
Almost as soon as she appears on the stage, the schoolmaster's face also appears at the
window. (The chanting continues -- 'Three times two are six', 'Three times three are nine',
etc.) The teacher Lakunle, disappears. He is replaced by two of his pupils, aged roughly
eleven, who make a buzzing noise at Sidi, repeatedly clapping their hands across the
mouth. Lakunle now re-appears below the window and makes for Sidi, stopping only to
give the boys admonitory whacks on the head before they can duck. They vanish with a
howl and he shuts the window on them. The chanting dies away. The schoolmaster is
nearly twentythree. He is dressed in an old-style English suit, threadbare but not ragged,
clean but not ironed, obviously a size or two too small. His tie is done in a very small knot,
disappearing beneath a shiny black waistcoat. He wears twenty-three-inch-bottom
trousers, and blanco-white tennis shoes.
LAKUNLE: Let me take it.
SIDI: No
LAKUNLE: Let me. [Seizes the pail. Some water spills on him.]
SIDI: [delighted.]
There. Wet for your pains.
Have you no shame?

LAKUNLE: That is what the stewpot said to the fire.
Have you no shame-at your age
Licking my bottom? But she was tickled
Just the same.
SIDI: The school teacher is full of stories
This morning. And now, if the lesson
Is over, may I have the pail?
LAKUNLE: No. I have told you not to carry loads
On your head. But you are as stubborn
As an illiterate goat. It is bad for the spine.
And it shortens your neck, so that very soon
You will have no neck at all. Do you wish to look
Squashed like my pupils' drawings?
SIDI: Why should that worry me? Haven't you sworn
That my looks do not affect your love?
Yesterday, dragging your knees in the dust
You said, Sidi, if you were crooked or fat,
And your skin was scaly like a . . .
LAKUNLE: Stop!
SIDI: I only repeat what you said.
LAKUNLE: Yes, and I will stand by every word I spoke.
But must you throw away your neck on that account?
Sidi, it is so unwomanly. Only spiders
Carry loads the way you do.
SIDI: [huffily, exposing the neck to advantage.]
Well, it is my neck, not your spider.
LAKUNLE: [looks, and gets suddenly agitated.]
And look at that! Look, look at that! [Makes a general siveep in the direction of her
breasts.]
Who was it talked of shame just now?
How often must I tell you, Sidi, that
A grown-up girl must cover up her . . .
Her . . . shoulders? I can see quite . . . quite
A good portion of -- that! And so I imagine

Can every man in the village. Idlers
All of them, good-for-nothing shameless men
Casting their lustful eyes where
They have no business . . .
SIDI: Are you at that again? Why, I've done the fold
So high and so tight, I can hardly breathe.
And all because you keep at me so much.
I have to leave my arms so I can use them . . .
Or don't you know that?
LAKUNLE: You could wear something.
Most modest women do. But you, no.
You must run about naked in the streets.
Does it not worry you . . . the bad names,
The lewd jokes, the tongue-licking noises
Which girls, uncovered like you,
Draw after them?
SIDI: This is too much. Is it you, LAKUNLE,
Telling me that I make myself common talk?
When the whole world knows of the madman
Of Ilujinle, who calls himself a teacher!
Is it SIDI who makes the men choke
In their cups, or you, with your big loud words
And no meaning? You and your ragged books
Dragging your feet to every threshold
And rushing them out again as curses
Greet you instead of welcome. Is it Sidi
They call a fool -- even the children --
Or you with your fine airs and little sense!
LAKUNLE: [first indignant, then recovers composure.]
For that, what is a jewel to pigs?
If now I am misunderstood by you
And your race of savages, I rise above taunts
And remain unruffled.
SIDI: [furious, shakes bothfists at him.]

O . . . oh, you make me want to pulp your brain.
LAKUNLE: [retreats a little, but puts her aside with a very lofty
gesture.]
A natural feeling, arising out of envy;
For, as a woman, you have a smaller brain
Than mine.
SIDI: [madder still.]
Again! I'd like to know
Just what gives you these thoughts
Of manly conceit.
LAKUNLE: [very very, patronizing.]
No, no. I have fallen for that trick before.
You can no longer draw me into arguments
Which go above your head.
SIDI: [can't find the right words, chokes back.]
Give me the pail now. And if you ever dare
To stop me in the streets again . . .
LAKUNLE: Now, now, Sidi . . .
SIDI: Give it or I'll . . .
LAKUNLE: [holds on to her.]
Please, don't be angry with me.
I didn't mean you in particular.
And anyway, it isn't what I say.
The scientists have proved it. It's in my books.
Women have a smaller brain than men
That's why they are called the weaker sex.
SIDI: [throws him off.]
The weaker sex, is it?
Is it a weaker breed who pounds the yam
Or bends all day to plant the millet
With a child strapped to her back?
LAKUNLE: That is all part of what I say.
But don't you worry. In a year or two
You will have machines which will do

Your pounding, which will grind your pepper
Without it getting in your eyes.
SIDI: O-oh. You really mean to turn
The whole world upside down.
LAKUNLE: The world? Oh, that. Well, maybe later.
Charity, they say, begins at home.
For now, it is this village I shall turn
Inside out. Beginning with that crafty rogue,
Your past master of self-indulgence -- Baroka.
SIDI: Are you still on about the Bale?
What has he done to you?
LAKUNLE: He'll find out. Soon enough, I'll let him know.
SIDI: These thoughts of future wonders -- do you buy them
Or merely go mad and dream of them?
LAKUNLE: A prophet has honour except
In his own home. Wise men have been called mad
Before me and after, many more shall be
So abused. But to answer you, the measure
Is not entirely of my own coinage.
What I boast is known in Lagos, that city
Of magic, in Badagry where Saro women bathe
In gold, even in smaller towns less than
Twelve miles from here . . .
SIDI: Well go there. Go to these places where
Women would understand you
If you told them of your plans with which
You oppress me daily. Do you not know
What name they give you here?
Have you lost shame completely that jeers
Pass you over.
LAKUNLE: No. I have told you no. Shame belongs
Only to the ignorant.
SIDI: Well, I am going.
Shall I take the pail or not?

LAKUNLE: Not till you swear to marry me.
[Takes her hand, instantly soulful.]
Sidi, a man must prepare to fight alone.
But it helps if he has a woman
To stand by him, a woman who . . .
Can understand . . . like you.
SIDI: I do?
LAKUNLE: Sidi, my love will open your mind
Like the chaste leaf in the morning, when
The sun first touches it.
SIDI: If you start that I will run away.
I had enough of that nonsense yesterday.
LAKUNLE: Nonsense? Nonsense? Do you hear?
Does anybody listen? Can the stones
Bear to listen to this? Do you call it
Nonsense that I poured the waters of my soul
To wash your feet?
SIDI: You did what!
LAKUNLE: Wasted! Wasted! SIDI, my heart
Bursts into flowers with my love.
But you, you and the dead of this village
Trample it with feet of ignorance.
SIDI: [shakes her head in bafflement.]
If the snail finds splinters in his shell
He changes house. Why do you stay?
LAKUNLE: Faith. Because I have faith.
Oh SIDI, vow to me your own undying love
And I will scorn the jibes of these bush minds
Who know no better. Swear, Sidi,
Swear you will be my wife and I will
Stand against earth, heaven, and the nine
Hells . . .
SIDI: Now there you go again.
One little thing

And you must chirrup like a cockatoo.
You talk and talk and deafen me
With words which always sound the same
And make no meaning.
I've told you, and I say it again
I shall marry you today, next week
Or any day you name.
But my bride-price must first be paid.
Aha, now you turn away.
But I tell you, Lakunle, I must have
The full bride-price. Will you make me
A laughing-stock? Well, do as you please.
But Sidi will not make herself
A cheap bowl for the village spit.
LAKUNLE: On my head let fall their scorn.
SIDI: They will say I was no virgin
That I was forced to sell my shame
And marry you without a price.
LAKUNLE: A savage custom, barbaric, out-dated,
Rejected, denounced, accursed,
Excommunicated, archaic, degrading,
Humiliating, unspeakable, redundant.
Retrogressive, remarkable, unpalatable.
SIDI: Is the bag empty? Why did you stop?
LAKUNLE: I own only the Shorter Companion
Dictionary, but I have ordered
The Longer One -- you wait!
SIDI: Just pay the price.
LAKUNLE: [with a sudden shout.]
An ignoble custom, infamous, ignominious
Shaming our heritage before the world.
SIDI, I do not seek a wife
To fetch and carry,
To cook and scrub,

To bring forth children by the gross . . .
SIDI: Heaven forgive you! Do you now scorn
Child-bearing in a wife?
LAKUNLE: Of course I do not. I only mean . . .
Oh SIDI, I want to wed
Because I love,
I seek a life-companion . . .
[pulpit-declamatory.]
'And the man shall take the woman
And the two shall be together
As one flesh.'
Sidi, I seek a friend in need.
An equal partner in my race of life.
SIDI: [attentive no more. Deeply engrossed in counting the beads
on her neck.]
Then pay the price.
LAKUNLE: Ignorant girl, can you not understand?
To pay the price would be
To buy a heifer off the market stall.
You'd be my chattel, my mere property.
No, SIDI! [very tenderly.]
When we are wed, you shall not walk or sit
Tethered, as it were, to my dirtied heels.
Together we shall sit at table
-- Not on the floor -- and eat,
Not with fingers, but with knives
And forks, and breakable plates
Like civilized beings.
I will not have you wait on me
Till I have dined my fill.
No wife of mine, no lawful wedded wife
Shall eat the leavings off my plate --
That is for the children.
I want to walk beside you in the street,

Side by side and arm in arm
Just like the Lagos couples I have seen
High-heeled shoes for the lady, red paint
On her lips. And her hair is stretched
Like a magazine photo. I will teach you
The waltz and we'll both learn the foxtrot
And we'll spend the week-end in night-clubs at Ibadan.
Oh I must show you the grandeur of towns
We'll live there if you like or merely pay visits.
So choose. Be a modern wife, look me in the eye
And give me a little kiss -- like this.
[Kisses her.]
SIDI: [backs away.] No, don't! I tell you I dislike
This strange unhealthy mouthing you perform.
Every time, your action deceives me
Making me think that you merely wish
To whisper something in my ear.
Then comes this licking of my lips with yours.
It's so unclean. And then,
The sound you make -- 'Pyout!'
Are you being rude to me?
LAKUNLE: [wearily.] It's never any use.
Bush-girl you are, bush-girl you'll always be;
Uncivilized and primitive -- bush-girl!
I kissed you as all educated men --
And Christians -- kiss their wives.
It is the way of civilized romance.
SIDI: [lightly.] A way you mean, to avoid
Payment of lawful bride-price
A cheating way, mean and miserly.
LAKUNLE: [violently.] It is not.
[ Sidi bursts out laughing. LAKUNLE changes his tone to a
soulful one, both eyes dreamily shut.]

Romance is the sweetening of the soul
With fragrance offered by the stricken heart.
SIDI: [looks at him in wonderfor a while.]
Away with you. The village says you're mad,
And I begin to understand.
I wonder that they let you run the school.
You and your talk. You'll ruin your pupils too
And then they'll utter madness just like you.
[Noise off-stage.]
There are people coming
Give me the bucket or they'll jeer.
[Enter a crowd of youths and drummers, the girls being in
various stages of excitement.]
FIRST GIRL: Sidi, he has returned. He came back just as
he said he would.
SIDI: Who has?
FIRST GIRL: The stranger. The man from the outside world.
The clown who fell in the river for you.
[They all burst out laughing.]
SIDI: The one who rode on the devil's own horse?
SECOND GIRL: Yes, the same. The stranger with the one-eyed box.
[She demonstrates the action of a camera amidst admiring titters.]
THIRD GIRL: And he brought his new horse right into the village
square this time. This one has only two feet. You should
have seen him. B-r-r-r-r.
[Runs around the platform driving an imaginary motor-bike.]
SIDI: And has he brought . . . ?
FIRST GIRL: The images? He brought them all. There was hardly
any part of the village which does not show in the book.
[Clicks the imaginary shutter.]
SIDI: The book? Did you see the book?
Had he the precious book
That would bestow upon me
Beauty beyond the dreams of a goddess?

For so he said.
The book which would announce
This beauty to the world --
Have you seen it?
THIRD GIRL: Yes, yes, he did. But the Bale is still feasting his eyes
on the images. Oh, Sidi, he was right You are beautiful.
On the cover of the book is an image of you from here
[touches the top of her head] to here [her stomach]. And in the
middle leaves, from the beginning of one leaf right across
to the end of another, is one of you from head to toe. Do
you remember it? It was the one for which he made you
stretch your arms towards the sun. [Rapturously.] Oh, Sidi,
you looked as if, at that moment, the sun himself had
been your lover. [They all gasp with pretended shock at this
blasphemy and one slaps her playfully on the buttocks.]
FIRST GIRL: The Bale is jealous, but he pretends to be proud of
you. And when this man tells him how famous you are in
the capital, he pretends to be pleased, saying how much
honour and fame you have brought to the village.
SIDI: [with amazement.] Is not Baroka's image in the book at all?
SECOND GIRL: [contemptuous.] Oh yes, it is. But it would have
been much better for the Bale if the stranger had omitted
him altogether. His image is in a little corner somewhere
in the book, and even that corner he shares with one of
the village latrines.
SIDI: Is that the truth? Swear! Ask Ogun to
Strike you dead.
GIRL: Ogun strike me dead if I lie.
SIDI: If that is true, then I am more esteemed
Than Bale Baroka,
The Lion of Ilujinle.
This means that I am greater than
The Fox of the Undergrowth,
The living god among men . . .

LAKUNLE: [peevishly.] And devil among women.
SIDI: Be silent, you.
You are merely filled with spite.
LAKUNLE: I know him what he is. This is
Divine justice that a mere woman
Should outstrip him in the end.
SIDI: Be quiet;
Or I swear I'll never speak to you again.
[Affects sudden coyness.]
In fact, I am not so sure I'll want to wed you now.
LAKUNLE: Sidi!
SIDI: Well, why should I?
Known as I am to the whole wide world,
I would demean my worth to wed
A mere village school teacher.
LAKUNLE: [in agony.] Sidi!
SIDI: And one who is too mean
To pay the bride-price like a man.
LAKUNLE: Oh, Sidi, don't!
SIDI: [plunging into an enjoyment of Lakunle's misery.]
Well, don't you know?
Sidi is more important even than the Bale.
More famous than that panther of the trees.
He is beneath me now --
Your fearless rake, the scourge of womanhood!
But now,
He shares the corner of the leaf
With the lowest of the low --
With the dug-out village latrine!
While I -- How many leaves did my own image take?
FIRST GIRL: Two in the middle and
SIDI: No, no. Let the school teacher count!
How many were there, teacher-man?
LAKUNLE: Three leaves.

SIDI: [threateningly.] One leaf for every heart that I shall break.
Beware!
[Leaps suddenly into the air.]
Hurray! I'm beautiful!
Hurray for the wandering stranger!
CROWD: Hurray for the Lagos man!
SIDI: [wildly excited.] I know. Let us dance the dance of the lost
Traveller.
SHOUTS: Yes, let's.
SIDI: Who will dance the devil-horse?
You, you, you and you.
[The four girls fall out.]
A python. Who will dance the snake?
Ha ha! Your eyes are shifty and your ways are sly.
[The selected youth is pushed out amidst jeers.]
The stranger. We've got to have the being
From the mad outer world . . . You there,
No, you have never felt the surge
Of burning liquor in your milky veins.
Who can we pick that knows the walk of drunks?
You? . . . No, the thought itself
Would knock you out as sure as wine . . . Ah!
[Turns round slowly to where Lakunle is standing with a
kindly, fatherly smile for the children at play.]
Come on book-worm, you'll play his part.
LAKUNLE: No, no. I've never been drunk in all my life.
SIDI: We know. But your father drank so much,
He must have drunk your share, and that
Of his great grandsons.
LAKUNLE: [tries to escape.] I won't take part.
SIDI: You must.
LAKUNLE: I cannot stay. It's nearly time to take
Primary four in Geography.
SIDI: [goes over to the window and throws it open.]

Did you think your pupils would remain in school
Now that the stranger has returned?
The village is on holiday, you fool.
LAKUNLE: [as they drag him towards the platform.]
No, no. I won't. This foolery bores me.
It is a game of idiots. I have work of more importance.
SIDI: [bending down over Lakunle who has been seated forcibly on the platform.]
You are dressed like him
You look like him
You speak his tongue
You think like him
You're just as clumsy
In your Lagos ways --
You'll do for him!
This chant is taken up by all and they begin to dance round Lakunle, speaking the words in
a fast rhythm. The drummers join in after the first time, keeping up a steady beat as the
others whirl round their victim. They go faster and faster and chant faster and faster with
each round. By the sixth or seventh, Lakunle has obviously had enough.]
LAKUNLE: [raising his voice above the din.] All right! I'll do it.
Come now, let's get it over with.
[A terrific shout and a clap of drums. Lakunel enters into the spirit of the dance with
enthusiasm. He takes over from Sidi, stations his cast all over the stage as the jungle,
leaves the right top-stage clear for the four girls who are to dance the motor-car. A mime
follows of the visitor's entry into Ilujinle, and his short stay among the villagers. The four
girls crouch on the floor, as four wheels of a car. Lakunel directs their spacing, then takes
his place in the middle, and sits on air. He alone does not dance. He does realistic miming.
Soft throbbing drums, gradually swelling in volume, and the four 'wheels' begin to rotate
the upper halves of their bodies in perpendicular circles. Lakunel clowning the driving
motions, obviously enjoying this fully. The drums gain tempo, faster, faster, faster. A
sudden

crash of drums and the girls quiver and dance the stall. Another effort at rhythm fails, and
the 'stalling wheels' give a corresponding shudder, finally, and let their faces fall on to
their laps. Lakunel tampers with a number of controls, climbs out of the car and looks
underneath it. His lips indicate that he is swearing violently. Examines the wheels,
pressing them to test the pressure, betrays the devil in him by seizing his chance to pinch
the girls' bottoms. One yells and bites him on the ankle. He climbs hurriedly back into the
car, makes a final attempt to re-start it, gives it up and decides to abandon it. Picks up his
camera and his helmet, pockets a flask of whisky from which he takes a swig, before
beginning the trek. The drums resume beating, a different, darker tone and rhythm,
varying with the journey. Full use of 'gangan' and 'iya ilu'. The 'trees' perform a subdued
and unobtrusive dance on the same spot. Details as a snake slithering out of the branches
and poising over Lakunel's head when he leans against a tree for a rest. He flees, restoring
his nerves shortly after by a swig. A monkey drops suddenly in his path and gibbers at him
before scampering off. A roar comes from somewhere, etc. His nerves go rapidly and he
recuperates himself by copious draughts. He is soon tipsy, battles violently with the
undergrowth and curses silently as he swats the flies off his tortured body.
Suddenly, from somewhere in the bush comes the sound of a girl singing. The Traveller
shakes his head but the sound persists. Convinced he is suffering from sun-stroke, he
drinks again. His last drop, so he tosses the bottle in the direction of the sound, only to be
rewarded by a splash, a scream and a torrent of abuse, and finally, silence again. He tiptoes, clears away the obstructing growth, blinks hard and rubs his eyes. Whatever he has
seen still remains. He whistles softly, unhitches his camera and begins to jockey himself
into a good position for a take. Backwards and forwards, and his eyes are so closely glued
to the lens that he puts forward a careless foot and disappears completely. There is a loud
splash and the invisible singer alters her next tone to a sustained scream. Quickened

rhythm and shortly afterwards, amidst sounds of splashes, Sidi appears on the stage, with
a piece of cloth only partially covering her. Lakunle follows a little later, more slowly,
trying to wring out the water from his clothes. He has lost all his appendages except the
camera. Sidi has run right across the stage, and returns a short while later, accompanied
by the Villagers. The same cast has disappeared and re-forms behind Sidi as the Villagers.
They are in an ugly mood, and in spite of his protests, haul him off to, the town centre, in
front of the 'Odan' tree.
Everything comes to a sudden stop as Baroka the Bale, wiry, goateed, tougher than his
sixty-two years, himself emerges at this point from behind the tree. All go down, prostrate
or kneeling with the greetings of 'Kabiyesi' 'Baba' etc. All except Lakunle who begins to
sneak off.]
BAROKA: Akowe. Teacher wa. Misita Lakunel. [As the others take up the cry 'Misita
Lakunle' he is forced to stop. He returns and bows deeply from the waist.]
LAKUNLE: A good morning to you sir.
BAROKA: Guru morin guru morin, ngh-hn! That is
All we get from 'alakowe'. You call at his house
Hoping he sends for beer, but all you get is
Guru morin. Will guru morin wet my throat?
Well, well our man of knowledge, I hope you have no
Query for an old man today.
LAKUNLE: No complaints.
BAROKA: And we are not feuding in something
I have forgotten.
LAKUNLE: Feuding sir? I see no cause at all.
BAROKA: Well, the play was much alive until I came.
And now everything stops, and you were leaving
Us. After all, I knew the story and I came in
Right on cue. It makes me feel as if I was
Chief Baseje.
LAKUNLE: One hardly thinks the Bale would have the time

For such childish nonsense.
BAROKA: A-ah Mister LAKUNLE. Without these things you call
Nonsense, a Bale's life would be pretty dull.
Well, now that you say I am welcome, shall we
Resume your play?
[Turns suddenly to his attendants.]
Seize him!
LAKUNLE: [momentarily baffled.] What for? What have I done?
BAROKA: You tried to steal our village maidenhead
Have you forgotten? If he has, serve him a slap
To wake his brain.
[An uplifted arm being proffered, Lakunle quickly recollects and nods his head vigorously.
So the play is back in performance. The Villagers gather round threatening, clamouringfor
his blood. Lakunle tries bluff, indignation, appeasement in turn. At a sudden signal from
the Bale, they throw him down prostrate on his face. Only then does the Chief begin to
show him sympathy, appear to understand the Stranger's plight, and pacify the villagers
on his behalf. He orders dry clothes for him, seats him on his right and orders a feast in
his honour. The Stranger springs up every second to take photographs of the party, but
most of the time his attention is fixed on Sidi dancing with abandon. Eventually he
whispers to the Chief, who nods in consent, and Sidi is sent for. The Stranger arranges
Sidi in all sorts of magazine postures and takes innumerable photographs of her. Drinks
are pressed upon him; he refuses at first, eventually tries the local brew with scepticism,
appears to relish it, and drinks profusely. Before long, however, he leaves the party to be
sick. They clap him on the back as hegoes out, and two drummers who insist on dancing
round him nearly cause the calamity to happen on the spot. However, he rushes out with
his hand held to the mouth. Lakunle's exit seems to signify the end of the mime. He
returns almost at once and the others discard their roles.]
SIDI: [delightedly.] What did I say? You played him to the bone,
A Court jester would have been the life for you,

instead of school.
[Points contemptuously to the school.]
BAROKA: And where would the village be, robbed of
Such wisdom as Mister Lakunle dispenses
Daily? Who would tell us where we go wrong?
Eh, Mister Lakunle?
SIDI: [hardly listening, still in the full grip of her excitement.]
Who comes with me to find the man?
But Lakunle, you'll have to come and find sense
In his clipping tongue. You see book-man
We cannot really do
Without your head.
[ Lakunle begins to protest, but they crowd him and try to bear
him down. Suddenly he breaks free and takes to his heels with
all the women in full pursuit. Baroka is left sitting by himself --
his wrestler, who accompanied him on his entry, stands a
respectful distance away -- staring at the flock of women in
flight. From the folds of his agbada he brings out his copy
of the magazine and admires the heroine of the publication.
Nods slowly to himself.]
BAROKA: Yes, yes . . . it is five full months since last
I took a wife . . . five full months . . . 
                        
                        </div>
                        
                        </div>:null
                              } 
                               {
                               shows?<div onClick={()=>displayNow(false)}   className='chap2' ><center> <h1 className="abi">Noon</h1></center>
                        
                        A road by the market. Enter Sidi, happily engrossed in the pictures of herself in the
magazine. Lakunle follows one or two paces behind carrying a bundle of firewood which
Sidi has set out to obtain. They are met in the centre by Sadiku, who has entered from the
opposite side. Sadiku is an old woman, with a shawl over her head.
SADIKU: Fortune is with me. I was going to your house to see you.
SIDI: [startled out of her occupation.] What! Oh, it is you, Sadiku.
SADIKU: The Lion sent me. He wishes you well.
SIDI: Thank him for me.
[Then excitedly.] Have you seen these?
Have you seen these images of me
Wrought by the man from the capital city?
Have you felt the gloss? [Caresses the page.]
Smoother by far than the parrot's breast.
SADIKU: I have. I have. I saw them as soon as the city man
came. . . Sidi, I bring a message from my lord. [Jerks her head at Lakunle.] Shall we draw
aside a little? SIDI: Him? Pay no more heed to that
Than you would a eunuch.
SADIKU: Then, in as few words as it takes to tell, Baroka wants you for a wife.
LAKUNLE: [bounds forward, dropping the wood.]
What! The greedy dog!
Insatiate camel of a foolish, doting race;
Is he at his tricks again?
SIDI: Be quiet, ' Kunle. You get so tiresome.
The message is for me, not you.
LAKUNLE: [down on his knees at once. Covers Sidi's hands with kisses.]
-19-
My Ruth, my Rachel, Esther, Bathsheba
Thou sum of fabled perfections
From Genesis to the Revelations
Listen not to the voice of this infidel. . .
SIDI: [snatches her hand away.]
Now that's your other game;
Giving me funny names you pick up
In your wretched books.
My name is Sidi. And now, let me be.
My name is Sidi, and I am beautiful.
The stranger took my beauty
And placed it in my hands.
Here, here it is. I need no funny names
To tell me of my fame.
Loveliness beyond the jewels of a throne --
That is what he said.
SADIKU: [gleefully.] Well, will you be Baroka's own jewel? Will you be his sweetest
princess, soothing him on weary nights? What answer shall I give my lord?
SIDI: [wags her finger playfully at the woman.]
Ha ha. Sadiku of the honey tongue.
Sadiku, head of the Lion's wives.
You'll make no prey of Sidi with your wooing tongue
Not this Sidi whose fame has spread to Lagos
And beyond the seas.
[ Lakunle beams with satisfaction and rises.]
SADIKU: Sidi, have you considered what a life of bliss awaits you? Baroka swears to take
no other wife after you. Do you know what it is to be the Bale's last wife? I'll tell you.
When he dies -- and that should not be long; even the Lion has to die sometime -- well,
when he does, it means that you will have the honour of being the senior wife of the new
Bale. And just think, until Baroka dies, you shall be his favourite. No living in the
outhouses for
-20-
you, my girl. Your place will always be in the palace; first as the latest bride, and
afterwards, as the head of the new harem. . . It is a rich life, Sidi. I know. I have been in
that position for forty-one years.
SIDI: You waste your breath.
Why did Baroka not request my hand
Before the stranger
Brought his book of images?
Why did the Lion not bestow his gift
Before my face was lauded to the world?
Can you not see? Because he sees my worth
Increased and multiplied above his own;
Because he can already hear
The ballad-makers and their songs
In praise of Sidi, the incomparable,
While the Lion is forgotten.
He seeks to have me as his property
Where I must fade beneath his jealous hold.
Ah, Sadiku,
The school-man here has taught me certain things
And my images have taught me all the rest.
Baroka merely seeks to raise his manhood
Above my beauty
He seeks new fame
As the one man who has possessed
The jewel of Ilujinle!
SADIKU: [shocked, bewildered, incapable of making any sense of Sidi's words.] But Sidi,
are you well? Such nonsense never passed your lips before. Did you not sound strange,
even in your own hearing? [Rushes suddenly at Lakunle.] Is this your doing, you popinjay?
Have you driven the poor girl mad at last? Such rubbish. . . I will beat your head for this!
LAKUNLE: [retreating in panic.] Keep away from me, old hag.
SIDI: Sadiku, let him be.
-21-
Tell your lord that I can read his mind,
That I will none of him.
Look -- judge for yourself.
[Opens the magazine and points out the pictures.]
He's old. I never knew till now,
He was that old. . .
[During the rest of her speech, Sidi runs her hand over the surface of the relevant part of
the photographs, tracing the contours with her fingers.]
. . . To think I took
No notice of my velvet skin.
How smooth it is!
And no man ever thought
To praise the fulness of my breasts. . .
LAKUNLE: [laden with guilt and full of apology.]
Well, Sidi, I did think. . .
But somehow it was not the proper thing.
SIDI: [ignores the interruption.]
See I hold them to the warm caress
[unconsciously pushes out her chest.]
Of a desire-filled sun.
[Smiles mischievously.]
There's a deceitful message in my eyes
Beckoning insatiate men to certain doom.
And teeth that flash the sign of happiness,
Strong and evenly, beaming full of life.
Be just, Sadiku,
Compare my image and your lord's --
An age of difference!
See how the water glistens on my face
Like the dew-moistened leaves on a Harmattan morning
But he -- his face is like a leather piece
Torn rudely from the saddle of his horse,
[ Sadiku gasps.]
-22-
Sprinkled with the musty ashes
From a pipe that is long over-smoked.
And this goat-like tuft
Which I once thought was manly;
It is like scattered twists of grass --
Not even green --
But charred and lifeless, as after a forest fire!
Sadiku, I am young and brimming; he is spent.
I am the twinkle of a jewel
But he is the hind-quarters of a lion!
SADIKU: [recovering at last from helpless amazement.] May Sango restore your wits. For
most surely some angry god has taken possession of you. [Turns around and walks away.
Stops again as she remembers something else.] Your ranting put this clean out of my
head. My lord says that if you would not be his wife, would you at least come to supper at
his house tonight. There is a small feast in your honour. He wishes to tell you how happy
he is that the great capital city has done so much honour to a daughter of Ilujinle. You
have brought great fame to your people.
SIDI: Ho ho! Do you think that I was only born
Yesterday?
The tales of Baroka's little suppers,
I know all.
Tell your lord that Sidi does not sup with
Married men.
SADIKU: They are lies, lies. You must not believe everything you hear. Sidi, would I
deceive you? I swear to you. . .
SIDI: Can you deny that
Every woman who has supped with him one night,
Becomes his wife or concubine the next.
LAKUNLE: Is it for nothing he is called the Fox?
SADIKU: [advancing on him.] You keep out of this, or so Sango be my witness. . .
-23-
LAKUNLE: [retreats just a little, but continues to talk.]
His wiliness is known even in the larger towns.
Did you never hear
Of how he foiled the Public Works attempt
To build the railway through Ilujinle.
SADIKU: Nobody knows the truth of that. It is all hearsay.
SIDI: I love hearsays. Lakunle, tell me all.
LAKUNLE: Did you not know it? Well sit down and listen.
My father told me, before he died. And few men
Know of this trick -- oh he's a die-hard rogue
Sworn against our progress. . . yes. . . it was. . . somewhere here
The track should have been laid just along
The outskirts. Well, the workers came, in fact
It was prisoners who were brought to do
The harder part. . . to break the jungle's back. . .
[Enter the prisoners, guarded by two warders. A white surveyor examines his map (khaki
helmet, spats, etc.) The foreman runs up with his camp stool, table etc., erects the
umbrella over him and unpacks the usual box of bush comforts -- soda siphon, whisky
bottle and geometric sandwiches. His map consulted, he directs the sweat team where to
work. They begin felling, marcher swinging, log dragging, all to the rhythm of the work
gang's metal percussion (rod on gong or rude triangle, etc.) The two performers are also
the song leaders and the others fill the chorus. 'N'ijo itoro', 'Amuda el' ebe l'aiya' 'Gbe je
on'ipa' etc.
LAKUNLF: They marked the route with stakes, ate
Through the jungle and began the tracks. Trade,
Progress, adventure, success, civilization,
Fame, international conspicuousity. . . it was
All within the grasp of Ilujinle. . .
[The wrestler enters, stands horrified at the sight and flees. Returns later with the Bale
himself who soon assesses the situation. They disappear. The work continues, the
surveyor occupies himself
-24-
with the fly-whisk and whisky. Shortly, after, a bull-roarer is heard. The prisoners falter a
little, pick up again. The bull-roarer continues on its way, nearer and farther, moving in
circles, so that it appears to come from all round them. The foreman is the first to break
and then the rest is chaos. Sole survivor of the rout is the surveyor who is too surprised to
move. Baroka enters a few minutes later accompanied by some attendants and preceded
by a young girl bearing a calabash bowl. The surveyor, angry and threatening, is prevailed
upon to open his gift. From it he reveals a wad of pound notes and kola nuts. Mutual
understanding is established. The surveyor frowns heavily, rubs his chin and consults his
map. Re-examines the contents of the bowl, shakes his head. Baroka adds more money,
and a coop of hens. A goat follows, and more money. This time 'truth' dawns on him at
last, he has made a mistake. The track really should go, the other way. What an
unfortunate error, discovered just in time! No, no, no possibility of a mistake this time, the
track should be much further away. In fact (scooping up the soil) the earth is most
unsuitable, couldn't possibly support the weight of a railway engine. A gourd of palm wine
is brought to seal the agreement and a kola nut is broken. Baroka's men help the surveyor
pack and they leave with their arms round each other followed by the surveyor's booty.]
LAKUNLE: [as the last of the procession disappears, shakes his fist at them, stamping on
the ground.]
Voluptuous beast! He loves this life too well
To bear to part from it. And motor roads
And railways would do just that, forcing
Civilization at his door. He foresaw it
And he barred the gates, securing fast
His dogs and horses, his wives and all his
Concubines. . . ah, yes. . . all those concubines
Baroka has such a selective eye, none suits him
But the best. . .
-25-
[His eyes truly light up. Sidi and Sadiku snigger, tip-toe off stage.]
. . . Yes, one must grant him that.
Ah, I sometimes wish I led his kind of life.
Such luscious bosoms make his nightly pillow.
I am sure he keeps a time-table just as
I do at school. Only way to ensure fair play.
He must be healthy to keep going as he does.
I don't know what the women see in him. His eyes
Are small and always red with wine. He must
Possess some secret. . . No! I do not envy him!
Just the one woman for me. Alone I stand
For progress, with Sidi my chosen soul-mate, the one
Woman of my life. . . Sidi! Sidi where are you?
[Rushes out after them, returns to fetch the discarded firewood and runs out again.]
[ Baroka in bed, naked except for baggy trousers, calf-length. It is a rich bedroom covered
in animal skins and rugs. Weapons round the wall. Also a strange machine, a most
peculiar contraption with a long lever. Kneeling beside the bed is Baroka's current
Favourite, engaged in plucking the hairs from his armpit. She does this by first massaging
the spot around the selected hair very gently with her forefinger. Then, with hardly a
break, she pulls out the hair between her finger and the thumb with a sudden sharp
movement. Baroka twitches slightly with each pull. Then an aspirated 'A-ah', and a look of
complete beatitude spreads all over his face.]
FAVOURITE: Do I improve my lord?
BAROKA: You are still somewhat over-gentle with the pull
As if you feared to hurt the panther of the trees.
Be sharp and sweet
Like the swift sting of a vicious wasp
For there the pleasure lies -- the cooling aftermath.
-26-
FAVOURITE: I'll learn, my lord.
BAROKA: You have not time, my dear.
Tonight I hope to take another wife.
And the honour of this task, you know,
Belongs by right to my latest choice.
But -- A-ah -- Now that was sharp.
It had in it the scorpion's sudden sting
Without its poison.
It was an angry pull; you tried to hurt
For I had made you wrathful with my boast.
But now your anger flows in my blood-stream.
How sweet it is! A-ah! That was sweeter still.
I think perhaps that I shall let you stay,
The sole out-puller of my sweat-bathed hairs.
Ach!
[Sits up suddenly and rubs the sore point angrily.]
Now that had far more pain than pleasure
Vengeful creature, you did not caress
The area of extraction long enough!
[Enter Sadiku. She goes down on her knees at once and bows
her head into her lap.]
Aha! Here comes Sadiku.
Do you bring some balm,
To soothe the smart of my misused armpit?
Away, you enemy!
[Exit the Favourite.]
SADIKU: My lord. . .
BAROKA: You have my leave to speak.
What did she say?
SADIKU: She will not, my lord. I did my best, but she will have none of you.
BAROKA: It follows the pattern -- a firm refusal At the start. Why will she not?
SADIKU: That is the strange part of it. She says you're much
-27-
too old. If you ask me, I think that she is really off her head. All this excitement of the
books has been too much for her.
BAROKA: [springs to his feet.]
She says. . . That I am old
That I am much too old? Did a slight
Unripened girl say this of me?
SADIKU: My lord, I heard the incredible words with my ears, and I thought the world was
mad. BAROKA: But is it possible, Sadiku? Is this right?
Did I not, at the festival of Rain,
Defeat the men in the log-tossing match?
Do I not still with the most fearless ones,
Hunt the leopard and the boa at night
And save the farmers' goats from further harm?
And does she say I'm old?
Did I not, to announce the Harmattan,
Climb to the top of the silk-cotton tree,
Break the first pod, and scatter tasselled seeds
To the four winds -- and this but yesterday?
Do any of my wives report
A failing in my manliness?
The strongest of them all
Still wearies long before the Lion does!
And so would she, had I the briefest chance
To teach this unfledged birdling
That lacks the wisdom to embrace
The rich mustiness of age. . . if I could once. . .
Come hither, soothe me, Sadiku
For I am wroth at heart.
[Lies back on the bed, staring up as before. Sadiku takes her place at the foot of the bed
and begins to tickle the soles of his feet. Baroka turns to the left suddenly, reaches down
the side, and comes up with a copy of the magazine. Opens it and begins to study the
pictures. He heaves a long sigh.]
-28-
That is good, Sadiku, very good.
[He begins to compare some pictures in the book, obviously his own and Sidi's. Flings the
book away suddenly and stares at the ceiling for a second or two. Then, unsmiling.]
Perhaps it is as well, Sadiku.
SADIKU: My lord, what did you say?
BAROKA: Yes, faithful one, I say it is as well.
The scorn, the laughter and the jeers
Would have been bitter.
Had she consented and my purpose failed,
I would have sunk with shame.
SADIKU: My lord, I do not understand.
BAROKA: The time has come when I can fool myself
No more. I am no man, Sadiku. My manhood
Ended near a week ago.
SADIKU: The gods forbid.
BAROKA: I wanted Sidi because I still hoped --
A foolish thought I know, but still -- I hoped
That, with a virgin young and hot within,
My failing strength would rise and save my pride.
[ Sadiku begins to moan.]
A waste of hope. I knew it even then.
But it's a human failing never to accept
The worst; and so I pandered to my vanity.
When manhood must, it ends.
The well of living, tapped beyond its depth,
Dries up, and mocks the wastrel in the end.
I am withered and unsapped, the joy
Of ballad-mongers, the aged butt
Of youth's ribaldry.
SADIKU: [tearfully.] The Gods must have mercy yet.
BAROKA: [as if suddenly aware of her presence, starts up.]
I have told this to no one but you,
Who are my eldest, my most faithful wife.
-29-
But if you dare parade my shame before the world. . . [ Sadiku shakes her head in protest
and begins to stroke the soles of his feet with renewed tenderness. Baroka sighs and falls
back slowly.] How irritable I have grown of late
Such doubts to harbour of your loyalty. . .
But this disaster is too much for one
Checked thus as I upon the prime of youth.
That rains that blessed me from my birth
Number a meagrie sixty-two;
While my grandfather, that man of teak,
Fathered two sons, late on sixty-five.
But Okiki, my father beat them all
Producing female twins at sixty-seven.
Why then must I, descendant of these lions
Forswear my wives at a youthful sixty-two
My veins of life run dry, my manhood gone!
[His voice goes drowsy; Sadiku sighs and moans and
caresses his feet. His face lights up suddenly with rapture.]
Sango bear witness! These weary feet
Have felt the loving hands of much design
In women.
My soles have felt the scratch of harsh,
Gravelled hands.
They have borne the heaviness of clumsy,
Gorilla paws.
And I have known the tease of tiny,
Dainty hands,
Toy-like hands that tantalized
My eager senses,
Promised of thrills to come
Remaining
Unfulfilled because the fingers
Were too frail
-30-
The touch too light and faint to pierce
The incredible thickness of my soles.
But thou Sadiku, thy plain unadorned hands
Encase a sweet sensuality which age
Will not destroy. A-ah,
Oyayi! Beyond a doubt Sadiku,
Thou art the queen of them all.
[Falls asleep.] 
                
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

export default Lion