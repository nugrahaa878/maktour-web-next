import { HajjInfoResponse } from "@/types/hajj";

export const mockHajjData: HajjInfoResponse = {
  data: [
    {
      id: 1,
      title: "Hajj Essentials",
      icon: "fa-solid fa-kaaba",
      submenus: [
        {
          id: 101,
          title: "Pillars of Hajj",
          contents: [
            {
              id: 1001,
              title: "Ihram",
              content: [
                {
                  type: "heading",
                  level: 2,
                  children: [
                    {
                      text: "The Sacred State of Ihram",
                      type: "text",
                      bold: true
                    }
                  ]
                },
                {
                  type: "paragraph",
                  children: [
                    {
                      text: "Ihram is the sacred state that Muslims enter before performing the rites of Hajj and Umrah. It involves a spiritual and physical preparation that symbolizes purity and devotion to Allah.",
                      type: "text"
                    }
                  ]
                },
                {
                  type: "heading",
                  level: 3,
                  children: [
                    {
                      text: "Ihram Requirements",
                      type: "text"
                    }
                  ]
                },
                {
                  type: "list",
                  format: "unordered",
                  children: [
                    { text: "Wearing the proper Ihram garments (two white seamless cloths for men)", type: "text" },
                    { text: "Pronouncing the intention (niyyah) to perform Hajj", type: "text" },
                    { text: "Reciting the Talbiyah", type: "text" },
                    { text: "Abstaining from prohibited actions during the state of Ihram", type: "text" }
                  ]
                },
                {
                  type: "paragraph",
                  children: [
                    {
                      text: "The state of Ihram begins at designated stations called Miqat, which vary depending on the direction from which pilgrims approach Makkah.",
                      type: "text"
                    }
                  ]
                }
              ],
              coverImage: {
                id: 1,
                title: "Ihram Clothing",
                description: "Pilgrims in the state of Ihram",
                alternativeText: "Muslims wearing Ihram garments",
                file: {
                  id: 1,
                  name: "ihram.jpg",
                  url: "https://images.unsplash.com/photo-1519817650390-64a93db51149",
                  formats: {
                    large: { url: "https://images.unsplash.com/photo-1519817650390-64a93db51149", width: 1200, height: 800 },
                    medium: { url: "https://images.unsplash.com/photo-1519817650390-64a93db51149", width: 750, height: 500 },
                    small: { url: "https://images.unsplash.com/photo-1519817650390-64a93db51149", width: 500, height: 300 },
                    thumbnail: { url: "https://images.unsplash.com/photo-1519817650390-64a93db51149", width: 250, height: 150 }
                  }
                }
              }
            },
            {
              id: 1002,
              title: "Wuquf (Standing at Arafat)",
              content: [
                {
                  type: "heading",
                  level: 2,
                  children: [
                    {
                      text: "Standing at Arafat - The Most Important Rite of Hajj",
                      type: "text",
                      bold: true
                    }
                  ]
                },
                {
                  type: "paragraph",
                  children: [
                    {
                      text: "Wuquf (standing) at Arafat is considered the most essential ritual of Hajj. It takes place on the 9th day of Dhul-Hijjah, from midday until sunset.",
                      type: "text"
                    }
                  ]
                },
                {
                  type: "quote",
                  children: [
                    {
                      text: "Hajj is Arafat. Whoever catches Arafat has caught the Hajj.",
                      type: "text",
                      italic: true
                    }
                  ]
                },
                {
                  type: "paragraph",
                  children: [
                    {
                      text: "During this time, pilgrims stand in prayer and supplication, seeking Allah's forgiveness and mercy. This day commemorates Prophet Muhammad's (PBUH) farewell sermon.",
                      type: "text"
                    }
                  ]
                },
                {
                  type: "heading",
                  level: 3,
                  children: [
                    {
                      text: "Recommended Acts at Arafat",
                      type: "text"
                    }
                  ]
                },
                {
                  type: "list",
                  format: "unordered",
                  children: [
                    { text: "Making sincere repentance and dua (supplication)", type: "text" },
                    { text: "Reciting the Quran", type: "text" },
                    { text: "Glorifying Allah (dhikr)", type: "text" },
                    { text: "Pondering on one's life and seeking forgiveness", type: "text" }
                  ]
                }
              ],
              coverImage: {
                id: 2,
                title: "Mount Arafat",
                description: "Pilgrims at Mount Arafat during Hajj",
                alternativeText: "Pilgrims gathering at Arafat",
                file: {
                  id: 2,
                  name: "arafat.jpg",
                  url: "https://images.unsplash.com/photo-1629801102902-13f562a3ed9e",
                  formats: {
                    large: { url: "https://images.unsplash.com/photo-1629801102902-13f562a3ed9e", width: 1200, height: 800 },
                    medium: { url: "https://images.unsplash.com/photo-1629801102902-13f562a3ed9e", width: 750, height: 500 },
                    small: { url: "https://images.unsplash.com/photo-1629801102902-13f562a3ed9e", width: 500, height: 300 },
                    thumbnail: { url: "https://images.unsplash.com/photo-1629801102902-13f562a3ed9e", width: 250, height: 150 }
                  }
                }
              }
            }
          ]
        },
        {
          id: 102,
          title: "Tawaf & Sa'i",
          contents: [
            {
              id: 1003,
              title: "Tawaf Al-Ifadah",
              content: [
                {
                  type: "heading",
                  level: 2,
                  children: [
                    {
                      text: "Tawaf Al-Ifadah (Circumambulation of the Kaaba)",
                      type: "text",
                      bold: true
                    }
                  ]
                },
                {
                  type: "paragraph",
                  children: [
                    {
                      text: "Tawaf Al-Ifadah is one of the essential pillars of Hajj that involves circling the Kaaba seven times in a counterclockwise direction. It is performed after returning from Arafat and Muzdalifah on the 10th of Dhul-Hijjah.",
                      type: "text"
                    }
                  ]
                },
                {
                  type: "heading",
                  level: 3,
                  children: [
                    {
                      text: "Steps of Tawaf Al-Ifadah",
                      type: "text"
                    }
                  ]
                },
                {
                  type: "list",
                  format: "ordered",
                  children: [
                    { text: "Begin at the Black Stone corner of the Kaaba", type: "text" },
                    { text: "Circle the Kaaba seven times", type: "text" },
                    { text: "Make supplications during circumambulation", type: "text" },
                    { text: "Pray two rak'ahs behind Maqam Ibrahim after completion", type: "text" },
                    { text: "Drink Zamzam water", type: "text" }
                  ]
                },
                {
                  type: "paragraph",
                  children: [
                    {
                      text: "After performing Tawaf Al-Ifadah and Sa'i if needed, most of the restrictions of Ihram are lifted for the pilgrim.",
                      type: "text"
                    }
                  ]
                }
              ],
              coverImage: {
                id: 3,
                title: "Tawaf Al-Ifadah",
                description: "Pilgrims performing Tawaf around the Kaaba",
                alternativeText: "Muslims circumambulating the Kaaba during Hajj",
                file: {
                  id: 3,
                  name: "tawaf-ifadah.jpg",
                  url: "https://images.unsplash.com/photo-1591121213541-28a3f215919f",
                  formats: {
                    large: { url: "https://images.unsplash.com/photo-1591121213541-28a3f215919f", width: 1200, height: 800 },
                    medium: { url: "https://images.unsplash.com/photo-1591121213541-28a3f215919f", width: 750, height: 500 },
                    small: { url: "https://images.unsplash.com/photo-1591121213541-28a3f215919f", width: 500, height: 300 },
                    thumbnail: { url: "https://images.unsplash.com/photo-1591121213541-28a3f215919f", width: 250, height: 150 }
                  }
                }
              }
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Practical Information",
      icon: "fa-solid fa-info-circle",
      submenus: [
        {
          id: 201,
          title: "Health & Safety",
          contents: [
            {
              id: 2001,
              title: "Health Preparations",
              content: [
                {
                  type: "heading",
                  level: 2,
                  children: [
                    {
                      text: "Health Precautions for Hajj",
                      type: "text",
                      bold: true
                    }
                  ]
                },
                {
                  type: "paragraph",
                  children: [
                    {
                      text: "Hajj involves physical exertion in often extreme weather conditions. Being well-prepared health-wise is crucial for a fulfilling pilgrimage experience.",
                      type: "text"
                    }
                  ]
                },
                {
                  type: "heading",
                  level: 3,
                  children: [
                    {
                      text: "Recommended Vaccinations",
                      type: "text"
                    }
                  ]
                },
                {
                  type: "list",
                  format: "unordered",
                  children: [
                    { text: "Meningococcal vaccine (mandatory)", type: "text", bold: true },
                    { text: "Seasonal influenza vaccine", type: "text" },
                    { text: "Pneumococcal vaccine (for elderly and those with chronic illnesses)", type: "text" },
                    { text: "COVID-19 vaccine (as per current requirements)", type: "text" }
                  ]
                },
                {
                  type: "heading",
                  level: 3,
                  children: [
                    {
                      text: "Medical Checklist",
                      type: "text"
                    }
                  ]
                },
                {
                  type: "list",
                  format: "unordered",
                  children: [
                    { text: "Get a comprehensive medical check-up before travel", type: "text" },
                    { text: "Pack all necessary medications in their original labeled containers", type: "text" },
                    { text: "Carry a first-aid kit with basics like painkillers, bandages, etc.", type: "text" },
                    { text: "Bring sun protection items (hats, sunscreen, umbrellas)", type: "text" },
                    { text: "Maintain proper hydration with water and isotonic drinks", type: "text" }
                  ]
                }
              ],
              coverImage: {
                id: 4,
                title: "Health Preparations",
                description: "Medical preparations for Hajj",
                alternativeText: "Vaccines and medical supplies for pilgrimage",
                file: {
                  id: 4,
                  name: "health-prep.jpg",
                  url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
                  formats: {
                    large: { url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528", width: 1200, height: 800 },
                    medium: { url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528", width: 750, height: 500 },
                    small: { url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528", width: 500, height: 300 },
                    thumbnail: { url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528", width: 250, height: 150 }
                  }
                }
              }
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Spiritual Journey",
      icon: "fa-solid fa-pray",
      submenus: [
        {
          id: 301,
          title: "Spiritual Preparation",
          contents: [
            {
              id: 3001,
              title: "Inner Dimensions of Hajj",
              content: [
                {
                  type: "heading",
                  level: 2,
                  children: [
                    {
                      text: "The Spiritual Essence of Hajj",
                      type: "text",
                      bold: true
                    }
                  ]
                },
                {
                  type: "paragraph",
                  children: [
                    {
                      text: "Beyond the physical rituals, Hajj is a profound spiritual journey that transforms the heart and soul of a believer. Understanding the inner dimensions of Hajj enhances the experience and impact of this sacred pilgrimage.",
                      type: "text"
                    }
                  ]
                },
                {
                  type: "quote",
                  children: [
                    {
                      text: "For Hajj are the months well known. If anyone undertakes Hajj therein, let there be no obscenity, nor wickedness, nor wrangling in the Hajj. And whatever good you do, Allah knows it. And take provision, but indeed, the best provision is fear of Allah. And fear Me, O you of understanding. (Quran 2:197)",
                      type: "text",
                      italic: true
                    }
                  ]
                },
                {
                  type: "heading",
                  level: 3,
                  children: [
                    {
                      text: "Spiritual Preparations Before Hajj",
                      type: "text"
                    }
                  ]
                },
                {
                  type: "list",
                  format: "unordered",
                  children: [
                    { text: "Seek forgiveness and repent for past sins", type: "text" },
                    { text: "Settle outstanding debts and resolve conflicts", type: "text" },
                    { text: "Study the rituals and their spiritual significance", type: "text" },
                    { text: "Make sincere intentions focused on pleasing Allah alone", type: "text" },
                    { text: "Increase in acts of worship leading up to Hajj", type: "text" }
                  ]
                }
              ],
              coverImage: {
                id: 5,
                title: "Spiritual Dimensions",
                description: "The spiritual journey of Hajj",
                alternativeText: "Muslim in prayer and contemplation",
                file: {
                  id: 5,
                  name: "spiritual-hajj.jpg",
                  url: "https://plus.unsplash.com/premium_photo-1661901768187-7f218aa951a0?q=80&w=3142&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  formats: {
                    large: { url: "https://plus.unsplash.com/premium_photo-1661901768187-7f218aa951a0?q=80&w=3142&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", width: 1200, height: 800 },
                    medium: { url: "https://plus.unsplash.com/premium_photo-1661901768187-7f218aa951a0?q=80&w=3142&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", width: 750, height: 500 },
                    small: { url: "https://plus.unsplash.com/premium_photo-1661901768187-7f218aa951a0?q=80&w=3142&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", width: 500, height: 300 },
                    thumbnail: { url: "https://plus.unsplash.com/premium_photo-1661901768187-7f218aa951a0?q=80&w=3142&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", width: 250, height: 150 }
                  }
                }
              }
            }
          ]
        }
      ]
    }
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 10,
      pageCount: 1,
      total: 3
    }
  }
}; 