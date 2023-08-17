import React from 'react'
import "./CompanySection.css"
import { StaticImage } from "gatsby-plugin-image"


function CompanySection() {
    return (
    <div>
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
                <p>With over 10 years of experience as an independent agency, the Allen Goldstein team boasts extensive local knowledge and truly personal service. Bespoke client interactions and customer satisfaction are at the heart of our process, allowing us to put you first in every deal.</p>
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