import React from 'react'

export const renderTitle = story => {
    if (story.veteran){ return 'The Veteran' }
    else if (story.traveler){ return 'The Traveler' }
    else if (story.coder) { return 'The Coder' }
    else { return 'My Story' }
}

export const renderStory = story => {
    if (story.veteran){
        return theVet
    }
    else if (story.traveler){
        return theTraveler
    }
    else if (story.coder) {
        return 'nerd'
    }
    else {
        return myStory
    }
}

const myStory = (
    <> 
        <p> I was born in Heidelburg, Germany to two US Army parents. Being an Army brat we had to move often, because of this I've been exposed to many different walks of life.
            One of the pros to not having a seditary home is that I had to get use to making new connections everywhere I've gone.</p>
        <p> In Highschool I lived in Clarksville, TN. There I worked for AT&T, broke horses for a summer, and helped in restoration projects during the TN floods. I have many a
            fond memories there and tons of adventures to boot.</p>
        <p> After HS I moved to San Anotnio, TX. There I worked for AT&T as a door to door salesman, moonlighted as a bartender, and went to University of Texas San Antonio.
            I loved Texas, but after two years in I was looking towards following my parents footseps and enlisting in the US Army. I sold all of my things, took a break from school, put my notice into work and drove off to Ft. Walton Beach, Florida to train with my dads unit while I went through the enlistment process. </p>
    </>
)

const theVet = (
    <>
        <p> I joined the Army in 2013 as an 11B Infantryman. I'd like to say I knew what I was getting into when I joined, because I was an Army brat, but it couldn't be further from the truth. There is a saying Infantrymen like to say to others for thier ignorance. "You gunna learn today"... and learned I did.</p>
        <p> Basic was a culture shock for sure. You don't quite grasp a sense of urgency until you have a Drill Seargent screaming in your face. I developed foundations there for many of the skills I posses today. One of the biggest take aways I recieved there was our Drill Seargents last speach
            before graduation. He said there is alway one more hill to take, one more kilometer to march, and one more day to do it all over again. This philosophy is the motivation that allows me to push myself past impossible and yet still remain grounded.</p>
        <p> After Basic I was stationed at the worst place in the world... Hawaii; try not to feel to sorry for me. When it wasn't raining on us, we'd often bust our backs up mountains with nearly 100lbs of equipment on us, but even though my time there wasn't a cake walk... it was still Hawaii!!!</p>
        <p> The 3 years I was stationed there: I became a Jungle Expert, deployed to the Philippines, worked with many forieng nationals, learned about 'chokes' (alot) of cultures, and forged tons of memories.</p>
        <p> Nearing the end of my contract, I decided to leave. I felt like I had done my part and was now motivated to explore ever more cultures and carve my slice out of life somewhere. I decided to headout and backpack the whole world. The things I took with me from the Army: Dicipline, attention to detail, undying motivation,
            fortitued, a sense of urgency, survival skills, and perseverance.</p>
    </>
)

const theTraveler = (
    <>
        <p> While I was in the Army I managed to save up a years paycheck. I decided when I got out I'd use that money to explore as much of the world as I could. During my travels I've met wonderous people, the closest of which signed my guitar in thier native tounge. I learned so many things from so many different cultures. I visited over 28 countries in the span of 3 years, met the love of my life,
            and even survived a few terrorist attacks to boot.</p>
        <p> The first place I traveled to was spain. Two weeks before I left, I was studying spanish. I had always wanted to learn another language and seeing as many of my friends spoke spanish I figured it would be a good place to start. I spent a whole month in Spain. I learned quite abit of the language and could even hold
            simple conversations by the time I left.</p>
        <p> After Spain, I traveled to Morrocco, Parts of the Sahara with the Berbers, and then flew to France. </p>
        <p> France was amazing until I found myself admi</p>
    </>
)