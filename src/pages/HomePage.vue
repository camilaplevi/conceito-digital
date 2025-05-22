<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { imagesConceito } from 'src/assets/images/Images'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  bg: string;
  logo: string;
}

interface Topic {
  id: number;
  title: string;
  expanded: boolean;
  content: {
    description: string;
    images: string[];
  };
}

const marketingTitle = ref('MARKETING')
const marketingText = ref('Se você chegou até essa página, é porque nosso marketing é bom!')
const secondMktText = ref('"O tempo é a única coisa que possuímos, e mesmo assim, muitos o desperdiçam como se fosse abundante."')
const textImage = ref('"Se um homem não sabe para onde está navegando, nenhum vento é favorável."')
const productsTitle = ref('PRO\nDU\nTOS')
const consultoriaTitle = ref('CONSULTORIA DE MARKETING DIGITAL:')
const consultoriaText = ref('- Sessões para analisar e criar estratégias específicas para clientes.')
const mentoriaTitle = ref('Mentoria para Criadores de Conteúdo:')
const mentoriaText = ref('- Ajuda personalizada para YouTubers, influenciadores e marcas que desejam crescer nas plataformas digitais.')
const contentTitle = ref('O conteúdo\nimpressiona')
const contentFirstText = ref('"Mais vale alguém que age, do que alguém que só lê livros."')
const contentSecondText = ref('"O marketing não é sobre o que você vende, mas sobre como você transforma."')
const contentThirdText = ref('"Não é o mais forte que domina o mercado, mas quem melhor se adapta às mudanças."')
const contentFourthText = ref('"As ideias movem o mundo, mas só a execução transforma mercados."')
const discoverTitle = ref(' Descubra\nagora!')
const discovertTextOne = ref('Como superar suas limitações e alcançar um novo nível de sucesso em sua empresa.')
const discoverTextTwo = ref('O poder da mentalidade correta para criar a vida que você sempre sonhou.')
const discoverTextThree = ref('Ferramentas práticas que você pode aplicar agora para ver mudanças rápidas e duradouras.')

const projects = ref<Project[]>([
  { bg: imagesConceito.bgOneCode, logo: imagesConceito.logoOneCode },
  { bg: imagesConceito.bgDirectzap, logo: imagesConceito.logoDirectzap },
  { bg: imagesConceito.bgKalvinho, logo: imagesConceito.logoKalvinho },
  { bg: imagesConceito.bgNeoenergia, logo: imagesConceito.logoNeoenergia }
]);

const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  return arr.reduce((acc: T[][], _, i: number) => {
    if (i % size === 0) acc.push(arr.slice(i, i + size));
    return acc;
  }, []);
};

const projectGroups = chunkArray(projects.value, 2);

