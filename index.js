// Mock Data for Landmarks
const landmarks = [
    {
        id: 'bab-zuweila',
        name: 'Bab Zuweila',
        nameAr: 'باب زويلة',
        image: 'photos/bab0.jpeg', // Updated to include 'photos/'
        images: [
            'photos/bab1.jpg', // Updated to include 'photos/'
            'photos/bab2.jpg', // Updated to include 'photos/'
            'photos/bab3.png'  // Updated to include 'photos/'
        ],
        location: 'Historic Cairo, Egypt',
        locationAr: 'القاهرة التاريخية، مصر',
        rating: 4.8,
        reviews: 1092,
        about: "Bab Zuweila is one of the three remaining gates in the walls of the Old City of Cairo. Built in 1092 AD during the Fatimid era, it's considered one of the major landmarks of Islamic Cairo. The gate is notable for its twin minarets, which belong to the nearby Al-Muayyad Mosque.",
        aboutAr: "باب زويلة هو أحد البوابات الثلاث المتبقية في أسوار مدينة القاهرة القديمة. بني عام 1092 م في العصر الفاطمي، ويعتبر من أبرز معالم القاهرة الإسلامية. تتميز البوابة بمئذنتيها التوأم التابعتين لمسجد المؤيد شيخ المجاور.",
        architecture: "The gate itself is a massive fortified structure. The minarets of Al-Muayyad Mosque were built atop the gate's towers by Sultan Al-Muayyad Sayf ad-Din Shaykh in the 15th century. Visitors can often climb the minarets for a panoramic view of Islamic Cairo.",
        architectureAr: "البوابة نفسها عبارة عن هيكل محصن ضخم. تم بناء مآذن مسجد المؤيد فوق أبراج البوابة من قبل السلطان المؤيد سيف الدين شيخ في القرن الخامس عشر. يمكن للزوار غالبًا صعود المآذن للاستمتاع بإطلالة بانورامية على القاهرة الإسلامية.",
        historicalSignificance: "Historically, Bab Zuweila was the site of public executions and important announcements. It played a crucial role in the city's defense and ceremonial processions.",
        visitorInfo: {
            openHours: '9:00 AM - 5:00 PM Daily',
            openHoursAr: '٩:٠٠ ص - ٥:٠٠ م يومياً',
            entryFee: 'EGP 100 (Foreigners), EGP 20 (Egyptians)',
            entryFeeAr: '١٠٠ جنيه مصري (للأجانب)، ٢٠ جنيه مصري (للمصريين)',
            bestTimeToVisit: 'Early Morning or Late Afternoon',
            photography: 'Allowed'
        },
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.095355428489!2d31.2552083!3d30.0341519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840a5b8a6a6a1%3A0x6b823e19a4e9a8b!2sBab%20Zuweila!5e0!3m2!1sen!2seg!4v1678886400000!5m2!1sen!2seg" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        nearbyAttractions: [
            { name: 'Al-Muayyad Mosque', nameAr: 'مسجد المؤيد شيخ', link: '#' },
            { name: 'Khan el-Khalili Bazaar', nameAr: 'خان الخليلي', link: '#' },
            { name: 'Al-Azhar Mosque', nameAr: 'الجامع الأزهر', link: '#' }
        ]
    },
    {
        id: 'al-hakim-mosque',
        name: 'Al-Hakim Mosque',
        nameAr: 'مسجد الحاكم بأمر الله',
        image: 'photos/hakim0.jpg', // Updated to include 'photos/'
        images: [
            'photos/hakim1.jpg', // Updated to include 'photos/'
            'photos/hakim2.jpg', // Updated to include 'photos/'
            'photos/hakim3.jpg'  // Updated to include 'photos/'
        ],
        location: 'Islamic Cairo, Egypt',
        locationAr: 'القاهرة الإسلامية، مصر',
        rating: 4.7,
        reviews: 750,
        about: "Al-Hakim Mosque, officially named 'Al-Jami' al-Anwar', is a major Islamic religious site in Cairo, Egypt. It is named after Al-Hakim bi-Amr Allah, the sixth Fatimid caliph. Construction began in 990 AD and was completed in 1013 AD.",
        aboutAr: "مسجد الحاكم بأمر الله، واسمه الرسمي 'الجامع الأنور'، هو موقع ديني إسلامي رئيسي في القاهرة، مصر. سمي على اسم الحاكم بأمر الله، الخليفة الفاطمي السادس. بدأ بناؤه عام 990 م واكتمل عام 1013 م.",
        architecture: "The mosque features distinctive minarets with unique salients at their bases. The prayer hall follows the traditional hypostyle plan with arcades of pointed arches. The mosque's facade is adorned with decorative elements characteristic of Fatimid architecture.",
        architectureAr: "يتميز المسجد بمآذن مميزة ذات نتوءات فريدة عند قواعدها. تتبع قاعة الصلاة المخطط التقليدي ذي الأعمدة مع أروقة من الأقواس المدببة. واجهة المسجد مزينة بعناصر زخرفية تميز العمارة الفاطمية.",
        historicalSignificance: "It is one of the largest and most impressive examples of Fatimid architecture in Cairo and represents an important period in Islamic architectural history. The mosque underwent significant restoration in the 1980s.",
        visitorInfo: {
            openHours: '9:00 AM - 5:00 PM (check prayer times)',
            openHoursAr: '٩:٠٠ ص - ٥:٠٠ م يومياً (تحقق من أوقات الصلاة)',
            entryFee: 'Free for prayer, small fee for tourists may apply',
            entryFeeAr: 'مجاني للصلاة، قد يتم تطبيق رسوم رمزية للسياح',
            bestTimeToVisit: 'During non-prayer times for tourists',
            photography: 'Permitted in most areas, dress modestly'
        },
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.336355428489!2d31.2618!3d30.0559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840a5b8a6a6a1%3A0x6b823e19a4e9a8b!2sAl-Hakim%20Mosque!5e0!3m2!1sen!2seg!4v1678886400000!5m2!1sen!2seg" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        nearbyAttractions: [
            { name: 'Bab al-Nasr', nameAr: 'باب النصر', link: '#' },
            { name: 'Bab al-Futuh (Cairo)', nameAr: 'باب الفتوح (القاهرة)', link: '#' },
            { name: 'Al-Muizz Street', nameAr: 'شارع المعز', link: '#' }
        ]
    },
    {
        id: 'beit-al-suhaymi',
        name: 'Beit Al-Suhaymi',
        nameAr: 'بيت السحيمي',
        image: 'photos/bayt0.jpeg', // Updated to include 'photos/'
        images: [
            'photos/bayt1.JPG', // Updated to include 'photos/'
            'photos/bayt2.jpg', // Updated to include 'photos/'
            'photos/bayt3.jpeg'  // Updated to include 'photos/'
        ],
        location: 'Darb al-Asfar, Islamic Cairo, Egypt',
        locationAr: 'درب الأصفر، القاهرة الإسلامية، مصر',
        rating: 4.6,
        reviews: 430,
        about: "Built in 1648 during the Ottoman period, Beit Al-Suhaymi is one of the finest examples of Islamic domestic architecture in Cairo. The house belonged to Sheikh Ahmed Al-Suhaymi and showcases the typical layout and decorative elements of traditional Egyptian homes from that era.",
        aboutAr: "بني بيت السحيمي عام 1648 خلال العصر العثماني، وهو أحد أروع أمثلة العمارة السكنية الإسلامية في القاهرة. كان المنزل ملكًا للشيخ أحمد السحيمي ويعرض التصميم النموذجي والعناصر الزخرفية للمنازل المصرية التقليدية في تلك الحقبة.",
        architecture: "The house is known for its beautiful courtyards, intricate mashrabiya (wooden lattice screens), marble floors, and stained-glass windows. It consists of several sections, including reception halls (qa'a), private quarters, and service areas, providing a glimpse into the life of a wealthy Cairo family.",
        architectureAr: "يشتهر المنزل بأفنيته الجميلة، والمشربيات المعقدة (حواجز خشبية شبكية)، والأرضيات الرخامية، والنوافذ الزجاجية الملونة. يتكون من عدة أقسام، بما في ذلك قاعات الاستقبال (القاعة)، والأجنحة الخاصة، ومناطق الخدمة، ويوفر لمحة عن حياة عائلة ثرية في القاهرة.",
        visitorInfo: {
            openHours: '9:00 AM - 5:00 PM Daily',
            openHoursAr: '٩:٠٠ ص - ٥:٠٠ م يومياً',
            entryFee: 'EGP 80 (Foreigners), EGP 20 (Egyptians)',
            entryFeeAr: '٨٠ جنيه مصري (للأجانب)، ٢٠ جنيه مصري (للمصريين)',
            guidedTours: 'Available in English and Arabic',
            photography: 'Allowed'
        },
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.336355428489!2d31.2618!3d30.0559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840a5b8a6a6a1%3A0x6b823e19a4e9a8b!2sBeit%20Al-Suhaymi!5e0!3m2!1sen!2seg!4v1678886400000!5m2!1sen!2seg" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        nearbyAttractions: [
            { name: 'Al-Muizz Street', nameAr: 'شارع المعز', link: '#' },
            { name: 'Qalawun Complex', nameAr: 'مجموعة قلاوون', link: '#' }
        ]
    },
    {
        id: 'bab-al-futuh',
        name: 'Bab al-Futuh',
        nameAr: 'باب الفتوح',
        image: 'photos/futuh0.jpg', // Updated to include 'photos/'
        images: [
            'photos/futuh1.png', // Updated to include 'photos/'
            'photos/futuh2.jpg', // Updated to include 'photos/'
            'photos/futuh3.jpg'  // Updated to include 'photos/'
        ],
        location: 'Islamic Cairo, Egypt',
        locationAr: 'القاهرة الإسلامية، مصر',
        rating: 4.6,
        reviews: 500,
        about: "Bab al-Futuh (Gate of Conquests) is one of the three remaining gates in the walls of the Old City of Cairo, located at the northern end of Al-Mu'izz Street. It was built in 1087 AD by the Fatimid vizier Badr al-Jamali.",
        aboutAr: "باب الفتوح هو أحد البوابات الثلاث المتبقية في أسوار مدينة القاهرة القديمة، ويقع في الطرف الشمالي لشارع المعز. بني عام 1087 م على يد الوزير الفاطمي بدر الجمالي.",
        architecture: "The gate is a massive stone structure, approximately 22 meters tall and 23 meters wide, with two rounded towers flanking the entrance. It features intricate stonework, arrow-slit windows, and a 'murder hole' for defense. It was originally called Bab al-Iqbal (Gate of Prosperity).",
        architectureAr: "البوابة عبارة عن هيكل حجري ضخم، يبلغ ارتفاعه حوالي 22 مترًا وعرضه 23 مترًا، مع برجين دائريين يحيطان بالمدخل. تتميز بأعمال حجرية معقدة، ونوافذ صغيرة للسهام، و'ثقب القتل' للدفاع. كان يطلق عليها في الأصل باب الإقبال.",
        historicalSignificance: "Bab al-Futuh, along with Bab al-Nasr and Bab Zuweila, represents significant examples of military architecture from the Fatimid period. It played a crucial role in the city's defense and ceremonial entry.",
        visitorInfo: {
            openHours: 'Open 24 hours (exterior viewing)',
            openHoursAr: 'مفتوح 24 ساعة (مشاهدة خارجية)',
            entryFee: 'Free (for exterior viewing)',
            entryFeeAr: 'مجاني (للمشاهدة الخارجية)',
            bestTimeToVisit: 'Morning or late afternoon',
            photography: 'Allowed'
        },
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.336355428489!2d31.2618!3d30.0559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c83a547225%3A0x8f7d9c6e7f7e9f3b!2sBab%20Al-Futuh!5e0!3m2!1sen!2seg!4v1678886400000!5m2!1sen!2seg" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        nearbyAttractions: [
            { name: 'Al-Hakim Mosque', nameAr: 'مسجد الحاكم بأمر الله', link: '#' },
            { name: 'Bab al-Nasr', nameAr: 'باب النصر', link: '#' },
            { name: 'Al-Muizz Street', nameAr: 'شارع المعز', link: '#' }
        ]
    },
    {
        id: 'bab-al-nasr',
        name: 'Bab al-Nasr',
        nameAr: 'باب النصر',
        image: 'photos/nasr0.jpg', // Already had 'photos/', confirmed
        images: [
            'photos/nasr1.JPG', // Already had 'photos/', confirmed
            'photos/nasr2.jpg', // Updated to include 'photos/'
            'photos/nasr3.jpg'  // Updated to include 'photos/'
        ],
        location: 'Islamic Cairo, Egypt',
        locationAr: 'القاهرة الإسلامية، مصر',
        rating: 4.7,
        reviews: 400,
        about: "Bab al-Nasr (Gate of Victory) is another one of the three remaining gates in Cairo's historic city wall. Built in 1087 AD by the Fatimid vizier Badr al-Jamali, it stands slightly east of Bab al-Futuh.",
        aboutAr: "باب النصر هو إحدى البوابات الثلاث المتبقية في سور القاهرة التاريخي. بني عام 1087 م على يد الوزير الفاطمي بدر الجمالي، ويقع شرق باب الفتوح بقليل.",
        architecture: "The gate is distinguished by its two massive rectangular towers. Its facade is adorned with decorative shields in raised relief, symbolizing the protective role of the Fatimid fortifications. Inscriptions in Kufic script can also be found on the gate.",
        architectureAr: "تتميز البوابة ببرجيها المربعين الضخمين. واجهتها مزينة بدروع زخرفية بارزة، ترمز إلى الدور الوقائي لتحصينات الفاطميين. كما توجد نقوش بالخط الكوفي على البوابة.",
        historicalSignificance: "During Napoleon's expedition, French officers carved their names into the gate's walls, adding to its historical layers. It served as a vital defensive structure and a ceremonial entry point.",
        visitorInfo: {
            openHours: 'Open 24 hours (exterior viewing)',
            openHoursAr: 'مفتوح 24 ساعة (مشاهدة خارجية)',
            entryFee: 'Free (for exterior viewing)',
            entryFeeAr: 'مجاني (للمشاهدة الخارجية)',
            bestTimeToVisit: 'Morning or late afternoon',
            photography: 'Allowed'
        },
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.336355428489!2d31.2618!3d30.0559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c83a547225%3A0x8f7d9c6e7f7e9f3b!2sBab%20Al-Nasr!5e0!3m2!1sen!2seg!4v1678886400000!5m2!1sen!2seg" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        nearbyAttractions: [
            { name: 'Bab al-Futuh', nameAr: 'باب الفتوح', link: '#' },
            { name: 'Al-Muizz Street', nameAr: 'شارع المعز', link: '#' }
        ]
    },
    {
        id: 'el-muayyad-mosque',
        name: 'Sultan Al-Muayyad Mosque',
        nameAr: 'جامع السلطان المؤيد',
        image: 'photos/sultan0.jpg', // Updated to include 'photos/'
        images: [
            'photos/sultan1.jpg', // Updated to include 'photos/'
            'photos/sultan2.jpeg', // Updated to include 'photos/'
            'photos/sultan3.jpg'  // Updated to include 'photos/'
        ],
        location: 'Islamic Cairo, Egypt (next to Bab Zuweila)',
        locationAr: 'القاهرة الإسلامية، مصر (بجوار باب زويلة)',
        rating: 4.8,
        reviews: 950,
        about: "The Mosque of Sultan Al-Muayyad is a large Mamluk-era mosque and madrasa located adjacent to Bab Zuweila. It was built between 1415 and 1421 by Sultan Al-Muayyad Sayf ad-Din Shaykh. It's known for its impressive size and the minarets built on top of Bab Zuweila.",
        aboutAr: "جامع السلطان المؤيد هو مسجد ومدرسة كبيرة من عصر المماليك يقع بجوار باب زويلة. بني بين عامي 1415 و 1421 على يد السلطان المؤيد سيف الدين شيخ. يشتهر بحجمه المثير للإعجاب والمآذن المبنية فوق باب زويلة.",
        architecture: "The mosque features a grand entrance portal, a large courtyard, and a hypostyle prayer hall. The minarets are particularly notable, offering panoramic views of Historic Cairo. The interior is adorned with marble paneling, carved wooden elements, and stained-glass windows.",
        architectureAr: "يتميز المسجد بمدخل فخم، وفناء كبير، وقاعة صلاة ذات أعمدة. المآذن بارزة بشكل خاص، وتوفر إطلالات بانورامية على القاهرة التاريخية. يزين الجزء الداخلي ألواح رخامية وعناصر خشبية منحوتة ونوافذ زجاجية ملونة.",
        historicalSignificance: "Originally built on the site of a Fatimid prison, the mosque served as a significant center for religious education and worship during the Mamluk period. It is considered one of the last grand congregational mosques built in Cairo.",
        visitorInfo: {
            openHours: '9:00 AM - 5:00 PM Daily',
            openHoursAr: '٩:٠٠ ص - ٥:٠٠ م يومياً',
            entryFee: 'EGP 100 (Foreigners), EGP 20 (Egyptians)',
            entryFeeAr: '١٠٠ جنيه مصري (للأجانب)، ٢٠ جنيه مصري (للمصريين)',
            bestTimeToVisit: 'Early morning for tranquility',
            photography: 'Allowed, but be respectful during prayer times'
        },
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.095355428489!2d31.2552083!3d30.0341519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840a5b8a6a6a1%3A0x6b823e19a4e9a8b!2sMosque%20of%20Sultan%20al-Mu%27ayyad!5e0!3m2!1sen!2seg!4v1678886400000!5m2!1sen!2seg" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        nearbyAttractions: [
            { name: 'Bab Zuweila', nameAr: 'باب زويلة', link: '#' },
            { name: 'Khan el-Khalili Bazaar', nameAr: 'خان الخليلي', link: '#' }
        ]
    },
    {
        id: 'sultan-hassan-mosque',
        name: 'Mosque-Madrassa of Sultan Hassan',
        nameAr: 'مسجد ومدرسة السلطان حسن',
        image: 'photos/hassan0.jpg', // Updated to include 'photos/'
        images: [
            'photos/hassan1.jpg', // Updated to include 'photos/'
            'photos/hassan2.jpg', // Updated to include 'photos/'
            'photos/hassan3.jpg', // Updated to include 'photos/'
            'photos/masjid0.jpg',
            'photos/masjid1.jpg',
        ],
        location: 'Salah al-Din Square, Historic Cairo, Egypt',
        locationAr: 'ميدان صلاح الدين، القاهرة التاريخية، مصر',
        rating: 4.9,
        reviews: 1500,
        about: "The Mosque-Madrassa of Sultan Hassan is a monumental mosque and madrassa located in the historic district of Cairo. Built between 1356 and 1363 AD during the Mamluk era, it is considered one of the greatest examples of Mamluk architecture in Cairo and the Islamic world.",
        aboutAr: "مسجد ومدرسة السلطان حسن هو مسجد ومدرسة ضخمة تقع في الحي التاريخي بالقاهرة. بني بين عامي 1356 و 1363 م خلال العصر المملوكي، ويعتبر أحد أعظم الأمثلة على العمارة المملوكية في القاهرة والعالم الإسلامي.",
        architecture: "The complex is an enormous structure, originally intended to be even larger. It features four massive iwans (vaulted halls) around a central courtyard, each dedicated to one of the four Sunni schools of thought. The mosque boasts impressive dimensions, intricate stalactite carvings (muqarnas), and a magnificent portal.",
        architectureAr: "المجمع عبارة عن هيكل ضخم، كان من المفترض أن يكون أكبر. يتميز بأربعة أواوين ضخمة (قاعات مقببة) حول فناء مركزي، كل منها مخصص لإحدى المذاهب السنية الأربعة. يتباهى المسجد بأبعاد رائعة، ومنحوتات المقرنصات المعقدة، وبوابة رائعة.",
        historicalSignificance: "Beyond its architectural grandeur, it served as a significant educational institution and a symbol of Mamluk power. Its construction was highly ambitious and financially taxing, reflecting the scale of ambition of its patron, Sultan Hassan.",
        visitorInfo: {
            openHours: '8:00 AM - 5:00 PM Daily',
            openHoursAr: '٨:٠٠ ص - ٥:٠٠ م يومياً',
            entryFee: 'EGP 120 (Foreigners), EGP 30 (Egyptians)',
            entryFeeAr: '١٢٠ جنيه مصري (للأجانب)، ٣٠ جنيه مصري (للمصريين)',
            bestTimeToVisit: 'Early morning to avoid crowds',
            photography: 'Allowed'
        },
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.865355428489!2d31.2580556!3d30.0397222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c83a547225%3A0x8f7d9c6e7f7e9f3b!2sMosque-Madrassa%20of%20Sultan%20Hassan!5e0!3m2!1sen!2seg!4v1678886400000!5m2!1sen!2seg" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        nearbyAttractions: [
            { name: 'Al-Rifa\'i Mosque', nameAr: 'مسجد الرفاعي', link: '#' },
            { name: 'Citadel of Salah al-Din', nameAr: 'قلعة صلاح الدين', link: '#' }
        ]
    },
    {
        id: 'wikala-alghuri',
        name: 'Wikala of Sultan Qansuh al-Ghuri',
        nameAr: 'وكالة السلطان قانصوه الغوري',
        image: 'photos/wikala0.jpg', // Updated to include 'photos/'
        images: [
            'photos/wikala1.jpg', // Updated to include 'photos/'
            'photos/wikala2.jpg', // Updated to include 'photos/'
            'photos/wikala3.jpg'  // Updated to include 'photos/'
        ],
        location: 'Al-Azhar Street, Islamic Cairo, Egypt',
        locationAr: 'شارع الأزهر، القاهرة الإسلامية، مصر',
        rating: 4.5,
        reviews: 380,
        about: "The Wikala of Sultan Qansuh al-Ghuri is a magnificent example of Mamluk-era commercial architecture. Built in 1505 AD, it served as a caravanserai, providing lodging for merchants and storage for their goods, and also housed workshops and shops.",
        aboutAr: "وكالة السلطان قانصوه الغوري هي مثال رائع للعمارة التجارية من عصر المماليك. بنيت عام 1505 م، وكانت بمثابة خان، يوفر الإقامة للتجار وتخزين بضائعهم، كما كانت تضم ورش عمل ومتاجر.",
        architecture: "The Wikala features a grand entrance, a central courtyard surrounded by multiple stories of rooms and galleries, and a striking facade. Its design showcases typical Mamluk architectural elements, including intricate stone carvings and wooden mashrabiyas.",
        architectureAr: "تتميز الوكالة بمدخل فخم، وفناء مركزي محاط بطوابق متعددة من الغرف والمعارض، وواجهة مذهلة. يعرض تصميمها عناصر العمارة المملوكية النموذجية، بما في ذلك المنحوتات الحجرية المعقدة والمشربيات الخشبية.",
        historicalSignificance: "It is part of a larger complex built by Sultan al-Ghuri, including a mosque-madrassa, sabil-kuttab, and mausoleum. The Wikala highlights the importance of trade and commerce in Mamluk Cairo and continues to be an active cultural center, hosting traditional performances.",
        visitorInfo: {
            openHours: '9:00 AM - 5:00 PM Daily (check for performance schedules)',
            openHoursAr: '٩:٠٠ ص - ٥:٠٠ م يومياً (تحقق من جداول العروض)',
            entryFee: 'EGP 60 (Foreigners), EGP 10 (Egyptians)',
            entryFeeAr: '٦٠ جنيه مصري (للأجانب)، ١٠ جنيه مصري (للمصريين)',
            bestTimeToVisit: 'During a traditional performance for a unique experience',
            photography: 'Allowed'
        },
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.585355428489!2d31.2625!3d30.0483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c83a547225%3A0x8f7d9c6e7f7e9f3b!2sWikala%20of%20Sultan%20Qansuh%20al-Ghuri!5e0!3m2!1sen!2seg!4v1678886400000!5m2!1sen!2seg" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        nearbyAttractions: [
            { name: 'Al-Azhar Mosque', nameAr: 'الجامع الأزهر', link: '#' },
            { name: 'Khan el-Khalili Bazaar', nameAr: 'خان الخليلي', link: '#' }
        ]
    },
        {
        id: 'al-muizz-street',
        name: "Al-Mu'izz Street",
        nameAr: 'شارع المعز لدين الله الفاطمي',
        image: 'photos/mo3z0.jpg',
        images: [
            'photos/mo3z1.jpg',
            'photos/mo3z2.jpeg',
            'photos/mo3z3.jpg'
        ],
        location: 'Historic Cairo, Egypt',
        locationAr: 'القاهرة التاريخية، مصر',
        rating: 4.8,
        reviews: 5120,
        about: "Al-Mu'izz li-Din Allah al-Fatimi Street is one of the oldest streets in Cairo, approximately one kilometer long. A United Nations study found it to have the greatest concentration of medieval architectural treasures in the Islamic world. It's considered an open-air museum.",
        aboutAr: "شارع المعز لدين الله الفاطمي هو أحد أقدم شوارع القاهرة، ويبلغ طوله حوالي كيلومتر واحد. وجدت دراسة للأمم المتحدة أنه يحتوي على أعظم تمركز لكنوز العمارة من العصور الوسطى في العالم الإسلامي. يعتبر متحفاً مفتوحاً.",
        architecture: "The street itself is not a single architectural piece but a repository of styles from the Fatimid, Ayyubid, Mamluk, and Ottoman periods. It is lined with mosques, madrasas, mausoleums, sabils (public fountains), and historic homes, showcasing centuries of evolving Islamic architecture.",
        architectureAr: "الشارع نفسه ليس قطعة معمارية واحدة بل هو مستودع للأنماط المعمارية من العصور الفاطمية والأيوبية والمملوكية والعثمانية. وهو يصطف على جانبيه بالمساجد والمدارس والأضرحة والأسبلة والمنازل التاريخية، مما يعرض قرونًا من تطور العمارة الإسلامية.",
        historicalSignificance: "Named after the fourth Fatimid Caliph, Al-Mu'izz Street was the main thoroughfare of the walled city of Cairo. For centuries, it was the central axis of the city's economic, religious, and ceremonial life.",
        visitorInfo: {
            openHours: 'Open 24 hours (shops and sites have their own hours)',
            openHoursAr: 'مفتوح 24 ساعة (المتاجر والمواقع لها ساعات عمل خاصة بها)',
            entryFee: 'Free (to walk the street)',
            entryFeeAr: 'مجاني (للمشي في الشارع)',
            bestTimeToVisit: 'Evening, when the monuments are illuminated and the street is lively.',
            photography: 'Allowed and highly encouraged'
        },
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.64448187884!2d31.25946131511516!3d30.04696098188164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840a45591c337%3A0x481232a762d16452!2sAl-Muizz%20Street!5e0!3m2!1sen!2seg!4v1678888000000!5m2!1sen!2seg" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        nearbyAttractions: [
            { name: 'Khan el-Khalili Bazaar', nameAr: 'خان الخليلي', link: '#' },
            { name: 'Al-Hakim Mosque', nameAr: 'مسجد الحاكم بأمر الله', link: '#' },
            { name: 'Qalawun Complex', nameAr: 'مجموعة قلاوون', link: '#' }
        ]
    },
    {
        id: 'sabil-kuttab-muhammad-ali',
        name: 'Sabil-Kuttab of Muhammad Ali Pasha',
        nameAr: 'سبيل وكتاب محمد علي باشا',
        image: 'photos/sabil0.jpeg',
        images: [
            'photos/sabil1.jpeg',
            'photos/sabil2.JPG',
            'photos/sabil3.jpg'
        ],
        location: 'Al-Muizz Street, Historic Cairo, Egypt',
        locationAr: 'شارع المعز، القاهرة التاريخية، مصر',
        rating: 4.7,
        reviews: 350,
        about: "The Sabil-Kuttab of Muhammad Ali Pasha is a public fountain and elementary school built in 1820. It was part of a larger memorial complex dedicated to his son, Tusun Pasha, who died in 1816. It's a prime example of the Turkish Rococo style introduced in Cairo.",
        aboutAr: "سبيل وكتاب محمد علي باشا هو سبيل مياه عام ومدرسة ابتدائية بني عام 1820. كان جزءًا من مجمع تذكاري أكبر مخصص لابنه طوسون باشا الذي توفي عام 1816. وهو مثال رئيسي على طراز الروكوكو التركي الذي تم إدخاله في القاهرة.",
        architecture: "This building is celebrated for its unique blend of Ottoman and European architectural styles, particularly Baroque and Rococo. It features an ornate, curved facade with intricate gilded details, fine marble, and stunning bronze window grilles.",
        architectureAr: "يشتهر هذا المبنى بمزيجه الفريد من الأساليب المعمارية العثمانية والأوروبية، وخاصة الباروك والروكوكو. يتميز بواجهة منحنية مزخرفة بتفاصيل مذهبة معقدة ورخام فاخر وشبابيك برونزية مذهلة.",
        historicalSignificance: "This monument represents a significant shift in architectural taste in 19th-century Cairo, moving away from Mamluk traditions towards styles favored by the Ottoman elite. It stands as a testament to the philanthropic and monumental ambitions of Muhammad Ali Pasha.",
        visitorInfo: {
            openHours: '9:00 AM - 5:00 PM Daily',
            openHoursAr: '٩:٠٠ ص - ٥:٠٠ م يومياً',
            entryFee: 'EGP 60 (Foreigners), EGP 10 (Egyptians)',
            entryFeeAr: '٦٠ جنيه مصري (للأجانب)، ١٠ جنيه مصري (للمصريين)',
            bestTimeToVisit: 'Mid-day for best exterior light',
            photography: 'Allowed'
        },
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.791986424361!2d31.25686331511509!3d30.04285898188049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840a61a00a0cf%3A0x6a1a1b1810c9e1e1!2sSabil-Kuttab%20of%20Muhammad%20Ali%20Pasha!5e0!3m2!1sen!2seg!4v1678888100000!5m2!1sen!2seg" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        nearbyAttractions: [
            { name: "Al-Mu'izz Street", nameAr: 'شارع المعز', link: '#' },
            { name: 'Wikala of Sultan Qansuh al-Ghuri', nameAr: 'وكالة السلطان قانصوه الغوري', link: '#' },
            { name: 'Bab Zuweila', nameAr: 'باب زويلة', link: '#' }
        ]
    }
];







