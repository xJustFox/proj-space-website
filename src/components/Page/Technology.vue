<script>
import data from '../../data.json';

export default {
    name: 'Technology',
    data() {
        return {
            tech: data.technology,
            techIndex: 0
        }
    },
    methods: {
        getTech(index){
            this.techIndex = index
        }
    },
}
</script>

<template lang="">
    <main>
        <div class="container-sm my-pt-102">
            <div class="row align-content-start text-white">
                <!-- Title -->
                <div class="col-12">
                    <h3><span class="text-secondary fw-bold fs-2">03</span> SPACE LAUNCH 101</h3>
                </div>

                <!-- Buttons Number -->
                <div class="col-1">
                    <div class="h-100 d-flex align-items-center">
                        <ul class="list-unstyled ">
                            <li v-for="(item, index) in tech" :key="index">
                                <div class="circle" :class="this.techIndex == index ? 'active' : ''" @click="getTech(index)"><span>{{index + 1}}</span></div>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Texts -->
                <div class="col-6">
                    <div class="h-100 d-flex flex-column justify-content-center my-pl">
                        <div class="subTitle">THE TERMINOLOGY ...</div>
                        <div class="name">{{tech[this.techIndex].name}}</div>
                        <div class="text">{{tech[this.techIndex].description}}</div>
                    </div>
                </div>

                <!-- Image -->
                <div class="col-5">
                    <figure class="h-100 d-flex flex-column justify-content-center ">
                        <img :src="tech[this.techIndex].images.portrait" alt="">
                    </figure>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main{
    background-image: url('../../assets/technology/background-technology-desktop.jpg');

    .my-pl{
        padding-left: 40px;
    }
    .row {
        height: calc(100vh - 102px);
        .col-12{
            height: 102px;
            padding: 60px 0;
        }
    
        ul li{
            padding-bottom: 40px;

            .active{
                background-color: white;
                span{
                    color: black;
                }
            }
            .circle{
                width: 100px;
                height: 100px;
                aspect-ratio: 1;
                border: 1px solid white;
                border-radius: 100%;
                position: relative;
                
                span{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-weight: 200;
                    font-size: 40px;
                }

                &:hover{
                    cursor: pointer;
                }
            }
        }
        .name{
            text-wrap: nowrap;
            font-size: 70px;
        }
        .text{
            line-height: 35px;
        }  

        img:hover{
            transition: 300ms;
            scale: 1.1;
        }
    }

    &:hover{
        cursor: default;
    }
}
</style>