<template lang="">
    <section id="schedule" className="bg-fixed bg-cover">
        <div className="bg-layer"></div>

        <h2 className="text-center relative-content">{t('stepsTitle')}</h2>
        <div className="container relative-content">

            <div className="text-center">
                <h2>Master Event +</h2>
                <p className="master-plus">{t('masterEvent+')}</p>
                {/* <a href="https://www.start.gg/tournament/paris-games-week-master-event/details" target="_blank" className="btn-ope masterEventPlus mt-5 mx-auto">{t('signup')}</a> */}
                <RouterLink to="/rules" className="btn-ope special mt-3 mx-auto">{t('seeTheRules')}<span className="icon-chevron-down-solid-1" aria-hidden="true"></span></RouterLink>
            </div>

        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
@import "../../variables";

#schedule {
    color: #fff;
    background-image: url("../../assets/1320684.webp");
    padding: 50px 135px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: rgba(0, 0, 0, .3);
    }

    .container {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;

        @media screen and (min-width: $media-queries-desktop) {
            flex-wrap: nowrap;
            flex-direction: row;
        }

        &>div {
            flex: 1;
        }
    }

    .rules ul li::before {
        content: "▪";
        color: #ffc029;
        padding-right: 10px;
    }

    .master-plus {
        text-shadow: 2px 2px 2px #000000;

        @media screen and (min-width: $media-queries-tablet) {
            font-size: 38px;
        }
    }

    .btn-ope {
        max-width: 350px;
        display: block;

        &.masterEventPlus {
            background: linear-gradient(90deg, rgba(205, 57, 66, 1) 0%, rgba(239, 212, 98, 1) 50%, rgba(205, 57, 66, 1) 100%);
            border: 3px solid #fff5e1;
            border-radius: 0%;
            // padding: 0.6em 1.2em;
            text-shadow: 1px 1px 1px #322921;

            &:active,
            &:focus,
            &:hover {
                cursor: pointer;
                // max-width: 400px;
                // padding: 19px;
                color: #fff;
                box-shadow: 0 0 60px rgb(242 150 39 / 60%);
            }
        }
    }

    .logo {
        width: 100%;
    }
}

.mx-auto {
    margin-left: auto;
    margin-right: auto;
}

</style>
