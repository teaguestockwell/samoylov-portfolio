// Works
import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Keyboard, Mousewheel } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/free-mode'
import 'swiper/scss/keyboard'
import { useNav } from '@/hooks/useNav'
import { Container, Typography } from '@/components'
import { WorksCard } from './components'
import * as SC from '@/styles/common'
import { media } from '@/styles/media'
import data from '@/data/index.json'
import {
  previewMountain,
  previewPorten,
  previewCalc,
  previewKrypto,
  previewWeatherInsight,
  IconJS,
  IconTS,
  IconReact,
  IconAxios,
  IconPug,
  IconCSS,
  IconSASS,
  IconTailwind,
} from '@/assets'

const worksData = data.works

const techIcons = [
  { icon: <IconPug />, title: 'Pug', color: 'brown' },
  { icon: <IconCSS />, title: 'CSS', color: 'royal' },
  { icon: <IconSASS />, title: 'SASS/SCSS', color: 'pink' },
  { icon: <IconJS />, title: 'JS', color: 'yellow' },
  { icon: <IconTS />, title: 'TS', color: 'blue' },
  { icon: <IconReact />, title: 'React', color: 'sky' },
  { icon: <IconAxios />, title: 'Axios', color: 'indigo' },
  { icon: <IconTailwind />, title: 'Tailwind CSS', color: 'cyan' },
]

const worksAssets = [
  {
    imgSrc: previewMountain,
    stack: [techIcons[0], techIcons[2], techIcons[3]],
  },
  {
    imgSrc: previewPorten,
    stack: [techIcons[0], techIcons[2], techIcons[3]],
  },
  {
    imgSrc: previewCalc,
    stack: [techIcons[5], techIcons[1]],
  },
  {
    imgSrc: previewKrypto,
    stack: [techIcons[5], techIcons[6], techIcons[7]],
  },
  {
    imgSrc: previewWeatherInsight,
    stack: [techIcons[5], techIcons[4], techIcons[6], techIcons[7]],
  },
]

const worksContent = worksAssets
  .map((item, idx) => ({
    ...item,
    ...worksData.content[idx],
  }))
  .reverse()

const Works = () => {
  const worksRef = useNav('Works')

  gsap.registerPlugin(ScrollTrigger)

  useLayoutEffect(() => {
    gsap.to('#worksSection', {
      scrollTrigger: {
        trigger: '#worksSection',
        start: 'bottom 33%',
        end: 'bottom top',
        scrub: true,
      },
      opacity: 0,
    })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#worksSection',
          start: 'top 70%',
          end: 'top 33%',
        },
      })
      .from('#worksHeading', {
        yPercent: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
      })
      .from('.swiper-slide article', {
        xPercent: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 1.25,
      })

    ScrollTrigger.refresh()
  }, [])

  return (
    <SC.Section id="worksSection" ref={worksRef}>
      <Container>
        <Typography variant="h3" id="worksHeading">
          {worksData.heading}
        </Typography>
      </Container>
      <div
        id="worksContent"
        css={`
          margin: -4rem;
        `}
      >
        <Swiper
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={24}
          freeMode={true}
          keyboard={{
            enabled: true,
          }}
          mousewheel={{
            forceToAxis: true,
          }}
          modules={[FreeMode, Keyboard, Mousewheel]}
          breakpoints={{
            // when screen width is >= 576px
            576: {
              centeredSlides: false,
            },
          }}
          css={`
            padding: 4rem;
          `}
        >
          {worksContent.map((workItem, idx) => (
            <SwiperSlide
              key={idx}
              css={`
                max-width: 18rem;
                height: auto;
                cursor: grab;

                &:first-child {
                  margin-left: calc(((100% - var(--max-width)) / 2) + 1rem);
                }

                &:last-child {
                  margin-right: calc(((100% - var(--max-width)) / 2) + 1rem);
                }

                ${media.sm} {
                  max-width: 20rem;
                }

                ${media.lg} {
                  max-width: 39.5rem;
                }
              `}
            >
              <WorksCard data={workItem} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SC.Section>
  )
}

export default Works
