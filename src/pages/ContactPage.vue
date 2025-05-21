<script setup lang="ts">
import { ref } from 'vue';

// Textos do cabeçalho
const titlePage = ref('Fale\nconosco');
const contactText = ref('Aqui na Conceito Digital, acreditamos que boas conexões constroem grandes projetos. Se você quer tirar uma ideia do papel, melhorar sua presença online ou só entender melhor como podemos ajudar, estamos por aqui.');
const contactSupport = ref('Mande uma mensagem pelo formulário, e-mail ou WhatsApp. Respondemos rápido, sem burocracia e com a atenção que seu projeto merece.');
const textWhatsapp = ref('WhatsApp:');
const contactWhatsapp = ref('(61) 99965-7940');
const textEmail = ref('E-mail:');
const contactEmail = ref('conceitomktd@gmail.com');

// Textos do formulário
const formLabels = {
    name: 'Nome',
    email: 'E-mail',
    phone: 'Telefone',
    phonePlaceholder: '(99) 99999-9999',
    marketingQuestion: 'Sua empresa já possui departamento ou alguém dedicado ao marketing atualmente?'
};

// Variáveis reativas para o formulário
const name = ref<string>('');
const email = ref<string>('');
const phone = ref<string>('');
const hasMarketingDept = ref<string | null>(null);

// Função para enviar o formulário
const onSubmit = () => {
    console.log('Formulário enviado:', {
        name: name.value,
        email: email.value,
        phone: phone.value,
        hasMarketingDept: hasMarketingDept.value
    });
    // Aqui você pode adicionar a lógica de envio do formulário
};
</script>

<template>
    <div style="
    min-height: 100vh;
    width: 100%;
    background: radial-gradient(41.72% 37.11% at 50% 38.68%, #1E1E1E 0%, #000 100%);
    padding: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 60px;
    align-items: flex-start;
  ">
        <!-- Seção esquerda (Título e informações) -->
        <div style="flex: 1; min-width: 300px;">
            <div class="title-page" style="text-align: left;">
                <p style="white-space: pre-line; 
          font-family: 'BebasNeue';
          font-size: 146.988px;
          font-style: normal;
          font-weight: 400;
          line-height: 122.49px;
          background: linear-gradient(263deg, #00C2FF 5.03%, #6F01A1 97.89%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0;
          padding: 0;
          display: inline-block;">
                    {{ titlePage }}
                </p>
            </div>

            <div style="color: white; margin-top: 40px; max-width: 600px;">
                <p style="font-size: 18px; line-height: 1.6;">{{ contactText }}</p>
                <p style="font-size: 16px; margin-top: 20px;">{{ contactSupport }}</p>

                <div style="margin-top: 40px;">
                    <p style="font-size: 20px; font-weight: bold;">{{ textWhatsapp }} {{ contactWhatsapp }}</p>
                    <p style="font-size: 20px; font-weight: bold;">{{ textEmail }} {{ contactEmail }}</p>
                </div>
            </div>
        </div>

        <div style="flex: 1; min-width: 300px; max-width: 500px;">
            <q-form @submit.prevent="onSubmit" style="
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border-radius: 16px;
        padding: 40px;
        color: white;
      ">
                <q-input class="contact-form" v-model="name" :label="formLabels.name" standout="bg-white text-black"
                    lazy-rules :rules="[val => !!val || 'Campo obrigatório']" style="margin-bottom: 20px;" />

                <q-input class="contact-form" v-model="email" type="email" :label="formLabels.email"
                    standout="bg-white text-black" lazy-rules :rules="[
                        val => !!val || 'Campo obrigatório',
                        val => /.+@.+\..+/.test(val) || 'E-mail inválido'
                    ]" style="margin-bottom: 20px;" />

                <q-input class="contact-form" v-model="phone" :label="formLabels.phone"
                    :placeholder="formLabels.phonePlaceholder" mask="(##) #####-####" standout="bg-white text-black"
                    lazy-rules :rules="[val => !!val || 'Campo obrigatório']" style="margin-bottom: 20px;" />

                <p style="font-size: 16px; margin-bottom: 20px;">
                    {{ formLabels.marketingQuestion }}
                </p>

                <q-option-group :options="[
                    { label: 'Sim', value: 'yes' },
                    { label: 'Não', value: 'no' }
                ]" type="radio" v-model="hasMarketingDept" style="margin-bottom: 20px;" />

                <q-btn label="Enviar" type="submit" style="
            margin-top: 30px;
            background: linear-gradient(263deg, #00C2FF 5.03%, #6F01A1 97.89%);
            color: white;
            width: 100%;
            height: 50px;
            font-weight: bold;
          " />
            </q-form>
        </div>
    </div>
</template>

<style lang="scss">
.contact-form {
    width: 481px;
    height: 34px;
    border-radius: 3px;
    background: #515151;
}
</style>