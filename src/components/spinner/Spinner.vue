<template>
    <div class="spinblock"><span class='spinner'></span></div>
</template>

<style lang="scss">
.spinblock {
    min-height: 100vh;
    position: relative;
}
.spinner {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 9px solid;
    border-color: #dbdcef;
    border-right-color: #001d6e;
    animation: spinner-d3wgkg 1s infinite linear;
    position: absolute;
    top: 40%;
    left: 50%;
}

@keyframes spinner-d3wgkg {
    to {
        transform: rotate(1turn);
    }
}

</style>
