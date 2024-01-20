<script>
import data from '../../data.json';

export default {
    name: 'Technology',
    data() {
        return {
            tech: data.technology
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
                    <h3><span class="text-secondary fw-bold fs-2">03</span> SPACE LAUNCH 101</h3>
                </div>

                <div class="col-1">
                    <div class="h-100 d-flex align-items-center">
                        <ul class="list-unstyled ">
                            <li v-for="(item, index) in tech" :key="index">
                                <div class="circle"><span>{{index + 1}}</span></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-6">
                    <div class="h-100 d-flex flex-column justify-content-center my-pl">
                        <div class="subTitle">THE TERMINOLOGY ...</div>
                        <div class="name">{{tech[0].name}}</div>
                        <div class="text">{{tech[0].description}}</div>
                    </div>
                </div>
                <div class="col-5">
                    <div class="h-100 d-flex flex-column justify-content-center ">
                        <img :src="tech[0].images.portrait" alt="">
                    </div>
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
            padding-top: 60px;
        }
    
        ul li{
            padding-bottom: 40px;
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
            }
        }
    
        .name{
            text-wrap: nowrap;
            font-size: 70px;
        }
        .text{
            line-height: 35px;
        }  
    }
}
</style>