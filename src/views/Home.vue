<template>
    <Header />
    
    <h1>Brave Frontier Wiki</h1>

    <div class="container__wiki">
        
        <div class="container__text">
            <div class="title-with-image">
                <img src="/src/components/icons/OpenHand.png" alt="Open Hand">
                <h2>Welcome to the Wiki of Brave Frontier!</h2>
            </div>

            <p>Brave Frontier (ブレイブフロンティア, Bureibu Furontia) was a Japanese mobile role-playing game developed and published by A-Lim.  It was first released in Japan by A-Lim on July 3, 2013, and later released worldwide by Gumi and managed by 2 locations, Gumi Asia and Gumi Europe.</p>

            <div class="title-with-image">
                <img src="/src/components/icons/PointRight.png" alt="Point Right">
                <h2>How to play?</h2>
            </div>

            <p>The storyline focuses on the unnamed summoner and players have to complete every stage to access a new area. Players will be faced with a powerful boss fight in a 2-to-1 coop scenario. After an enemy is defeated, the player proceeds the next stage until the boss, which is required to go complete a level. After completing, players are rewarded with Zel, Karma and items, as well as acquiring units from each mission.</p>

            <div class="text-with-image">
                <img src="/src/components/icons/PointUp.png" alt="Point Up">
                <p>Aside from quests, the player can also fuse units with the ones obtained in each mission in order to level them up. Once a unit is now in its max level, is it now capable of evolving. The requirements to evolve eligible units are different. Each unit has their own ranking as well, with the Omni Evolution being the highest.
                </p>
            </div>
        </div>

        <div class="container__info">
            <img src="/src/components/icons/dot.jpeg" alt="Tetris Logo">

            <p>Developer: A-lim</p>
            <p>Publisher: A-lim, Gumi</p>
            <p>Artist: Yutaka Ebishima</p>
            <p>Writer: Hikoshi Sasako</p>
            <p>Composer: Hikoshi Hashimoto</p>
            <p>Release date: December 13th, 2013</p>
            <p>Genre: 
                <a href="https://en.wikipedia.org/wiki/Role-playing_game">Role-Playing Game</a>
            </p>

        </div>
    </div>
</template>

<script setup>
import Header from "../components/Header.vue";
</script>

<style scoped>

.container__wiki {
    display: flex;
    justify-content: space-between;
    color: white;
    padding: 0 2rem 0 2rem;
}

h1 {
    color: white;
    display: flex;
    justify-content: center;
    font-size: 3rem;
    width: 100%;
}

.container__text {
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    width: 70%;
    padding: 1rem;
    background-color: #103973;
    border-radius: 25px;
}

.container__info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 25%;
    padding: 1rem;
    border: 2px solid white;
    border-radius: 15px;
    line-height: 5px;
}

.container__info img {
    width: 300px;
    height: 300px;
}

.container__info a  {
    color: white;
}

.devs {
    margin-top: 80px;
}

img {
    width: 100px;
    height: 100px;
}

.title-with-image {
    display: flex;
    align-items: center;
}

.title-with-image img {
    margin-right: 10px;
}

.text-with-image {
    display: flex;
    align-items: flex-start;
}

.text-with-image img {
    margin-right: 10px;
}

.text-with-image p {
    flex: 1;
}

</style>
