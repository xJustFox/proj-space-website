<script>
import data from '../../data.json';
export default {
    name: 'Destination',
    data() {
        return {
            destination: data.destinations
        }
    },
}
</script>

<template lang="">
    <main>
        <div class="container-sm my-pt-136">
            <div class="row align-content-end  h-100">
                <div class="col-12 text-white ">
                    <h3><span>01</span> PICK YOUR DESTINATION</h3>
                </div>
                <div class="col-5 d-flex justify-content-end">
                    <img class="planet" :src="destination[0].images.webp" alt="">
                </div>
                <div class="col-7 text-white d-flex flex-column justify-content-end">
                    <div>{{destination[0].name}}</div>
                    <div>{{destination[0].description}}</div>
                    <div>{{destination[0].distance}}</div>
                    <div>{{destination[0].travel}}</div> 
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
}
</style>