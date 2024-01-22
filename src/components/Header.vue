<script>
export default {
    name: 'Header',
    data() {
        return {
            flagActive: 0,
            links: [
                {
                    name: 'Home',
                    path: '/',
                },
                {
                    name: 'Destination',
                    path: '/destination',
                },
                {
                    name: 'Crew',
                    path: '/crew',
                },
                {
                    name: 'Technology',
                    path: '/technology',
                },
            ]
        }
    },
    methods: {
        getActive(index){
            this.flagActive = index
        }
    },
}
</script>

<template lang="">
    <header>
        <nav class="d-flex justify-content-between align-items-center  my-3">
            <div class="logo">
                <img src="../assets/shared/logo.svg" alt="">
            </div>
            <ul class="list-unstyled m-0 d-flex align-items-center ">
                <li v-for="(link, index) in links" :key="index">
                    <router-link :class="this.flagActive == index ? 'check' : ''" :to="link.path" @click="getActive(index)">
                        <span class="index">0{{index}}</span>
                        {{link.name.toUpperCase(index)}}
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

header{
    width: 100%;
    position: fixed;
    z-index: 999;
    .logo{
        position: relative;
        left: 5%;
    }

    &::after{
        content: '';
        width: 30%;
        position: absolute;
        top: 50%;
        left: 16%;
        border-bottom: 2px solid $my_gray;
    }
    ul{
        padding-left: 5%;
        width: 55%;
        height: 80px;
        margin-left: 10px;
        background: rgba(75, 75, 75, 0.105);
        backdrop-filter: blur(30px);

        li{
            padding: 0 20px;
            a{  
                position: relative;
                text-decoration: none;
                color: white;
                
                .index{
                    font-weight: 600;
                    font-size: 18px;
                    margin-right: 3px;
                }
            }
            .check{
                &::after{
                    cursor: default;
                    content: '';
                    width: 100%;
                    position: absolute;
                    bottom: -29px;
                    left: 0;
                    border-bottom: 2px solid white;
                    animation: loadingBar 0.5s ease;
                }
            }
        }
    }
}
</style>