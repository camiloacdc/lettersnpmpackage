const letters=[
     " can't really express in words what you mean to me. To me you are my world; to me you are my everything. I just want to tell you one thing. I truly love you from my heart and soul. You know what; in my life you play the most important role. I may not tell you every day that you are my life. But, today I want to tell you that I love you lots and lots. My dear if I ever get a chance to choose my next birth, then I would ask God that I wanna be yours again and forever. I love you so much and I mean it.",
     "From the first sun rise of the day to the last light of the moon, I remember you each minute and each moment of my life. There has not been a single day when I haven't missed you much. I wonder if you were not there in my life, what I would do. I would really not be the same person as I am today. You have given me the true meaning of survival and I really mean that. I just wanna thank you for coming in my life and making my life so beautiful. I just want to tell you that I love you.",
     "Love has no reason, nor has it any season. When you love someone, you do it from your heart. When you love someone you do it from your soul. Such is my love for you my dear. I truly loved you yesterday. I love you more today. And I shall love you tomorrow and till the end of time. You are the only reason why I feel so blessed in life. You are my strength and my determination. I am really proud of you and lucky to have you. I love you so much.",
     "Reading this letter, you might be wondering what's wrong with me, why I am writing a letter to you. But, don't get surprised, I wanted to confess something. I may not verbally tell you that I love you so much. But, I can at least express it through my words. You changed my life completely and gave a new meaning to my life. I can't imagine a day without you. You know what I am really lucky that you came in my life. I love you so much and will always do.",
     "If I don't see your face, I don't feel good. If I don't hear your voice, I feel something is incomplete. If I don't miss you, my day never ends. I think I have started loving you more than me. And, this happens rarely, it's for you to see. I love you so much my dear. My love for you will never end. Yours forever and till the end of time!",
     "I don't remember from when, but since the time you are with me is the time I have loved you to thee. Your presence gives me a positive vibe, a vibe that makes me feel so happy. A vibe that makes all the difference in my life! My life wouldn't have been the same without you, and you are the reason of my smile and through. Baby I truly love you!",
     "Things do change in life and feelings also change. My love for you has been and will remain the same. Yes! I mean it from my heart. You are the passion of my life, and no one can ever forget passion. You are the light which light up the dullest days of my life. Baby, I just want to tell you that you are my world and my life. Love you a lot!",
     "Love is like the sweetest emotion of life. And, loving you has made me felt this sweet emotion. Your love takes me to some other world. Where I am not me. Actually, your love is like an ecstasy, where you would be the queen of my heart. Your love is a spice of my life. And I just love you the way you are.",
     "Love changes all in life. When I first saw you that time only I fell in love with you. The connection was so instant and pure. There was a certain magic in the air, it was all allure. Now, that you are a part of my life. I would like to tell you that you are the world to me. And, I just want to tell you that I truly love you a lot, from my every thought!",
     "The best of both worlds – means you can enjoy two different opportunities at the same time. By working part-time and looking after her kids two days a week she managed to get the best of both worlds.",
    " Speak of the devil – this means that the person you are just talking about actually appears at that moment. Hi Tom, speak of the devil, I was just telling Sara about your new car.",
"See eye to eye – this means agreeing with someone. They finally saw eye to eye on the business deal.",
" Once in a blue moon – an event that happens infrequently. I only go to the cinema once in a blue moon.",
"When pigs fly – something that will never happen. When pigs fly she'll tidy up her room.",
"To cost an arm and a leg– something is very expensive. Fuel these days costs and arm and a leg.",
" A piece of cake– something is very easy. The English test was a piece of cake.",
"Let the cat out of the bag – to accidentally reveal a secret. I let the cat out of the bag about their wedding plans.",
"To feel under the weather' – to not feel well. 'I am really feeling under the weather today; I have a terrible cold.",
"To kill two birds with one stone – to solve two problems at once. By taking my dad on holiday, I killed two birds with one stone. I got to go away but also spend time with him.",
"To cut corners – to do something badly or cheaply. They really cut corners when they built this bathroom; the shower is leaking.",
"To add insult to injury – to make a situation worse. To add insult to injury the car drove off without stopping after knocking me off my bike.",
"You can not judge a book by its cover' – to not judge someone or something based solely on appearance. I thought this no-brand bread would be horrible; turns out you can not judge a book by its cover.",
"Break a leg – means good luck (often said to actors before they go on stage). Break a leg Sam, I amm sure your performance will be great.",
"To hit the nail on the head – to describe exactly what is causing a situation or problem.He hit the nail on the head when he said this company needs more HR support.",
"blessing in disguise – An misfortune that eventually results in something good happening later on.",
"Call it a day – Stop working on something",
"Let someone off the hook – To allow someone, who have been caught, to not be punished.",
"No pain no gain – You have to work hard for something you want.",
"Bite the bullet – Decide to do something unpleasant that you have avoiding doing.",
"Getting a taste of your own medicine – Being treated the same unpleasant way you have treated others.",
"Giving someone the cold shoulder– To ignore someone.",
"The last straw – The final source of irritation for someone to finally lose patience.",
"The elephant in the room – A matter or problem that is obvious of great importance but that is not discussed openly.",
"Stealing someones thunder – Taking credit for someone else achievements.",

];

const selectQuote =()=>{
const quote=Math.floor(Math.random()* letters.length);
const selectedQuote=letters[quote]
console.log(selectedQuote)
}

module.exports ={selectQuote}