let previousPage = 'loginPage'; // Default to loginPage for initial load

// Authentication state
let isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Initialize users in localStorage if not exists
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
}

// Navigation
function navigateTo(pageId, landmarkId = null) {
    // Restrict access to landmarks pages if not authenticated
    if (!isAuthenticated && pageId !== 'loginPage' && pageId !== 'signupPage') {
        showMessageModal('Please Log In', 'You must log in to access this page.', () => {
            navigateTo('loginPage');
        });
        return;
    }

    document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        // Only update previousPage if the target is a valid page for the current auth state
        if (isAuthenticated || (pageId === 'loginPage' || pageId === 'signupPage')) {
            previousPage = getCurrentVisiblePageId() || (isAuthenticated ? 'landmarksListPage' : 'loginPage');
        }
        targetPage.classList.remove('hidden');
        window.scrollTo(0, 0); // Scroll to top on page change

        if (pageId === 'landmarkDetailPage' && landmarkId) {
            displayLandmarkDetails(landmarkId);
        } else if (pageId === 'landmarksListPage') {
            displayLandmarks();
        }
        updateActiveNavLink(pageId);
    }
    closeMobileMenu(); // Close mobile menu on navigation
}

function getCurrentVisiblePageId() {
    const visiblePage = document.querySelector('.page:not(.hidden)');
    return visiblePage ? visiblePage.id : null;
}

