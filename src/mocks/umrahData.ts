import { UmrahInfoResponse } from "@/types/umrah";

export const mockUmrahData: UmrahInfoResponse = {
  data: [
    {
      id: 1,
      title: "Preparation",
      icon: "fa-solid fa-suitcase",
      submenus: [
        {
          id: 101,
          title: "Before Departure",
          contents: [
            {
              id: 1001,
              title: "Required Documents",
              content: [
                {
                  type: "heading",
                  level: 2,
                  children: [
                    {
                      text: "Essential Documents for Umrah",
                      type: "text",
                      bold: true
                    }
                  ]
                },
                {
                  type: "paragraph",
                  children: [
                    {
                      text: "Before embarking on your spiritual journey to perform Umrah, it's essential to ensure you have all the necessary documents in order.",
                      type: "text"
                    }
                  ]
                },
                {
                  type: "list",
                  format: "unordered",
                  children: [
                    { text: "Valid Passport with at least 6 months validity", type: "text" },
                    { text: "Umrah Visa issued by Saudi Arabian authorities", type: "text" },
                    { text: "Travel Insurance with medical coverage", type: "text" },
                    { text: "Vaccination certificates (Meningitis ACWY, COVID-19)", type: "text" },
                    { text: "Return flight tickets", type: "text" }
                  ]
                },
                {
                  type: "paragraph",
                  children: [
                    {
                      text: "Make sure to have multiple copies of all documents and store digital versions as backups.",
                      type: "text",
                      italic: true
                    }
                  ]
                }
              ],
              coverImage: {
                id: 1,
                title: "Umrah Documents",
                description: "Essential documents for Umrah",
                alternativeText: "Passport and travel documents",
                file: {
                  id: 1,
                  name: "umrah-documents.jpg",
                  url: "https://images.unsplash.com/photo-1568323993144-20d546ba585d",
                  formats: {
                    large: { url: "https://images.unsplash.com/photo-1568323993144-20d546ba585d", width: 1200, height: 800 },
                    medium: { url: "https://images.unsplash.com/photo-1568323993144-20d546ba585d", width: 750, height: 500 },
                    small: { url: "https://images.unsplash.com/photo-1568323993144-20d546ba585d", width: 500, height: 300 },
                    thumbnail: { url: "https://images.unsplash.com/photo-1568323993144-20d546ba585d", width: 250, height: 150 }
                  }
                }
              }
            },
            {
              id: 1002,
              title: "Packing Essentials",
              content: [
                {
                  type: "heading",
                  level: 2,
                  children: [
                    {
                      text: "What to Pack for Umrah",
                      type: "text",
                      bold: true
                    }
                  ]
                },
                {
                  type: "paragraph",
                  children: [
                    {
                      text: "Packing appropriately for Umrah will ensure a comfortable and spiritually fulfilling journey.",
                      type: "text"
                    }
                  ]
                },
                {
                  type: "heading",
                  level: 3,
                  children: [
                    {
                      text: "Clothing",
                      type: "text"
                    }
                  ]
                },
                {
                  type: "list",
                  format: "unordered",
                  children: [
                    { text: "Ihram clothing for men (two white seamless cloths)", type: "text" },
                    { text: "Prayer dresses and hijabs for women", type: "text" },
                    { text: "Comfortable footwear suitable for long walks", type: "text" },
                    { text: "Light clothing for hot weather", type: "text" }
                  ]
                },
                {
                  type: "heading",
                  level: 3,
                  children: [
                    {
                      text: "Toiletries & Medications",
                      type: "text"
                    }
                  ]
                },
                {
                  type: "list",
                  format: "unordered",
                  children: [
                    { text: "Unscented soap and shampoo (for Ihram state)", type: "text" },
                    { text: "Personal medications and prescriptions", type: "text" },
                    { text: "First aid kit with essentials", type: "text" },
                    { text: "Sunscreen and lip balm", type: "text" }
                  ]
                }
              ],
              coverImage: {
                id: 2,
                title: "Umrah Packing",
                description: "Essential items to pack for Umrah",
                alternativeText: "Suitcase with umrah essentials",
                file: {
                  id: 2,
                  name: "umrah-packing.jpg",
                  url: "https://images.unsplash.com/photo-1523381294911-8d3cead13475",
                  formats: {
                    large: { url: "https://images.unsplash.com/photo-1523381294911-8d3cead13475", width: 1200, height: 800 },
                    medium: { url: "https://images.unsplash.com/photo-1523381294911-8d3cead13475", width: 750, height: 500 },
                    small: { url: "https://images.unsplash.com/photo-1523381294911-8d3cead13475", width: 500, height: 300 },
                    thumbnail: { url: "https://images.unsplash.com/photo-1523381294911-8d3cead13475", width: 250, height: 150 }
                  }
                }
              }
            }
          ]
        },
        {
          id: 102,
          title: "Spiritual Preparation",
          contents: [
            {
              id: 1003,
              title: "Mental Readiness",
              content: [
                {
                  type: "heading",
                  level: 2,
                  children: [
                    {
                      text: "Spiritual Preparation for Umrah",
                      type: "text",
                      bold: true
                    }
                  ]
                },
                {
                  type: "paragraph",
                  children: [
                    {
                      text: "Umrah is not just a physical journey but a deeply spiritual one. Preparing your heart and mind is just as important as organizing your travel logistics.",
                      type: "text"
                    }
                  ]
                },
                {
                  type: "paragraph",
                  children: [
                    {
                      text: "Take time before your journey to reflect on the significance of Umrah, to make sincere repentance (Tawbah), and to set your intentions (Niyyah) purely for Allah alone.",
                      type: "text"
                    }
                  ]
                },
                {
                  type: "quote",
                  children: [
                    {
                      text: "The reward of deeds depends upon the intentions and every person will get the reward according to what he has intended.",
                      type: "text",
                      italic: true
                    }
                  ]
                }
              ],
              coverImage: {
                id: 3,
                title: "Spiritual Preparation",
                description: "Preparing spiritually for Umrah",
                alternativeText: "Person praying and reflecting",
                file: {
                  id: 3,
                  name: "spiritual-preparation.jpg",
                  url: "https://images.unsplash.com/photo-1552423307-95957732e221",
                  formats: {
                    large: { url: "https://images.unsplash.com/photo-1552423307-95957732e221", width: 1200, height: 800 },
                    medium: { url: "https://images.unsplash.com/photo-1552423307-95957732e221", width: 750, height: 500 },
                    small: { url: "https://images.unsplash.com/photo-1552423307-95957732e221", width: 500, height: 300 },
                    thumbnail: { url: "https://images.unsplash.com/photo-1552423307-95957732e221", width: 250, height: 150 }
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
      title: "Rituals",
      icon: "fa-solid fa-kaaba",
      submenus: [
        {
          id: 201,
          title: "Makkah Rituals",
          contents: [
            {
              id: 2001,
              title: "Tawaf",
              content: [
                {
                  type: "heading",
                  level: 2,
                  children: [
                    {
                      text: "How to Perform Tawaf",
                      type: "text",
                      bold: true
                    }
                  ]
                },
                {
                  type: "paragraph",
                  children: [
                    {
                      text: "Tawaf is the ritual of circumambulating the Kaaba seven times in a counterclockwise direction. It is an essential rite of Umrah and begins at the Black Stone (al-Hajar al-Aswad).",
                      type: "text"
                    }
                  ]
                },
                {
                  type: "heading",
                  level: 3,
                  children: [
                    {
                      text: "Steps of Tawaf",
                      type: "text"
                    }
                  ]
                },
                {
                  type: "list",
                  format: "ordered",
                  children: [
                    { text: "Begin at the Black Stone, facing it directly", type: "text" },
                    { text: "Make the intention for Tawaf", type: "text" },
                    { text: "Men should do Idtiba (exposing right shoulder) for Tawaf al-Qudum", type: "text" },
                    { text: "Walk around the Kaaba seven times in a counterclockwise direction", type: "text" },
                    { text: "Recite prayers and supplications during Tawaf", type: "text" },
                    { text: "After completion, offer two rakaats of prayer at Maqam Ibrahim", type: "text" },
                    { text: "Drink Zamzam water", type: "text" }
                  ]
                }
              ],
              coverImage: {
                id: 4,
                title: "Tawaf Ritual",
                description: "Muslims performing Tawaf around the Kaaba",
                alternativeText: "Pilgrims circumambulating the Kaaba",
                file: {
                  id: 4,
                  name: "tawaf.jpg",
                  url: "https://images.unsplash.com/photo-1591121213541-28a3f215919f",
                  formats: {
                    large: { url: "https://images.unsplash.com/photo-1591121213541-28a3f215919f", width: 1200, height: 800 },
                    medium: { url: "https://images.unsplash.com/photo-1591121213541-28a3f215919f", width: 750, height: 500 },
                    small: { url: "https://images.unsplash.com/photo-1591121213541-28a3f215919f", width: 500, height: 300 },
                    thumbnail: { url: "https://images.unsplash.com/photo-1591121213541-28a3f215919f", width: 250, height: 150 }
                  }
                }
              }
            },
            {
              id: 2002,
              title: "Sa'i",
              content: [
                {
                  type: "heading",
                  level: 2,
                  children: [
                    {
                      text: "How to Perform Sa'i",
                      type: "text",
                      bold: true
                    }
                  ]
                },
                {
                  type: "paragraph",
                  children: [
                    {
                      text: "Sa'i is the ritual walking between the hills of Safa and Marwah, commemorating Hajar's search for water for her son Ismail.",
                      type: "text"
                    }
                  ]
                },
                {
                  type: "paragraph",
                  children: [
                    {
                      text: "This ritual is performed seven times, starting from Safa and ending at Marwah, covering a distance of approximately 450 meters each way.",
                      type: "text"
                    }
                  ]
                },
                {
                  type: "heading",
                  level: 3,
                  children: [
                    {
                      text: "Steps of Sa'i",
                      type: "text"
                    }
                  ]
                },
                {
                  type: "list",
                  format: "ordered",
                  children: [
                    { text: "Begin at Safa, facing the Kaaba", type: "text" },
                    { text: "Recite the appropriate dua", type: "text" },
                    { text: "Walk to Marwah at a normal pace (men should jog lightly in the marked green-lit area)", type: "text" },
                    { text: "Upon reaching Marwah, face the Kaaba and recite supplications", type: "text" },
                    { text: "Return to Safa and repeat until seven legs are completed", type: "text" }
                  ]
                }
              ],
              coverImage: {
                id: 5,
                title: "Sa'i Ritual",
                description: "Muslims performing Sa'i between Safa and Marwah",
                alternativeText: "Pilgrims walking between Safa and Marwah",
                file: {
                  id: 5,
                  name: "sai.jpg",
                  url: "https://images.unsplash.com/photo-1588855198508-ec2996088700",
                  formats: {
                    large: { url: "https://images.unsplash.com/photo-1588855198508-ec2996088700", width: 1200, height: 800 },
                    medium: { url: "https://images.unsplash.com/photo-1588855198508-ec2996088700", width: 750, height: 500 },
                    small: { url: "https://images.unsplash.com/photo-1588855198508-ec2996088700", width: 500, height: 300 },
                    thumbnail: { url: "https://images.unsplash.com/photo-1588855198508-ec2996088700", width: 250, height: 150 }
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
      title: "Accommodation",
      icon: "fa-solid fa-hotel",
      submenus: [
        {
          id: 301,
          title: "Hotels in Makkah",
          contents: [
            {
              id: 3001,
              title: "Haram Area Hotels",
              content: [
                {
                  type: "heading",
                  level: 2,
                  children: [
                    {
                      text: "Best Hotels Near Masjid Al-Haram",
                      type: "text",
                      bold: true
                    }
                  ]
                },
                {
                  type: "paragraph",
                  children: [
                    {
                      text: "Staying close to Masjid Al-Haram provides convenience for performing prayers and rituals. Here are some recommended hotels in the vicinity of the Holy Mosque.",
                      type: "text"
                    }
                  ]
                },
                {
                  type: "heading",
                  level: 3,
                  children: [
                    {
                      text: "Luxury Options",
                      type: "text"
                    }
                  ]
                },
                {
                  type: "list",
                  format: "unordered",
                  children: [
                    { text: "Makkah Clock Royal Tower", type: "text", bold: true },
                    { text: "Raffles Makkah Palace", type: "text", bold: true },
                    { text: "Conrad Makkah", type: "text", bold: true }
                  ]
                },
                {
                  type: "heading",
                  level: 3,
                  children: [
                    {
                      text: "Mid-Range Options",
                      type: "text"
                    }
                  ]
                },
                {
                  type: "list",
                  format: "unordered",
                  children: [
                    { text: "Hilton Makkah Convention Hotel", type: "text" },
                    { text: "Makkah Millennium Hotel", type: "text" },
                    { text: "Swissotel Makkah", type: "text" }
                  ]
                }
              ],
              coverImage: {
                id: 6,
                title: "Makkah Hotels",
                description: "Hotels near Masjid Al-Haram",
                alternativeText: "View of hotels surrounding the Grand Mosque",
                file: {
                  id: 6,
                  name: "makkah-hotels.jpg",
                  url: "https://images.unsplash.com/photo-1610553556003-9b2ae8ef1d8e",
                  formats: {
                    large: { url: "https://images.unsplash.com/photo-1610553556003-9b2ae8ef1d8e", width: 1200, height: 800 },
                    medium: { url: "https://images.unsplash.com/photo-1610553556003-9b2ae8ef1d8e", width: 750, height: 500 },
                    small: { url: "https://images.unsplash.com/photo-1610553556003-9b2ae8ef1d8e", width: 500, height: 300 },
                    thumbnail: { url: "https://images.unsplash.com/photo-1610553556003-9b2ae8ef1d8e", width: 250, height: 150 }
                  }
                }
              }
            }
          ]
        },
        {
          id: 302,
          title: "Hotels in Madinah",
          contents: [
            {
              id: 3002,
              title: "Masjid Nabawi Area Hotels",
              content: [
                {
                  type: "heading",
                  level: 2,
                  children: [
                    {
                      text: "Best Hotels Near Masjid Al-Nabawi",
                      type: "text",
                      bold: true
                    }
                  ]
                },
                {
                  type: "paragraph",
                  children: [
                    {
                      text: "When visiting Madinah, staying close to the Prophet's Mosque (Masjid Al-Nabawi) allows easy access for prayers and ziyarah.",
                      type: "text"
                    }
                  ]
                },
                {
                  type: "heading",
                  level: 3,
                  children: [
                    {
                      text: "Recommended Hotels",
                      type: "text"
                    }
                  ]
                },
                {
                  type: "list",
                  format: "unordered",
                  children: [
                    { text: "The Oberoi Madina", type: "text" },
                    { text: "Dar Al Taqwa Hotel", type: "text" },
                    { text: "Pullman Zamzam Madina", type: "text" },
                    { text: "Anwar Al Madinah Mövenpick Hotel", type: "text" }
                  ]
                },
                {
                  type: "paragraph",
                  children: [
                    {
                      text: "Book well in advance as hotels fill up quickly, especially during peak seasons like Ramadan and Hajj.",
                      type: "text",
                      italic: true
                    }
                  ]
                }
              ],
              coverImage: {
                id: 7,
                title: "Madinah Hotels",
                description: "Hotels near Masjid Al-Nabawi",
                alternativeText: "View of hotels near the Prophet's Mosque",
                file: {
                  id: 7,
                  name: "madinah-hotels.jpg",
                  url: "https://images.unsplash.com/photo-1591604129939-f1efa6fff695",
                  formats: {
                    large: { url: "https://images.unsplash.com/photo-1591604129939-f1efa6fff695", width: 1200, height: 800 },
                    medium: { url: "https://images.unsplash.com/photo-1591604129939-f1efa6fff695", width: 750, height: 500 },
                    small: { url: "https://images.unsplash.com/photo-1591604129939-f1efa6fff695", width: 500, height: 300 },
                    thumbnail: { url: "https://images.unsplash.com/photo-1591604129939-f1efa6fff695", width: 250, height: 150 }
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