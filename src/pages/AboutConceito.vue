<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { imagesConceito } from 'src/assets/images/Images'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const aboutTitle = ref('Como nascemos?')
const firstText = ref('A Conceito Digital nasceu da vontade simples, mas ambiciosa, de transformar boas ideias em experiências relevantes. Somos uma agência de marketing que entende que métricas importam, sim, mas só fazem sentido quando estão conectadas a algo maior: pessoas, histórias, e impacto real.')
const secondText = ref('Acreditamos que nenhum projeto deve ser tratado como fórmula pronta. Cada marca tem um caminho, e o nosso papel é construir estratégias inteligentes, criativas e que façam sentido para esse caminho – com foco no que funciona, e não só no que parece bonito no portfólio.')
const thirdText = ref('Trabalhamos de forma colaborativa porque já entendemos que ninguém faz nada grandioso sozinho. Juntamos diferentes talentos, visões e referências para entregar resultados que não só batem meta, mas que surpreendem quem está do outro lado da tela.')
const fourthText = ref('Se você está começando agora ou já tem estrada, não importa. A gente entra onde for necessário: da estruturação da marca até a performance, da ideia à execução. Tudo com estratégia, cuidado com os detalhes, e um compromisso honesto com o que realmente importa.')
const fifthText = ref('Nosso trabalho combina criatividade, tecnologia e inteligência de mercado para construir presenças digitais consistentes, autênticas e relevantes. Porque, no fim do dia, nosso objetivo é simples: fazer com que sua marca se comunique melhor, se conecte com o público certo e cresça com propósito.')
const sixthText = ref('Seja bem-vindo à Conceito Digital. A gente está aqui pra somar. sem promessas mirabolantes, mas com muito trabalho bem feito.')

onMounted(() => {
    gsap.from(".text-area", {
        duration: 1,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".text-area",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".equipe-images img", {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.15,
        scrollTrigger: {
            trigger: ".equipe-images",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        ease: "back.out(1.2)"
    });

    gsap.from(".image img", {
        duration: 1,
        x: -50,
        opacity: 0,
        scrollTrigger: {
            trigger: ".image-area",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".text-image p", {
        duration: 1,
        x: 50,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".image-area",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
});
</script>

<template>
    <q-page
        style="background: radial-gradient(50% 50% at 50% 50%, #242424 0%, #000 100%); justify-content: center; display: flex;">
        <div class="column main-content" style="max-width: 1050px; width: 100%; padding: 40px;">

            <div class="about-title">
                <p style="
                    font-family: 'BebasNeue';
                    font-size: 176px;
                    line-height: 0.83;
                    background: linear-gradient(263deg, #00C2FF 5.03%, #6F01A1 97.89%);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin: 0;
                    padding: 0;
                    display: inline-block;
                    will-change: transform, opacity, text-shadow;
                ">{{ aboutTitle }}</p>
            </div>

            <div class="text-area" style="margin-top: 40px;">
                <p>{{ firstText }}</p>
            </div>

            <div class="row image-area" style="margin-top: 40px; gap: 40px; align-items: flex-start;">
                <div class="image" style="flex: 1; min-width: 300px;">
                    <img :src="imagesConceito.conceitoImage" alt=""
                        style="width: 100%; height: auto; border-radius: 8px; will-change: transform;">
                </div>
                <div class="text-image" style="flex: 1; min-width: 300px;">
                    <p class="text-area" style="will-change: transform;">{{ secondText }}</p>
                    <p class="text-area" style="margin-top: 45px; will-change: transform;">{{ thirdText }}</p>
                </div>
            </div>

            <div class="row equipe-images" style="gap: 27px; margin-top: 38px; margin-bottom: 43px; overflow: hidden;">
                <img :src="imagesConceito.equipeUm" alt="" style="will-change: transform;">
                <img :src="imagesConceito.equipeDois" alt="" style="will-change: transform;">
                <img :src="imagesConceito.equipeTres" alt="" style="will-change: transform;">
                <img :src="imagesConceito.equipeQuatro" alt="" style="will-change: transform;">
                <img :src="imagesConceito.equipeCinco" alt="" style="will-change: transform;">
                <img :src="imagesConceito.equipeSeis" alt="" style="will-change: transform;">
            </div>

            <div class="bottom-texts" style="margin-top: 40px;">
                <p class="text-area" style="will-change: transform;">{{ fourthText }}</p>
                <p class="text-area" style="margin-top: 45px; will-change: transform;">{{ fifthText }}</p>
                <p class="text-area" style="margin-top: 45px; will-change: transform;">{{ sixthText }}</p>
            </div>
        </div>
    </q-page>
</template>

<style lang="scss">
.text-area {
    font-family: DidactGothic;
    font-size: 20px;
    color: $lightGrey;
    line-height: normal;
    text-align: justify;
}


@media (min-width: 769px) {
    .equipe-images {
        display: flex;
        flex-wrap: nowrap;
        gap: 21px;
        overflow-x: auto;
        padding-bottom: 10px;
    }

    .bottom-texts {
        order: 3;
    }

    .equipe-images img {
        width: calc(50% - 8px);
        margin-bottom: 16px;
        object-fit: cover;
    }

    .equipe-images {
        order: 4;
    }
}

@media (max-width: 768px) {
    .about-title p {
        font-size: 80px !important;
        line-height: 0.9;
    }

    .image-area {
        flex-direction: column !important;
        gap: 20px !important;
    }

    .equipe-images {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        img {
            width: 97.326px;
            object-fit: cover;
            flex-basis: calc(33.333% - 14px);
            margin-bottom: 20PX;
        }
    }

    .bottom-texts {
        order: 5;
        margin-top: 0 !important;
    }

    .equipe-images {
        order: 4;
        gap: 0 !important;
    }

    .main-content {
        padding: 20px !important;
    }

    .text-area {
        font-size: 16px !important;
    }
}
</style>