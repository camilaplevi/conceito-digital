<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const titlePage = ref('Fale\nconosco');
const contactText = ref('Aqui na Conceito Digital, acreditamos que boas conexões constroem grandes projetos. Se você quer tirar uma ideia do papel, melhorar sua presença online ou só entender melhor como podemos ajudar, estamos por aqui.');
const contactSupport = ref('Mande uma mensagem pelo formulário, e-mail ou WhatsApp. Respondemos rápido, sem burocracia e com a atenção que seu projeto merece.');
const textWhatsapp = ref('WhatsApp:');
const contactWhatsapp = ref('(61) 99965-7940');
const textEmail = ref('E-mail:');
const contactEmail = ref('conceitomktd@gmail.com');

const formLabels = {
    name: 'Nome',
    email: 'E-mail',
    phone: 'Telefone',
    namePlaceholder: 'Seu nome',
    phonePlaceholder: '(99) 99999-9999',
    emailPlaceholder: 'Seunome@exemplo.com',
    marketingQuestion: 'Sua empresa já possui departamento ou alguém dedicado ao marketing atualmente?'
};
const name = ref<string>('');
const email = ref<string>('');
const phone = ref<string>('');
const hasMarketingDept = ref<string | null>(null);

const onSubmit = () => {
    console.log('Formulário enviado:', {
        name: name.value,
        email: email.value,
        phone: phone.value,
        hasMarketingDept: hasMarketingDept.value
    });
};

onMounted(() => {
    gsap.from(".title-page p", {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: "power2.out"
    });

    gsap.from(".contact-text-section p", {
        duration: 0.8,
        y: 20,
        opacity: 0,
        stagger: 0.15,
        delay: 0.3,
        ease: "power2.out"
    });

    gsap.from(".contact-icons p", {
        duration: 0.6,
        x: -20,
        opacity: 0,
        stagger: 0.1,
        delay: 0.6,
        ease: "back.out"
    });

    gsap.from(".contact-form", {
        duration: 0.8,
        y: 30,
        opacity: 0,
        delay: 0.4,
        ease: "power2.out"
    });
});
</script>