function goBackOrToList() {
    const currentDetailId = document.getElementById('landmarkDetailPage').dataset.currentLandmarkId;
    if (isAuthenticated) {
        // For authenticated users, prioritize going back to landmarksListPage from detail page
        if (getCurrentVisiblePageId() === 'landmarkDetailPage' && currentDetailId) {
            navigateTo('landmarksListPage');
        } else if (previousPage && previousPage !== 'landmarkDetailPage') {
            navigateTo(previousPage);
        } else {
            navigateTo('landmarksListPage'); // Default to landmarks list for authenticated users
        }
    } else {
        // For unauthenticated users, fall back to login page
        if (previousPage === 'landmarkDetailPage' && currentDetailId) {
            navigateTo('landmarksListPage');
        } else if (previousPage) {
            navigateTo(previousPage);
        } else {
            navigateTo('loginPage'); // Default fallback for unauthenticated
        }
    }
}

// Update navigation links dynamically based on auth state (unchanged)
function updateActiveNavLink(pageId) {
    // Update desktop nav
    const nav = document.querySelector('header nav');
    nav.innerHTML = `
        ${isAuthenticated ? `
            <a href="#" onclick="navigateTo('landmarksListPage')" class="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-700">Landmarks</a>
            <a href="#" onclick="navigateTo('contactPage')" class="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-700">Contact Us</a>
            <a href="#" onclick="logout()" class="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-700">Logout</a>
        ` : `
            <a href="#" onclick="navigateTo('signupPage')" class="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-700">Sign Up</a>
        `}
    `;
    document.querySelectorAll('header nav a').forEach(link => {
        link.classList.remove('active-nav-link');
        if ((pageId === 'landmarksListPage' && link.textContent === 'Landmarks') ||
            (pageId === 'contactPage' && link.textContent === 'Contact Us') ||
            (pageId === 'signupPage' && link.textContent.trim() === 'Sign Up') ||
            (isAuthenticated && pageId === 'loginPage' && link.textContent === 'Logout')) {
            link.classList.add('active-nav-link');
        }
    });




    

        // Function to populate the contact form with user data
function populateContactForm() {
    try {
        const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
        document.getElementById('firstName').value = currentUser.displayName || '';
        document.getElementById('email').value = currentUser.email || '';
    } catch (e) {
        console.error('Failed to parse currentUser:', e);
    }
}

// Update navigateTo function to call populateContactForm
function navigateTo(pageId) {
    // Existing navigateTo code...
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('hidden'));
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.remove('hidden');
        if (pageId === 'contactPage') {
            populateContactForm();
        }
    }
}



    function displayError(fieldId, message) {
            const field = document.getElementById(fieldId);
            let errorElement = field.nextElementSibling;

            // Ensure the error element is always recreated/reset to ensure consistent styling and icon
            if (errorElement && errorElement.classList.contains('error-message')) {
                errorElement.remove(); // Remove existing to prevent duplicates or stale content
            }

            errorElement = document.createElement('div'); // Use div for better block-level control
            errorElement.classList.add('error-message');
            // Set innerHTML to include the icon and text as shown in the screenshot
            errorElement.innerHTML = `<span class="error-icon">&#9888;</span> ${message}`; // &#9888; is the Unicode warning sign

            field.parentNode.insertBefore(errorElement, field.nextSibling); // Insert after the field
            field.classList.add('input-error'); // Add class for red border/styling
        }

        // Function to clear an error message
        function clearError(fieldId) {
            const field = document.getElementById(fieldId);
            const errorElement = field.nextElementSibling;

            // Remove error element if it exists
            if (errorElement && errorElement.classList.contains('error-message')) {
                errorElement.remove();
            }
            field.classList.remove('input-error'); // Remove red border styling
        }

        // Helper function to show a general message modal (using alert for simplicity)
        // In a production app, this would be a custom modal UI.
        function showMessageModal(title, message, onCloseCallback) {
            alert(`${title}: ${message}`);
            if (onCloseCallback) {
                onCloseCallback();
            }
        }

        // --- Individual Validation Functions ---
        // Each function validates a specific field and returns true if valid, false otherwise.
        function validateFirstName() {
            const firstName = document.getElementById('firstName').value.trim();
            clearError('firstName'); // Always clear error before re-validating
            if (firstName === '') {
                displayError('firstName', 'Please fill out this field.'); // Updated message
                return false;
            }
            return true;
        }

        // Validation function for Last Name
        function validateLastName() {
            const lastName = document.getElementById('lastName').value.trim();
            clearError('lastName');
            // Assuming Last Name is optional. If required, uncomment the block below.
            /*
            if (lastName === '') {
                displayError('lastName', 'Please fill out this field.'); // Updated message
                return false;
            }
            */
            return true;
        }

        function validateEmail() {
            const email = document.getElementById('email').value.trim();
            clearError('email');
            if (email === '') {
                displayError('email', 'Please fill out this field.'); // Updated message
                return false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { // Basic email regex validation
                displayError('email', 'Please enter a valid email address.');
                return false;
            }
            return true;
        }

        function validatePhone() {
            const phone = document.getElementById('phone').value.trim();
            clearError('phone');
            // Regex for mobile number: starts with "01" and is 11 digits long
            const phoneRegex = /^01\d{9}$/;
            if (phone === '') {
                displayError('phone', 'Please fill out this field.'); // Updated message
                return false;
            } else if (!phoneRegex.test(phone)) {
                displayError('phone', 'Mobile number must start with "01" and be 11 digits long.');
                return false;
            }
            return true;
        }

        function validateMessage() {
            const message = document.getElementById('message').value.trim();
            clearError('message');
            if (message === '') {
                displayError('message', 'Please fill out this field.'); // Updated message
                return false;
            }
            return true;
        }

        // --- Main DOM Content Loaded Event Listener ---
        document.addEventListener('DOMContentLoaded', function() {
            // Get references to form elements
            const firstNameField = document.getElementById('firstName');
            const lastNameField = document.getElementById('lastName');
            const emailField = document.getElementById('email');
            const phoneField = document.getElementById('phone');
            const messageField = document.getElementById('message');
            const contactForm = document.getElementById('contactForm');

            // Add real-time validation listeners to each input field
            firstNameField?.addEventListener('blur', validateFirstName);
            firstNameField?.addEventListener('input', validateFirstName);

            lastNameField?.addEventListener('blur', validateLastName);
            lastNameField?.addEventListener('input', validateLastName);

            emailField?.addEventListener('blur', validateEmail);
            emailField?.addEventListener('input', validateEmail);

            phoneField?.addEventListener('blur', validatePhone);
            phoneField?.addEventListener('input', validatePhone);

            messageField?.addEventListener('blur', validateMessage);
            messageField?.addEventListener('input', validateMessage);

            // Handle form submission
            contactForm?.addEventListener('submit', function(e) {
                e.preventDefault(); // Prevent default form submission behavior (page reload)

                // Run all validations on submit to ensure everything is checked
                const isFirstNameValid = validateFirstName();
                const isLastNameValid = validateLastName();
                const isEmailValid = validateEmail();
                const isPhoneValid = validatePhone();
                const isMessageValid = validateMessage();

                // Determine if there are any errors
                const hasErrors = !(isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid && isMessageValid);

                if (hasErrors) {
                    // If errors exist, show a general error message
                    showMessageModal('Error', 'Please correct the highlighted errors.', () => {});
                } else {
                    // If all validations pass, show success message and clear the form
                    showMessageModal('Message Sent', 'Your message has been sent successfully.', () => {
                        firstNameField.value = '';
                        lastNameField.value = '';
                        emailField.value = '';
                        phoneField.value = '';
                        messageField.value = '';
                    });
                }
            });
        });



    document.querySelectorAll('header nav a').forEach(link => {
        link.classList.remove('active-nav-link');
        if ((pageId === 'landmarksListPage' && link.textContent === 'Landmarks') ||
            (pageId === 'loginPage' && link.textContent === 'Login') ||
            (pageId === 'signupPage' && link.textContent.trim() === 'Sign Up') ||
            (isAuthenticated && pageId === 'loginPage' && link.textContent === 'Logout')) {
            link.classList.add('active-nav-link');
        }
    });

    // Update mobile nav
const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.innerHTML = `
        ${isAuthenticated ? `
            <a href="#" onclick="navigateTo('landmarksListPage'); closeMobileMenu();" class="block px-4 py-2 text-sm text-gray-700 hover:bg-brown-50">Landmarks</a>
            <a href="#" onclick="navigateTo('contactPage'); closeMobileMenu();" class="block px-4 py-2 text-sm text-gray-700 hover:bg-brown-50">Contact Us</a>
            <a href="#" onclick="logout(); closeMobileMenu();" class="block px-4 py-2 text-sm text-gray-700 hover:bg-brown-50">Logout</a>
        ` : `
            <a href="#" onclick="navigateTo('signupPage'); closeMobileMenu();" class="block px-4 py-2 text-sm text-gray-700 hover:bg-brown-50">Sign Up</a>
        `}
    `;


document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.classList.remove('bg-brown-300', 'text-brown-700', 'font-semibold');
        if ((pageId === 'landmarksListPage' && link.textContent === 'Landmarks') ||
            (pageId === 'contactPage' && link.textContent === 'Contact Us') ||
            (pageId === 'signupPage' && link.textContent.trim() === 'Sign Up') ||
            (isAuthenticated && pageId === 'loginPage' && link.textContent === 'Logout')) {
            link.classList.add('bg-brown-300', 'text-brown-700', 'font-semibold');
        }
    });
}

