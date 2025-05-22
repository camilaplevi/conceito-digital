<script setup lang="ts">
import { ref } from 'vue';
import { imagesConceito } from 'src/assets/images/Images'

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
const secondMktText = ref('“O tempo é a única coisa que possuímos, e mesmo assim, muitos o desperdiçam como se fosse abundante.”')
const textImage = ref('“Se um homem não sabe para onde está navegando, nenhum vento é favorável.”')
const productsTitle = ref('PRO\nDU\nTOS')
const consultoriaTitle = ref('CONSULTORIA DE MARKETING DIGITAL:')
const consultoriaText = ref('- Sessões para analisar e criar estratégias específicas para clientes.')
const mentoriaTitle = ref('Mentoria para Criadores de Conteúdo:')
const mentoriaText = ref('- Ajuda personalizada para YouTubers, influenciadores e marcas que desejam crescer nas plataformas digitais.')
const contentTitle = ref('O conteúdo\nimpressiona')
const contentFirstText = ref('“Mais vale alguém que age, do que alguém que só lê livros.”')
const contentSecondText = ref('“O marketing não é sobre o que você vende, mas sobre como você transforma.”')
const contentThirdText = ref('“Não é o mais forte que domina o mercado, mas quem melhor se adapta às  mudanças.”')
const contentFourthText = ref('“ As ideias movem o mundo, mas só a execução transforma mercados.”')
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
      description: "O filmmaker é basicamente o arquiteto das emoções em vídeo, aquele ser místico que pega uma ideia qualquer e transforma em algo que prende o olhar, cutuca sentimentos e faz o público pensar “nossa, eu preciso disso” (mesmo que seja um aspirador de pó). Com narrativa bem pensada, enquadramentos que não foram escolhidos no chute, e uma edição afiada, cada cena é construída pra criar conexão real entre marca e audiência. Não é só mostrar, é provocar desejo, gerar identificação e, se tudo der certo, levar à ação. Seja pra campanhas, vídeos institucionais ou conteúdo pra redes sociais, o foco é capturar a atenção nos primeiros segundos, antes que o dedo do espectador decida deslizar pra longe. Usamos técnicas de neuromarketing, psicologia visual e aquele toque mágico que faz sua mensagem ficar grudada na cabeça de quem assiste. Em resumo: é mais do que fazer vídeo bonito. É criar impacto. E fazer parecer fácil, mesmo sendo um caos nos bastidores.",
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
      description: "Criamos estratégias e conteúdos que realmente funcionam nas redes sociais, nada de tendências vazias ou estética exagerada só pra parecer “cool”. Aqui o foco é em resultado: trabalhamos com dados, analisamos métricas e produzimos conteúdo com propósito, pensado pra conectar sua marca com o público certo. Não se trata só de postar bonito, mas de ter consistência, relevância e impacto. Cada publicação tem um objetivo claro, fortalecer sua presença digital, engajar de forma autêntica e fazer sua marca crescer de verdade. Em resumo: menos modinha, mais estratégia.",
      images: [imagesConceito.socialMedia]
    }
  },
]);

const toggleTopic = (topic: Topic) => {
  topic.expanded = !topic.expanded;
};
</script>

