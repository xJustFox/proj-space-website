<script>
export default {
    name: 'Home',
}
</script>

<template lang="">
    <main>
        <div class="container-md h-100 my-pt-136">
            <div class="row h-100">
                <div class="col-5 text-white d-flex flex-column justify-content-end my-pt">
                    <div class="subTitle">SO, YOU WANT TO TRAVEL TO</div>
                    <div class="title">SPACE</div>
                    <p>
                        Let's face it; if you want to go to space, you might as well
                        genuinely go to outer space and not hover kind of on the
                        edge of it. Well sit back, and relax because we'll give you
                        a truly out of this world experience!
                    </p>
                </div>
                <div class="col-7 my-pt position-relative ">
                    <div class="circle" >
                        EXPLORE
                    </div>
                </div>
            </div>

        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    background-image: url('../../assets/home/background-home-desktop.jpg');
    background-size: cover;
    height: 100vh;
    overflow-y: hidden;

    .my-pt {
        padding-bottom: 100px;
    }

    .subTitle {
        font-size: 25px;
    }

    .title {
        font-size: 120px;
        font-weight: 500;
        margin-bottom: 25px
    }

    p{
        max-width: 420px;
    }

    .circle {
        position: absolute;
        bottom: 100px;
        left: 40%;;
        font-size: 30px;
        font-weight: 600;
        border-radius: 100%;
        padding: 130px 80px;
        background-color: white;
    }

    .col-7,
    .col-5{
        &:hover{
            cursor: default;
        }
    }
}
</style>