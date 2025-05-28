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

.image-src {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 285px;
    max-height: 285px;
	height: 99%;
    object-fit: contain;
    transform: translate(-50%, -50%);
}

</style>
