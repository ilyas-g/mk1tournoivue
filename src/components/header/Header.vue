<template>
		<header className="header">
			<div className="logo-header">
				<RouterLink to="/">
					<img className="logo" :src="nsxcLogo" alt="NSXC" />
				</RouterLink>
			</div>

			<div class="responsive-menu-opener show-responsive-992">
				<span @click="toggleBurger">
					<template v-if="burger === true">
						<span class="icon-xmark-solid"></span>
					</template>
					<template v-else>
						<span class="icon-bars-solid-2"></span>
					</template>
					<i class="fa fa-bars"></i>
				</span>
			</div>

			<ul class="header-menu clearfix hide-responsive-992">
				<li class="classement" @click="funcClassement">Classement</li>
				<li><a id="five" data-toggle="modal" data-target="#myModal" className="video" onClick={funcVideo}>Trailer</a></li>
				<li><RouterLink to="/#tournaments" class="special">Tournois</RouterLink></li>
				<li class="contact-switch" @click="funcContact">Contact</li>
				<li><RouterLink to="/#schedule">Etapes</RouterLink></li>
				<li><RouterLink to="/#event-section">Présentation</RouterLink></li>
			</ul>
		</header>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import nsxcLogo from '@/assets/NSXC_BLANC2.webp'

</script>
<style>
@import "./style.scss";
</style>
