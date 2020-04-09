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
        return 'me'
    }
}