// Logout function (unchanged)
function logout() {
    isAuthenticated = false;
    currentUser = null;
    localStorage.setItem('isAuthenticated', 'false');
    localStorage.removeItem('currentUser');
    showMessageModal('Logged Out', 'You have been logged out successfully.', () => navigateTo('loginPage'));
}

// Display Landmarks (unchanged)
function displayLandmarks(filteredLandmarks = landmarks) {
    const grid = document.getElementById('landmarksGrid');
    const noResultsMessage = document.getElementById('noResultsMessage');
    grid.innerHTML = ''; // Clear existing landmarks

    if (filteredLandmarks.length === 0) {
        noResultsMessage.classList.remove('hidden');
    } else {
        noResultsMessage.classList.add('hidden');
    }

    filteredLandmarks.forEach(landmark => {
        const card = `
            <div class="landmark-card bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer" onclick="navigateTo('landmarkDetailPage', '${landmark.id}')">
                <img src="${landmark.image}" alt="${landmark.name}" class="w-full h-56 object-cover">
                <div class="p-5">
                    <h3 class="text-2xl font-semibold" style="color: #0d5636;">${landmark.name}</h3>
                    <p class="font-arabic text-xl" style="color: #ad5717;">${landmark.nameAr}</p>
                    <p class="text-gray-600 text-sm mb-1"><span class="font-semibold">Location:</span> ${landmark.location}</p>
                    <div class="flex items-center mt-2 mb-3">
                        <span class="text-yellow-500 text-lg">${'★'.repeat(Math.floor(landmark.rating || 0))}${'☆'.repeat(5 - Math.floor(landmark.rating || 0))}</span>
                        <span class="ml-2 text-sm text-gray-500">(${landmark.rating || 'N/A'})</span>
                    </div>
                    <p class="text-gray-700 text-sm mb-4 truncate">${landmark.about.substring(0, 100)}...</p>
                    <button class="w-full text-sm font-medium py-2 px-4 rounded-lg transition duration-300" style="background-color: #ad5717; color: white;">
                        View Details
                    </button>
                </div>
            </div>
        `;
        grid.innerHTML += card;
    });
}

