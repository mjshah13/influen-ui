"use client";

import CustomDrawer from "@/Components/CustomDrawer";
import { Col, Drawer, Rate, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import { useMemo, useState } from "react";
import styles from "./page.module.scss";

const Home = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const Logo = () => {
    return (
      <>
        <img src="./affluent-logo-black.svg" alt="arrow" />
      </>
    );
  };
  return (
    <div className={styles.page_wrapper}>
      <Drawer title={<Logo />} placement="left" onClose={onClose} open={open}>
        <div className={styles.list_wrapper}>
          <ul>
            <li>About</li>
            <li>Latest Case Study</li>
            <button>Apply Now</button>
          </ul>
        </div>
      </Drawer>
      <div className={styles.hero}>
        <div className={styles.hero_bg}>
          <div className={styles.hero_slant_container}>
            <div className={styles.nav_container}>
              <img
                src="./logo.svg"
                alt="A descriptive alt text"
                width={148}
                height={60}
              />
              <div className={styles.icon_wrap} onClick={showDrawer}>
                <img src="./navbar.svg" />
              </div>
            </div>
            <div className={styles.hero_content_left}>
              <p>Results Obsessed</p>
              <h1>Elite Marketing For Brands With Big Ideas</h1>
              <h3>
                We're an omni-channel e-commerce marketing agency obsessed with
                return on investment.
              </h3>
              <div className={styles.chips}>
                <div className={styles.chip}>
                  <div className={styles.image_wrapper}>
                    <Image
                      src="./meta.svg" // Replace with the actual path to your image
                      alt="meta"
                      width={20} // Specify the desired width of the image
                      height={20} // Specify the desired height of the image
                    />
                  </div>
                  <div>
                    <h2>Meta</h2>
                    <p>Business Partner</p>
                  </div>
                </div>
                <div className={styles.chip}>
                  <div className={styles.image_wrapper}>
                    <Image
                      src="./snap.svg" // Replace with the actual path to your image
                      alt="meta"
                      width={20} // Specify the desired width of the image
                      height={20} // Specify the desired height of the image
                    />
                  </div>
                  <div>
                    <h2>Snapchat</h2>
                    <p>Marketing Partner</p>
                  </div>
                </div>
                <div className={styles.chip}>
                  <div className={styles.image_wrapper}>
                    <Image
                      src="./tiktok.svg" // Replace with the actual path to your image
                      alt="meta"
                      width={20} // Specify the desired width of the image
                      height={20} // Specify the desired height of the image
                    />
                  </div>
                  <div>
                    <h2>TikTok</h2>
                    <p>Marketing Partner</p>
                  </div>
                </div>
                <div className={styles.chip}>
                  <div className={styles.image_wrapper}>
                    <Image
                      src="./klaviyo.svg"
                      alt="klaviyo"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <h2>Klaviyo</h2>
                    <p>Gold Partner</p>
                  </div>
                </div>
              </div>
              <button className={styles.main_btn}>
                Start Application{" "}
                <Image
                  src="./arrow_up.svg"
                  alt="arrow"
                  width={12} // Specify the desired width of the image
                  height={12} // Specify the desired height of the image
                />{" "}
              </button>
            </div>

            <div className={styles.hero_slant_vertical}></div>
          </div>

          <div className={styles.container}>
            <div className={styles.w_wave_overlay}>
              <ul>
                <li>About</li>

                <li>Latest Case Study</li>
                <button>Apply Now</button>
              </ul>
            </div>
            <div className={styles.hero_content_right}>
              <div className={styles.video_container}>
                <div className={styles.left_video}>
                  <h2>
                    182%<sup>+</sup>
                  </h2>
                  <div className={styles.video_wrapper}>
                    <video autoPlay muted loop>
                      <source
                        src="//uploads-ssl.webflow.com/62ce930274c3a4dab2cd0127/62ce930274c3a4496ecd0182_Square%20Video%20Agency%20Site-transcode.webm"
                        type="video/webm"
                      />
                    </video>
                    <div className={styles.overlay_icon}>
                      <Image
                        src="./facebook.svg"
                        alt="meta"
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.right_video}>
                  <div className={styles.video_wrapper}>
                    <video autoPlay muted loop>
                      <source
                        src="https://uploads-ssl.webflow.com/62ce930274c3a4dab2cd0127/62ce930274c3a464afcd0183_Portrait%20Video%20Agency%20Site-transcode.webm"
                        type="video/webm"
                      />
                    </video>
                    <div className={styles.overlay_icon}>
                      <Image
                        src="./tiktok.svg"
                        alt="meta"
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.rating_overlay}>
                <Image
                  src="./rating_image.svg"
                  alt="meta"
                  width={240}
                  height={82}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.worked_industry_container_wrapper}>
        <div className={styles.worked_industry_container}>
          <div className={styles.stat_feature_wrapper}>
            <div className={styles.stat_feature}>
              <div className={styles.stat_card}>
                <p>TOTAL ROI</p>
                <h2>
                  $ 74,000,000 <sup>+</sup>
                </h2>
                <small>Return on investment for clients.</small>
                <div className={styles.stat_btn_wrapper}>
                  <button className={styles.transparent_btn}>Apply Now</button>
                  <button className={styles.secondry_btn}>Free Training</button>
                </div>
              </div>
              <div className={styles.stat_feature_body}>
                <p>MORE STATISTICS</p>
                <div className={styles.stat_card_flex}>
                  <div className={styles.stat_card_small}>
                    <h2>
                      $80,000 <sup>+</sup>
                    </h2>
                    <p>Daily Ad Spend</p>
                  </div>
                  <div className={styles.stat_card_small}>
                    <h2>156</h2>
                    <p>Client Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.stat_header}>
            <h2 className={styles.industry_heading}>
              We've Worked With Industry Leading Brands
            </h2>
            <p>
              In recognition of consistently generating exceptional client
              results.{" "}
            </p>
          </div>
          <div className={styles.logos_wrapper}>
            <Row gutter={32}>
              <Col xl={6} lg={12} md={12} sm={24} xs={24}>
                <div className={styles.logo_wrapper}>
                  <img
                    src="../Logos/logo_1.png" // Replace with the actual path to your image
                    alt="logo"
                  />
                </div>
              </Col>
              <Col xl={6} lg={12} md={12} sm={24} xs={24}>
                <div className={styles.logo_wrapper}>
                  <img
                    src="../Logos/logo-2.png" // Replace with the actual path to your image
                    alt="logo"
                  />
                </div>
              </Col>
              <Col xl={6} lg={12} md={12} sm={24} xs={24}>
                <div className={styles.logo_wrapper}>
                  <img
                    src="../Logos/logo-3.png" // Replace with the actual path to your image
                    alt="logo"
                  />
                </div>
              </Col>
              <Col xl={6} lg={12} md={12} sm={24} xs={24}>
                <div className={styles.logo_wrapper}>
                  <img
                    src="../Logos/logo-4.png" // Replace with the actual path to your image
                    alt="logo"
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className={styles.logos_wrapper}>
            <Row gutter={32}>
              <Col xl={6} lg={12} md={12} sm={24} xs={24}>
                <div className={styles.logo_wrapper}>
                  <img
                    src="../Logos/logo-5.png" // Replace with the actual path to your image
                    alt="logo"
                  />
                </div>
              </Col>
              <Col xl={6} lg={12} md={12} sm={24} xs={24}>
                <div className={styles.logo_wrapper}>
                  <img
                    src="../Logos/logo-6.png" // Replace with the actual path to your image
                    alt="logo"
                  />
                </div>
              </Col>
              <Col xl={6} lg={12} md={12} sm={24} xs={24}>
                <div className={styles.logo_wrapper}>
                  <img
                    src="../Logos/logo-7.png" // Replace with the actual path to your image
                    alt="logo"
                  />
                </div>
              </Col>
              <Col xl={6} lg={12} md={12} sm={24} xs={24}>
                <div className={styles.logo_wrapper}>
                  <img
                    src="../Logos/logo-8.png" // Replace with the actual path to your image
                    alt="logo"
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className={styles.logos_wrapper}>
            <Row gutter={32}>
              <Col xl={6} lg={12} md={12} sm={24} xs={24}>
                <div className={styles.logo_wrapper}>
                  <img
                    src="../Logos/logo-9.png" // Replace with the actual path to your image
                    alt="logo"
                  />
                </div>
              </Col>
              <Col xl={6} lg={12} md={12} sm={24} xs={24}>
                <div className={styles.logo_wrapper}>
                  <img
                    src="../Logos/logo-10.png" // Replace with the actual path to your image
                    alt="logo"
                  />
                </div>
              </Col>
              <Col xl={6} lg={12} md={12} sm={24} xs={24}>
                <div className={styles.logo_wrapper}>
                  <img
                    src="../Logos/logo-11.png" // Replace with the actual path to your image
                    alt="logo"
                  />
                </div>
              </Col>
              <Col xl={6} lg={12} md={12} sm={24} xs={24}>
                <div className={styles.logo_wrapper}>
                  <img
                    src="../Logos/logo-12.png" // Replace with the actual path to your image
                    alt="logo"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className={styles.hero_slant_horizontal}></div>
      </div>
      <div className={styles.over_services_wrapper}>
        <div className={styles.service_container}>
          <Row gutter={32}>
            <Col xl={10} lg={10} md={24} sm={24} xs={24}>
              <p className={styles.small_heading}> OUR SERVICES</p>
              <h1 className={styles.large_heading}>
                Increase Your Reach, Explode Your Sales.
              </h1>
              <p className={styles.large_content}>
                Our tailored approach to brand success means better clicks,
                higher quality traffic, scroll-stopping ads, better ROAS and
                ultimately... more profit.
              </p>
              <button className={styles.main_btn}>
                Start Application{" "}
                <Image
                  src="./arrow_up.svg"
                  alt="arrow"
                  width={12} // Specify the desired width of the image
                  height={12} // Specify the desired height of the image
                />{" "}
              </button>
            </Col>
            <Col xl={14} lg={14} md={24} sm={24} xs={24}>
              <div className={styles.right_seriver_header}>
                <div className={styles.cricle}>
                  <Image
                    src="./Alpha_logo.svg"
                    alt="arrow"
                    width={30} // Specify the desired width of the image
                    height={30} // Specify the desired height of the image
                  />{" "}
                </div>
                <div>
                  <Rate allowHalf defaultValue={5} />
                </div>
                <Link href="/">view case studies</Link>
              </div>
              <div className={styles.serivces_platform}>
                <Row gutter={8}>
                  <Col xl={13} lg={13} md={13} sm={24} xs={24}>
                    <div className={styles.paid_adevertising}>
                      <h2>Paid Advertising</h2>
                      <div className={styles.lists}>
                        <ul>
                          <li>
                            {" "}
                            <Image
                              src="./tick.svg"
                              alt="arrow"
                              width={12} // Specify the desired width of the image
                              height={12} // Specify the desired height of the image
                            />{" "}
                            Social Ads
                          </li>
                          <li>
                            {" "}
                            <Image
                              src="./tick.svg"
                              alt="arrow"
                              width={12} // Specify the desired width of the image
                              height={12} // Specify the desired height of the image
                            />{" "}
                            Video Editing
                          </li>
                          <li>
                            {" "}
                            <Image
                              src="./tick.svg"
                              alt="arrow"
                              width={12} // Specify the desired width of the image
                              height={12} // Specify the desired height of the image
                            />{" "}
                            Strategy Build
                          </li>
                        </ul>
                        <ul>
                          <li>
                            {" "}
                            <Image
                              src="./tick.svg"
                              alt="arrow"
                              width={12} // Specify the desired width of the image
                              height={12} // Specify the desired height of the image
                            />{" "}
                            Copywriting
                          </li>
                          <li>
                            {" "}
                            <Image
                              src="./tick.svg"
                              alt="arrow"
                              width={12} // Specify the desired width of the image
                              height={12} // Specify the desired height of the image
                            />{" "}
                            UGC Content
                          </li>
                          <li>
                            {" "}
                            <Image
                              src="./tick.svg"
                              alt="arrow"
                              width={12} // Specify the desired width of the image
                              height={12} // Specify the desired height of the image
                            />{" "}
                            Graphic Design
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                  <Col xl={11} lg={11} md={11} sm={24} xs={24}>
                    <Row gutter={[8, 8]}>
                      <Col span={8}>
                        <div className={styles.platform_wrapper}>
                          <Image
                            src="./facebook.svg" // Replace with the actual path to your image
                            alt="meta"
                            width={20} // Specify the desired width of the image
                            height={20} // Specify the desired height of the image
                          />
                        </div>
                      </Col>
                      <Col span={8}>
                        <div className={styles.platform_wrapper}>
                          <Image
                            src="./insta.svg" // Replace with the actual path to your image
                            alt="meta"
                            width={20} // Specify the desired width of the image
                            height={20} // Specify the desired height of the image
                          />
                        </div>
                      </Col>
                      <Col span={8}>
                        <div className={styles.platform_wrapper}>
                          <Image
                            src="./snap.svg" // Replace with the actual path to your image
                            alt="meta"
                            width={20} // Specify the desired width of the image
                            height={20} // Specify the desired height of the image
                          />
                        </div>
                      </Col>
                      <Col span={8}>
                        <div className={styles.platform_wrapper}>
                          <Image
                            src="./tiktok.svg" // Replace with the actual path to your image
                            alt="meta"
                            width={20} // Specify the desired width of the image
                            height={20} // Specify the desired height of the image
                          />
                        </div>
                      </Col>
                      <Col span={8}>
                        <div className={styles.platform_wrapper}>
                          <Image
                            src="./google.svg" // Replace with the actual path to your image
                            alt="meta"
                            width={20} // Specify the desired width of the image
                            height={20} // Specify the desired height of the image
                          />
                        </div>
                      </Col>
                      <Col span={8}>
                        <div className={styles.platform_wrapper}>
                          <Image
                            src="./youtube.svg" // Replace with the actual path to your image
                            alt="meta"
                            width={20} // Specify the desired width of the image
                            height={20} // Specify the desired height of the image
                          />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                    <div className={styles.email_marketing}>
                      <div className={styles.platform_plus_card}>
                        <Image
                          src="./plus.svg"
                          alt="arrow"
                          width={20}
                          height={20}
                        />{" "}
                      </div>
                      <h2>Email Marketing</h2>
                      <h1>
                        32% <sup>+</sup>
                      </h1>
                    </div>
                  </Col>
                  <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                    <div className={styles.email_marketing}>
                      <div className={styles.platform_plus_card}>
                        <Image
                          src="./plus.svg"
                          alt="arrow"
                          width={20}
                          height={20}
                        />{" "}
                      </div>
                      <h2>Conversion Rate Optimisation</h2>
                      <h1>
                        40% <sup>+</sup>
                      </h1>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles.our_startegy}>
        <div className={styles.hero_slant_horizontal}></div>
        <div className={styles.strategy_container}>
          <div className={styles.header}>
            <p>OUR STRATEGY</p>
            <h2>
              How We Scale Brands To 7- <br />
              Figure Months
            </h2>
          </div>
          <div className={styles.startegy_video_wrapper}>
            <iframe
              class="embedly-embed"
              src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Ffast.wistia.net%2Fembed%2Fiframe%2Fb8s2efqtiw&amp;display_name=Wistia%2C+Inc.&amp;url=https%3A%2F%2Fjordanplatten.wistia.com%2Fmedias%2Fb8s2efqtiw&amp;image=https%3A%2F%2Fembed-ssl.wistia.com%2Fdeliveries%2Fadb5700969284f6b72cfc6922950c691.jpg%3Fimage_crop_resized%3D960x540&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=wistia"
              scrolling="no"
              allowfullscreen=""
              title="Affluent Agency Front Page"
            ></iframe>
          </div>
        </div>
      </div>
      <div className={styles.priority_wrapper}>
        <div className={styles.priority_container}>
          <div className={styles.header}>
            <p>THE PRIORITY</p>
            <h2>
              Our Clients Come First, <br /> Always.
            </h2>
            <h3>We take pride in the moment our clients become our friends.</h3>
            <button className={styles.main_btn}>
              Start Application{" "}
              <Image
                src="./arrow_up.svg"
                alt="arrow"
                width={12} // Specify the desired width of the image
                height={12} // Specify the desired height of the image
              />{" "}
            </button>
          </div>
          <div className={styles.message_wrapper}>
            <div className={styles.top_message_wrapper}>
              <div className={styles.message}>
                <p>
                  Start Application Holy shit what am I going to do with all
                  these orders! - Brody Mongelli
                </p>
                <img
                  src="./chatbox_right.svg"
                  className={styles.left_chatbox}
                />
              </div>
              <div className={styles.message1}>
                <p>
                  Holy shit what am I going to do with all these orders! - Brody
                  Mongelli Our ROI has been beyond anything we imagined before
                  working with the team at Affluent Agency - Ben Fordham
                </p>
                <img
                  src="./chatbox_left.svg"
                  className={styles.right_chatbox}
                />
              </div>
            </div>
            <div className={styles.bottom_message_wrapper}>
              <div className={styles.message}>
                <p>
                  In terms of sales, I reached 7x return on ad spend and my
                  customer database has increased substantially, I couldn't be
                  happier with the team - Jess Collet
                </p>
                <img
                  src="./chatbox_right.svg"
                  className={styles.left_chatbox}
                />
              </div>
              <div className={styles.message1}>
                <p>
                  Communication is important to us. Tom and the team have always
                  gone above and beyond to ensure our needs are met - Chris
                  Brashni
                </p>
                <img
                  src="./chatbox_left.svg"
                  className={styles.right_chatbox}
                />
              </div>
            </div>
          </div>
          <div className={styles.agency_other}>
            <div className={styles.cont_wrap}>
              <h2>We're The Agency That Other Agencies Learn From</h2>
              <p>
                Through our sister company The Affluent Academy, we've taught
                thousands of other agencies how to generate exceptional results
                for their clients.
              </p>
            </div>
            <div className={styles.btn_wrap}>
              <button className={styles.main_btn}>Start The Academy </button>
            </div>
          </div>
          <div className={styles.footer}>
            <Image
              src="./affluent-logo-black.svg"
              alt="arrow"
              width={160} // Specify the desired width of the image
              height={32} // Specify the desired height of the image
            />{" "}
            <p>
              Omni-channel e-commerce marketing <br /> agency obsessed with ROI.
            </p>
            <button>Let's work together!</button>
            <div className={styles.link_wrapper}>
              <Link href="/">view case studies</Link>
              <Link href="/">view case studies</Link>
              <Link href="/">view case studies</Link>
              <span>&copy; 2022 Affluent.co</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