<template>
  <q-page class="home-page"
    style="background: radial-gradient(50% 50% at 50% 50%, #242424 0%, #000 100%); position: relative; min-height: 100vh; display: flex; justify-content: center; overflow: hidden;">
    <div class="main-container" style="width: 100%; max-width: 1200px; margin: 0 auto; position: relative;">

      <div style="position: relative;">
        <div class="main-title" style="position: relative; z-index: 1; text-align: center; line-height: 0.8;">
          <p class="gt-sm" style="font-family: BebasNeue; font-size: 300px;
             background: linear-gradient(90deg, #00C2FF80 0%, #AF00FF80 100%);
             -webkit-background-clip: text; 
             background-clip: text;
             color: transparent;
             margin: 0;
             padding: 0;
             display: inline-block;">
            {{ marketingTitle }}
          </p>
          <p class="lt-md" style="font-family: BebasNeue; font-size: 150px;
             background: linear-gradient(90deg, #00C2FF80 0%, #AF00FF80 100%);
             -webkit-background-clip: text; 
             background-clip: text;
             color: transparent;
             margin: 0;
             padding: 0;
             display: inline-block;">
            {{ marketingTitle }}
          </p>
        </div>

        <div class="marketing-area lt-md"
          style="display: flex; flex-direction: column; width: 100%; margin: 40px auto 0; position: relative; z-index: 3;">
          <div class="marketing-left"
            style="width: 100%; display: flex; flex-direction: column; align-items: center; margin-bottom: 30px;">
            <p class="marketing-text"
              style="font-family: DidactGothic; font-size: 18px; margin: 0; width: 100%; text-align: center;">
              {{ marketingText }}
            </p>
            <q-btn class="marketing-btn" label="Abra uma oportunidade"
              style="width: 252px; height: 46px; font-size: 18px; margin-top: 30px;"></q-btn>
          </div>
          <div class="marketing-right" style="width: 100%; display: flex; justify-content: center;">
            <p class="marketing-quote"
              style="font-family: DidactGothic; font-size: 18px; text-align: center; width: 100%; max-width: 300px;">
              {{ secondMktText }}
            </p>
          </div>
        </div>

        <div class="main-image-container lt-md"
          style="position: relative; width: 100%; z-index: 2; text-align: center; margin: 40px 0;">
          <img :src="imagesConceito.mainImage" alt="" style="max-height: 500px; width: 100%; object-fit: contain;">
        </div>

        <div class="text-image-container lt-md" style="border-radius: 15px; width: 100%; height: auto; padding: 20px; margin: 40px auto; 
              display: flex; justify-content: center; 
              background: linear-gradient(90deg, #AE00FF47 0%, #65009347 21.15%, #B617FF47 58.17%, #69009947 89.42%)">
          <p class="text-image"
            style="color: var(--q-secondary); font-family: Inter; font-size: 18px; font-weight: 600; text-align: center;">
            {{ textImage }}
          </p>
        </div>

        <div class="gt-sm">
          <div class="main-image-container"
            style="position: absolute; top: 0; left: 0; width: 100%; z-index: 2; text-align: center; margin-top: -230px;">
            <img :src="imagesConceito.mainImage" alt=""
              style="max-height: 854px; object-fit: contain; transform: translateY(30%);">
          </div>
        </div>

        <div class="marketing-area gt-sm"
          style="display: flex; justify-content: space-between; width: 100%; max-width: 1050px; margin: 17px auto 0; position: relative; z-index: 3;">
          <div class="column marketing-left"
            style="width: 45%; display: flex; flex-direction: column; align-items: flex-start;">
            <p class="marketing-text" style="font-family: DidactGothic; font-size: 20px; margin: 0; width: 351px;">
              {{ marketingText }}
            </p>
            <q-btn class="marketing-btn" label="Abra uma oportunidade"
              style="width: 252px; height: 46px; font-size: 20px; text-transform: none; border-radius: 200px; margin-top: 63px; border: 0.5px solid #B20CFF; background: rgba(178, 12, 255, 0.10);"></q-btn>
          </div>
          <div class="marketing-right" style="width: 45%; display: flex; justify-content: flex-end;">
            <p class="marketing-quote"
              style="font-family: DidactGothic; font-size: 20px; font-weight: 400; line-height: normal; margin: 0; width: 236px;">
              {{ secondMktText }}
            </p>
          </div>
        </div>

        <div class="text-image-container gt-sm"
          style="border-radius: 15px; width: 1045px; height: 62px; z-index: 2; margin: 236px auto 0px; position: relative; align-items: flex-end; display: flex; justify-content: center; background: linear-gradient(90deg, #AE00FF47 0%, #65009347 21.15%, #B617FF47 58.17%, #69009947 89.42%)">
          <p class="text-image"
            style="color: var(--q-secondary); text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); font-family: Inter; font-size: 25px; font-weight: 600; line-height: normal;">
            {{ textImage }}
          </p>
        </div>
      </div>

      <div class="images-portfolio q-mt-xl" style="width: 100%; margin-left: auto; margin-right: auto;">
        <div v-for="(group, index) in projectGroups" :key="index"
          :style="{ 'flex-direction': $q.screen.lt.md ? 'column' : 'row' }"
          style="display: flex; gap: 20px; margin-bottom: 20px;">
          <div v-for="project in group" :key="project.bg" :style="{ 'width': $q.screen.lt.md ? '100%' : '50%' }"
            style="position: relative;">
            <img :src="project.bg" alt="" style="width: 100%; height: auto; object-fit: cover; border-radius: 8px;">
            <img :src="project.logo" alt=""
              style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); max-height: 70%; max-width: 70%;">
          </div>
        </div>
      </div>

      <div class="main-portfolio q-my-xl" style="width: 100%; margin: 0 auto; padding: 50px;">
        <div class="portfolio-area-title">
          <p style="color: #FFF; font-family: 'BebasNeue'; font-style: normal; font-weight: 400; line-height: 1.2;"
            :style="{ 'font-size': $q.screen.lt.md ? '36px' : '96.748px' }">
            O QUE NÓS
          </p>
          <p style="color: #FFF; font-family: 'BebasNeue'; font-style: normal; font-weight: 400; margin: 0; background: var(--Degrade-principal, linear-gradient(263deg, #00C2FF 5.03%, #6F01A1 97.89%)); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
            :style="{
              'font-size': $q.screen.lt.md ? '96.748px' : '300px',
              'line-height': $q.screen.lt.md ? '0.9' : '0.8',
              'margin-top': $q.screen.lt.md ? '-20px' : '-30px'
            }">
            FAZEMOS
          </p>
        </div>

        <div v-for="topic in topics" :key="topic.id"
          style="border-bottom: 1px solid rgba(255, 255, 255, 0.1); margin-bottom: 15px;">
          <div @click="toggleTopic(topic)"
            style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; padding: 15px 0;">
            <div style="display: flex; align-items: center;">
              <span style="color: #B20CFF; font-family: 'BebasNeue'; margin-right: 10px;"
                :style="{ 'font-size': $q.screen.lt.md ? '14px' : '24px' }">
                ({{ topic.id.toString().padStart(2, '0') }})
              </span>
              <h3 style="color: #FFF; font-family: 'Inter'; margin: 0;"
                :style="{ 'font-size': $q.screen.lt.md ? '16px' : '24px' }">
                {{ topic.title }}
              </h3>
            </div>
            <span style="color: #FFF; transition: transform 0.3s;" :style="{
              'font-size': $q.screen.lt.md ? '16px' : '24px',
              transform: topic.expanded ? 'rotate(180deg)' : 'rotate(0deg)'
            }">
              ▼
            </span>
          </div>

          <div v-if="topic.expanded" style="padding: 15px 0 30px; display: flex; flex-direction: column; gap: 20px;">
            <div style="width: 100%;">
              <p style="color: #FFF; font-family: 'Inter'; line-height: 1.6; margin-bottom: 20px;"
                :style="{ 'font-size': $q.screen.lt.md ? '14px' : '18px' }">
                {{ topic.content.description }}
              </p>
            </div>
            <div style="width: 100%; display: flex; flex-wrap: wrap; gap: 15px; align-items: stretch;"
              :style="{ 'flex-direction': $q.screen.lt.md ? 'column' : 'row' }">
              <div v-for="(img, idx) in topic.content.images" :key="idx"
                style="flex: 1; display: flex; justify-content: center; align-items: center; overflow: hidden; border-radius: 8px; min-width: 200px;">
                <img :src="img" :style="{
                  'max-height': $q.screen.lt.md ? '250px' : '439px',
                  'width': $q.screen.lt.md ? '100%' : 'auto'
                }" style="object-fit: contain;">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="products-area"
        style="width: 100%; max-width: 1200px; margin: 0 auto; padding: 50px 0; display: flex; align-items: flex-start;">
        <div style="flex: 0 0 auto; width: 400px;">
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
            white-space: pre-line;">
            {{ productsTitle }}
          </p>
        </div>

        <div style="flex: 1; color: #FFF; font-family: 'Inter'; position: relative;">
          <div style="position: relative; margin-bottom: 40px;">
            <div style="position: absolute; top: 0; left: 0; z-index: 2; width: 100%;">
              <p
                style="font-family: BebasNeue; font-size: 54px; line-height: normal; margin-bottom: 10px;  color: var(--q-secondary)">
                {{ consultoriaTitle }}</p>
              <p
                style="font-family: DidactGothic; font-size: 24px; line-height: normal; margin-bottom: 20px; padding: 10px; border-radius: 8px; color: var(--q-primary); position: relative; padding-left: 40px;">
                <span
                  style="position: absolute; left: 15px; top: 50%; transform: translateY(-50%); width: 15px; height: 5px; background-color: #00C2FF;"></span>
                {{ consultoriaText.replace('- ', '') }}
              </p>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
              <img :src="imagesConceito.imageTabuleiro"
                style="width: 100%; border-radius: 8px; z-index: 1; margin-top: -130px;">
            </div>
          </div>

          <div style="position: relative; margin-top: -220px;">
            <div style="position: absolute; top: 0; left: 0; z-index: 2; width: 100%;">
              <p
                style="font-size: 24px; font-weight: 600; margin-bottom: 10px;  padding: 10px; border-radius: 8px; color: var(--q-secondary)">
                {{ mentoriaTitle }}</p>
              <p
                style="font-family: DidactGothic; font-size: 24px; line-height: normal; margin-bottom: 20px; padding: 10px; border-radius: 8px; color: var(--q-primary); position: relative; padding-left: 40px;">
                <span
                  style="position: absolute; left: 15px; top: 30%; transform: translateY(-50%); width: 15px; height: 5px; background-color: #00C2FF;"></span>
                {{ mentoriaText.replace('- ', '') }}
              </p>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
              <img :src="imagesConceito.imageLampadas"
                style="width: 100%; border-radius: 8px; z-index: 1; margin-top: 50px;">
            </div>
          </div>
        </div>
      </div>

      <div class="content-area" style="width: 100%; max-width: 1200px; margin: 100px auto; padding: 0 20px;">
        <div class="content-title" style="text-align: left; margin-bottom: 60px;">
          <p
            style="color: #F2D6FF; font-family: 'BebasNeue'; font-size: 54px; font-weight: 400; line-height: normal; margin: 0; text-transform: uppercase;">
            {{ contentTitle.split('\n')[0] }}
          </p>
          <p
            style="font-family: 'BebasNeue'; font-size: 249.164px; line-height: normal; background: linear-gradient(90deg, rgba(0, 194, 255, 0.50) 0%, rgba(175, 0, 255, 0.50) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 0; margin-top: -30px; text-transform: uppercase;">
            {{ contentTitle.split('\n')[1] }}
          </p>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 40px;">
          <div class="content-image" style="flex: 0 0 auto;">
            <img :src="imagesConceito.imageConteudo" alt="" style="margin-top: -340px; margin-left: -220px;">
          </div>
          <div class="content-area-texts" style="flex: 1;">
            <p class="content-text" style=" width: 593px; margin-top: -50px; margin-left: -260px;"> {{ contentFirstText
            }} </p>
            <p class="content-text" style="width: 602px; margin-left: -200px; margin-top: 47px;"> {{ contentSecondText
              }} </p>
            <p class="content-text" style="margin-left: -50px; margin-top: 61px;"> {{ contentThirdText }} </p>
            <p class="content-text" style="margin-left: -120px; margin-top: 50px;"> {{ contentFourthText }} </p>
          </div>
        </div>
      </div>

      <div class="discover-area"
        style="width: 100%; max-width: 1200px; margin: 100px auto; text-align: center; position: relative; min-height: 800px;">
        <div class="discover-background"
          style=" position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; overflow: hidden; border-radius: 15px;  ">
          <img :src="imagesConceito.bgDiscover" alt="multidão" style=" width: 100%; height: 100%; object-fit: cover; ">
        </div>

        <div style="position: relative; z-index: 1; padding: 80px 20px;">
          <div class="discover-title" style="margin-bottom: 60px;">
            <p
              style="color: #D3AAE7; font-family: 'BebasNeue'; font-size: 96px;  font-weight: 400;  line-height: normal; letter-spacing: 48px; margin: 0; text-transform: uppercase;">
              {{ discoverTitle.split('\n')[0] }}
            </p>
            <p
              style="font-family: 'BebasNeue';  font-size: 300px;  font-weight: 400; line-height: normal; background: linear-gradient(263deg, #00C2FF 5.03%, #6F01A1 97.89%); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 0; margin-top: -30px; text-transform: uppercase;">
              {{ discoverTitle.split('\n')[1] }}
            </p>
          </div>
          <div class="discover-texts"
            style="color: #C7C7C7; font-family: 'DidactGothic'; font-size: 32px; font-weight: 400; line-height: normal; max-width: 800px; margin: 0 auto;">
            <p style="margin-bottom: 30px;">{{ discovertTextOne }}</p>
            <p style="margin-bottom: 30px;">{{ discoverTextTwo }}</p>
            <p>{{ discoverTextThree }}</p>
          </div>
          <div>
            <q-btn label="ENTRAR EM CONTATO"
              style="width: 466px; height: 70px; border-radius: 100px; border: 3px solid var(--Degrade-principal, #00C2FF); color: var(--q-white); background: linear-gradient(86deg, rgba(178, 12, 255, 0.25) 24.06%, rgba(67, 0, 97, 0.25) 80.45%);" />
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
</style>