// Filter Landmarks (unchanged)
function filterLandmarks() {
    const searchTerm = document.getElementById('searchLandmark').value.toLowerCase();
    const filtered = landmarks.filter(landmark =>
        landmark.name.toLowerCase().includes(searchTerm) ||
        landmark.nameAr.toLowerCase().includes(searchTerm) ||
        landmark.location.toLowerCase().includes(searchTerm)
    );
    displayLandmarks(filtered);
}

let currentImageIndex = 0;
let landmarkImages = [];

function showImage(index) {
    const galleryImage = document.getElementById('landmarkGalleryImage');
    const imageCounter = document.getElementById('landmarkImageCounter');
    if (galleryImage && landmarkImages.length > 0) {
        currentImageIndex = (index + landmarkImages.length) % landmarkImages.length;
        galleryImage.src = landmarkImages[currentImageIndex];
        galleryImage.alt = `Image ${currentImageIndex + 1}`;
        if (imageCounter) imageCounter.textContent = `${currentImageIndex + 1} / ${landmarkImages.length}`;
    }
}

function nextImage() { showImage(currentImageIndex + 1); }
function prevImage() { showImage(currentImageIndex - 1); }






// Display Landmark Details (unchanged)
function displayLandmarkDetails(landmarkId) {
    const landmark = landmarks.find(l => l.id === landmarkId);
    const contentDiv = document.getElementById('landmarkDetailContent');
    document.getElementById('landmarkDetailPage').dataset.currentLandmarkId = landmarkId;

    if (landmark) {
        landmarkImages = landmark.images || [landmark.image]; // Use images array or fallback to main image
        currentImageIndex = 0;

        let imagesHTML = '';
        if (landmarkImages.length > 1) {
            imagesHTML = `
                <div class="relative mb-6">
                    <img id="landmarkGalleryImage" src="${landmarkImages[0]}" alt="${landmark.name} Image 1" class="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg">
                    <button onclick="prevImage()" class="absolute left-2 top-1/2 -translate-y-1/2 bg-brown-500 text-gray-100 p-2 rounded-full hover:bg-brown-600 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button onclick="nextImage()" class="absolute right-2 top-1/2 -translate-y-1/2 bg-brown-500 text-gray-100 p-2 rounded-full hover:bg-brown-600 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                    </button>
                    <div id="landmarkImageCounter" class="absolute bottom-2 right-2 bg-brown-500 text-gray-100 text-xs px-2 py-1 rounded">
                        1 / ${landmarkImages.length}
                    </div>
                </div>
            `;
        } else {
            imagesHTML = `<img src="${landmark.image}" alt="${landmark.name}" class="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-6">`;
        }

        let attractionsHTML = '';
        if (landmark.nearbyAttractions && landmark.nearbyAttractions.length > 0) {
            attractionsHTML = `
                <div class="mt-8">
                    <h4 class="text-xl font-semibold brand-text-color mb-3">Nearby Attractions</h4>
                    <ul class="list-disc list-inside text-gray-700 space-y-1">
                        ${landmark.nearbyAttractions.map(att => `<li><a href="${att.link}" class="hover:text-brown-600 hover:underline">${att.name} <span class="font-arabic text-sm text-gray-500">(${att.nameAr || ''})</span></a></li>`).join('')}
                    </ul>
                </div>`;
        }

        contentDiv.innerHTML = `
            ${imagesHTML}
            <h2 class="text-4xl font-bold brand-text-color mb-1">${landmark.name}</h2>
            <p class="font-arabic text-2xl text-brown-500 mb-3">${landmark.nameAr}</p>
            <div class="flex items-center mb-4 text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-brown-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
                <span>${landmark.location} <span class="font-arabic">(${landmark.locationAr})</span></span>
                <span class="mx-2">|</span>
                <span class="text-yellow-500 text-lg">${'★'.repeat(Math.floor(landmark.rating || 0))}${'☆'.repeat(5 - Math.floor(landmark.rating || 0))}</span>
                <span class="ml-1 text-sm">(${landmark.rating || 'N/A'} from ${landmark.reviews || 0} reviews)</span>
            </div>

            <div class="prose max-w-none text-gray-700 mb-6">
                <h3 class="text-2xl font-semibold brand-text-color mt-6 mb-2">About</h3>
                <p>${landmark.about}</p>
                ${landmark.aboutAr ? `<p dir="rtl" class="font-arabic mt-1 text-gray-600">${landmark.aboutAr}</p>` : ''}
                
                ${landmark.architecture ? `
                <h3 class="text-2xl font-semibold brand-text-color mt-6 mb-2">Architecture</h3>
                <p>${landmark.architecture}</p>
                ${landmark.architectureAr ? `<p dir="rtl" class="font-arabic mt-1 text-gray-600">${landmark.architectureAr}</p>` : ''}
                ` : ''}

                ${landmark.historicalSignificance ? `
                <h3 class="text-2xl font-semibold brand-text-color mt-6 mb-2">Historical Significance</h3>
                <p>${landmark.historicalSignificance}</p>
                ` : ''}
            </div>

            <div class="bg-brown-50 p-6 rounded-lg shadow mb-6">
                <h3 class="text-2xl font-semibold brand-text-color mb-3">Visitor Information</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                    <p><strong class="font-medium">Opening Hours:</strong> ${landmark.visitorInfo.openHours} <span class="font-arabic text-sm text-gray-500">(${landmark.visitorInfo.openHoursAr || ''})</span></p>
                    <p><strong class="font-medium">Entry Fee:</strong> ${landmark.visitorInfo.entryFee} <span class="font-arabic text-sm text-gray-500">(${landmark.visitorInfo.entryFeeAr || ''})</span></p>
                    <p><strong class="font-medium">Best Time to Visit:</strong> ${landmark.visitorInfo.bestTimeToVisit || 'N/A'}</p>
                    <p><strong class="font-medium">Photography:</strong> ${landmark.visitorInfo.photography || 'N/A'}</p>
                </div>
                ${landmark.visitorInfo.guidedTours ? `<p class="mt-3"><strong class="font-medium">Guided Tours:</strong> ${landmark.visitorInfo.guidedTours}</p>` : ''}
            </div>
            
            <div class="mb-6">
                <h4 class="text-xl font-semibold brand-text-color mb-3">Location Map</h4>
                ${landmark.mapEmbed || '<p class="text-gray-500">Map information is currently unavailable.</p>'}
            </div>

            ${attractionsHTML}

            <div class="mt-10 text-center">
                <button onclick="window.open('https://mota.gov.eg/ar/', '_blank')" class="brand-button-primary px-10 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                    for more information
                </button>
            </div>
        `;
        if (landmarkImages.length > 1) showImage(0); // Initialize gallery
    } else {
        contentDiv.innerHTML = '<p class="text-red-500">Landmark details not found.</p>';
    }
}






