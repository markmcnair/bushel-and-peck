const fs = require('fs');
let html = fs.readFileSync('/Users/Max/.openclaw/workspace/bushel-and-peck/index.html', 'utf8');

// 1. Update the About Image
html = html.replace(
    /<div class="relative w-full aspect-\[4\/5\] bg-gradient-to-br[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/,
    `<img src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80" alt="Fresh baked cookies" class="relative w-full aspect-[4/5] object-cover rounded-t-full scalloped-edge shadow-lg transition-transform duration-500 hover:-translate-y-2 border-4 border-white">
            </div>`
);

// 2. Update Menu Items (Injecting real images and updating text for Cinnamon Rolls and Brownies)

// Card 1: Chocolate Chip
html = html.replace(
    /<div class="w-full h-48 bg-gradient-to-br from-\[#FFFBF5\] to-\[#F1E4E4\] rounded-lg mb-4"><\/div>\s*<div class="px-2 pb-2 text-center">\s*<h3 class="font-playfair text-xl text-dark font-semibold mb-2">Classic Chocolate Chip<\/h3>/,
    `<img src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80" alt="Chocolate Chip Cookies" class="w-full h-48 object-cover rounded-lg mb-4">
                    <div class="px-2 pb-2 text-center">
                        <h3 class="font-playfair text-xl text-dark font-semibold mb-2">Classic Chocolate Chip</h3>`
);

// Card 2: Change to Cinnamon Rolls
html = html.replace(
    /<div class="w-full h-48 bg-gradient-to-br from-\[#FFFBF5\] to-\[#F1E4E4\] rounded-lg mb-4"><\/div>\s*<div class="px-2 pb-2 text-center">\s*<h3 class="font-playfair text-xl text-dark font-semibold mb-2">Sugar Cookie<\/h3>\s*<p class="font-nunito text-sm italic text-dark\/70 mb-4">A tender, buttery bite with a delicate vanilla bean glaze.<\/p>/,
    `<img src="https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=600&q=80" alt="Cinnamon Rolls" class="w-full h-48 object-cover rounded-lg mb-4">
                    <div class="px-2 pb-2 text-center">
                        <h3 class="font-playfair text-xl text-dark font-semibold mb-2">Gooey Cinnamon Rolls</h3>
                        <p class="font-nunito text-sm italic text-dark/70 mb-4">Our house specialty. Warm, spiced, and smothered in cream cheese frosting.</p>`
);

// Card 3: Snickerdoodle
html = html.replace(
    /<div class="w-full h-48 bg-gradient-to-br from-\[#FFFBF5\] to-\[#F1E4E4\] rounded-lg mb-4"><\/div>\s*<div class="px-2 pb-2 text-center">\s*<h3 class="font-playfair text-xl text-dark font-semibold mb-2">Snickerdoodle<\/h3>/,
    `<img src="https://images.unsplash.com/photo-1590080875515-8a3a104fac01?auto=format&fit=crop&w=600&q=80" alt="Snickerdoodle Cookies" class="w-full h-48 object-cover rounded-lg mb-4">
                    <div class="px-2 pb-2 text-center">
                        <h3 class="font-playfair text-xl text-dark font-semibold mb-2">Snickerdoodle</h3>`
);

// Card 4: Peanut Butter
html = html.replace(
    /<div class="w-full h-48 bg-gradient-to-br from-\[#FFFBF5\] to-\[#F1E4E4\] rounded-lg mb-4"><\/div>\s*<div class="px-2 pb-2 text-center">\s*<h3 class="font-playfair text-xl text-dark font-semibold mb-2">Peanut Butter Blossom<\/h3>/,
    `<img src="https://images.unsplash.com/photo-1618923850106-920eb09e928b?auto=format&fit=crop&w=600&q=80" alt="Peanut Butter Cookies" class="w-full h-48 object-cover rounded-lg mb-4">
                    <div class="px-2 pb-2 text-center">
                        <h3 class="font-playfair text-xl text-dark font-semibold mb-2">Peanut Butter Blossom</h3>`
);

// Card 5: Brownie Bites (Update image and title to highlight specialty)
html = html.replace(
    /<div class="w-full h-48 bg-gradient-to-br from-\[#FFFBF5\] to-\[#F1E4E4\] rounded-lg mb-4"><\/div>\s*<div class="px-2 pb-2 text-center">\s*<h3 class="font-playfair text-xl text-dark font-semibold mb-2">Brownie Bites<\/h3>/,
    `<img src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80" alt="Fudgy Brownies" class="w-full h-48 object-cover rounded-lg mb-4">
                    <div class="px-2 pb-2 text-center">
                        <h3 class="font-playfair text-xl text-dark font-semibold mb-2">Fudgy Brownies</h3>`
);

// Card 6: Sampler
html = html.replace(
    /<div class="w-full h-48 bg-gradient-to-br from-\[#FFFBF5\] to-\[#EAE0D5\] rounded-lg mb-4 border border-dashed border-primary\/30"><\/div>\s*<div class="px-2 pb-2 text-center">\s*<h3 class="font-playfair text-xl text-dark font-semibold mb-2">The Kitchen Sampler<\/h3>/,
    `<img src="https://images.unsplash.com/photo-1557308536-ee471ef2c390?auto=format&fit=crop&w=600&q=80" alt="Cookie Sampler Box" class="w-full h-48 object-cover rounded-lg mb-4 border border-dashed border-primary/30 p-1">
                    <div class="px-2 pb-2 text-center">
                        <h3 class="font-playfair text-xl text-dark font-semibold mb-2">The Kitchen Sampler</h3>`
);

fs.writeFileSync('/Users/Max/.openclaw/workspace/bushel-and-peck/index.html', html);
