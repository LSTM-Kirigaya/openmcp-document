<template>
	<div style="height: 420px;">
		<img class="VPImage image-src" src="/images/openmcp.png" alt="">
	</div>
</template>

<style scoped>

.VPHero .VPImage {
    filter: drop-shadow(-2px 4px 6px rgba(0, 0, 0, .2));
    padding: 18px;
}

@media (min-width: 960px) {
    .image-src {
        max-width: 320px;
        max-height: 320px;
    }
}

@media (min-width: 640px) {
    .image-src {
        max-width: 256px;
        max-height: 256px;
    }
}

.image-src {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 500px;
    max-height: 500px;
	height: 99%;
    object-fit: contain;
    transform: translate(-50%, -50%);
}

</style>
