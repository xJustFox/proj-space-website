<script>
import data from '../../data.json';

export default {
    name: 'Destination',
    data() {
        return {
            destination: data.destinations,
            planetIndex: 0,
        }
    },
    methods: {
        getPlanet(index){
            this.planetIndex = index
        }
    },
}
</script>

<template lang="">
    <main>
        <div class="container-sm my-pt-102">
            <div class="row text-white">
                <!-- Title -->
                <div class="col-12">
                    <h3><span class="text-secondary fw-bold fs-2 ">01</span> PICK YOUR DESTINATION</h3>
                </div>
                <!-- Planet -->
                <div class="col-5">
                    <figure class="m-0 p-0 d-flex justify-content-center align-items-center ">
                        <img class="planet" :src="destination[this.planetIndex].images.webp" alt="">
                    </figure>
                </div>
                <!-- Text Planet -->
                <div class="col-7">
                    <div class="d-flex flex-column justify-content-end p-140">
                        <ul class="list-unstyled d-flex nav-menu">
                            <li  v-for="(planet, index) in destination" :key="index" >
                                <div class="position-relative" :class="this.planetIndex == index ? 'check' : ''" @click="getPlanet(index)">{{planet.name.toUpperCase()}}</div>
                            </li>
                        </ul>
                        <div class="title">{{destination[this.planetIndex].name}}</div>
                        <div class="text">{{destination[this.planetIndex].description}}</div>
                        <div>
                            <ul class="list-unstyled m-0 d-flex bottomText">
                                <li>
                                    <div class="textBott">AGV. DISTANCE</div>
                                    <div class="titleBott">{{destination[this.planetIndex].distance}}</div>
                                </li>
                                <li>
                                    <div class="textBott">EST. TRAVEL TIME</div>
                                    <div class="titleBott">{{destination[this.planetIndex].travel}}</div>
                                </li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables' as *;

main {
    background-image: url('../../assets/destination/background-destination-desktop.jpg');

    .col-12{
        padding: 60px 0 100px 0;
    }
    .p-140{
        padding: 0 140px 0 140px;
    }
    .nav-menu li{
        padding-right: 30px;
        
        &:hover{
            cursor: pointer;
        }
    }
    .check{
        &::after{
            cursor: default;
            content: '';
            width: 100%;
            transition: width 2s;
            position: absolute;
            bottom: -10px;
            left: 0;
            border-bottom: 2px solid white;
            animation: loadingBar 0.5s ease;
        }
    }
    .title{
        font-size: 100px;
        padding: 10px 0;
    }
    .text{
        padding-bottom: 60px;
        border-bottom: 2px solid $my_gray;
        line-height: 35px;
    }  
    .planet{
        max-height: 442px;
        &:hover{
            transform: scale(1.2);
            rotate: 360deg;
            transition: 700ms;
        }

        &:not(:hover){
            transform: scale(1);
            rotate: -360deg;
            transition: 700ms;
        }
    }
    
    .bottomText li{
        padding-right: 30px;
    }
    
    .titleBott{
        font-size: 45px;
        text-wrap: nowrap;
    }

    .textBott{
        padding-top: 30px;
        text-wrap: nowrap;
    }

    &:hover{
        cursor: default;
    }
}
</style>