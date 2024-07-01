import Head from "next/head";
import Image from "next/image";

import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import sm from "../public/sm.png";
import aero from "../public/aero.svg";
import taero from "../public/taero.svg";
import t from "../public/t.svg";
import star from "../public/star.svg";
import rect from "../public/rect.svg";
import reco from "../public/reco.svg";
import paint from "../public/paint.svg";
import letter from "../public/letter.svg";
import humb from "../public/humb.svg";
import cross from "../public/cross.svg";
import bulb from "../public/bulb.svg";
import quote from "../public/quote.svg";
import sunflow from "../public/sunflow.png";
import stone from "../public/stone.png";
import man from "../public/man.png";
import t2 from "../public/t2.png";
import t3 from "../public/t3.png";
import worman from "../public/worman.png";
import masco from "../public/masco.png";
import brush from "../public/brush.svg";
const inter = Inter({ subsets: ["latin"] });
import Link from 'next/link';


import Header from '../components/header';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Masco - AI Image Editing</title>
        <meta name="description" content="Unleash your creativity with AI image editing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       
        <nav className={`${styles.navbar} ${styles.Header}`}>
          <div className={styles.logo}> <Image
              src={masco}
              alt="Hero Image"
             
            /></div>
          <div className={styles.links}>
            <a href="#">Home</a>
            <a href="#">Feature</a>
            <a href="#">About</a>
            <a href="#">Testimonial</a>
            <a href="#">FAQ</a>
            
          </div>
          <div className={styles.links}>
          <a href="#">Login</a>
            <a href="#" className={styles.signup}>Sign up free</a>
          </div>
        </nav>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1>Unleash your creativity with AI image editing</h1>
            <p>Masco is a free photo editing & design tool with AI power. It covers various free online photo editing tools, so you can crop photos, resize photos, add text to images, create photo collages, and easily create graphic designs.</p>
            <button className={styles.editButton}>Edit A Photo</button>
          </div>
          <div className={styles.heroImage}>
            <Image
              src={sm}
              alt="Hero Image"
              width={400}
              height={500}
            />
          </div>
        </section>
        <section className={styles.features}>
          <h2>All features that make editing easy like magic</h2>
          <div className={styles.featureCards}>
            <div className={styles.card}>
              <Image src={bulb} alt="Enhanced Efficiency" width={50} height={50} />
              <h3>Enhanced Efficiency</h3>  
              <p>AI image editing tools significantly speed up the work & editing process. They can automate repetitive tasks.</p>
              <Image src={aero} alt="Enhanced Efficiency" width={32} height={32} />

            </div>
            <div className={styles.card}>
              <Image src={humb} alt="Professional-Level Results" width={50} height={50} />
              <h3>Professional-Level Results</h3>
              <p>AI algorithms are designed to analyze and understand images, allowing them to make intelligent adjustments.</p>
              <Image src={aero} alt="Professional-Level Results" width={32} height={32} />
            </div>
          </div>
          <div className={styles.featureCards}>
            <div className={styles.card}>
              <Image src={letter} alt="Advanced Editing Capabilities" width={50} height={50} />
              <h3>Advanced Editing Capabilities</h3>
              <p>AI image editing tools offer a wide range of advanced editing capabilities & stunning visual image creations</p>
              <Image src={aero} alt="Advanced Editing Capabilities" width={32} height={32} />

            </div>
            <div className={styles.card}>
              <Image src={rect} alt="Creative Possibilities" width={50} height={50} />
              <h3>Creative Possibilities</h3>
              <p> This tools open up new creative possibilities and push the boundaries of their creativity by offering features</p>
              <Image src={aero} alt="Creative Possibilities" width={32} height={32} />

            </div>
          </div>
        </section>
        <section className={styles.creativeTwist}>
        <div className={styles.creativeImage}>
            <Image
              src={sunflow}
              alt="Creative Twist"
              width={450}
              height={550}
            />
          </div>
          <div className={styles.creativeText}>
            <h2>Give your designs a creative twist with it</h2>
            <p>AI-powered algorithms can analyze images & make intelligent adjustments to improve the quality of your design and you can automatically enhance colors, adjust brightness and contrast, reduce noise, and sharpen details.</p>
            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <Image src={t} alt="Turn text into imaginative images" width={30} height={30} />
                <span>Turn text into imaginative images with AI</span>
              </div>
              <div className={styles.featureItem}>
                <Image src={taero} alt="Efficiently remove background from images" width={30} height={30} />
                <span>Efficiently remove background from images</span>
              </div>
              <div className={styles.featureItem}>
                <Image src={paint} alt="Efficiently remove background from images" width={30} height={30} />
                <span>You can apply an artistic style to the image</span>
              </div>
            </div>
          </div>         
        </section>
        <section className={styles.features}>
        <h1>Our handy guide to your all-in-one Photo Editor</h1>
        <p>Unless you've watched countless tutorials online or studied photography, you might not know how to edit a photo to make it look its best efficiency.</p>
        <div className={styles.cont}>
          {/* <Image src={worman} alt="Photo editor" width={1000} height={500} /> */}
          <div class={styles.playbutton}>
                   <a href="https://youtu.be/3nQNiWdeH2Q?si=gfbjM06qUROG3IHk" ><Image src="https://masco-html.netlify.app/assets/img/icons/icon-purple-video-btn.svg" width={70}
              height={70}
            /></a>
                </div>
                <Image src={worman} alt="Photo editor" width={1000} height={500} />
        </div>
          
        </section>
        <section className={styles.creativeTwist}>
          <div className={styles.creativeText}>
            <h2>Create stunning photos from simple</h2>
            <p>Our AI image editing tools provide a wide range of creative filters, effects, & combinations to add unique styles and visual enhancements to images. AI algorithms suggest creative enhancements based on photo content.</p>
            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <Image src={brush} alt="Turn text into imaginative images" width={30} height={30} />
                <span>Enhance photo textures with AI photo editor</span>
              </div>
              <div className={styles.featureItem}>
                <Image src={reco} alt="Efficiently remove background from images" width={30} height={30} />
                <span>Many photo collage templates for inspiration</span>
              </div>
              <div className={styles.featureItem}>
                <Image src={cross} alt="Efficiently remove background from images" width={30} height={30} />
                <span>Add a unique mood to your photos effortlessly</span>
              </div>
            </div>
          </div>
          <div className={styles.creativeImage2}>
            <Image
              src={stone}
              alt="Creative Twist"
              width={450}
              height={550}
            />
          </div>
        </section>
        <section class={styles.marq}>
            <div class={styles.marqueecontainer} >
                <div class={styles.marquee}>
                    <h2> <Image src="https://masco-html.netlify.app/assets/img/icons/icon-rum-swizzle-dial-star.svg" alt="" width={40}
              height={50} /> THE BEST AI TOOL TO GET YOUR PERFECT PHOTO <Image src="https://masco-html.netlify.app/assets/img/icons/icon-rum-swizzle-dial-star.svg" alt="" width={40}
              height={40} /> THE BEST AI TOOL TO GET YOUR PERFECT PHOTO <Image src="https://masco-html.netlify.app/assets/img/icons/icon-rum-swizzle-dial-star.svg" alt="" width={40}
              height={50}/> THE BEST AI TOOL TO GET YOUR PERFECT PHOTO <Image src="https://masco-html.netlify.app/assets/img/icons/icon-rum-swizzle-dial-star.svg" alt="" width={40}
              height={50}/></h2>
                </div>
            </div>
        </section>
        <section className={styles.features}>
        <h1>People enjoy using our AI photo editing tool</h1>
        <p>Our AI photo editor is a game changer for customers. UI designers, amateur photographers and Instagrammers can feel free to edit a photo with it.</p>
        
        </section>
        <section className={`${styles.testimonials} ${styles.mainsec}`}>
          <div className={styles.testimonial}>
            <div className={styles.quote}><Image src={quote} alt="Photo editor" width={50} height={50}/></div>
            <p>Masco image edit is a great tool for those people who are passionate about AI photo editing. Saved me a lot of time on remove objects in Photo. I love this tool ❤️</p>
            <div className={styles.author}>
              <Image src={man} alt="Dominika Smith" className={styles.authorphoto}/>
              <div>
                <p className={styles.authornam}>Dominika Smith</p>
                <p className={styles.authortitle}>Photographer</p>
              </div>
            </div>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.quote}><Image src={quote} alt="Photo editor" width={50} height={50}/></div>
            <p>I am very impressed! The user interface is very simple to quickly edit my photos. The editing quality is exceptional - my photos look better than ever. Highly recommend 👍</p>
            <div className={styles.author}>
              <Image src={t2} alt="Adam Jonney" className={styles.authorphoto}/>
              <div>
                <p className={styles.authornam}>Adam Jonney</p>
                <p className={styles.authortitle}>UI Designer</p>
              </div>
            </div>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.quote}><Image src={quote} alt="Photo editor" width={50} height={50}/></div>
            <p>The background remover is awesome!! It is easy to use and made my photos 100% better. This is the best picture editing software ever!! Easy to use & very Comfortable. 😍</p>
            <div className={styles.author}>
              <Image src={t3} alt="Robert Mack" className={styles.authorphoto} />
              <div>
                <p className={styles.authornam}>Robert Mack</p>
                <p className={styles.authortitle}>Instagrammer</p>
              </div>
            </div>
          </div>
          
        </section>
        <section className={styles.faq}>
          <div className={styles.faqleft}>
            <h1>Have any questions? Feel free to ask us</h1>
            <p>One of the best & easiest AI photo editing tool you can get, if you have any question you can ask us directly. We’re ready to answer all your questions.</p>
            <button className={styles.askbutton}>Ask Your Questions</button>
          </div>
          <div className={styles.faqright}>
            <div className={styles.faqitem}>
              <div className={styles.faqquestion} onClick={() => toggleAccordion(0)}>
                What is AI in photo editing tool?✖️
              </div>
          
                <div className={styles.faqanswer}>
                  Using Artificial Intelligence, these impressive tools are able to detect the subject in your image to enhance it, and remove the background around it, apply photo effects where you want them, and more.
                </div>
              
            </div>
            <div className={styles.faqitem}>
              <div className={styles.faqquestion} onClick={() => toggleAccordion(1)}>
                Can I use this software on my PC?       ➕
              </div>
            
                <div className={styles.faqanswer}>
                  Yes, the software is compatible with both PC and Mac.
                </div>
          
            </div>
            <div className={styles.faqitem}>
              <div className={styles.faqquestion} onClick={() => toggleAccordion(2)}>
                How can I download it?      ➕
              </div>
          
                <div className={styles.faqanswer}>
                  You can download the software from our official website. Just click on the download button and follow the instructions.
                </div>
          
            </div>
            </div>
        </section>
        <section className={styles.features2}>
          <div className={`${styles.heroText1} ${styles.features1}`}>
            <h1>Create perfect photos with AI photo editing</h1>
            <p> Build perfect compositions and apply great effects to get unique designs in no time with our AI image editor. Create impactful art effortlessly.</p>
            <a href="#"><button className={styles.editButton}>Get Started Now</button></a>
          </div>
          </section>
      </main>
    </div>
  );
}