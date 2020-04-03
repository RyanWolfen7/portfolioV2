export default function determinWindowSize( height, width ) {
    if ( width < 480 ) return 'phone'
    if ( width < 640 ) return 'sm'
    if ( width < 900 ) return 'md'
    if ( width < 1200 ) return 'lg'
    if ( width > 1200 ) return 'xl'
}