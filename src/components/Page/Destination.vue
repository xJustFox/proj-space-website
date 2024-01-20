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
        <div class="container-sm my-pt-136">
            <div class="row align-content-end  h-100">
                <div class="col-12">
                    <h3><span>01</span> PICK YOUR DESTINATION</h3>
                </div>
                <div class="col-5 d-flex justify-content-end">
                    <img class="planet" :src="destination[this.planetIndex].images.webp" alt="">
                </div>
                <div class="col-7 d-flex flex-column justify-content-end p-140">
                    <ul class="list-unstyled d-flex">
                        <li v-for="(planet, index) in destination" :key="index" @click="getPlanet(index)">{{planet.name}}</li>
                    </ul>
                    <div>{{destination[this.planetIndex].name}}</div>
                    <div>{{destination[this.planetIndex].description}}</div>
                    <div>{{destination[this.planetIndex].distance}}</div>
                    <div>{{destination[this.planetIndex].travel}}</div> 
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    background-image: url('../../assets/destination/background-destination-desktop.jpg');
    .planet{
        max-width: 440px;
        padding: 80px 0 0 0;
    }

    .p-140{
        padding: 0 140px;
    }
}
</style>