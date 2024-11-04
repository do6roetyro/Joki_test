<template>
    <section class="hero">
        <div class="hero__content wrapper">
            <h1 class="visually-hidden">Joki-Joya. Парк развлечений</h1>
            <div class="hero__container">
                <img class="hero__image" src="../../public/images/hero.jpg" width="1216" height="616"
                    alt="Парк развлечений" loading="lazy">
            </div>
            <div class="hero__main">
                <div class="hero__title-container">
                    <h2 class="hero__title">
                        <span class="hero__title--changable">о</span>
                        <span class="hero__title--hard">joki joya</span>
                    </h2>
                </div>
                <div class="hero__logo">
                    <img src="/public/icons/hero_jj.svg" width="144" height="144" alt="буквы JJ" class="logo-image">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.hero__content {
    max-width: 1440px;
}

.hero__container {
    width: 84.44vw;
    margin: 0 auto;
    margin-bottom: 42px;
}

.hero__main {
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
}

.hero__title {
    margin: 0;
    font-family: 'drukwidecyr';
    font-size: clamp(32px, 5vw, 73px);
    font-weight: 500;
    line-height: clamp(32px, 5vw, 72px);
    color: #0267FF;
    text-transform: uppercase;
    position: relative;
    display: flex;
    align-items: center;
    gap: clamp(15px, 2vw, 27px);

    @media(max-width: 768px) {
        margin-bottom: 56px;
    }

    &--changable {
        color: #000000;
    }

    &--hard {
        flex-grow: 1;
        min-width: 240px;
    }

    &::before {
        content: "JOKI JOYA";
        position: absolute;
        top: 4px;
        left: clamp(55px, 8vw, 120px);
        color: #ABEC20;
        -webkit-text-stroke: 2px #ABEC20;
        color: transparent;
        z-index: -1;
        width: 900px;
        text-wrap: nowrap;

        @media(max-width: 768px) {
            top: 3px;
        }
    }

    &::after {
        content: "";
        width: 203px;
        width: 14vw;
        height: 56px;
        height: 3.9vw;
        min-width: 24px;
        min-height: 24px;
        display: block;
        background-image: url('../../public/icons/hero_stars_blue.svg');
        background-repeat: no-repeat;
        background-size: contain;

        @media(max-width: 768px) {
            background-image: url('../../public/icons/hero_star_blue.svg');
        }
    }
}

.hero__image {
    border-radius: 0 0 16px 16px;
    display: block;
}
</style>