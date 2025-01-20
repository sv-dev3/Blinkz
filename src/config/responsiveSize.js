
export const breakpoints = (d = 3, t = 2, m = 1) => {
    return {
        370: { slidesPerView: m },
        600: { slidesPerView: t },
        1024: { slidesPerView: d, }
    }
}