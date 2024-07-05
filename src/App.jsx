import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Header from "./Components/Header";
import Jewellerys from "./Pages/Jewellerys";
import Bangles from "./Pages/Bangles";
import Earings from "./Pages/Earings";
import Rings from "./Pages/Rings";
import "./App.css";
import Footer from "./Components/Footer";
import PrivateRoute from "./Components/PrivateRoute";
import Submitfeedback from "./Components/Submitfeedback"
import { UserContextProvider } from "./Components/context/usercontex";
import Card from "./Components/Card";
import Cart from "./Components/Cart"
import productList from"./Pages/ProductList"; 
import ProductsDetail from "./Components/ProductsDetail";
import ProductList from "./Pages/ProductList";
import Dashboard from "./Pages/Dashboard";
import Paymentmethod from "./Components/Paymentmethod";


export const mycontext=createContext("");

const App = () => {
  const products = [
    {
      id: 1,
      title:
        " Made of 24k purity this Rose Coin weighs 1 gm and is minted to perfection using advanced technology.",
      head: "IBA Gold Jewellery",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://navrathan.com/wp-content/uploads/2022/02/Adorned-Gold-Haar-Latest-Gold-Jewellery-Designs-1024x1024.jpg",
      price:"4446",
    },
    {
      id: 2,
      title:
        "A beautiful and versatile necklace band merges with an intricately carved circular pendant, lined with lattice work on one side and a bouquet of tiny flowers on the other. The earrings, inspired by the pendant, add to the style for a complete look.",
      head: "IBA Gold Jewellery",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image: "https://www.lalithaajewellery.com/assets/img/purity.jpg",
      price: "5055",
    },
    {
      id: 3,
      title:
        "This traditional one gram gold plated beaded patta necklace set with jhumki earring is perfect for women and girls.",
      head: "IBA Gold Jewellery",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://i.pinimg.com/474x/53/54/2c/53542c3894e81d85b9cc840aed10b248.jpg",
      price: "4862.00",
    },
    {
      id: 4,
      title:
        " The classic and elegant always keep pace with fashion,which will make a timeless accessory to any jewelry collection. ",
      head: "IBA Gold Jewellery",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://i.pinimg.com/550x/fc/aa/dd/fcaaddff819bc90debe0c50714d11083.jpg",
      price: " 55961.00",
    },
    {
      id: 5,
      title:
        " Celebrate the beauty of tradition with this Necklace Set, featuring intricate temple designs and exquisite craftsmanship.",
      head: "IBA Gold Jewellery",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://www.goldzouq.com/media/product_image/Traditional_gold_necklace_design_for_brides_CJCGN028.jpg",
      price: " 2470",
    },
    {
      id: 6,
      title:
        " Add a touch of charm to your everyday wear with this Necklace,showcasing intricate geometric designs.",
      head: "IBA Gold Jewellery",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Casual Wear",
      karatage: "Karatage:24",
      image:
        "https://www.mithragold.com/product_image/s1200__aHR0cHM6Ly9tZWRpYS5kYXJqZXdlbGxlcnkuaW4vcHJvZHVjdF9pbWFnZXMvczEyMDBfXzE2NzA2NjYwMTE4MzkuanBn/22-kt-gold-antique-necklace.jpg",
      price: "3543",
    },
    {
      id: 7,
      title:
        "  Comtemporary Droplet Pattern Necklace with a Glossy Finish crafted in 24 Karat Yellow Gold.",
      head: "IBA Gold Jewellery",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://www.kushals.com/cdn/shop/files/antique-necklace-ruby-gold-antique-necklace-162749-37331578683548_1024x1024.jpg?v=1705159707",
      price: "2499",
    },
    {
      id: 8,
      title:
        " Floral pattern and textured detailing lends this Necklace a hypnotic beauty. Captivate all the attention and compliments by wearing this piece at your next grand gathering. ",
      head: "IBA Gold Jewellery",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb436f94f/images/hi-res/5115192GGAGAP1_1.jpg?sw=640&sh=640",
      price: "22712",
    },
    {
      id: 9,
      title:
        "  The mesmerising tiny ghunghroos edging the entire necklace emanate delicate chimes in tune with the rapture flowing through you as you commence your momentous journey as a bride.",
      head: "IBA Gold Jewellery",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://www.wamanharipethesons.com/portalrepository/images/product/WHPS288757_0_r.jpg",
      price: "33396",
    },
    {
      id: 10,
      title:
        "  This Necklace is a marvel of lustrous elegance, ideal for elevating traditional attire or adding grandeur to a modern evening dress. ",
      head: "IBA Gold Jewellery",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://www.chidambaramgoldcovering.com/image/cache/catalog/ChidambaramGoldCovering/Harams/hr1613-latest-fashion-party-girls-design-ruby-stone-long-haram-one-gram-for-marriage-online-low-price-7500-1-425x500.jpg",
      price: " 20096",
    },
    {
      id: 11,
      title:
        " Floral pattern and textured detailing lends this Necklace a hypnotic beauty.",
      head: "IBA Gold Jewellery",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://www.wamanharipethesons.com/portalrepository/images/product/WHPS288736_0_r.jpg",
      price: "22715",
    },
    {
      id: 12,
      title:
        "  Leave everyone spellbound by your radiance and beauty, brought to life by this elaborate paisley Necklace.",
      head: "IBA Gold Jewellery",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://d25g9z9s77rn4i.cloudfront.net/uploads/product/194/1659167350_69eaf909b5f89865fa02.jpg",
      price: "21865 ",
    },
    {
      id: 13,
      title:
        "  Owing to Marathi religious & traditional value, we offer exquisite range of latest designs for Indian traditional gold diamond jewellery, maharashtrian wedding.",
      head: "IBA Gold Bangle ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Casual Wear",
      karatage: "Karatage:24",
      image:
        "https://i.pinimg.com/736x/ef/f6/ae/eff6aea3effc9e9e42db83aa687a1971.jpg",
      price: "25490 ",
    },
    {
      id: 14,
      title:
        " Take a step ahead with Jewelsmart! We're here to help you look and feel your best. Our wide selection of One Gram Gold Bangles, and more.",
      head: "IBA Gold Bangle ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Casual Wear",
      karatage: "Karatage:24",
      image:
        "https://i.pinimg.com/736x/78/7c/48/787c48361d498b7dcb35d140bce15c86.jpg",
      price: "26054",
    },
    {
      id: 15,
      title:
        "  Our collections across all the artforms of India are sure to impress you with its variety, quality, and affordability, which will make  you look and feel your best.",
      head: "IBA Gold Bangle ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://www.luxurionworld.com/cdn/shop/products/PJ1B5HI123062818_Golden_Kundan_Bangles.jpg?v=1687948511",
      price: "26672",
    },
    {
      id: 16,
      title:
        " Kushal's Fashion Jewellery Flower Motif Antique Bangle One of the common issues with antique bangles is that you cannot pair them with other accessories easily due to their intricate work details. ",
      head: "IBA Gold Bangle ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://www.kushals.com/cdn/shop/files/antique-bangle-antique-bangle-162025-38615082205340_1024x1024.jpg?v=1717239873",
      price: " 24355 ",
    },
    {
      id:17,
      title:
        "  Perfect for office or casual wear, these refined dotted gold Bangles enhances your look with its polished finish and subtle pattern.",
      head: "IBA Gold Bangle ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://www.chidambaramgoldcovering.com/image/cache/catalog/ChidambaramGoldCovering/bangles/plain-bangles/br1657-latest-slim-gold-forming-bangle-for-ladies-one-gram-gold-jewellery-1-850x1000.jpg",
      price: "25521",
    },
    {
      id:18,
      title:
        " A unique design adds a touch of artistic flair to your wardrobe, an exceptional choice for women who appreciate elegance with an edge.",
      head: "IBA Gold Bangle ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Party Wear",
      karatage: "Karatage:24",
      image:
        "https://www.caratlane.com/blog/wp-content/uploads/2022/08/IMG_2540-1.jpg",
      price: " 12901 ",
    },
    {
      id: 19,
      title:
        " Ideal for both festive gatherings and elegant social functions, this Bangle offer a chic appeal with their detailed texturing and sleek form.",
      head: "IBA Gold Bangle ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Casual Wear",
      karatage: "Karatage:24",
      image:
        "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb130d361/images/hi-res/504045VCR1A02.jpg",
      price: "24355 ",
    },
    {
      id:20,
      title:
        " The sleek array of intricate cuts and designs enhances the beauty of this stunning piece, offering a sophisticated finishing touch.",
      head: "IBA Gold Bangle ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Party Wear",
      karatage: "Karatage:24",
      image:
        "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw47c562b0/images/hi-res/502880VBY1A12_1.jpg",
      price: "24711",
    },
    {
      id:21,
      title:
        " Embrace simplicity and style with these exquisite Minimalist gold  Bangles, offering a subtle touch of glamour to your casual wear, effortlessly enhancing your everyday look with understated luxury.",
      head: "IBA Gold Bangle ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://i.pinimg.com/736x/12/88/b2/1288b2c293fc463e03faefbc2dc28bc8.jpg",
      price: " 17432 ",
    },
    {
      id: 22,
      title:
        " Indulge in comfort with this sleek gold bangle that gracefully adorns your wrists. Its delicate design is perfect for office wear,inspiring your colleagues to seek a similar touch of elegance for themselves.",
      head: "IBA Gold Bangle ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://i.pinimg.com/originals/58/c6/c2/58c6c2dede891915089d1df57ec8ed45.jpg",
      price: "18738",
    },
    {
      id: 23,
      title:
        " 20-gram gold bangle designs are pleasing and alluring and will leave  an impression in your minds! Here are the beautiful gold bangles in 20 grams.",
      head: "IBA Gold Bangle ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://i.pinimg.com/474x/29/fd/49/29fd49208356d6294eb021c741490242.jpg",
      price: "20868 ",
    },
    {
      id: 24,
      title:
        "Be it for daily wear or for that special evening party, add sparkle to your day with these beautiful gold bangles glinting on your wrists!.",
      head: "IBA Gold Bangle ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://5.imimg.com/data5/IU/XY/GLADMIN-40265754/gold-bangles-500x500.jpg",
      price: "22913 ",
    },
    {
      id: 25,
      title:
        "Adorn your everyday elegance with these Jhumkis, where delicate wavy design mirror the joyous ripples of life, while each filigree detail spins tales of timeless elegance.",
      head: "IBA Gold Earring ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://dreamjwell.com/cdn/shop/products/DSC_5670.jpg?v=1674633825",
      price: " 22524 ",
    },
    {
      id: 26,
      title:
        "24K Plain Gold Drop Earrings in floral design for women from our plain gold jewellery collection. Wear these fashionable gold earrings on everyday casual wear, work wear, or party wear.",
      head: "IBA Gold Earring ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://www.kushals.com/cdn/shop/files/antique-earring-ruby-green-gold-antique-earring-151815-38464339148956_1024x1024.jpg?v=1716277406",
      price: " 227",
    },
    {
      id:27,
      title:
        "This pair of gold jhumkas combine the fresh beauty of the lotus, the traditional jhumka and a bold modern design. The simple cut out petal pattern gives the earrings a mesmerising charm.",
      head: "IBA Gold Earring ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image: "https://miyasjewels.com/wp-content/uploads/2022/09/MJ5031-3.webp",
      price: " 991 ",
    },
    {
      id:28,
      title:
        "   Nothing less than an ardent devotional to the romance of France and its wondrous night skies, the Clair de Lune Collection is as lavishly French as could be; quietly stunning, unerringly elegant, ceaselessly captivating.",
      head: "IBA Gold Earring ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Casual Wear",
      karatage: "Karatage:24",
      image:
        "https://i.pinimg.com/736x/1e/4f/b0/1e4fb04fb5312549f6e20f126a3f67a4.jpg",
      price: " 2596",
    },
    {
      id:29,
      title:
        " Perfect for grand festivities, these tiered Jhumkas cascade with elegance, their regal design resonating with traditional opulence.",
      head: "IBA Gold Earring ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://assets.panashindia.com/media/catalog/product/4/0/407jw01-er-3244.jpg",
      price: "1485 ",
    },
    {
      id: 30,
      title:
        "Designed to be the centrepiece at gallery openings or chic gatherings, these Chandelier Earrings with their abstract and cascading design embody artistic flair.",
      head: "IBA Gold Earring ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://www.kattam.in/cdn/shop/files/rose-gold-jhumka-944551_1800x1800.jpg?v=1715326237",
      price: " 3540 ",
    },
    {
      id: 31,
      title:
        "The detailed carvings and hanging beads enhance their traditional appeal, making them an exquisite addition to any ethnic ensemble.",
      head: "IBA Gold Earring ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://d25g9z9s77rn4i.cloudfront.net/uploads/product/729/1660221202_684df2458ec5fc09ae10.jpg",
      price: "1617",
    },
    {
      id:32,
      title:
        " Embrace the enigma of diamonds with this pair of stud earrings. Crafted to accentuate your style, this pair will bring out your tranquil, elegant side.",
      head: "IBA Gold Earring ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf7561a54/images/hi-res/512314SSAAFA00_1.jpg?sw=640&sh=640",
      price: " 2596 ",
    },
    {
      id:33,
      title:
        "  Perfect for a sophisticated dinner, these elegant swirl Stud Earrings showcase a unique design with sparkling real Diamonds.",
      head: "IBA Gold Earring ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://ishalfatima.com/cdn/shop/products/ishal-fatima-gold-hoops-earrings-36433956634874.jpg?v=1643070980",
      price: " 3372 ",
    },
    {
      id:34,
      title:
        " Look perfect on every occasion by pairing your Traditional Wear with these Captivating Floral Gold Stud Earrings. This product comes with a silicon push.",
      head: "IBA Gold Earring ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://d25g9z9s77rn4i.cloudfront.net/uploads/product/824/1659358297_9b961a70a273edf9a738.jpg",
      price: " 2331 ",
    },
    {
      id: 35,
      title:
        " Just Look At It! The Incredible Details It Possesses. The Outstanding Position It Will Give The One Who Wears Them. Somethi Different But Covered In The Colors Of Tradition.",
      head: "IBA Gold Earring ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://d25g9z9s77rn4i.cloudfront.net/uploads/product/106/1659357568_ddf821ee5eda58d30612.jpg",
      price: "3602 ",
    },
    {
      id: 36,
      title:
        " Shimmering Diamond Stud Earrings designed to get you an extra edge",
      head: "IBA Gold Earring ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6c55229e/images/hi-res/503416SFIAGA01.jpg",
      price: "2543 ",
    },
    {
      id: 37,
      title:
        " Celebrate classic elegance with this Finger Ring. Ideal for everyday wear occasions, this Ring makes a statement with its refined craftsmanship.",
      head: "IBA Gold RIngs ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://i.pinimg.com/originals/e7/0d/fd/e70dfd9c27273ff26925c3f382f0fe4c.jpg",
      price: "1148",
    },
    {
      id: 38,
      title:
        "Perfect for an evening dinner, this elegantly crafted Finger Ring boasts a matte finish that exudes timeless charm. Pair it with your favourite formal wear for a look that speaks of understat elegance.",
      head: "IBA Gold RIngs ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://cdn1.jewelxy.com/live/img/business_product/xLIHsxqC6j_20221209205337.jpg",
      price: " 1786",
    },
    {
      id: 39,
      title:
        "   Perfect for an evening dinner, this elegantly crafted Finger Ring  boasts a matte finish that exudes timeless charm.",
      head: "IBA Gold RIngs ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://kinclimg8.bluestone.com/f_jpg,c_scale,w_1024,q_80,b_rgb:f0f0f0/giproduct/BIDG0319R189-POSTER-22778.jpg",
      price: " 3833 ",
    },
    {
      id: 40,
      title:
        " Perfect for contemporary style enthusiasts, this Finger Ring's  geometric pattern and polished finish are ideal for formal and casual events. Pair it with modern outfits for a chic look.",
      head: "IBA Gold RIngs ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://cdnmedia-breeze.vaibhavjewellers.com/media/catalog/product/cache/69e73e668f7bd7d908ce61f8ab11fca4/image/192083eea/22kt-antique-gold-wedding-bridal-ring-610va7-610va7.jpg",
      price: "1380",
    },
    {
      id:41,
      title:
        " Solid and stunning as the man in your life, this ring will make the perfect gift to express your love and commitment.",
      head: "IBA Gold RIngs ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://kinclimg5.bluestone.com/f_jpg,c_scale,w_1024,q_80,b_rgb:f0f0f0/giproduct/BV-R20-POSTER-3789.jpg",
      price: " 1400 ",
    },
    {
      id: 42,
      title:
        "Crescent and paisley motifs make this gold ring an intricate affair. Adorn it on days of grand festivities.",
      head: "IBA Gold RIngs ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://cdn0.weddingwire.in/article/7249/original/1280/jpg/59427-gold-engagement-ring-design-for-couple-caratlane-gold-engagement-ring-design-for-couple-with-leaf-motif.jpeg",
      price: " 1816",
    },
    {
      id:43,
      title:
        "Nothing less than an ardent devotional to the romance of France and its wondrous night skies, the Clair de Lune Collection is as lavishly French as could be; quietly stunning, unerringly elegant, ceaselessly captivating.",
      head: "IBA Gold RIngs ",
      description: "Specifications:",

      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwaac601b9/images/hi-res/51E2J1FBTAC00_1.jpg",
      price: "  1650 ",
    },
    {
      id: 44,
      title:
        "The ring is gold plated and comes with a miligram gold and brass diamond for added luxury. Make a statement with this special piece.",
      head: "IBA Gold RIngs ",
      description: "Specifications:",
      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://i.pinimg.com/236x/d3/c6/6d/d3c66d48a1853e6fd50a37c3de8c5162.jpg",
      price: "  1380 ",
    },
    {
      id: 45,
      title:
        "The ring is gold plated and comes with a miligram gold and brass  diamond for added luxury. Make a statement with this special piece.",
      head: "IBA Gold RIngs ",
      description: "Specifications:",
      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://5.imimg.com/data5/ECOM/Default/2022/3/QV/MN/LT/11885699/rg-023-3-500x500.jpg",
      price: "2563 ",
    },
    {
      id: 46,
      title:
        " Mark the end of whirlwind romances, and the beginning of eternal love, with our beautiful couple rings!",
      head: "IBA Gold RIngs ",
      description: "Specifications:",
      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd5336585/images/hi-res/51E2J1FBBAA00_1.jpg",
      price: "  1816 ",
    },
    {
      id: 47,
      title:
        " Let your panache shine through every time you adorn this ring. Suitable for special occasions as well as everyday use, this piece is the only style staple you need.",
      head: "IBA Gold RIngs ",
      description: "Specifications:",
      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1d0bc3a5/images/hi-res/50D3B2FTMAA02_1.jpg",
      price: "4227 ",
    },
    {
      id: 48,
      title:
        "Keep your happy face on everyday with this marvellous ring, as its charming design is bound to bring you endless joy! It can be worn daily and is suitable for all outfits.",
      head: "IBA Gold RIngs ",
      description: "Specifications:",
      collection: "Collection:Bestsellers",
      gender: "Gender:Women",
      occasion: "Occasion:Bridal Wear",
      karatage: "Karatage:24",
      image:
        "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw908fe0fa/images/hi-res/511920FCMAA00.jpg",
      price:  "1706 ",
    },
  ];
  const[items,setItems]=useState(products);
  const[cartcount,setCartCount]=useState(0);
  const[selectedproducts,setSelectedProducts]=useState([]);
   const  [count,setCount]=useState(0);
    const [cart,setCart] =useState([]);
  return (
    <BrowserRouter>
    <mycontext.Provider value={[items,setItems,cartcount,setCartCount,selectedproducts,setSelectedProducts]}>  
    <Header />
       <Routes>
      <Route element={<PrivateRoute  />}>
      <Route path="/productlist"  element={<ProductList   />}/>
      <Route path="/productsdetail/:productid" element={<ProductsDetail />} />
      <Route path="/cart" element={<Cart />}/>
      </Route>
      </Routes>
    </mycontext.Provider>
      
      <Routes>
        
        <Route path="/" element={<Home  />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard  />}/>
        <Route path="/payment"  element={<Paymentmethod />} />
        <Route element={<PrivateRoute  />}>
        <Route path="/query" element={<Blogs />} />
        <Route path="/jewellerys" element={<Jewellerys products={products} />} />
        <Route path="/bangles" element={<Bangles products={products} />} />
        <Route path="/earring" element={<Earings products={products} />} />
        <Route path="/rings" element={<Rings products={products} />} />
        <Route path="/card" element={ <Card  products={products}  setCount={setCount} count={count}  cart={cart} setCart={setCart} />} />
      
        </Route>
     
      </Routes>
      <UserContextProvider>
        <Routes>
          <Route element={<PrivateRoute />} >
        <Route path="/feedback" element={<About />} />
        <Route path="/submitfeedback" element={<Submitfeedback />} />
        </Route>
        </Routes>
      </UserContextProvider>
      <Footer />
    </BrowserRouter>
   
  );
};

export default App;
