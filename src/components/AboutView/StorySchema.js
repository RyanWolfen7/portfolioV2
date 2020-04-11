import React from 'react'

export const renderTitle = story => {
    if (story.veteran){ return 'The Veteran' }
    else if (story.traveler){ return 'The Traveler' }
    else if (story.coder) { return 'The Coder' }
    else { return 'My Story' }
}

export const renderStory = story => {
    if (story.veteran){
        return 'vet'
    }
    else if (story.traveler){
        return 'hobo'
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
            One of the pros to not having a seditary home is that I had to get use to making new connections everywhere I've gone.
        </p>
        <p> In Highschool I lived in Clarksville, TN. There I worked for AT&T, broke horses for a summer, and helped in restoration projects during the TN floods. I have many a
            fond memories there and tons of adventures to boot.
        </p>
        <p> After HS I moved to San Anotnio, TX. There I worked for AT&T as a door to door salesman, moonlighted as a bartender, and went to University of Texas San Antonio.
            I loved Texas, but after two years in I was looking towards following my parents footseps and enlisting in the US Army. I sold all of my things, took a break from school, put my notice into work and drove off to Ft. Walton Beach, Florida to train with my dads unit while I went through the enlistment process.
        </p>
    </>
)