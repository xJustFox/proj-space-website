<script>
import data from '../../data.json';
export default {
    name: 'Crew',
    data() {
        return {
            crew: data.crew,
            autoscroll: null,
            crewIndex: 0
        }
    },
    created() {
        this.autoScroll()
    },
    methods: {
        nextBtn(){
            if (this.crewIndex == this.crew.length - 1) {
                this.crewIndex = 0
            } else {
                this.crewIndex++
            }
        },
        pauseScroll(){ 
            clearInterval(this.autoscroll);
            this.autoscroll = null;
        },
        autoScroll(){
            if (this.autoscroll ==  null) {
                this.autoscroll = setInterval(() => {
                    this.nextBtn();  
                }, 3000)
            }
        },
        getCrew(index){
            this.crewIndex = index
        }
    },
}
</script>

<template lang="">
    <main>
        <div class="container-sm my-pt-102">
            <div class="row text-white" @mouseover="pauseScroll()" @mouseleave="autoScroll()">
                <!-- Title -->
                <div class="col-12">
                    <h3><span class="text-secondary fw-bold fs-2">03</span> SPACE LAUNCH 101</h3>
                </div>
                <div class="col-6 position-relative">
                    <div class="d-flex flex-column justify-content-center h-100">
                        <div class="role text-secondary">{{crew[this.crewIndex].role}}</div>
                        <div class="name">{{crew[this.crewIndex].name}}</div>
                        <div class="bio">{{crew[this.crewIndex].bio}}</div>
                    </div>

                    <div class="checkUser">
                        <span v-for="(item, index) in crew" :key="index">
                            <i class="fa-solid fa-circle" :class="this.crewIndex == index ? 'active' : ''" @click="getCrew(index)"></i>
                        </span>
                    </div>

                </div>
                <div class="col-6">
                    <div class="d-flex align-items-end h-100">
                        <img class="webpPerson" :src="crew[this.crewIndex].images.webp" alt="">
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables' as *;

main{
    background-image: url('../../assets/crew/background-crew-desktop.jpg');
    .row{
        height: calc(100vh - 102px);
        
        .col-12{
            padding-top: 60px;
        }

        .role{
            font-size: 35px;
        }
        .name{
            text-wrap: nowrap;
            font-size: 70px;
        }
        .bio{
            max-width: 500px;
            line-height: 35px;
        }

        .checkUser{
            position: absolute;
            bottom: 70px;

            span{
                padding-right: 30px;
                
                .active{
                    color: white;
                }
                i{
                    color: gray;
                    &:hover{
                        cursor: pointer;
                    }
                }
            }
        }
    }

    &:hover{
        cursor: default;
    }
}
</style>