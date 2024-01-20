<script>
import data from '../../data.json';
export default {
    name: 'Crew',
    data() {
        return {
            crew: data.crew,
            crewFlag: 0
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
                <div class="col-6 position-relative">
                    <div class="d-flex flex-column justify-content-center h-100">
                        <div class="role text-secondary">{{crew[3].role}}</div>
                        <div class="name">{{crew[3].name}}</div>
                        <div class="bio">{{crew[3].bio}}</div>
                    </div>

                    <div class="checkUser">
                        <span v-for="(item, index) in crew" :key="index"><i class="fa-solid fa-circle"></i></span>
                    </div>

                </div>
                <div class="col-6">
                    <div class="d-flex align-items-end h-100">
                        <img class="webpPerson" :src="crew[3].images.webp" alt="">
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
            padding-bottom: 60px;
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
                
                i:hover{
                    cursor: pointer;
                }
            }
        }
    }
}
</style>