// Modal Handling (unchanged)
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
}

function showMessageModal(title, message, callback = null) {
    const titleElement = document.getElementById('messageModalTitle');
    const textElement = document.getElementById('messageModalText');
    const modal = document.getElementById('messageModal');
    if (titleElement && textElement && modal) {
        titleElement.textContent = title;
        textElement.textContent = message;
        openModal('messageModal');
        // Remove any existing listeners to avoid duplicates
        const okButton = modal.querySelector('button');
        const newOkButton = okButton.cloneNode(true);
        okButton.parentNode.replaceChild(newOkButton, okButton);
        newOkButton.addEventListener('click', () => {
            closeModal('messageModal');
            if (callback) callback();
        });
    }
}

// Form Submissions
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const users = JSON.parse(localStorage.getItem('users'));

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        isAuthenticated = true;
        currentUser = user;
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('currentUser', JSON.stringify(user));
        showMessageModal('Login Successful', 'Welcome back!', () => navigateTo('landmarksListPage'));
    } else {
        showMessageModal('Login Failed', 'Invalid email or password.', () => {});
    }
});

document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const displayName = document.getElementById('signupDisplayName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    let users = JSON.parse(localStorage.getItem('users'));

    if (users.length >= 50) {
        showMessageModal('Registration Failed', 'User limit (50) reached.', () => {});
        return;
    }

    if (users.some(u => u.email === email)) {
        showMessageModal('Registration Failed', 'Email already exists.', () => {});
        return;
    }

    const newUser = { displayName, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    showMessageModal('Account Created', 'Thank you for signing up!', () => navigateTo('loginPage'));
});

document.getElementById('forgotPasswordForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    showMessageModal('Password Reset (Mock)', 'If an account exists for this email, a reset link has been sent.', () => closeModal('forgotPasswordModal'));
});

// Mobile Menu Toggle (unchanged)
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}
function closeMobileMenu() {
    if (mobileMenu) mobileMenu.classList.add('hidden');
}

// Set current year in footer (unchanged)
const currentYearElement = document.getElementById('currentYear');
if (currentYearElement) currentYearElement.textContent = new Date().getFullYear();

// Initial Page Load
if (isAuthenticated) {
    navigateTo('landmarksListPage');
} else {
    navigateTo('loginPage');
}