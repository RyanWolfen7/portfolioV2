export default function determinWindowSize( height, width ) {
    if ( width < 500 ) return 'phone'
    if ( width < 730 ) return 'sm'
    if ( width < 900 ) return 'md'
    if ( width < 1200 ) return 'lg'
    if ( width > 1200 ) return 'xl'
}