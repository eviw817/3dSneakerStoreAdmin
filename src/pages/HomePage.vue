<script lang="js" setup>
import { defineComponent } from 'vue'
import DefaultNav from '../components/DefaultNav.vue'

</script>

<template>
        <DefaultNav />
</template>

<style module>
.navChild {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: #403d39;
    width: 1440px;
    height: 202px;
}

.logoboxChild {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: #f59090;
    width: 184px;
    height: 118px;
}

.logo {
    position: absolute;
    top: 52px;
    left: 78px;
}

.logobox {
    position: absolute;
    top: 42px;
    left: 60px;
    width: 184px;
    height: 118px;
}

.searchbarChild {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 15px;
    background-color: #fffcf2;
    width: 796px;
    height: 62px;
}

.searchIcon {
    position: absolute;
    top: 12px;
    left: 738px;
    width: 38px;
    height: 38px;
}

.waarBenJe {
    position: absolute;
    top: 20px;
    left: 33px;
    font-weight: 500;
}

.searchbar {
    position: absolute;
    top: 70px;
    left: 322px;
    width: 796px;
    height: 62px;
    font-size: 20px;
    color: #252422;
}

.shoppingCartIcon {
    position: absolute;
    top: 72px;
    left: 1314px;
    width: 58px;
    height: 58px;
    cursor: pointer;
}

.accountCircleIcon {
    position: absolute;
    top: 72px;
    left: 1188px;
    width: 58px;
    height: 58px;
    cursor: pointer;
}

.nav {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 1440px;
    height: 202px;
    font-size: 12px;
}

.homepageChild {
    position: absolute;
    top: 256px;
    left: 60px;
    background-color: #d9d9d9;
    width: 810px;
    height: 522px;
}

.customizeButtonChild {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 15px;
    background-color: #eb5e28;
    width: 590px;
    height: 90px;
}

.customizeYourPerfect {
    position: absolute;
    top: calc(50% - 20px);
    left: calc(50% - 233px);
}

.customizeButton {
    position: absolute;
    top: 850px;
    left: 170px;
    width: 590px;
    height: 90px;
    cursor: pointer;
    font-size: 32px;
    color: #fffcf2;
}

.placeOrderChild {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 15px;
    background-color: #ccc5b9;
    width: 450px;
    height: 46px;
}

.placeOrder1 {
    position: absolute;
    top: calc(50% - 15px);
    left: calc(50% - 122px);
    font-weight: 500;
}

.placeOrder {
    position: absolute;
    top: 732px;
    left: 930px;
    width: 450px;
    height: 46px;
    cursor: pointer;
    text-align: center;
    color: #252422;
}

.fancyShoeName {
    position: absolute;
    top: 0px;
    left: 0px;
    font-weight: 500;
}

.cuteLilPrice {
    position: absolute;
    top: 63px;
    left: 24px;
    font-size: 20px;
    font-weight: 500;
}

.header {
    position: absolute;
    top: 256px;
    left: 930px;
    width: 336px;
    height: 87px;
    font-size: 40px;
}

.blackChild {
    position: absolute;
    height: 100%;
    width: 30.97%;
    top: 0%;
    right: 69.03%;
    bottom: 0%;
    left: 0%;
    border-radius: 50%;
    background-color: #000;
    border: 2px solid #252422;
    box-sizing: border-box;
}

.black1 {
    position: absolute;
    top: 8.57%;
    left: 45.13%;
}

.black {
    width: 113px;
    position: relative;
    height: 35px;
}

.whiteChild {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 50%;
    background-color: #fff;
    border: 2px solid #252422;
    box-sizing: border-box;
    width: 35px;
    height: 35px;
}

.white1 {
    position: absolute;
    top: 3px;
    left: 51px;
}

.white {
    width: 117px;
    position: relative;
    height: 35px;
}

.redChild {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 50%;
    background-color: #ff0000;
    border: 2px solid #252422;
    box-sizing: border-box;
    width: 35px;
    height: 35px;
}

.red {
    width: 96px;
    position: relative;
    height: 35px;
}

.greenChild {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 50%;
    background-color: #0dff00;
    border: 2px solid #252422;
    box-sizing: border-box;
    width: 35px;
    height: 35px;
}

.green {
    width: 120px;
    position: relative;
    height: 35px;
}

.blueChild {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 50%;
    background-color: #1a00ff;
    border: 2px solid #252422;
    box-sizing: border-box;
    width: 35px;
    height: 35px;
}

.blue {
    width: 101px;
    position: relative;
    height: 35px;
}

.yellowChild {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 50%;
    background-color: #ffea00;
    border: 2px solid #252422;
    box-sizing: border-box;
    width: 35px;
    height: 35px;
}

.yellow {
    width: 124px;
    position: relative;
    height: 35px;
}

.colours {
    position: absolute;
    top: 49px;
    left: 12px;
    width: 124px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 16px;
}

.standards {
    position: absolute;
    top: 367px;
    left: 930px;
    width: 187px;
    height: 339px;
}

.size {
    position: absolute;
    top: 0px;
    left: 0px;
    font-weight: 500;
    display: inline-block;
    width: 56px;
    height: 29.8px;
}

.eu355 {
    position: relative;
}

.colours1 {
    position: absolute;
    top: 50.34px;
    left: 0px;
    width: 124px;
    height: 287.7px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 16px;
    color: #252422;
}

.standards1 {
    position: absolute;
    top: 368px;
    left: 1193px;
    width: 124px;
    height: 338px;
}

.homepage {
    width: 100%;
    position: relative;
    background-color: #fffcf2;
    height: 1024px;
    overflow: hidden;
    text-align: left;
    font-size: 24px;
    color: #000;
    font-family: Inter;
}
</style>