const topics = ref<Topic[]>([
  {
    id: 1,
    title: "After Effects & Motion Graphics",
    expanded: false,
    content: {
      description: "After Effects é aquele programa que a galera usa pra fazer mágica com vídeos, tipo dar vida a logos, textos e gráficos que, de outro jeito, ficariam ali, parados e sem graça. Ele é o queridinho quando o assunto é criar animações estilosas e efeitos visuais de impacto, seja pra comercial, filme ou post nas redes. Já o tal do Motion Graphics é a arte de animar esses elementos visuais, basicamente fazer tudo se mexer bonito na tela pra deixar o vídeo mais interessante e profissional. Quando você junta os dois, o resultado é aquele tipo de conteúdo que prende o olho, impressiona e dá um upgrade gigante na comunicação visual. Tipo transformar uma ideia parada num espetáculo visual em movimento.",
      images: [imagesConceito.afterEffects, imagesConceito.motionGraphics]
    }
  },
  {
    id: 2,
    title: "Animação e Criação de Mascote",
    expanded: false,
    content: {
      description: "Com as ferramentas certas, dá pra desenvolver mascotes carismáticos e cheios de estilo, que não só representam sua marca, mas também criam conexão real com o público. Com a animação, esses mascotes ganham vida: piscam, pulam, fazem dancinha e deixam qualquer vídeo, apresentação ou campanha mais divertida, envolvente e memorável. É o tipo de coisa que faz seu público lembrar de você não porque sua marca é incrível (spoiler: não é), mas porque o bonequinho que você criou fez eles rirem, se identificarem…",
      images: [imagesConceito.kalvinho, imagesConceito.bravinhoKalvinho]
    }
  },
  {
    id: 3,
    title: "Edição de Vídeos",
    expanded: false,
    content: {
      description: 'Edição de vídeo é basicamente a arte de pegar um monte de gravação crua, bagunçada e cheia de "peraí, grava de novo" — e transformar tudo isso em um vídeo que parece que foi planejado desde o início (mesmo que não tenha sido). Ela envolve cortar as partes que ninguém quer ver, organizar as cenas pra fazer sentido, ajustar cores pra não parecer que foi filmado numa caverna, melhorar o áudio pra não soar como uma conversa dentro de uma geladeira, e ainda adicionar gráficos, transições e efeitos que deixam tudo com cara de "uau, isso ficou bom". Seja pra redes sociais, campanhas publicitárias ou vídeos mais elaborados, uma boa edição não só deixa o material bonito, mas também garante que a mensagem passe de um jeito claro, envolvente e que realmente prenda a atenção. Tipo maquiagem digital, só que ao invés de esconder espinhas, esconde erros de gravação.',
      images: [imagesConceito.edicaoVideos]
    }
  },
  {
    id: 4,
    title: "Criação de sites",
    expanded: false,
    content: {
      description: "Criar um site é como montar uma vitrine digital que precisa ser bonita, funcionar direitinho e não fazer o visitante sair correndo em 3 segundos. É um processo que mistura design inteligente com programação eficiente, tudo pra garantir que a navegação seja fluida, o carregamento não leve uma eternidade, e o layout funcione tanto no celular do tiozão quanto no monitor ultrawide do designer metido. Um site bem feito não só passa confiança, mas também melhora a experiência de quem acessa e coloca sua marca num lugar de destaque no mundo online. Ele vira seu cartão de visita, seu vendedor 24h e, com sorte, o motivo pelo qual alguém escolhe você em vez do concorrente com aquele site horroroso de 2010. Ou seja: se você existe, mas seu site é ruim… talvez seja melhor voltar a não existir.",
      images: [imagesConceito.criacaoSites]
    }
  },
  {
    id: 5,
    title: "FilmMaker",
    expanded: false,
    content: {
      description: "O filmmaker é basicamente o arquiteto das emoções em vídeo, aquele ser místico que pega uma ideia qualquer e transforma em algo que prende o olhar, cutuca sentimentos e faz o público pensar 'nossa, eu preciso disso' (mesmo que seja um aspirador de pó). Com narrativa bem pensada, enquadramentos que não foram escolhidos no chute, e uma edição afiada, cada cena é construída pra criar conexão real entre marca e audiência. Não é só mostrar, é provocar desejo, gerar identificação e, se tudo der certo, levar à ação. Seja pra campanhas, vídeos institucionais ou conteúdo pra redes sociais, o foco é capturar a atenção nos primeiros segundos, antes que o dedo do espectador decida deslizar pra longe. Usamos técnicas de neuromarketing, psicologia visual e aquele toque mágico que faz sua mensagem ficar grudada na cabeça de quem assiste. Em resumo: é mais do que fazer vídeo bonito. É criar impacto. E fazer parecer fácil, mesmo sendo um caos nos bastidores.",
      images: [imagesConceito.filmMakerOne, imagesConceito.filmMakerTwo]
    }
  },
  {
    id: 6,
    title: "Tráfego pago",
    expanded: false,
    content: {
      description: "Tráfego pago é a arte (ou a ciência desesperada) de colocar sua marca bem na frente dos olhos certos, na hora certa — e sim, pagando por isso. A ideia é simples: você investe em anúncios e, em troca, atrai visitantes qualificados pro seu site, landing page, perfil ou seja lá onde seu funil de vendas começa a sugar. Por trás dos cliques, tem toda uma estratégia: segmentação inteligente, testes A/B, ajustes finos, cópias persuasivas e criativos que não parecem ter sido feitos no Paint. Tudo pensado pra transformar visualizações em cliques, cliques em leads, e leads em gente que abre a carteira. Seja no Google, Instagram, Facebook ou onde seu público estiver se distraindo, o tráfego pago ajuda a escalar resultados com agilidade e precisão. É performance pura: medível, testável e, quando bem feito, irresistível. Ou seja: não é só impulsionar post por impulso. É criar uma máquina de visibilidade que trabalha enquanto você dorme.",
      images: [imagesConceito.trafegoOne, imagesConceito.trafegoTwo]
    }
  },
  {
    id: 7,
    title: "Social Media",
    expanded: false,
    content: {
      description: "Criamos estratégias e conteúdos que realmente funcionam nas redes sociais, nada de tendências vazias ou estética exagerada só pra parecer 'cool'. Aqui o foco é em resultado: trabalhamos com dados, analisamos métricas e produzimos conteúdo com propósito, pensado pra conectar sua marca com o público certo. Não se trata só de postar bonito, mas de ter consistência, relevância e impacto. Cada publicação tem um objetivo claro, fortalecer sua presença digital, engajar de forma autêntica e fazer sua marca crescer de verdade. Em resumo: menos modinha, mais estratégia.",
      images: [imagesConceito.socialMedia]
    }
  },
]);