<template>
    <q-page style="background: radial-gradient(50% 50% at 50% 50%, #242424 0%, #000 100%)">
        <div style="
        min-height: 100vh;
        width: 100%;
        margin: 0 auto;
        background: radial-gradient(41.72% 37.11% at 50% 38.68%, #1E1E1E 0%, #000 100%);
        padding: 40px;
        display: flex;
        flex-wrap: wrap;
        gap: 55px;
        align-items: flex-start;
        box-sizing: border-box;
        justify-content: center;
    ">
            <div class="gt-sm" style="
            flex: 1;
            min-width: 300px;
            max-width: calc(1050px - 537px - 60px);
        ">
                <div class="title-page" style="text-align: left;">
                    <p style="
                    white-space: pre-line; 
                    font-family: 'BebasNeue';
                    font-size: 146.988px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 0.83;
                    background: linear-gradient(263deg, #00C2FF 5.03%, #6F01A1 97.89%);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin: 0;
                    padding: 0;
                    display: inline-block;
                    will-change: transform, opacity;
                ">
                        {{ titlePage }}
                    </p>
                </div>

                <div class="contact-text-section" style="
                color: #aaaaaa;
                margin-top: 40px;
                max-width: 600px;
            ">
                    <p
                        style="font-family: DidactGothic; font-size: 20px; line-height: 1.6; will-change: transform, opacity;">
                        {{ contactText }}</p>
                    <p
                        style="font-family: DidactGothic; font-size: 20px; margin-top: 20px; will-change: transform, opacity;">
                        {{ contactSupport }}</p>

                    <div class="contact-icons" style="margin-top: 40px;">
                        <p
                            style="font-family: DidactGothic; font-size: 20px; display: flex; align-items: center; will-change: transform, opacity;">
                            <q-icon name="mdi-whatsapp" color="secondary" style="margin-right: 8px;" />
                            {{ textWhatsapp }} {{ contactWhatsapp }}
                        </p>
                        <p
                            style="font-family: DidactGothic; font-size: 20px; display: flex; align-items: center; will-change: transform, opacity;">
                            <q-icon name="mdi-email-arrow-right-outline" color="secondary" style="margin-right: 8px;" />
                            {{ textEmail }} {{ contactEmail }}
                        </p>
                    </div>
                </div>
            </div>

            <div style="
            flex: 1;
            min-width: 300px;
            max-width: 537px;
            order: 1;
        ">
                <div class="lt-md title-page" style="text-align: left; margin-bottom: 40px;">
                    <p style="
                    white-space: pre-line; 
                    font-family: 'BebasNeue';
                    font-size: 98px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 0.83;
                    background: linear-gradient(263deg, #00C2FF 5.03%, #6F01A1 97.89%);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin: 0;
                    padding: 0;
                    display: inline-block;
                    will-change: transform, opacity;
                ">
                        {{ titlePage }}
                    </p>
                </div>

                <q-form @submit.prevent="onSubmit" class="contact-form" style="
                width: 100%;
                max-width: 537px;
                border-radius: 12px;
                background: #1E1E1E;
                padding: 28px;
                color: white;
                box-sizing: border-box;
                will-change: transform, opacity;
            ">
                    <label class="labels-form">{{ formLabels.name }}</label>
                    <q-input class="inputs-form" v-model="name" :label="formLabels.namePlaceholder" standout
                        style="margin-bottom: 14px;" />

                    <label class="labels-form">{{ formLabels.email }}</label>
                    <q-input class="inputs-form" v-model="email" type="email" :label="formLabels.emailPlaceholder"
                        standout style="margin-bottom: 14px;" />

                    <label class="labels-form">{{ formLabels.phone }}</label>
                    <q-input class="inputs-form" v-model="phone" :label="formLabels.phonePlaceholder" standout
                        style="margin-bottom: 14px; " mask="(##) #####-####" />

                    <p style="font-family: DidactGothic; font-size: 16px; margin-bottom: 20px;">
                        {{ formLabels.marketingQuestion }}
                    </p>

                    <q-option-group :options="[
                        { label: 'Sim', value: 'true' },
                        { label: 'Não', value: 'false' }
                    ]" type="radio" v-model="hasMarketingDept" style="margin-bottom: 20px;"
                        class="custom-radio-group" />
                </q-form>

                <div class="lt-md contact-text-section" style="
                color: #aaaaaa;
                margin-top: 40px;
                max-width: 100%;
            ">
                    <p
                        style="font-family: DidactGothic; font-size: 18px; line-height: 1.6; will-change: transform, opacity;">
                        {{ contactText }}</p>
                    <p
                        style="font-family: DidactGothic; font-size: 18px; margin-top: 20px; will-change: transform, opacity;">
                        {{ contactSupport }}</p>

                    <div class="contact-icons" style="margin-top: 40px;">
                        <p
                            style="font-family: DidactGothic; font-size: 18px; display: flex; align-items: center; will-change: transform, opacity;">
                            <q-icon name="mdi-whatsapp" color="secondary" style="margin-right: 8px;" />
                            {{ textWhatsapp }} {{ contactWhatsapp }}
                        </p>
                        <p
                            style="font-family: DidactGothic; font-size: 18px; display: flex; align-items: center; will-change: transform, opacity;">
                            <q-icon name="mdi-email-arrow-right-outline" color="secondary" style="margin-right: 8px;" />
                            {{ textEmail }} {{ contactEmail }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>

<style lang="scss">
.labels-form {
    font-family: "DidactGothic";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 14px;
}

.inputs-form {
    font-family: "DidactGothic";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    background-color: $dark-grey;
    color: $middle-grey;

    .q-field__control {
        margin-top: 4px;
        height: 35px !important;
        min-height: 35px !important;
        background: $middle-grey !important;
        color: white !important;

        .q-field__native,
        .q-field__input {
            padding-top: 8px !important;
            height: 35px !important;
            color: white !important;
        }

        .q-field__label {
            top: 50% !important;
            transform: translateY(-50%) !important;
            padding-top: 0 !important;
        }
    }
}

.q-field--highlighted .q-field__label {
    color: $dark-grey !important;
}

.custom-radio-group {
    .q-radio__inner {
        color: $middle-grey;
    }

    .q-radio__bg {
        background: $middle-grey;
        border: 1px solid $middle-grey;
        border-radius: 50%;
    }

    .q-radio__inner--truthy {
        .q-radio__bg {
            background: $secondary !important;
            border: 2px solid $middle-grey !important;
        }

        .q-radio__check {
            transform: scale(0);
        }
    }

    .q-radio__label {
        font-family: "DidactGothic";
        color: white;
        margin-left: 8px;
    }

    .q-radio {
        margin-right: 20px;
    }
}

@media (max-width: 767px) {
    .inputs-form .q-field__control {
        height: 45px !important;
        min-height: 45px !important;
    }
}

.inputs-form .q-field__control:hover {
    background: ($middle-grey, 5%) !important;
    transition: background 0.3s ease;
}

.inputs-form .q-field--highlighted .q-field__control {
    background: ($middle-grey, 10%) !important;
    transition: background 0.3s ease;
}
</style>