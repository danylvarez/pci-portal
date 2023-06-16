const intervalTimeMiliseconds = 5000

const splide = new Splide( '.splide', {
    type: 'fade',
    speed: 2000,
    perPage : 1,
    arrows: false,
    pagination: true,
    interval: intervalTimeMiliseconds,
})

splide.mount()

const totalSlides = splide.length
let spliceTriggered = false
if (!spliceTriggered) {
    setTimeout(() => {
        splide.go(1)
    }, intervalTimeMiliseconds)
}
splide.on('move', function (newIndex) {
    spliceTriggered = true
    setTimeout(() => {
        const indexCountSet = newIndex + 1
        if (totalSlides === (indexCountSet)) {
            splide.go(0);
        } else {
            splide.go(indexCountSet)
        }
    }, intervalTimeMiliseconds)
});