const toggleTopic = (topic: Topic) => {
  topic.expanded = !topic.expanded;
  if (topic.expanded) {
    gsap.from(`.topic-${topic.id} .content`, {
      duration: 0.5,
      height: 0,
      opacity: 0,
      ease: "power2.out"
    });
    gsap.from(`.topic-${topic.id} .content p`, {
      duration: 0.8,
      y: 20,
      opacity: 0,
      stagger: 0.1,
      delay: 0.3,
      ease: "back.out"
    });
    gsap.from(`.topic-${topic.id} .content img`, {
      duration: 0.8,
      y: 30,
      opacity: 0,
      stagger: 0.2,
      delay: 0.5,
      ease: "elastic.out(1, 0.5)"
    });
  }
};

onMounted(() => {

  gsap.to(".content-title-gradient", {
    duration: 4,
    opacity: 0.8,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut"
  });

  gsap.to(".content-title-gradient", {
    duration: 6,
    "text-shadow": "0 0 10px rgba(175, 0, 255, 0.7)",
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut"
  });

  gsap.from(".main-title p", {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: "back.out(1.7)",
    delay: 0.3
  });

  gsap.from(".marketing-btn", {
    duration: 0.8,
    scale: 0.5,
    opacity: 0,
    delay: 1.2,
    ease: "elastic.out(1, 0.5)"
  });

  gsap.from(".main-image-container img", {
    duration: 1.5,
    scale: 0.8,
    opacity: 0,
    delay: 0.5,
    ease: "power2.out"
  });

  gsap.from(".text-image", {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 1.5,
    ease: "back.out"
  });


  gsap.from(".portfolio-area-title p", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".portfolio-area-title",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(".main-portfolio > div", {
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".main-portfolio",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(".products-title", {
    duration: 1,
    x: -100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".products-area",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(".products-area > div:last-child > div", {
    duration: 1,
    x: 100,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".products-area",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(".content-title p", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".content-area",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(".content-image", {
    duration: 1,
    x: -100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".content-area",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(".discover-title p", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".discover-area",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(".discover-texts p", {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".discover-area",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(".discover-area .q-btn", {
    duration: 0.8,
    scale: 0.5,
    opacity: 0,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".discover-area",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    ease: "elastic.out(1, 0.5)"
  });

  document.querySelectorAll('.images-portfolio div').forEach(item => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item.querySelector('img:first-child'), {
        duration: 0.3,
        scale: 1.05,
        ease: "power2.out"
      });
      gsap.to(item.querySelector('img:last-child'), {
        duration: 0.3,
        scale: 1.1,
        ease: "power2.out"
      });
    });

    item.addEventListener('mouseleave', () => {
      gsap.to(item.querySelector('img:first-child'), {
        duration: 0.3,
        scale: 1,
        ease: "power2.out"
      });
      gsap.to(item.querySelector('img:last-child'), {
        duration: 0.3,
        scale: 1,
        ease: "power2.out"
      });
    });
  });
});
</script>

<template>
  <q-page class="home-page"
    style="background: radial-gradient(50% 50% at 50% 50%, #242424 0%, #000 100%); position: relative; min-height: 100vh; display: flex; justify-content: center; overflow: hidden;">
    <div class="main-container"
      style="width: 100%; max-width: 1200px; margin: 0 auto; position: relative; margin-top: 30px;">

      <div style="position: relative;">
        <div class="main-title" style="position: relative; z-index: 1; text-align: center; line-height: 0.8;">
          <p class="gt-sm" style="font-family: BebasNeue; font-size: 300px;
       background: linear-gradient(90deg, #00C2FF80 0%, #AF00FF80 100%);
       -webkit-background-clip: text; 
       background-clip: text;
       color: transparent;
       margin: 0;
       padding: 0;
       display: inline-block;
       will-change: transform;">
            {{ marketingTitle }}
          </p>
          <p class="lt-md" style="font-family: BebasNeue; font-size: 96px;
       background: linear-gradient(90deg, #00C2FF80 0%, #AF00FF80 100%);
       -webkit-background-clip: text; 
       background-clip: text;
       color: transparent;
       margin: 0;
       padding: 0;
       display: inline-block;
       will-change: transform;">
            {{ marketingTitle }}
          </p>
        </div>

        <!-- Versão Mobile -->
        <div class="lt-md">
          <div class="marketing-area"
            style="display: flex; flex-direction: column; width: 100%; margin: 20px auto 0; position: relative; z-index: 3; padding: 0 50px;">
            <div class="marketing-left"
              style="width: 100%; display: flex; flex-direction: column; align-items: center; margin-bottom: 20px;">
              <p class="marketing-text"
                style="font-family: DidactGothic; font-size: 16px; margin: 0px 0 30px; width: 100%; text-align: center; color: #CEC1D0; will-change: transform;">
                {{ marketingText }}
              </p>
              <q-btn class="marketing-btn" label="Abra uma oportunidade"
                style="width: 220px; height: 40px; font-size: 14px; margin-top: 20px; border-radius: 200px; border: 0.5px solid #B20CFF; background: rgba(178, 12, 255, 0.10); color: white; will-change: transform;"></q-btn>
            </div>
            <div class="marketing-right" style="width: 100%; display: flex; justify-content: center;">
              <p class="marketing-quote"
                style="font-family: DidactGothic; font-size: 16px; text-align: center; width: 100%; max-width: 300px; color: #CEC1D0; will-change: transform;">
                {{ secondMktText }}
              </p>
            </div>
          </div>

          <div class="main-image-container"
            style="position: relative; width: 100%; z-index: 2; text-align: center; will-change: transform;">
            <img :src="imagesConceito.mainImage" alt=""
              style="max-height: 400px; width: 100%; object-fit: contain; will-change: transform;">
            <div style="position: absolute;
                   top: 0;
                   left: 0;
                   width: 100%;
                   height: 100%;
                   background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50%, rgba(0, 0, 0, 0.95) 99.92%);
                   pointer-events: none;"></div>
          </div>

          <div class="text-image-container" style="position: absolute; 
                  top: 50%; 
                  left: 50%; 
                  transform: translate(-50%, 600%); 
                  width: calc(100% - 40px); 
                  z-index: 2;
                  border-radius: 15px;
                  background: linear-gradient(90deg, #AE00FF47 0%, #65009347 21.15%, #B617FF47 58.17%, #69009947 89.42%);
                  will-change: transform;">
            <p class="text-image" style="color: var(--q-secondary); 
                 font-family: Inter; 
                 color: white;
                 font-size: 16px; 
                 font-weight: 600; 
                 text-align: center;
                 font-style: normal;
                 margin: 0;
                 will-change: transform;">
              {{ textImage }}
            </p>
          </div>
        </div>

        <!-- Versão Desktop -->
        <div class="gt-sm">
          <div class="main-image-container"
            style="position: absolute; top: 0; left: 0; width: 100%; z-index: 2; text-align: center; margin-top: 25px; will-change: transform;">
            <img :src="imagesConceito.mainImage" alt=""
              style="max-height: 854px; object-fit: contain; transform: translateY(30%); will-change: transform;">
          </div>

          <div class="marketing-area"
            style="display: flex; justify-content: space-between; width: 100%; max-width: 1050px; margin: 17px auto 0; position: relative; z-index: 3;">
            <div class="column marketing-left"
              style="width: 45%; display: flex; flex-direction: column; align-items: flex-start;">
              <p class="marketing-text"
                style="font-family: DidactGothic; font-size: 20px; margin: 0; width: 351px; color: #CEC1D0; will-change: transform;">
                {{ marketingText }}
              </p>
              <q-btn class="marketing-btn" label="Abra uma oportunidade"
                style="width: 252px; height: 46px; font-size: 20px; text-transform: none; border-radius: 200px; margin-top: 63px; border: 0.5px solid #B20CFF; background: rgba(178, 12, 255, 0.10); color: white; will-change: transform;"></q-btn>
            </div>
            <div class="marketing-right" style="width: 45%; display: flex; justify-content: flex-end;">
              <p class="marketing-quote"
                style="font-family: DidactGothic; font-size: 20px; font-weight: 400; line-height: normal; margin: 0; width: 236px; color: #CEC1D0; will-change: transform;">
                {{ secondMktText }}
              </p>
            </div>
          </div>

          <div class="text-image-container"
            style="border-radius: 15px; width: 1045px; height: 62px; z-index: 2; margin: 236px auto 0px; position: relative; align-items: flex-end; display: flex; justify-content: center; background: linear-gradient(90deg, #AE00FF47 0%, #65009347 21.15%, #B617FF47 58.17%, #69009947 89.42%); will-change: transform;">
            <p class="text-image"
              style="color: var(--q-secondary); text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); font-family: Inter; color: white; font-size: 25px; font-weight: 600; line-height: normal; will-change: transform;">
              {{ textImage }}
            </p>
          </div>
        </div>
      </div>

      <!--Imagens Portofólio -->
      <div class="images-portfolio q-mt-xl"
        style="width: 100%; margin-left: auto; margin-right: auto; margin-top: 150px;"
        :style="$q.screen.lt.md ? { 'margin-top': '0' } : {}">
        <div v-for="(group, index) in projectGroups" :key="index"
          :style="{ 'flex-direction': $q.screen.lt.md ? 'column' : 'row' }"
          style="display: flex; gap: 20px; margin-bottom: 20px;">
          <div v-for="project in group" :key="project.bg" :style="{ 'width': $q.screen.lt.md ? '100%' : '50%' }"
            style="position: relative; overflow: hidden; border-radius: 8px; will-change: transform;">
            <img :src="project.bg" alt=""
              style="width: 100%; height: auto; object-fit: cover; border-radius: 8px; transition: transform 0.3s ease;">
            <img :src="project.logo" alt=""
              style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); max-height: 70%; max-width: 70%; transition: transform 0.3s ease;">
          </div>
        </div>
      </div>

      <!-- Tópicos com trabalhos oferecidos -->
      <div class="main-portfolio q-my-xl" style="width: 100%; margin: 0 auto; padding: 50px;">
        <div class="portfolio-area-title">
          <p style="color: #FFF; font-family: 'BebasNeue'; font-style: normal; font-weight: 400; line-height: 1.2; will-change: transform;"
            :style="{ 'font-size': $q.screen.lt.md ? '36px' : '96.748px' }">
            O QUE NÓS
          </p>
          <p style="color: #FFF; font-family: 'BebasNeue'; font-style: normal; font-weight: 400; margin: 0; background: var(--Degrade-principal, linear-gradient(263deg, #00C2FF 5.03%, #6F01A1 97.89%)); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; will-change: transform;"
            :style="{
              'font-size': $q.screen.lt.md ? '96.748px' : '300px',
              'line-height': $q.screen.lt.md ? '0.9' : '0.8',
              'margin-top': $q.screen.lt.md ? '-20px' : '-30px'
            }">
            FAZEMOS
          </p>
        </div>

        <div v-for="topic in topics" :key="topic.id" :class="`topic-${topic.id}`"
          style="border-bottom: 1px solid rgba(255, 255, 255, 0.1); margin-bottom: 15px; will-change: transform;">
          <div @click="toggleTopic(topic)"
            style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; padding: 15px 0;">
            <div style="display: flex; align-items: center;">
              <span style="color: #B20CFF; font-family: 'BebasNeue'; margin-right: 10px; will-change: transform;"
                :style="{ 'font-size': $q.screen.lt.md ? '14px' : '24px' }">
                ({{ topic.id.toString().padStart(2, '0') }})
              </span>
              <h3 style="color: #FFF; font-family: 'Inter'; margin: 0; will-change: transform;"
                :style="{ 'font-size': $q.screen.lt.md ? '16px' : '24px' }">
                {{ topic.title }}
              </h3>
            </div>
            <span style="color: #FFF; transition: transform 0.3s; will-change: transform;" :style="{
              'font-size': $q.screen.lt.md ? '16px' : '24px',
              transform: topic.expanded ? 'rotate(180deg)' : 'rotate(0deg)'
            }">
              ▼
            </span>
          </div>

          <div v-if="topic.expanded" class="content"
            style="padding: 15px 0 30px; display: flex; flex-direction: column; gap: 20px; overflow: hidden;">
            <div style="width: 100%;">
              <p style="color: #FFF; font-family: 'Inter'; line-height: 1.6; margin-bottom: 20px; will-change: transform;"
                :style="{ 'font-size': $q.screen.lt.md ? '14px' : '18px' }">
                {{ topic.content.description }}
              </p>
            </div>
            <div
              style="width: 100%; display: flex; flex-wrap: wrap; gap: 15px; align-items: stretch; will-change: transform;"
              :style="{ 'flex-direction': $q.screen.lt.md ? 'column' : 'row' }">
              <div v-for="(img, idx) in topic.content.images" :key="idx"
                style="flex: 1; display: flex; justify-content: center; align-items: center; overflow: hidden; border-radius: 8px; min-width: 200px; will-change: transform;">
                <img :src="img" :style="{
                  'max-height': $q.screen.lt.md ? '250px' : '439px',
                  'width': $q.screen.lt.md ? '100%' : 'auto'
                }" style="object-fit: contain; will-change: transform;">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- PRODUTOS -->
      <div class="products-area"
        style="width: 100%; max-width: 1200px; margin: 0 auto; padding: 50px 50px 0 50px; display: flex; align-items: flex-start;"
        :class="{ 'products-mobile': $q.screen.lt.md }">
        <div style="flex: 0 0 auto; width: 400px;" :class="{ 'mobile-title': $q.screen.lt.md }">
          <p class="products-title" style="font-family: 'BebasNeue'; 
              font-size: 324.392px; 
              font-style: normal; 
              font-weight: 400; 
              line-height: 300px;
              background: linear-gradient(263deg, #00C2FF 5.03%, #6F01A1 97.89%);
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              margin: 0;
              white-space: pre-line;
              will-change: transform;"
            :style="$q.screen.lt.md ? { 'font-size': '98px', 'line-height': '90px', 'margin-right': '20px' } : {}">
            {{ productsTitle }}
          </p>
        </div>

        <div style="flex: 1; color: #FFF; font-family: 'Inter'; position: relative;"
          :class="{ 'mobile-content': $q.screen.lt.md }">
          <div style="position: relative; margin-bottom: 40px;" :class="{ 'mobile-text-block-1': $q.screen.lt.md }">
            <div style="position: absolute; top: 0; left: 0; z-index: 2; width: 100%;"
              :class="{ 'mobile-text-content': $q.screen.lt.md }">
              <p style="font-family: BebasNeue; font-size: 54px; line-height: normal; margin-bottom: 10px;  color: var(--q-secondary); will-change: transform;"
                :style="$q.screen.lt.md ? { 'font-size': '16px', 'margin-bottom': '5px' } : {}">
                {{ consultoriaTitle }}</p>
              <p style="font-family: DidactGothic; font-size: 24px; line-height: normal; margin-bottom: 20px; padding: 10px; border-radius: 8px; color: var(--q-primary); position: relative; padding-left: 40px; will-change: transform;"
                :style="$q.screen.lt.md ? { 'font-size': '11px', 'padding': '8px', 'padding-left': '30px', 'margin-bottom': '10px', 'z-index': '2' } : {}">
                <span
                  style="position: absolute; left: 15px; top: 50%; transform: translateY(-50%); width: 15px; height: 5px; background-color: #00C2FF;"
                  :style="$q.screen.lt.md ? { 'left': '3px' } : {}"></span>
                {{ consultoriaText.replace('- ', '') }}
              </p>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
              <img :src="imagesConceito.imageTabuleiro"
                style="width: 100%; border-radius: 8px; z-index: 1; margin-top: -130px; will-change: transform;"
                :style="$q.screen.lt.md ? { 'margin-top': '-80px', 'max-width': '400px', 'margin-left': '-50px' } : {}">
            </div>
          </div>

          <div style="position: relative; margin-top: -220px;" :class="{ 'mobile-text-block-2': $q.screen.lt.md }">
            <div style="position: absolute; top: 0; left: 0; z-index: 2; width: 100%;"
              :class="{ 'mobile-text-content-2': $q.screen.lt.md }">
              <p style="font-size: 24px; font-weight: 600; margin-bottom: 10px;  padding: 10px; border-radius: 8px; color: var(--q-secondary); will-change: transform;"
                :style="$q.screen.lt.md ? { 'font-size': '16px', 'margin-bottom': '5px' } : {}">
                {{ mentoriaTitle }}</p>
              <p style="font-family: DidactGothic; font-size: 24px; line-height: normal; margin-bottom: 20px; padding: 10px; border-radius: 8px; color: var(--q-primary); position: relative; padding-left: 40px; will-change: transform;"
                :style="$q.screen.lt.md ? { 'font-size': '11px', 'padding': '8px', 'padding-left': '30px' } : {}">
                <span
                  style="position: absolute; left: 15px; top: 30%; transform: translateY(-50%); width: 15px; height: 5px; background-color: #00C2FF;"
                  :style="$q.screen.lt.md ? { 'left': '10px' } : {}"></span>
                {{ mentoriaText.replace('- ', '') }}
              </p>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
              <img :src="imagesConceito.imageLampadas"
                style="width: 100%; border-radius: 8px; z-index: 1; margin-top: 50px; will-change: transform;"
                :style="$q.screen.lt.md ? { 'margin-top': '-40px' } : {}">
            </div>
          </div>
        </div>
      </div>

      <!-- CONTEÚDO -->
      <div class="content-area"
        style="width: 100%; max-width: 1200px; margin: 100px auto; padding: 0 20px; position: relative;">
        <div class="content-title" style="text-align: left; margin-bottom: 60px;"
          :style="$q.screen.lt.md ? { 'margin': '30px' } : {}">
          <p style="color: #F2D6FF; font-family: 'BebasNeue'; font-size: 54px; font-weight: 400; line-height: normal; margin: 0; text-transform: uppercase; will-change: transform;"
            :style="$q.screen.lt.md ? { 'font-size': '36px' } : {}">
            {{ contentTitle.split('\n')[0] }}
          </p>
          <p class="content-title-gradient"
            style="font-family: 'BebasNeue'; font-size: 249.164px; line-height: normal; background: linear-gradient(90deg, rgba(0, 194, 255, 0.50) 0%, rgba(175, 0, 255, 0.50) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 0; margin-top: -30px; text-transform: uppercase; will-change: transform;"
            :style="$q.screen.lt.md ? { 'font-size': '82.296px', 'margin-top': '-10px' } : {}">
            {{ contentTitle.split('\n')[1] }}
          </p>
        </div>
        <div style="display: flex; align-items: flex-start; position: relative;"
          :class="{ 'mobile-content-layout': $q.screen.lt.md }">
          <div class="content-image" style="flex: 0 0 auto; position: relative; z-index: 1; will-change: transform;">
            <img :src="imagesConceito.imageConteudo" alt=""
              style="margin-top: -340px; margin-left: -220px; position: relative; will-change: transform;" :style="$q.screen.lt.md ? {
                'margin-top': '-100px',
                'margin-left': '-110px',
                'max-width': '330px',
                'position': 'relative'
              } : {}">
          </div>
          <div class="content-area-texts" style="flex: 1; position: relative; z-index: 2; overflow: visible;"
            :style="$q.screen.lt.md ? { 'margin-top': '-20px' } : {}">
            <p class="content-text"
              style="width: 593px; margin-top: -50px; margin-left: -260px; position: relative; will-change: transform;"
              :style="$q.screen.lt.md ? {
                'font-size': '16px',
                'width': 'calc(100% + 100px)',
                'margin-top': '0',
                'margin-left': '-110px',
                'position': 'relative'
              } : {}">
              {{ contentFirstText }}
            </p>
            <p class="content-text"
              style="width: 602px; margin-left: -200px; margin-top: 47px; position: relative; will-change: transform;"
              :style="$q.screen.lt.md ? {
                'font-size': '16px',
                'width': 'calc(100% + 80px)',
                'margin-left': '-80px',
                'margin-top': '15px',
                'position': 'relative'
              } : {}">
              {{ contentSecondText }}
            </p>
            <p class="content-text"
              style="margin-left: -50px; margin-top: 61px; position: relative; will-change: transform;" :style="$q.screen.lt.md ? {
                'font-size': '16px',
                'margin-left': '-40px',
                'margin-top': '15px',
                'position': 'relative'
              } : {}">
              {{ contentThirdText }}
            </p>
            <p class="content-text"
              style="margin-left: -120px; margin-top: 50px; position: relative; will-change: transform;" :style="$q.screen.lt.md ? {
                'font-size': '16px',
                'margin-left': '-60px',
                'margin-top': '15px',
                'position': 'relative'
              } : {}">
              {{ contentFourthText }}
            </p>
          </div>
        </div>
      </div>

      <!-- DESCUBRA AGORA -->
      <div class="discover-area"
        style="width: 100%; max-width: 1200px; text-align: center; position: relative; min-height: 800px; will-change: transform;"
        :style="$q.screen.lt.md ? { 'min-height': '600px', 'margin': '50px auto' } : {}">
        <div class="discover-background"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; overflow: hidden; border-radius: 15px;">
          <img :src="imagesConceito.bgDiscover" alt="multidão"
            style="width: 100%; height: 100%; object-fit: cover; will-change: transform;"
            :style="$q.screen.lt.md ? { 'object-position': 'center center' } : {}">
        </div>

        <div style="position: relative; z-index: 1; padding: 80px 20px;"
          :style="$q.screen.lt.md ? { 'padding': '0 15px' } : {}">
          <div class="discover-title">
            <p style="color: #D3AAE7; font-family: 'BebasNeue'; font-size: 96px; font-weight: 400; line-height: normal; letter-spacing: 48px; margin: 0; text-transform: uppercase; will-change: transform;"
              :style="$q.screen.lt.md ? { 'font-size': '36px', 'letter-spacing': 'normal' } : {}">
              {{ discoverTitle.split('\n')[0] }}
            </p>
            <p style="font-family: 'BebasNeue'; font-size: 300px; font-weight: 400; line-height: normal; background: linear-gradient(263deg, #00C2FF 5.03%, #6F01A1 97.89%); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 0; margin-top: -30px; text-transform: uppercase; will-change: transform;"
              :style="$q.screen.lt.md ? { 'font-size': '96px', 'margin-top': '-15px' } : {}">
              {{ discoverTitle.split('\n')[1] }}
            </p>
          </div>
          <div class="discover-texts"
            style="color: #C7C7C7; font-family: 'DidactGothic'; font-size: 32px; font-weight: 400; line-height: normal; max-width: 1030px; margin: 0 auto; will-change: transform;"
            :style="$q.screen.lt.md ? { 'font-size': '18px', 'max-width': '90%' } : {}">
            <p style="margin-bottom: 30px; will-change: transform;"
              :style="$q.screen.lt.md ? { 'margin-bottom': '15px' } : {}">{{
                discovertTextOne }}</p>
            <p style="margin-bottom: 30px; will-change: transform;"
              :style="$q.screen.lt.md ? { 'margin-bottom': '15px' } : {}">{{
                discoverTextTwo
              }}</p>
            <p style="will-change: transform;">{{ discoverTextThree }}</p>
          </div>
          <div style="margin-top: 40px;" :style="$q.screen.lt.md ? { 'margin-top': '50px' } : {}">
            <q-btn label="ENTRAR EM CONTATO"
              style="width: 466px; height: 70px; border-radius: 100px; border: 3px solid var(--Degrade-principal, #00C2FF); color: white; background: linear-gradient(86deg, rgba(178, 12, 255, 0.25) 24.06%, rgba(67, 0, 97, 0.25) 80.45%); will-change: transform;"
              :style="$q.screen.lt.md ? { 'width': '280px', 'height': '50px', 'font-size': '14px' } : {}" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss">
.marketing-text,
.marketing-quote,
.marketing-btn {
  color: $primary;
}

.content-text {
  color: $light-purple;
  font-family: "DidactGothic";
  font-size: 32px;
  line-height: normal;
}

@keyframes pulse-gradient {
  0% {
    opacity: 0.8;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.8;
  }
}

@keyframes text-glow {
  0% {
    text-shadow: 0 0 5px rgba(0, 194, 255, 0.5);
  }

  50% {
    text-shadow: 0 0 20px rgba(175, 0, 255, 0.7);
  }

  100% {
    text-shadow: 0 0 5px rgba(0, 194, 255, 0.5);
  }
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0px);
  }
}

.main-title p,
.portfolio-area-title p:last-child,
.products-title,
.discover-title p:last-child {
  animation: pulse-gradient 4s ease-in-out infinite, text-glow 6s ease-in-out infinite;
}

.main-image-container img,
.content-image img,
.discover-background img {
  animation: float 6s ease-in-out infinite;
}

.images-portfolio div:hover img:first-child {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.images-portfolio div:hover img:last-child {
  transform: scale(1.1) translate(-50%, -50%);
  transition: transform 0.3s ease;
}

.content-text,
.marketing-text,
.marketing-quote,
.discover-texts p {
  transition: all 0.3s ease;
}

@media (max-width: 767.98px) {
  .products-mobile {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px 15px;
    align-items: flex-start;
  }

  .mobile-title {
    width: auto !important;
    flex: 0 0 120px;
    margin-right: 10px;
  }

  .mobile-content {
    flex: 1;
    min-width: 0;
  }

  .mobile-text-block-1 {
    position: static !important;
    margin-bottom: 0 !important;
  }

  .mobile-text-content {
    position: static !important;
    margin-bottom: 0;
  }

  .mobile-text-block-2 {
    position: static !important;
    margin-top: 0 !important;
    width: 100%;
    flex: 0 0 100%;
    margin-left: -155px;
    width: 350px;
  }

  .mobile-text-content-2 {
    position: static !important;
  }

  .products-title {
    word-break: break-all;
  }
}

@media (max-width: 767.98px) {
  .content-area {
    margin: 50px auto !important;
    padding: 0 15px !important;
  }

  .content-title {
    margin-bottom: 30px !important;
  }

  .mobile-content-layout {
    gap: 20px !important;
  }

  .content-text {
    font-size: 16px !important;
  }
}

@media (max-width: 767.98px) {
  .discover-area {
    min-height: 500px !important;
  }

  .discover-title p {
    line-height: 1.2 !important;
  }

  .q-btn {
    margin: 0 auto !important;
  }
}

.main-title p,
.marketing-text,
.marketing-quote,
.marketing-btn,
.main-image-container img,
.text-image,
.images-portfolio img,
.portfolio-area-title p,
.main-portfolio>div,
.products-title,
.products-area>div:last-child>div,
.content-title p,
.content-image,
.content-text,
.discover-title p,
.discover-texts p,
.discover-area .q-btn {
  opacity: 1 !important;
  visibility: visible !important;
}

.content-title-gradient {
  animation: pulse-gradient 4s ease-in-out infinite, text-glow 6s ease-in-out infinite;
}
</style>