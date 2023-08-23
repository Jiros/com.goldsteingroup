import React from 'react'
import "./CompanySection.css"
import { StaticImage } from "gatsby-plugin-image"


function CompanySection() {
    return (
    <div>
        <section class="splash">
        <StaticImage
                    src="../../images/goldstein-holdings-colour-bar.png"
                    loading="eager"
                    width={750}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    style={{ marginBottom: `var(--space-3)` }}
                />
        </section>
       <section class="container">
       <div class="card ag">
            <a href="https://www.allengoldstein.com/" target="_blank" rel="noreferrer">
                <div>
                <StaticImage
                    src="../../images/allen-goldstein.png"
                    loading="eager"
                    width={250}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    style={{ marginBottom: `var(--space-3)` }}
                />
                </div>
                <p>Allen Goldstein was formed by a group of property specialists and offers a truly in-house comprehensive property consultancy service. From specific building details, yield, and contract terms to other technical letting and sales aspects of residential properties, Allen Goldstein has expertise in all areas. </p>
            </a>
        </div>
        <div class="card sh">
            <a href="https://www.sherlockhomesuk.com/" target="_blank" rel="noreferrer">
                <div>
                <StaticImage
                    src="../../images/sherlock-homes.png"
                    loading="eager"
                    width={275}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    style={{ marginBottom: `var(--space-3)` }}
                />
                </div>
                <p>Sherlock Homes provides luxury, fully furnished apartments in the heart of London. With decades of experience and a focus on customer service Sherlock Homes is the ideal base for trips to the Capital. </p>
            </a>
        </div>
        <div class="card cc">
            <a href="https://cleanandclear.uk.com/" target="_blank" rel="noreferrer">
                <div>
                <StaticImage
                    src="../../images/clean-clear.png"
                    loading="eager"
                    width={345}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    style={{ marginBottom: `var(--space-3)` }}
                />
                </div>
                <p>Clean and Clear is a commercial cleaning company in Central London that provides high quality and reliable commercial cleaning, inventory management, buildings maintenance, end of tenancy cleaning and security & concierge services. </p>
            </a>
        </div>
        <div class="card bs">
            <a href="https://www.bilshaboxingclub.com/" target="_blank" rel="noreferrer">
                <div>
                <StaticImage
                    src="../../images/bil-sha-boxing.png"
                    loading="eager"
                    width={250}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    style={{ marginBottom: `var(--space-3)` }}
                />
                </div>
                <p>The Bil Sha Boxing Club focuses on boxing in its purest form, providing a friendly, high-energy environment with the latest equipment and modern facilities for boxers at all levels and ages. </p>
            </a>
        </div>
        <div class="card up">
            <a href="https://www.undisputedsports.promo/" target="_blank" rel="noreferrer">
                <div>
                <StaticImage
                    src="../../images/undisputed.png"
                    loading="eager"
                    width={350}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    style={{ marginBottom: `var(--space-3)` }}
                />
                </div>
                <p>Undisputed is a London-based boxing promotion created by Bilat Shaista, an experienced former boxer, entrepreneur, and owner of the Bil Sha Boxing Club. With a focus on safety, trust, and integrity, Undisputed strives to transform the current white collar boxing landscape and give boxers the chance to show off their talent with confidence.</p>
            </a>
        </div>
        <div class="card cb">
            <a href="https://cloudeberry.com/" target="_blank" rel="noreferrer">
                <div>
                <StaticImage
                    src="../../images/cloudeberry.png"
                    loading="eager"
                    width={250}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    style={{ marginBottom: `var(--space-3)` }}
                />
                </div>
                <p>CLOUDeBERRY is a responsive, client-focused Managed Service Provider (MSP) that provides end to end IT system support and maintenance. CLOUDeBERRY builds long term relationships and provides sustained support to businesses of any size.</p>
            </a>
        </div>
        <div class="card vb">
            <a href="https://vimbi.io" target="_blank" rel="noreferrer">
                <div>
                <StaticImage
                    src="../../images/vimbi.png"
                    loading="eager"
                    width={200}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    style={{ marginBottom: `var(--space-3)` }}
                />
                </div>
                <p>Vimbi is a Cloud and Technology Consultancy firm that offers high quality, cohesive solutions to clients through innovative strategic consultancy and software development. Vimbi's approach is to help organisation's evolve their current technology and processes.</p>
            </a>
        </div>
        <div class="card gl">
            <a href="https://glowlia.com/" target="_blank" rel="noreferrer">
                <div>
                <StaticImage
                    src="../../images/glowlia-white.png"
                    loading="eager"
                    width={180}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    style={{ marginBottom: `var(--space-3)` }}
                />
                </div>
                <p>Glowlia skincare products are for women who practise self-love and care and contain organic, evidence based ingredients. Glowlia offer a deliberately minimal selection of nourishing products that focus on anti-aging, pigmentation, hydration and achieving a glowing complexion.</p>
            </a>
        </div>
        <div class="card og">
            <a href="https://www.odysseymalegrooming.com/" target="_blank" rel="noreferrer">
                <div>
                <StaticImage
                    src="../../images/odyssey.png"
                    loading="eager"
                    width={250}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    style={{ marginBottom: `var(--space-3)` }}
                />
                </div>
                <p>Odyssey Male Grooming is a London-based creative hub for barbering, colour and cuts. The salon is an artistic hair-focused space that strives to work with the individual and their unique hair needs.</p>
            </a>
        </div>
       </section>
    </div>
    )
    }

export default CompanySection